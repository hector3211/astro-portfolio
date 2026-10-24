import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Form submission failed");

      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message successful");
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto grid w-full max-w-screen-xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8"
    >
      <header>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300/80">
          Contact
        </p>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          Have a project or a systems problem? Let’s talk.
        </p>
        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Let’s work on
          </p>
          <ul className="space-y-3 text-sm font-medium text-foreground/85">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600/70 dark:bg-teal-300/70" />
              Application development and APIs
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600/70 dark:bg-teal-300/70" />
              Cloud infrastructure and automation
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600/70 dark:bg-teal-300/70" />
              Server and workstation provisioning
            </li>
          </ul>
        </div>
        <svg viewBox="0 0 360 160" className="mt-8 hidden h-36 w-full max-w-sm text-muted-foreground/60 lg:block" fill="none" aria-hidden="true">
          <ellipse cx="180" cy="144" rx="97" ry="6" fill="currentColor" opacity=".05" />
          <path d="M88 59h184v74H88Z" fill="currentColor" opacity=".04" />
          <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
            <path d="m88 59 92-44 92 44v74H88Z" fill="hsl(var(--background))" />
            <path d="M114 74V27h132v47l-66 38Z" fill="hsl(var(--background))" />
            <path d="M88 59 180 112 272 59M88 133l65-44m119 44-65-44" />
            <path d="M136 47h58m-58 12h88" opacity=".45" />
          </g>
          <path d="M136 71h38" className="stroke-teal-600/70 dark:stroke-teal-300/70" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </header>

      <form onSubmit={handleSubmit} className="grid w-full max-w-2xl content-start gap-5 sm:grid-cols-2">
        <Input
          type="text"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          name="honeypot"
        />
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            className="h-12 rounded-none bg-background/70 sm:h-10"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            className="h-12 rounded-none bg-background/70 sm:h-10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={150}
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="What are you working on, and where can I help?"
            name="message"
            className="min-h-44 resize-y rounded-none bg-muted/20"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <Button
          disabled={pending}
          type="submit"
          className="h-12 w-full rounded-none bg-foreground text-background hover:bg-foreground/90 sm:h-10 sm:w-auto"
        >
          {pending ? (
            <Loader2 className="mr-1 size-5 animate-spin" />
          ) : (
            <Send className="mr-1 size-4" />
          )}
          {pending ? "Sending…" : "Send message"}
        </Button>
        <p className="text-xs text-muted-foreground">Your message goes directly to me.</p>
        </div>
      </form>
    </section>
  );
}
