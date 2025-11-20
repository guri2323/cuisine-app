import { FormEvent, useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", form);
    alert("Thanks for your feedback!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 rounded-3xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-black/40">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">Contact</p>
      <h1 className="text-3xl font-semibold text-white">Share your feedback</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-white">
            Name
          </label>
          <input
            id="contact-name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
            type="text"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-white">
            Email
          </label>
          <input
            id="contact-email"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
            type="email"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-semibold text-white">
            Message
          </label>
          <textarea
            id="contact-message"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/40"
            rows={5}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-900 transition hover:shadow-glow"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
