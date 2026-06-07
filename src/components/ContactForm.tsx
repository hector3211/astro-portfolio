import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message successful");
    } catch (error) {
      // const errorMessage =
      //   error instanceof Error ? error.message : String(error);
      // console.log(`form failed with: ${errorMessage}`);
      toast.error("failed sending message, please try again later");
    } finally {
      setPending(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-screen-lg px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <Card className="rounded-3xl bg-muted/20 shadow-sm">
        <CardHeader className="p-5 pb-4 sm:p-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Contact
          </p>
          <CardTitle className="text-2xl sm:text-3xl">Get in touch</CardTitle>
          <CardDescription className="leading-6">
            Send me a message and I'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 px-5 pb-5 sm:px-8">
            <div>
              <Input
                type="text"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                name="honeypot"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                className="h-12 rounded-xl bg-background/70 sm:h-10"
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
                className="h-12 rounded-xl bg-background/70 sm:h-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={150}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                name="message"
                className="min-h-36 resize-y rounded-xl bg-background/70 sm:min-h-28"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="px-5 pb-5 pt-0 sm:px-8 sm:pb-8">
            <Button
              disabled={pending}
              type="submit"
              className="h-12 w-full rounded-xl bg-foreground text-background hover:bg-foreground/90 sm:h-10 sm:w-auto"
            >
              {pending ? (
                <Loader2 className="mr-1 size-5 animate-spin" />
              ) : (
                <Send className="mr-1 size-4" />
              )}
              {pending ? "Sending" : "Send Message"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
