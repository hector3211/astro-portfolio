import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    setPending(true);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      toast.success("Message sent");
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section
      id="contact"
      className="portfolio-shell"
      aria-labelledby="contact-title"
    >
      <div className="editor-home-section grid items-start gap-8 xl:grid-cols-[1fr_1.3fr] xl:gap-10">
        <header>
          <p className="portfolio-label"># contact.sh</p>
          <h2 id="contact-title" className="portfolio-title mt-3">
            Get in touch
          </h2>
          <p className="mt-6 max-w-[20rem] text-[0.9375rem] leading-relaxed text-muted-foreground">
            Tell me what you’re building, fixing, or trying to make easier.
          </p>
        </header>

        <form
          aria-labelledby="contact-title"
          action="/api/contact"
          method="post"
          onSubmit={handleSubmit}
          className="grid w-full max-w-2xl content-start gap-5 sm:grid-cols-2 md:mt-3"
        >
          <p
            id="contact-vim-hint"
            className="editor-contact-keys sm:col-span-2"
          >
            <kbd>j</kbd>/<kbd>k</kbd> move · <kbd>i</kbd> or <kbd>Enter</kbd>{" "}
            edit · <kbd>Esc</kbd> back to navigation
          </p>
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
              data-vim-item
              autoComplete="name"
              placeholder="Your name"
              className="h-12 rounded-none bg-background/70 sm:h-10"
              name="name"
              maxLength={100}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              data-vim-item
              autoComplete="email"
              type="email"
              name="email"
              placeholder="Your email"
              className="h-12 rounded-none bg-background/70 sm:h-10"
              maxLength={150}
              required
            />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              data-vim-item
              placeholder="What are you working on, and where can I help?"
              name="message"
              className="min-h-44 resize-y rounded-none bg-muted/20"
              required
            />
          </div>
          <Button
            data-vim-item
            disabled={pending}
            type="submit"
            className="h-12 gap-2.5 justify-self-start rounded-none border-b bg-transparent px-0 text-foreground hover:border-current hover:bg-transparent hover:text-[var(--portfolio-accent)] sm:col-span-2"
          >
            {pending ? "Sending…" : "Send message"}
            {pending ? (
              <Loader2
                aria-hidden="true"
                className="size-4 motion-safe:animate-spin"
              />
            ) : (
              <ArrowUpRight aria-hidden="true" className="size-4" />
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
