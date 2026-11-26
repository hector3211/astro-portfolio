type ContactField = HTMLInputElement | HTMLTextAreaElement;
type FieldSession = {
  field: ContactField;
  editing: boolean;
  activationKey?: string;
};

const pageItems = "h1, h2, h3, h4, summary, a[href], [data-vim-item]";
const pageControls = "a[href], summary, [data-vim-item]";
const contactHint = "contact-vim-hint";

function isAvailable(item: HTMLElement) {
  const control = item.closest(pageControls);
  const collapsed = item.closest("details:not([open])");
  return (
    (!control || control === item) &&
    (!collapsed || item === collapsed.querySelector(":scope > summary")) &&
    !item.closest("[inert], [aria-hidden='true']") &&
    !item.matches(":disabled") &&
    item.getClientRects().length > 0 &&
    getComputedStyle(item).visibility === "visible"
  );
}

function isVimField(target: EventTarget | null): target is ContactField {
  return (
    (target instanceof HTMLInputElement ||
      target instanceof HTMLTextAreaElement) &&
    target.hasAttribute("data-vim-item") &&
    !target.disabled
  );
}

function markFocusedItem(item: HTMLElement) {
  if (item.hasAttribute("data-vim-focus")) return;
  item.setAttribute("data-vim-focus", "");
  item.addEventListener("blur", () => item.removeAttribute("data-vim-focus"), {
    once: true,
  });
}

export function createVimPageNavigation(
  main: HTMLElement,
  statusBar: HTMLElement,
  modeIndicator: HTMLElement,
) {
  let session: FieldSession | undefined;

  function showMode(editing: boolean) {
    const mode = editing ? "INSERT" : "NORMAL";
    if (modeIndicator.textContent === mode) return;
    modeIndicator.textContent = mode;
    modeIndicator.toggleAttribute("data-insert", editing);
  }

  function setEditing(active: FieldSession, editing: boolean) {
    active.editing = editing;
    active.field.readOnly = !editing;
    showMode(editing);
  }

  function enterField(field: ContactField) {
    if (session?.field === field || field.readOnly) return;
    markFocusedItem(field);
    const active = { field, editing: false };
    session = active;
    const description = field.getAttribute("aria-describedby");
    const enterInsert = () => setEditing(active, true);

    field.setAttribute(
      "aria-describedby",
      [description, contactHint].filter(Boolean).join(" "),
    );
    field.addEventListener("pointerdown", enterInsert);
    field.addEventListener(
      "blur",
      () => {
        field.removeEventListener("pointerdown", enterInsert);
        if (description === null) field.removeAttribute("aria-describedby");
        else field.setAttribute("aria-describedby", description);
        field.readOnly = false;
        showMode(false);
        session = undefined;
      },
      { once: true },
    );
    setEditing(active, false);
  }

  function handleFieldKey(event: KeyboardEvent): boolean {
    const { key, target } = event;
    if (!session || target !== session.field) {
      if (
        key !== "Escape" ||
        event.repeat ||
        !isVimField(target) ||
        target.readOnly ||
        !main.contains(target)
      )
        return false;
      // Resume Vim navigation even if Tab, a click, or native validation focused the field.
      enterField(target);
      event.preventDefault();
      return true;
    }
    if (event.repeat && key === session.activationKey) {
      event.preventDefault();
      return true;
    }
    if (!event.repeat) session.activationKey = undefined;
    if (!session.editing && (key === "i" || key === "Enter")) {
      event.preventDefault();
      session.activationKey = key;
      setEditing(session, true);
      return true;
    }
    if (session.editing && key === "Escape") {
      event.preventDefault();
      setEditing(session, false);
      return true;
    }
    return false;
  }

  main.addEventListener("focusin", ({ target }) => {
    if (isVimField(target)) showMode(!target.readOnly);
  });
  main.addEventListener("focusout", ({ target }) => {
    if (isVimField(target)) showMode(false);
  });

  function isNormalField(target: EventTarget | null) {
    return (
      session !== undefined && !session.editing && target === session.field
    );
  }

  function move(direction: 1 | -1) {
    const items = Array.from(
      main.querySelectorAll<HTMLElement>(pageItems),
    ).filter(isAvailable);
    if (!items.length) return;
    const current = items.findIndex((item) => item === document.activeElement);
    const rect = items[current]?.getBoundingClientRect();
    const visible =
      rect &&
      rect.bottom > 0 &&
      rect.top < statusBar.getBoundingClientRect().top;
    const firstVisible = items.findIndex(
      (item) => item.getBoundingClientRect().bottom > 0,
    );
    const next = visible
      ? current + direction
      : firstVisible < 0
        ? items.length - 1
        : firstVisible + (direction === -1 ? -1 : 0);
    const item = items[Math.min(items.length - 1, Math.max(0, next))];
    if (!item) return;
    if (item.tabIndex < 0 && !item.hasAttribute("tabindex")) item.tabIndex = -1;
    item.focus({ preventScroll: true });
    if (document.activeElement !== item) return;
    markFocusedItem(item);
    if (isVimField(item)) enterField(item);
    // The first navigable item sits below the editor chrome.
    if (direction === -1 && item === items[0]) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    item.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: "instant",
    });
  }

  function resumeNormalField(target: HTMLElement) {
    if (document.activeElement === target && isVimField(target))
      enterField(target);
  }

  return { move, handleFieldKey, isNormalField, resumeNormalField };
}
