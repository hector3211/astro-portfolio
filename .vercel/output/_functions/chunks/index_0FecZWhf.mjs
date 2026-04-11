import { c as createComponent, $ as $$Image } from './_astro_assets_LcVfcOLe.mjs';
import 'piccolore';
import { m as maybeRenderHead, s as spreadAttributes, b as addAttribute, r as renderSlot, c as renderTemplate, d as renderComponent, e as createTransitionScope, f as renderHead, g as renderTransition } from './entrypoint_qrP2MmWj.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Moon, Sun, MenuSquare, ExternalLink, Loader2, Send } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from 'next-themes';
import { Toaster as Toaster$1, toast } from 'sonner';
import Spline from '@splinetool/react-spline';
import * as LabelPrimitive from '@radix-ui/react-label';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

function Toggle() {
  const [current, setCurrent] = useState("");
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }, []);
  function changeTheme() {
    const element = document.documentElement;
    element.classList.toggle("dark");
    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }
  return /* @__PURE__ */ jsx("div", { className: "pr-2", children: /* @__PURE__ */ jsx(Button, { className: `text-lg `, onClick: changeTheme, children: current === "light" ? /* @__PURE__ */ jsx(Moon, { className: "" }) : /* @__PURE__ */ jsx(Sun, { className: "" }) }) });
}

function Menu() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative z-50 md:hidden", children: [
    /* @__PURE__ */ jsx(Button, { onClick: handleShow, children: /* @__PURE__ */ jsx(MenuSquare, {}) }),
    show && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-14 w-32 rounded-md border border-border bg-popover text-popover-foreground text-lg shadow-lg", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col items-start justify-center", children: [
      /* @__PURE__ */ jsx("li", { className: "w-full rounded-t-lg px-2 py-2 hover:bg-accent", children: /* @__PURE__ */ jsx("a", { className: "block w-full", href: "/", onClick: handleShow, children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { className: "w-full px-2 py-2 hover:bg-accent", children: /* @__PURE__ */ jsx("a", { className: "block w-full", href: "/blog", onClick: handleShow, children: "Blog" }) }),
      /* @__PURE__ */ jsx("li", { className: "w-full px-2 py-2 hover:bg-accent", children: /* @__PURE__ */ jsx(
        "a",
        {
          className: "block w-full",
          href: "https://github.com/hector3211",
          target: "_blank",
          onClick: handleShow,
          children: "Github"
        }
      ) }),
      /* @__PURE__ */ jsx("li", { className: "w-full rounded-b-lg px-2 py-2 hover:bg-accent", children: /* @__PURE__ */ jsxs(
        "a",
        {
          className: "flex w-full items-center",
          href: "https://github.com/hector3211/astro-portfolio",
          target: "_blank",
          onClick: handleShow,
          children: [
            /* @__PURE__ */ jsx("p", { children: "Source" }),
            /* @__PURE__ */ jsx(ExternalLink, { className: "ml-1 size-4" })
          ]
        }
      ) })
    ] }) })
  ] });
}

const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/drama321/coding/profile/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExternalLink;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "external-link", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> ` })}`;
}, "/home/drama321/coding/profile/node_modules/lucide-astro/dist/ExternalLink.astro", void 0);

