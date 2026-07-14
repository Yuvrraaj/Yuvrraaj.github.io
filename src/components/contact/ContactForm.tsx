import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { profile } from "@/data/content";
import { cn } from "@/lib/utils";

// Submissions are emailed straight to this inbox via FormSubmit — no server,
// no database. FormSubmit auto-sets reply-to from the sender's email, so replies
// go directly to them. (First-ever submission triggers a one-time activation email.)
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`;

const inputClass =
  "w-full rounded-md border border-hairline bg-canvas px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-secondary/70 focus:border-algolia-ring focus:ring-2 focus:ring-algolia-ring/25 disabled:opacity-50";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    _honey: "", // honeypot — must stay empty for real humans
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Please fill in all fields",
        description: "Every field is required so I can reply properly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Form-encoded (not JSON) so the request stays "simple" and skips the
      // CORS preflight that FormSubmit's endpoint rejects.
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio contact — ${formData.subject.trim()}`,
          _template: "table",
          _captcha: "false",
          _honey: formData._honey, // FormSubmit drops the message if this is filled
        }).toString(),
      });
      const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
      if (!res.ok || data.success === false || data.success === "false") {
        throw new Error((data.message as string) || "Failed to send message");
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", _honey: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error: any) {
      toast({
        title: "Couldn't send message",
        description: error.message || "Something went wrong. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl border border-hairline bg-canvas p-6 sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Role · collaboration · question…"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="What's on your mind?"
            className={cn(inputClass, "resize-none")}
          />
        </div>

        {/* Honeypot: off-screen + aria-hidden + not tabbable, so no human ever
            fills it. Bots that auto-fill every field trip it and FormSubmit
            silently discards the message. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
        >
          <label htmlFor="_honey">Leave this field empty</label>
          <input
            id="_honey"
            name="_honey"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData._honey}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className={cn(
            "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-algolia-ring focus-visible:ring-offset-2",
            isSubmitted
              ? "cursor-default bg-emerald-600 text-white"
              : isSubmitting
                ? "cursor-wait bg-primary/70 text-white"
                : "bg-primary text-white hover:bg-algolia-cobalt"
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : isSubmitted ? (
            <>
              <CheckCircle className="h-4 w-4" />
              Message sent
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send message
            </>
          )}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          Your details are only used to reply — never shared.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
