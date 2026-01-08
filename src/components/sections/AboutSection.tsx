import { useI18n } from "@/contexts/I18nContext";

const AboutSection = () => {
  const { t } = useI18n();

  return (
    <>
      <div className="mb-12 pt-6 lg:pt-32 opacity-0 animate-fadeInUp">
        <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
          {t.about.hero_content}
        </p>
      </div>

      <section id="about" className="pb-12">
        <div className="space-y-12">
          <div className="opacity-0 animate-fadeInUp animate-stagger-2">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-[var(--text-primary)] group">
              <span className="font-mono text-lg opacity-80 text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                {t.numbers["01"]}
              </span>
              <span className="lowercase">{t.sections_labels.about}</span>
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-tertiary)]">
              {t.about.content}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
