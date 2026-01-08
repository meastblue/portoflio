import { Code, Palette, Rocket, Server } from "lucide-react";
import type { ReactNode } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const { t } = useI18n();

  const techColors: Record<string, string> = {
    React: "61DAFB",
    "Vue.js": "4FC08D",
    Vue: "4FC08D",
    Angular: "DD0031",
    JavaScript: "F7DF1E",
    TypeScript: "3178C6",
    HTML: "E34F26",
    CSS: "1572B6",
    Sass: "CC6699",
    "Tailwind CSS": "06B6D4",
    TailwindCSS: "06B6D4",
    Bootstrap: "7952B3",
    "Node.js": "339933",
    Express: "000000",
    Python: "3776AB",
    Django: "092E20",
    Flask: "000000",
    PHP: "777BB4",
    Laravel: "FF2D20",
    Java: "ED8B00",
    Spring: "6DB33F",
    "C#": "239120",
    ".NET": "512BD4",
    MongoDB: "47A248",
    PostgreSQL: "336791",
    MySQL: "4479A1",
    Redis: "DC382D",
    Firebase: "FFCA28",
    Docker: "2496ED",
    AWS: "FF9900",
    Azure: "0078D4",
    "Google Cloud": "4285F4",
    Git: "F05032",
    GitHub: "181717",
    GitLab: "FCA326",
    Jenkins: "D24939",
    Kubernetes: "326CE5",
    "React Native": "61DAFB",
    Flutter: "02569B",
    Swift: "FA7343",
    Kotlin: "7F52FF",
    Android: "3DDC84",
    iOS: "000000",
    GraphQL: "E10098",
    "REST API": "25D366",
    Webpack: "8DD6F9",
    Vite: "646CFF",
    Electron: "47848F",
    NestJS: "E0234E",
  };

  const getIconForSkill = (skillId: string): ReactNode => {
    const icons: Record<string, ReactNode> = {
      "architecture-solution": <Rocket size={24} />,
      "technical-leadership": <Rocket size={24} />,
      "frontend-expertise": <Palette size={24} />,
      "backend-api": <Server size={24} />,
      default: <Code size={24} />,
    };
    return icons[skillId] || icons["default"];
  };

  return (
    <div className="w-full opacity-0 animate-fadeInUp animate-stagger-5">
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-[var(--text-primary)] group">
        <span className="font-mono text-lg opacity-80 text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110">
          {t.numbers["04"]}
        </span>
        <span className="lowercase">{t.sections_labels.skills}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {t.skills.map((skill, index) => (
          <article
            key={skill.id}
            className="group rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--color-accent)]/50 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg bg-[var(--color-accent-light)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white">
                {getIconForSkill(skill.id)}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {skill.title}
                </h3>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-5 text-[var(--text-secondary)]"
              dangerouslySetInnerHTML={{ __html: skill.description }}
            />

            <div className="flex flex-wrap gap-2">
              {skill.skills.map((tech, techIndex) => (
                <div
                  key={tech}
                  className="opacity-0 animate-scaleIn"
                  style={{
                    animationDelay: `${0.8 + index * 0.1 + techIndex * 0.03}s`,
                  }}
                >
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-1"
                    style={
                      techColors[tech]
                        ? {
                            borderColor: `#${techColors[tech]}`,
                            color: `#${techColors[tech]}`,
                          }
                        : undefined
                    }
                  >
                    {tech}
                  </Badge>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Skills;
