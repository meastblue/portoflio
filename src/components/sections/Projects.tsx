import { ExternalLink } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
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

  return (
    <section
      className="w-full opacity-0 animate-fadeInUp animate-stagger-4"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-2xl font-semibold mb-8 flex items-center gap-3 text-[var(--text-primary)] group"
      >
        <span
          className="font-mono text-lg opacity-80 text-[var(--color-accent)] transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {t.numbers["03"]}
        </span>
        <span className="lowercase">{t.sections_labels.work}</span>
      </h2>

      <div className="space-y-5" role="list">
        {t.projects.map((project, index) => (
          <article
            key={project.title}
            className="group rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--color-accent)]/50 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${0.5 + index * 0.15}s` }}
            aria-labelledby={`project-title-${index}`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-48 lg:h-auto relative overflow-hidden bg-[var(--bg-primary)]">
                <img
                  src={project.image || "/api/placeholder/400/250"}
                  alt={`${t.accessibility.project_screenshot.replace(
                    "{{project}}",
                    project.title
                  )}`}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={250}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-gray-900 text-sm font-medium hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                      aria-label={`${t.ui.view_project}: ${project.title} (${t.accessibility.opens_new_tab})`}
                    >
                      <span>{t.ui.view_project}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-1 p-6">
                <div className="mb-4">
                  <h3
                    id={`project-title-${index}`}
                    className="text-lg font-semibold mb-2 flex items-center gap-2 text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]"
                  >
                    {project.title}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 hover:text-[var(--color-accent)] transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded"
                        aria-label={`${t.ui.view_project}: ${project.title} (${t.accessibility.opens_new_tab})`}
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                </div>

                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={t.accessibility.technologies_used}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <li
                      key={tech}
                      className="opacity-0 animate-scaleIn"
                      style={{
                        animationDelay: `${0.7 + index * 0.15 + techIndex * 0.05}s`,
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