const $$Twitter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Twitter;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "twitter", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path> ` })}`;
}, "/home/drama321/coding/profile/node_modules/lucide-astro/dist/Twitter.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Nav;
  const pathname = Astro2.url.pathname;
  const isHome = pathname === "/";
  const isBlog = pathname.startsWith("/blog");
  return renderTemplate`${maybeRenderHead()}<nav class="container fixed top-0 z-50 w-full items-center bg-opacity-60 py-4 backdrop-blur-md lg:max-w-screen-lg"${addAttribute(createTransitionScope($$result, "zscz5gm2"), "data-astro-transition-persist")}> <div class="flex items-center justify-between"> <div class="hidden md:flex md:items-end md:justify-start md:space-x-5 md:pl-3 md:font-medium"> <a href="/" class="transform text-2xl font-bold transition-all duration-200 hover:scale-95 active:scale-105">
Hector Oropesa
</a> <div class="flex space-x-3"> <a href="/"${addAttribute([
    "hover:link transform transition-all duration-200 hover:scale-95 active:scale-105",
    { "underline underline-offset-4": isHome }
  ], "class:list")} data-tip="Home">
Home
</a> <a href="/blog"${addAttribute([
    "hover:link transform transition-all duration-200 hover:scale-95 active:scale-105",
    { "underline underline-offset-4": isBlog }
  ], "class:list")} data-tip="Blog">
Blog
</a> <a href="https://github.com/hector3211" target="_blank" class="hover:link transform px-1 transition-all duration-200 hover:scale-95 active:scale-105" data-tip="Github">
Github
</a> <a href="https://github.com/hector3211/astro-portfolio" target="_blank" class="hover:link flex transform items-center space-x-1 transition-all duration-200 hover:scale-95 active:scale-105" data-tip="Source"> <p>Source</p> ${renderComponent($$result, "ExternalLink", $$ExternalLink, {})} </a> </div> </div> <a href="/" class="block text-2xl font-bold hover:scale-95 active:scale-105 md:hidden">
Hector Oropesa
</a> <div class="flex"> ${renderComponent($$result, "ToggleThemeButton", Toggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/drama321/coding/profile/src/components/ToggleTheme", "client:component-export": "default" })} ${renderComponent($$result, "MobileMenu", Menu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/drama321/coding/profile/src/components/MobileMenu", "client:component-export": "default" })} </div> </div> </nav>`;
}, "/home/drama321/coding/profile/src/components/Nav.astro", "self");

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    canonicalUrl,
    ogType = "website",
    publishedDate
  } = Astro2.props;
  const siteUrl = "https://hectorcodes.dev";
  const canonical = canonicalUrl || new URL(Astro2.url.pathname, siteUrl).href;
  return renderTemplate(_a || (_a = __template(['<script>\n  const getThemePreference = () => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    return window.matchMedia("(prefers-color-scheme: dark)").matches\n      ? "dark"\n      : "light";\n  };\n  const isDark = getThemePreference() === "dark";\n  document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n\n  if (typeof localStorage !== "undefined") {\n    const observer = new MutationObserver(() => {\n      const isDark = document.documentElement.classList.contains("dark");\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n    });\n    observer.observe(document.documentElement, {\n      attributes: true,\n      attributeFilter: ["class"],\n    });\n  }\n<\/script> <html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="canonical"', '><meta name="generator"', ">", '<meta property="og:title"', ">", '<meta property="og:url"', '><meta property="og:type"', '><meta name="twitter:card" content="summary"><meta name="twitter:title"', ">", "<title>", "</title>", '</head> <body class="relative mx-auto min-h-screen max-w-screen-lg"> ', ' <main class="py-20"> ', " </main> ", " </body></html>"])), addAttribute(canonical, "href"), addAttribute(Astro2.generator, "content"), description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`, addAttribute(title, "content"), description && renderTemplate`<meta property="og:description"${addAttribute(description, "content")}>`, addAttribute(canonical, "content"), addAttribute(ogType, "content"), addAttribute(title, "content"), description && renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>`, title, renderHead(), renderComponent($$result, "NavBar", $$Nav, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Toaster", Toaster, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/sonner", "client:component-export": "Toaster" }));
}, "/home/drama321/coding/profile/src/layouts/Layout.astro", void 0);

