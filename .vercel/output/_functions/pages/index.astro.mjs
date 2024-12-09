import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, b as renderSlot, e as createAstro, f as renderComponent, g as createTransitionScope, h as renderHead, u as unescapeHTML, F as Fragment, i as renderTransition } from '../chunks/astro/server_CIppHmPd.mjs';
import 'kleur/colors';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TbMenu2 } from 'react-icons/tb/index.js';
import { BiLinkExternal } from 'react-icons/bi/index.js';
import Spline from '@splinetool/react-spline';
import { $ as $$Image } from '../chunks/_astro_assets_RUm6w4lM.mjs';
import { optimize } from 'svgo';
export { renderers } from '../renderers.mjs';

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
  const [show, setShow] = useState(true);
  const [current, setCurrent] = useState("");
  useEffect(() => {
    setShow(false);
    if (localStorage.getItem("theme") === "dark") {
      setCurrent("dark");
    } else {
      setCurrent("light");
    }
  }, []);
  function handleShow() {
    setShow(!show);
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative z-50 md:hidden", children: [
    /* @__PURE__ */ jsx(Button, { onClick: handleShow, children: /* @__PURE__ */ jsx(TbMenu2, { className: "text-lg" }) }),
    show && /* @__PURE__ */ jsx(
      "div",
      {
        className: `${current === "light" ? "bg-zinc-950 text-white" : "bg-white text-gray-800"} absolute border border-black top-14 right-0 w-32 rounded-md text-lg`,
        children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col space-y-3 justify-center items-start", children: [
          /* @__PURE__ */ jsx("li", { className: "w-full py-1 px-2 rounded-t-lg", children: /* @__PURE__ */ jsx("a", { className: "w-full", href: "/", onClick: handleShow, children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { className: "w-full py-1 px-2 hover:bg-base-300 active:bg-base-300", children: /* @__PURE__ */ jsx(
            "a",
            {
              className: "w-full",
              href: "https://github.com/hector3211",
              target: "_blank",
              onClick: handleShow,
              children: "Github"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { className: "w-full py-1 px-2 rounded-b-lg hover:bg-base-300 active:bg-base-300", children: /* @__PURE__ */ jsxs(
            "a",
            {
              className: "w-full flex  items-center",
              href: "https://github.com/hector3211/astro-portfolio",
              target: "_blank",
              onClick: handleShow,
              children: [
                /* @__PURE__ */ jsx("p", { children: "Source" }),
                /* @__PURE__ */ jsx(BiLinkExternal, { className: "pt-1" })
              ]
            }
          ) })
        ] })
      }
    )
  ] });
}

