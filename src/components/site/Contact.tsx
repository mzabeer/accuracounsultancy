import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./primitives";

const details = [
  { icon: Phone, label: "Phone", value: "+973 3890 5775", href: "tel:+97338905775" },
  { icon: Mail, label: "Email", value: "Info@accura-consultancy.com", href: "mailto:Info@accura-consultancy.com" },
  {
    icon: MapPin,
    label: "Commercial Address",
    value: "HIDD / الحد, Block 115, Road 1527, Building 2004, Flat/Shop No. 2067",
    href: undefined,
  },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!fullName || !email || !message) {
      toast.error("Please fill in all required fields before continuing.");
      return;
    }

    setSending(true);

    const subject = encodeURIComponent("New Consultation Request - ACCURA Consultancy");
    const body = encodeURIComponent(
      `Hello ACCURA Consultancy,\n\nA new consultation request has been submitted.\n\n------------------------------------\nFull Name:\n${fullName}\n\nCompany:\n${company}\n\nEmail:\n${email}\n\nPhone:\n${phone}\n\nMessage:\n${message}\n------------------------------------\n\nPlease contact me regarding my enquiry.\n\nRegards,\n${fullName}`,
    );

    const mailtoLink = `mailto:accuraconsultancy01@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    form.reset();
    setSending(false);
    toast("Your email client has been opened. Please click Send to complete your enquiry.");
  };

  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden bg-white"
    >
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Send Enquiry"
          title="Share your requirements and our team will contact you shortly."
          intro=""
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <ul className="space-y-7">
              {details.map((d) => (
                <li key={d.label} className="flex gap-4">
                  <span className="border-gold/30 text-gold flex h-11 w-11 shrink-0 items-center justify-center border bg-white shadow-[0_10px_25px_-20px_rgba(200,155,60,0.35)]">
                    <d.icon className="h-4.5 w-4.5" strokeWidth={1.3} />
                  </span>
                  <div>
                    <p className="text-muted-foreground text-[0.6rem] tracking-[0.28em] uppercase">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-primary hover:text-gold mt-1 block text-sm transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-primary mt-1 text-sm">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/+97338905775"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#25d366] px-7 text-[0.72rem] font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#1ebe57]"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              WhatsApp Us
            </a>

            <div className="border-gold/15 shadow-[0_18px_50px_-35px_rgba(200,155,60,0.22)] mt-9 overflow-hidden rounded-[24px] border bg-white">
              <iframe
                title="ACCURA Consultancy office location"
                src="https://www.openstreetmap.org/export/embed.html?marker=26.2235,50.585&layer=mapnik"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale-[20%]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="border-gold/15 bg-white/95 shadow-[0_30px_80px_-45px_rgba(200,155,60,0.22)] rounded-[32px] border p-7 sm:p-10"
              aria-label="Consultation request form"
            >
              <div className="mb-8">
                <p className="text-gold text-[0.72rem] font-semibold tracking-[0.3em] uppercase">
                  Send Enquiry
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  Fill in the form below and our team will get back to you shortly.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" />
                <Field id="company" label="Company" required={false} />
                <Field id="email" label="Email" type="email" />
                <Field id="phone" label="Phone" type="tel" required={false} />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-muted-foreground text-[0.6rem] tracking-[0.28em] uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="border-border bg-background focus:border-gold focus:ring-gold/10 mt-2 w-full rounded-2xl border px-5 py-4 text-sm outline-none transition-colors focus:ring-4"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="from-[#c89b3c] to-[#f3d17a] text-[#2b0710] mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-r px-8 text-[0.82rem] font-semibold tracking-[0.08em] shadow-[0_18px_40px_-20px_rgba(200,155,60,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-18px_rgba(200,155,60,0.85)] disabled:opacity-70 sm:w-auto"
              >
                {sending ? "Sending…" : "Request Consultation"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-muted-foreground text-[0.6rem] tracking-[0.28em] uppercase">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="border-border bg-background focus:border-gold focus:ring-gold/10 mt-2 h-12 w-full rounded-2xl border px-5 text-sm outline-none transition-colors focus:ring-4"
      />
    </div>
  );
}
