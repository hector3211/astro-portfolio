import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, Loader2 } from "lucide-react";
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
      className="portfolio-shell"
      aria-labelledby="contact-title"
    >
      <div className="grid items-start gap-8 border-t pb-16 pt-9 sm:pb-24 md:grid-cols-[1.25fr_1fr] md:gap-10">
        <header>
          <p className="portfolio-label">
            Have something in mind?{" "}
            <span className="text-muted-foreground">/ 03</span>
          </p>
          <h2
            id="contact-title"
            className="portfolio-title mt-6 [--portfolio-title-size:clamp(2.8rem,7vw,6.5rem)]"
          >
            Let’s make{" "}
            <span className="block text-muted-foreground">it work better.</span>
          </h2>
          <p className="mt-6 max-w-[20rem] text-[0.9375rem] leading-relaxed text-muted-foreground">
            Tell me what you’re building, fixing, or trying to make easier.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid w-full max-w-2xl content-start gap-5 sm:grid-cols-2 md:mt-3"
        >
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
          <Button
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