const $$Astro$7 = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
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
}, "/home/drama321/coding/astro-portfolio/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$6 = createAstro();
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "external-link", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> ` })}`;
}, "/home/drama321/coding/astro-portfolio/node_modules/lucide-astro/dist/ExternalLink.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="container fixed top-0 z-50 w-full items-center bg-opacity-60 py-4 backdrop-blur-md lg:max-w-screen-lg"${addAttribute(createTransitionScope($$result, "zscz5gm2"), "data-astro-transition-persist")}> <div class="flex items-center justify-between"> <div class="hidden md:flex md:items-end md:justify-start md:space-x-5 md:pl-3 md:font-medium"> <a href="/" class="text-2xl font-bold hover:scale-95 active:scale-105">
Hector Oropesa
</a> <div class="flex space-x-3"> <a href="/" class="hover:link hover:scale-95 active:scale-105" data-tip="Home">
Home
</a> <a href="https://github.com/hector3211" target="_blank" class="hover:link px-1 hover:scale-95 active:scale-105" data-tip="Github">
Github
</a> <a href="https://github.com/hector3211/astro-portfolio" target="_blank" class="hover:link flex items-center space-x-1 hover:scale-95 active:scale-105" data-tip="Source"> <p>Source</p> ${renderComponent($$result, "ExternalLink", $$ExternalLink, {})} </a> </div> </div> <a href="/" class="block text-2xl font-bold hover:scale-95 active:scale-105 md:hidden">
Hector Oropesa
</a> <div class="flex"> ${renderComponent($$result, "ToggleThemeButton", Toggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/drama321/coding/astro-portfolio/src/components/ToggleTheme", "client:component-export": "default" })} ${renderComponent($$result, "MobileMenu", Menu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/drama321/coding/astro-portfolio/src/components/MobileMenu", "client:component-export": "default" })} </div> </div> </nav>`;
}, "/home/drama321/coding/astro-portfolio/src/components/Nav.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, intitail-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><script>\n    const getThemePreference = () => {\n      if (\n        typeof localStorage !== "undefined" &&\n        localStorage.getItem("theme")\n      ) {\n        return localStorage.getItem("theme");\n      }\n      return window.matchMedia("(prefers-color-scheme: dark)").matches\n        ? "dark"\n        : "light";\n    };\n    const isDark = getThemePreference() === "dark";\n    document.documentElement.classList[isDark ? "add" : "remove"]("dark");\n\n    if (typeof localStorage !== "undefined") {\n      const observer = new MutationObserver(() => {\n        const isDark = document.documentElement.classList.contains("dark");\n        localStorage.setItem("theme", isDark ? "dark" : "light");\n      });\n      observer.observe(document.documentElement, {\n        attributes: true,\n        attributeFilter: ["class"],\n      });\n    }\n  <\/script>', '</head> <body class="relative mx-auto min-h-screen max-w-screen-lg"> ', ' <main class="py-20"> ', " </main> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "NavBar", $$Nav, {}), renderSlot($$result, $$slots["default"]));
}, "/home/drama321/coding/astro-portfolio/src/layouts/Layout.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<section class="body-font w-full px-2 pb-3 sm:py-0 md:pb-0 md:pt-16"> <div class="container mx-auto py-10"> <h1 class="mb-5 bg-gradient-to-tr from-slate-300 to-slate-700 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-4xl md:text-6xl">
Hector Oropesa
<br class="hidden lg:inline-block">Full-Stack Developer
</h1> <a href="mailto:hectororopesa5@gmail.com" class="flex justify-center"> ${renderComponent($$result, "Button", Button, { "className": "mx-auto w-60 bg-teal-500 shadow-2xl shadow-teal-500 hover:bg-teal-400 " }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"> <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect> <polyline points="3 6 12 13 21 6"></polyline> </svg> <p class="sm:text-md px-1">Contact</p> ` })} </a> </div> <div class="w-full px-3 pt-3"> <p class="mx-auto max-w-3xl whitespace-normal px-2 text-justify leading-relaxed">
Hector Oropesa, a driven freelance fullstack developer based in Florida.
      Hector possesses an unparalleled knack for rapid self-learning and is
      always at the forefront of the ever-evolving web design trends. With a
      versatile skill set that encompasses not only top-tier application coding
      but also a keen eye for design and the creation of intuitive UI/UX
      interfaces, Hector stands as a valuable asset for any project. His
      unwavering commitment to excellence and staying on the cutting edge of the
      tech world make him an ideal choice for your next software development
      endeavor.
