import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, MenuSquare } from "lucide-react";

export default function Menu() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="relative z-50 md:hidden">
      <Button onClick={handleShow}>
        <MenuSquare />
      </Button>
      {show && (
        <div className="absolute right-0 top-14 w-32 rounded-md border border-border bg-popover text-popover-foreground text-lg shadow-lg">
          <ul className="flex flex-col items-start justify-center">
            <li className="w-full rounded-t-lg px-2 py-2 hover:bg-accent">
              <a className="block w-full" href="/" onClick={handleShow}>
                Home
              </a>
            </li>
            <li className="w-full px-2 py-2 hover:bg-accent">
              <a className="block w-full" href="/blog" onClick={handleShow}>
                Blog
              </a>
            </li>
            <li className="w-full px-2 py-2 hover:bg-accent">
              <a
                className="block w-full"
                href="https://github.com/hector3211"
                target="_blank"
                onClick={handleShow}
              >
                Github
              </a>
            </li>
            <li className="w-full rounded-b-lg px-2 py-2 hover:bg-accent">
              <a
                className="flex w-full items-center"
                href="https://github.com/hector3211/astro-portfolio"
                target="_blank"
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
