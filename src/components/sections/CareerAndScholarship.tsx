import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useState, useMemo } from "react";
import { useI18n } from "@/contexts/I18nContext";

export type CareerItem = {
  company: string;
  period: string;
  position: string;
  description: string;
  location: string;
};

export type ScholarshipItem = {
  institution: string;
  period: string;
  degree: string;
  description: string;
  location: string;
};

const CareerAndScholarship = () => {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<"career" | "scholarship">(
    "career"
  );

  const items = useMemo(
    () => (activeTab === "career" ? t.career : t.scholarship),
    [activeTab, t.career, t.scholarship]
  );

  return (
    <div className="w-full opacity-0 animate-fadeInUp animate-stagger-3">
      <div className="space-y-8">
        <div className="pb-2">
          <div className="flex items-baseline gap-4">
            <h2 className="flex items-center gap-3 group">
              <span className="font-mono text-lg opacity-80 text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
                {t.numbers["02"]}
              </span>
              <button
                id={activeTab === "career" ? "career-heading" : undefined}
                className={`text-2xl font-semibold lowercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-[var(--color-accent)] hover:scale-105 ${
                  activeTab === "career"
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                onClick={() => setActiveTab("career")}
                aria-pressed={activeTab === "career"}
                aria-label={t.accessibility.navigate_to.replace(
                  "{{section}}",
                  t.sections.career.title
                )}
              >
                {t.sections.career.title}
              </button>
              <span className="text-xl opacity-50 text-[var(--text-tertiary)]">
                /
              </span>
              <button
                id={activeTab === "scholarship" ? "career-heading" : undefined}
                className={`text-2xl font-semibold lowercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-[var(--color-accent)] hover:scale-105 ${
                  activeTab === "scholarship"
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                onClick={() => setActiveTab("scholarship")}
                aria-pressed={activeTab === "scholarship"}
                aria-label={t.accessibility.navigate_to.replace(
                  "{{section}}",
                  t.sections.scholarship.title
                )}
              >
                {t.sections.scholarship.title}
              </button>
            </h2>
          </div>
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <article
              key={index}
              className="flex gap-6 opacity-0 animate-fadeInLeft group"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start pt-2">
                <div
                  className="w-12 h-12 bg-transparent border-2 border-[var(--color-accent)] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-[var(--color-accent)] group-hover:text-white flex-shrink-0 text-[var(--color-accent)]"
                  role="img"
                  aria-label={
                    activeTab === "career"
                      ? t.accessibility.career_experience
                      : t.accessibility.education_experience
                  }
                >
                  {activeTab === "career" ? (
                    <Briefcase size={20} />
                  ) : (
                    <GraduationCap size={20} />
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0 space-y-4 transition-transform duration-300 group-hover:translate-x-2">
                <header className="space-y-1">
                  <h3 className="text-fluid-xl font-bold text-[var(--text-primary)]">
                    {activeTab === "career"
                      ? (item as CareerItem).company
                      : (item as ScholarshipItem).institution}
                  </h3>
                  <time className="text-fluid-base font-medium text-[var(--text-secondary)]">
                    {item.period}
                  </time>
                </header>

                <h4 className="text-fluid-base font-semibold text-[var(--text-secondary)] opacity-80">
                  {activeTab === "career"
                    ? (item as CareerItem).position
                    : (item as ScholarshipItem).degree}
                </h4>

                <p className="text-fluid-base font-medium leading-relaxed text-[var(--text-secondary)] opacity-80">
                  {item.description}
                </p>

                <div className="flex items-center text-fluid-sm text-[var(--text-secondary)] group/location">
                  <MapPin
                    size={16}
                    className="mr-2 flex-shrink-0 text-[var(--color-accent)] transition-transform duration-300 group-hover/location:scale-125"
                    aria-hidden="true"
                  />
                  <span>{item.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerAndScholarship;