</p> </div> </section>`;
}, "/home/drama321/coding/astro-portfolio/src/components/Hero.astro", void 0);

const RustFlixImage = new Proxy({"src":"/_astro/rustflix-update.BD8ACGoP.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/astro-portfolio/src/assets/rustflix-update.png";
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
								return "/home/drama321/coding/astro-portfolio/src/assets/travel-update.png";
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
								return "/home/drama321/coding/astro-portfolio/src/assets/granite-update.png";
							}
							
							return target[name];
						}
					});

const GraniteSyncImage = new Proxy({"src":"/_astro/sync.B5VUNRnP.png","width":1280,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/drama321/coding/astro-portfolio/src/assets/sync.png";
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
								return "/home/drama321/coding/astro-portfolio/src/assets/honey-nectar-website.png";
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

const $$Astro$4 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section class="body-font py-10 pb-8 sm:py-20 md:pb-0"> <h1 class="bg-gradient-to-tr from-slate-400 to-slate-700 bg-clip-text px-2 pb-8 text-3xl font-bold tracking-wide text-transparent sm:text-4xl">
Apps
</h1> <div class="grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-2"> ${[
    {
      title: "GraniteSync",
      description: "All in one production work flow SaaS",
      highlight: `Built on Next.Js, featuring admin role-based login, inventory
          management and job creation, UploadThing for project picture uploads,
          and individual profiles for fabricators. Notably, fabricators receive
          React email notifications for newly assigned jobs. With TypeScript and
          modern UI/UX patterns, our app offers a user-friendly solution to
          optimize the production process for granite companies.`,
      src: GraniteSyncImage,
      alt: "GrnaiteSync iamge",
      live: "https://www.granitesync.com",
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
      live: "",
      github: "https://github.com/hector3211/rust-fullstack"
    },
    {
      title: "Travel",
      description: "Travel aggency application.",
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
      title: "GD Granite",
      description: "Local Granite Shop Website.",
      highlight: `
            This granite shop website, created with Astro JS 3.0 and TypeScript,
            offers a smooth and engaging user experience. Powered by React, the
            site delivers enhanced interactivity and responsiveness. We've
            implemented a top-notch validated form for data accuracy. Moreover, it
            follows the trending responsive design, ensuring it looks great on all
            devices.
        `,
      src: GraniteImage,
      alt: "GDGranite iamge",
      live: "https://granite.hectorcodes.dev",
      github: ""
    },
    {
      title: "Honey Nectar Astrology",
      description: "Astrology Application",
      highlight: `
            This granite shop website, created with Astro JS 3.0 and TypeScript,
            offers a smooth and engaging user experience. Powered by React, the
            site delivers enhanced interactivity and responsiveness. We've
            implemented a top-notch validated form for data accuracy. Moreover, it
            follows the trending responsive design, ensuring it looks great on all
            devices.
        `,
      src: HoneyNectarImage,
      alt: "GDGranite iamge",
      live: "https://honeynectarastrology.com",
      github: ""
    }
  ].map((project) => renderTemplate`${renderComponent($$result, "Card", Card, { "className": `${project.title === "GraniteSync" ? "col-span-2" : "col-span-2 lg:col-span-1"}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardHeader", CardHeader, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CardTitle", CardTitle, {}, { "default": ($$result4) => renderTemplate`${project.title}` })} ${renderComponent($$result3, "CardDescription", CardDescription, {}, { "default": ($$result4) => renderTemplate`${project.description}` })} ` })} ${renderComponent($$result2, "CardContent", CardContent, { "className": `${project.title === "GraniteSync" ? "" : "h-[35rem]"}` }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Image", $$Image, { "width": 900, "height": 400, "src": project.src, "alt": project.alt, "class": `${project.title === "GraniteSync" && "w-full object-cover"}` })} <p class="lg:text-md py-3 text-justify leading-relaxed"> ${project.highlight} </p> ` })} ${renderComponent($$result2, "CardFooter", CardFooter, {}, { "default": ($$result3) => renderTemplate` <div class="ml-2 flex items-center space-x-1 py-2"> ${renderComponent($$result3, "Button", Button, {}, { "default": ($$result4) => renderTemplate` <a${addAttribute(`${project.live}`, "href")} target="_blank">
Demo
</a> ` })} ${renderComponent($$result3, "Button", Button, { "disabled": !project.github }, { "default": ($$result4) => renderTemplate` <a class="flex items-center"${addAttribute(`${project.github}`, "href")} target="_blank"> <p>Source Code</p> ${renderComponent($$result4, "ExternalLink", $$ExternalLink, {})} </a> ` })} </div> ` })} ` })}`)} </div> </section>`;
}, "/home/drama321/coding/astro-portfolio/src/components/Projects.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({


});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$3 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/home/drama321/coding/astro-portfolio/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$2 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "/home/drama321/coding/astro-portfolio/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$1 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/drama321/coding/astro-portfolio/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro = createAstro();
const $$Sprite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "/home/drama321/coding/astro-portfolio/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="absolute bottom-0 flex justify-between items-center p-4"> <p>Copyright © 2023 Hector Oropesa - All rights reserved</p> <a href="https://twitter.com/HectorOropesa1" target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:twitter", "class": "text-info max-h-7 w-7 hover:scale-95" })} </a> </footer>`;
}, "/home/drama321/coding/astro-portfolio/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hector's Portfolio", "data-astro-transition-scope": renderTransition($$result, "rpl33o7b", "", "homepage") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SplineModal", Model, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/SplineModal.tsx", "client:component-export": "default" })} ${maybeRenderHead()}<div class="mx-auto flex w-5/6 items-center justify-center space-x-3 rounded-lg border-black bg-gray-800 px-2 py-4 text-white dark:text-primary-foreground sm:w-3/4">
💡
<p class="">Hello, I'm an App developer based in Florida!</p> </div> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/drama321/coding/astro-portfolio/src/pages/index.astro", "self");

const $$file = "/home/drama321/coding/astro-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
