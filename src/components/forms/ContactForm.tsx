import { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const { t } = useI18n();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputClasses = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 focus:outline-none placeholder:text-[var(--text-tertiary)] bg-[var(--bg-elevated)] text-[var(--text-primary)] ${
      focusedField === field
        ? "border-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/20 shadow-lg shadow-[var(--color-accent)]/10"
        : "border-[var(--border-color)] hover:border-[var(--border-hover)]"
    }`;

  return (
    <section
      id="contact"
      className="py-12 opacity-0 animate-fadeInUp animate-stagger-6"
    >
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-[var(--text-primary)] group">
          <span className="font-mono text-lg opacity-80 text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
            {t.numbers["05"]}
          </span>
          <span className="lowercase">{t.ui.get_in_touch}</span>
        </h2>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div
              className="space-y-2 opacity-0 animate-fadeInLeft"
              style={{ animationDelay: "0.7s" }}
            >
              <Label className="block text-sm font-semibold text-[var(--text-primary)]">
                {t.form.labels.firstName}{" "}
                <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                type="text"
                placeholder={t.form.placeholders.firstName}
                required
                className={inputClasses("firstName")}
                onFocus={() => setFocusedField("firstName")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <div
              className="space-y-2 opacity-0 animate-fadeInRight"
              style={{ animationDelay: "0.7s" }}
            >
              <Label className="block text-sm font-semibold text-[var(--text-primary)]">
                {t.form.labels.lastName}{" "}
                <span className="text-[var(--color-error)]">*</span>
              </Label>
              <Input
                type="text"
                placeholder={t.form.placeholders.lastName}
                required
                className={inputClasses("lastName")}
                onFocus={() => setFocusedField("lastName")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className="space-y-2 opacity-0 animate-fadeInLeft"
              style={{ animationDelay: "0.8s" }}
            >
              <Label className="block text-sm font-semibold text-[var(--text-primary)]">
                {t.form.labels.email}
              </Label>
              <Input
                type="email"
                placeholder={t.form.placeholders.email}
                className={inputClasses("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <div
              className="space-y-2 opacity-0 animate-fadeInRight"
              style={{ animationDelay: "0.8s" }}
            >
              <Label className="block text-sm font-semibold text-[var(--text-primary)]">
                {t.form.labels.phone}
              </Label>
              <Input
                type="tel"
                placeholder={t.form.placeholders.phone}
                className={inputClasses("phone")}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>

          <div
            className="space-y-2 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.9s" }}
          >
            <Label className="block text-sm font-semibold text-[var(--text-primary)]">
              {t.form.labels.message}{" "}
              <span className="text-[var(--color-error)]">*</span>
            </Label>
            <Textarea
              required
              rows={6}
              placeholder={t.form.placeholders.message}
              className={`${inputClasses("message")} resize-none`}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </div>

          <div
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            <Button
              type="submit"
              className="group w-full py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent)]/30 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 flex items-center justify-center gap-3 bg-[var(--color-accent)] text-white active:scale-[0.98] overflow-hidden relative h-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                {t.form.buttons.submit}
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-hover)] to-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
