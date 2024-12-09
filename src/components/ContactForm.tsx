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
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.log(`form failed with: ${errorMessage}`);
      toast.error("failed sending message, please try again later");
    } finally {
      setPending(false);
    }
  };

  return (
    <Card id="contact" className="mx-auto my-20 w-full max-w-7xl">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>
          Send me a message and I'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled={pending} type="submit" className="ml-auto">
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
  );
}