function Model() {
  let modal = useRef();
  const onLoad = useCallback((splineApp) => {
    modal.current = splineApp;
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "relative h-80 w-full py-5 md:h-96 md:px-0", children: /* @__PURE__ */ jsx(
    Suspense,
    {
      fallback: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" }) }),
      children: /* @__PURE__ */ jsx(
        Spline,
        {
          style: { borderRadius: "4px", width: "100%" },
          scene: "https://prod.spline.design/jNzC38qWlP4eDXCX/scene.splinecode",
          onLoad
        }
      )
    }
  ) });
}

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="body-font w-full px-2 py-16 pb-3 sm:py-0 md:pb-0"> <div class="container mx-auto py-10"> <h1 class="mb-5 text-center text-2xl font-bold sm:text-4xl md:text-6xl">
Hector Oropesa
<br class="hidden lg:inline-block">Full-Stack Developer
</h1> <a href="#contact" class="mx-auto flex w-60 justify-center"> ${renderComponent($$result, "Button", Button, { "className": "w-full bg-teal-500 shadow-sm shadow-teal-600 hover:bg-teal-500/80" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"> <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect> <polyline points="3 6 12 13 21 6"></polyline> </svg> <p class="sm:text-md px-1">Contact</p> ` })} </a> </div> <div class="w-full px-3 pt-3"> <p class="mx-auto max-w-3xl whitespace-normal px-2 text-justify leading-relaxed">
Hi, I'm Hector! I'm a self-taught software developer and cloud engineer.
      My tech stack typically includes TypeScript, React, Next.js, and either
      SQLite or PostgreSQL. I also enjoy using Python for scripting and
      automating tasks in the cloud. I love building full-stack applications and
      even creating low-level CLI tools or developer tooling with Go. I started
      creating software in 2022 and have never looked back! I'm always tinkering
      or working on some sort of application. I enjoy finding simple solutions
      to tricky problems and experimenting with new ideas. Most days, you’ll
      find me learning something new or building something fun.
</p> </div> </section>`;
}, "/home/drama321/coding/profile/src/components/Hero.astro", void 0);

const GraniteSyncImage = new Proxy({"src":"/_astro/sync.B5VUNRnP.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/sync.png";
							}
							
							return target[name];
						}
					});

const NotifyImage = new Proxy({"src":"/_astro/noty.CCf7TwSf.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/noty.png";
							}
							
							return target[name];
						}
					});

const GraniteImage = new Proxy({"src":"/_astro/granite-update.K_H1-wIy.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/granite-update.png";
							}
							
							return target[name];
						}
					});

const HoneyNectarImage = new Proxy({"src":"/_astro/honey-nectar-website.CVaicpfK.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/honey-nectar-website.png";
							}
							
							return target[name];
						}
					});

const RustFlixImage = new Proxy({"src":"/_astro/rustflix-update.BD8ACGoP.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/rustflix-update.png";
							}
							
							return target[name];
						}
					});

const TravelImage = new Proxy({"src":"/_astro/travel-update.CfGp2ki-.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/travel-update.png";
							}
							
							return target[name];
						}
					});

const SupremeGranite = new Proxy({"src":"/_astro/supreme-granite.D3xGy6jM.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/supreme-granite.png";
							}
							
							return target[name];
						}
					});

const HeadersImage = new Proxy({"src":"/_astro/headers.DARo-l9y.png","width":1428,"height":1072,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/profile/src/assets/headers.png";
							}
							
							return target[name];
						}
					});

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    {
      title: "GraniteSync",
      description: "Production Work Flow SaaS",
      highlight: `Built on Next.Js, featuring admin role-based login, inventory
          management and job creation, UploadThing for project picture uploads,
          and individual profiles for fabricators. Notably, fabricators receive
          React email notifications for newly assigned jobs. With TypeScript and
          modern UI/UX patterns, our app offers a user-friendly solution to
          optimize the production process for granite companies.`,
      src: GraniteSyncImage,
      alt: "GrnaiteSync iamge",
      live: "",
      // live: "https://www.granitsync.com",
      github: ""
    },
    {
      title: "Notify",
      description: "Local Bussines Tool",
      highlight: `Notify is a high-performance web application tailored for local granite shops, built with Golang, Templ, HTMX, and Tailwind CSS. Designed for speed and simplicity, Notify enables admins to create customer accounts effortlessly. Customers can sign in securely using their email and password to track the real-time status of their orders. With its responsive design and efficient functionality, Notify ensures seamless job notification management for both businesses and customers.`,
      src: NotifyImage,
      alt: "Notify iamge",
      live: "https://notifyjobs.dev",
      github: "https://github.com/hector3211/notify"
    },
    {
      title: "GD Granite",
      description: "Local Granite Shop Website.",
      highlight: `
            GDGranite was created with Astro and TypeScript,
            offers a smooth and engaging user experience. Powered by React, the
            site delivers enhanced interactivity and responsiveness. We've
            implemented a top-notch validated form for data accuracy. Moreover, it
            follows the trending responsive design, ensuring it looks great on all
            devices.
        `,
      src: GraniteImage,
      alt: "GDGranite iamge",
      live: "https://gdgranite.com",
      github: ""
    },
    {
      title: "Honey Nectar Astrology",
      description: "Astrology Application",
      highlight: `
            HoneyNectarAstrology, crafted with AstroJS, TypeScript, and React, is a modern website that seamlessly blends functionality with elegant design. It features a booking contact form that sends personalized email templates to both the business owner and the customer upon confirmation. Adhering to modern web design standards, the site ensures a polished, responsive, and user-friendly experience for astrology enthusiasts and clients alike.
        `,
      src: HoneyNectarImage,
      alt: "Honey Nectar iamge",
      live: "https://honeynectarastrology.com",
      github: ""
    },
    {
      title: "RustFlix",
      description: "Movie Application",
      highlight: `
            Rustflix is a cutting-edge video streaming web app. It uses Next.js 13
            server components for lightning-fast frontend rendering. On the
            backend, with Drizzle ORM ensures efficient data handling and
            top-notch performance, providing a seamless video streaming
            experience. With its sleek design and user-friendly interface,
            Rustflix offers an exceptional entertainment experience.
        `,
      src: RustFlixImage,
      alt: "RustFlix iamge",
      live: "https://rustflix.hectorcodes.dev",
      github: "https://github.com/hector3211/rust-fullstack"
    },
    {
      title: "Travel",
      description: "Travel Aggency Application.",
      highlight: `
            This travel app, built with Next.js, offers real-time weather updates
            and leverages the latest website design trends. It incorporates modern
            design techniques like responsive design and animations, creating an
            engaging user experience. The app is not only fast and efficient, but
            it also ensures that travelers are well-prepared by providing
            up-to-the-minute weather information.
        `,
      src: TravelImage,
      alt: "Travel iamge",
      live: "https://travel.hectorcodes.dev",
      github: "https://github.com/hector3211/Travel-website"
    },
    {
      title: "Supreme Granite",
      description: "Granite Shop Website.",
      highlight: `
            Supreme Granite, built with AstroJS, is a sleek website that showcases granite products with modern design and functionality. It features a dynamic product inventory, a gallery with filtering for easy browsing, and a newsletter subscription to stay informed. With a contact form for inquiries and a responsive, fast-loading interface, it offers a polished and engaging experience for users. Built using TypeScript and React, it blends cutting-edge technology with elegant design.
        `,
      src: SupremeGranite,
      alt: "Supreme Granite image",
      live: "https://granite.hectorcodes.dev",
      github: "https://github.com/hector3211/supreme-granite"
    },
    {
      title: "Headers",
      description: "Ecommerce Application.",
      highlight: `
        Headers, built with AstroJS, is a sleek website that showcases granite products with modern design and functionality. It features a dynamic product inventory, a gallery with filtering for easy browsing, and a newsletter subscription to stay informed. With a contact form for inquiries and a responsive, fast-loading interface, it offers a polished and engaging experience for users. Built using TypeScript and React, it blends cutting-edge technology with elegant design.
        `,
      src: HeadersImage,
      alt: "Headers image",
      live: "https://headers.hectorcodes.dev",
      github: "https://github.com/hector3211/headers"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="body-font py-10 pb-8 sm:my-20 md:pb-0"> <h1 class="px-2 pb-8 text-3xl font-bold tracking-wide sm:text-5xl">
Projects
</h1> <div class="grid grid-cols-2 items-stretch justify-items-center gap-4 sm:grid-cols-2"> ${projects.map((project) => renderTemplate`${renderComponent($$result, "Card", Card, { "className": `col-span-2 flex flex-col px-4 md:px-0 lg:col-span-1` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", CardHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, {}, { "default": ($$result4) => renderTemplate`${project.title}` })} ${renderComponent($$result3, "CardDescription", CardDescription, {}, { "default": ($$result4) => renderTemplate`${project.description}` })} ` })} ${renderComponent($$result2, "CardContent", CardContent, { "className": "flex-1" }, { "default": ($$result3) => renderTemplate` <div class="aspect-video w-full overflow-hidden rounded-md"> ${renderComponent($$result3, "Image", $$Image, { "width": 900, "height": 400, "src": project.src, "alt": project.alt, "class": "h-full w-full object-cover" })} </div> <p class="py-3 text-justify leading-relaxed">${project.highlight}</p> ` })} ${renderComponent($$result2, "CardFooter", CardFooter, { "className": "mt-auto" }, { "default": ($$result3) => renderTemplate` <div class="ml-2 flex items-center space-x-1 py-2"> ${project.live ? renderTemplate`<a${addAttribute(project.live, "href")} target="_blank"> ${renderComponent($$result3, "Button", Button, {}, { "default": ($$result4) => renderTemplate`Live` })} </a>` : renderTemplate`${renderComponent($$result3, "Button", Button, { "disabled": true }, { "default": ($$result4) => renderTemplate`Live` })}`} ${project.github ? renderTemplate`<a${addAttribute(project.github, "href")} target="_blank"> ${renderComponent($$result3, "Button", Button, { "className": "flex items-center" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ExternalLink", $$ExternalLink, {})} <p class="text-md">Source Code</p> ` })} </a>` : renderTemplate`${renderComponent($$result3, "Button", Button, { "disabled": true, "className": "flex items-center" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ExternalLink", $$ExternalLink, {})} <p class="text-md">Source Code</p> ` })}`} </div> ` })} ` })}`)} </div> </section>`;
}, "/home/drama321/coding/profile/src/components/Projects.astro", void 0);

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    try {
      const formData = new FormData(e.target);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message successful");
    } catch (error) {
      toast.error("failed sending message, please try again later");
    } finally {
      setPending(false);
    }
  };
  return /* @__PURE__ */ jsxs(Card, { id: "contact", className: "mx-auto my-20 w-full max-w-7xl", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Contact Me" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Send me a message and I'll get back to you as soon as possible." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            style: { display: "none" },
            tabIndex: -1,
            autoComplete: "off",
            name: "honeypot"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "name",
              placeholder: "Your name",
              name: "name",
              value: name,
              onChange: (e) => setName(e.target.value),
              maxLength: 100,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "email",
              type: "email",
              name: "email",
              placeholder: "Your email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              maxLength: 150,
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "message",
              placeholder: "Your message",
              name: "message",
              value: message,
              onChange: (e) => setMessage(e.target.value),
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsxs(Button, { disabled: pending, type: "submit", children: [
        pending ? /* @__PURE__ */ jsx(Loader2, { className: "mr-1 size-5 animate-spin" }) : /* @__PURE__ */ jsx(Send, { className: "mr-1 size-4" }),
        pending ? "Sending" : "Send Message"
      ] }) })
    ] })
  ] });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-20 flex items-center justify-between space-x-2 border-t border-border p-4"> <p class="text-sm text-muted-foreground">
Copyright &copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Hector Oropesa - All rights reserved
</p> <a href="https://twitter.com/HectorOropesa1" target="_blank" class="hover:link transform text-muted-foreground transition-all duration-200 hover:scale-95 hover:text-foreground active:scale-105"> ${renderComponent($$result, "Twitter", $$Twitter, {})} </a> </footer>`;
}, "/home/drama321/coding/profile/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hector's Portfolio", "data-astro-transition-scope": renderTransition($$result, "rpl33o7b", "", "homepage") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SplineModal", Model, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/SplineModal.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<div class="mx-auto flex w-5/6 items-center justify-center space-x-3 rounded-lg border-black bg-gray-800 px-2 py-4 text-white dark:text-primary-foreground sm:w-3/4">
💡
<p class="">Hello, I'm an App developer based in Florida!</p> </div> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ContactForm.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/drama321/coding/profile/src/pages/index.astro", "self");

const $$file = "/home/drama321/coding/profile/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
