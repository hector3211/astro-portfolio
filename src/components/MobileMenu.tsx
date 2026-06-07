import { useState } from "react";
import { ExternalLink, MenuSquare } from "lucide-react";

export default function Menu() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="relative z-50 md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-muted/30 text-muted-foreground transition duration-200 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={handleShow}
        aria-label="Open navigation menu"
        aria-expanded={show}
      >
        <MenuSquare className="h-4 w-4" />
      </button>
      {show && (
        <div className="absolute right-0 top-12 w-44 rounded-2xl border bg-popover p-2 text-sm text-popover-foreground shadow-lg">
          <ul className="flex flex-col items-start justify-center">
            <li className="w-full">
              <a
                className="block w-full rounded-xl px-3 py-2 hover:bg-accent"
                href="/#projects"
                onClick={handleShow}
              >
                Projects
              </a>
            </li>
            <li className="w-full">
              <a
                className="block w-full rounded-xl px-3 py-2 hover:bg-accent"
                href="/#contact"
                onClick={handleShow}
              >
                Contact
              </a>
            </li>
            <li className="w-full">
              <a
                className="block w-full rounded-xl px-3 py-2 hover:bg-accent"
                href="https://github.com/hector3211"
                target="_blank"
                rel="noreferrer"
                onClick={handleShow}
              >
                GitHub
              </a>
            </li>
            <li className="w-full">
              <a
                className="flex w-full items-center rounded-xl px-3 py-2 hover:bg-accent"
                href="https://github.com/hector3211/astro-portfolio"
                target="_blank"
                rel="noreferrer"
                onClick={handleShow}
              >
                <p>Source</p>
                <ExternalLink className="ml-1 size-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
