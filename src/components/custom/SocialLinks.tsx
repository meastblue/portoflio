import { Github, Linkedin } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { Button } from "@/components/ui/button";

const BlueskyIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
  </svg>
);

const CompanyIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 236.42 237.8"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m186.06,161.06c-6.84-4.81-14.21-8.92-22.03-12.2-8.09-3.41-16.63-5.94-25.53-7.48h-.04c-5.9-1.01-11.95-1.6-18.1-1.71-.72-.02-1.44-.02-2.16-.02h-.31c-6.8.02-13.46.61-19.95,1.73h-.04c-8.15,1.42-16,3.65-23.47,6.64-8.57,3.41-16.63,7.8-24.07,13.03h0c-6.41-10.47-10.47-22.55-11.41-35.47v-.13c-.13-1.33-.18-2.65-.22-4-.53-.29-1.07-.61-1.59-.92-12.65-7.47-24.15-16.63-34.23-27.17-1.9,8.44-2.91,17.24-2.91,26.25,0,9.55,1.12,18.84,3.28,27.73,2.51,10.47,6.42,20.39,11.52,29.55,2.25,4.09,4.77,8.06,7.5,11.83,4.88,6.77,10.45,13,16.65,18.56,3.6,3.28,7.41,6.32,11.41,9.13,7.61,5.35,15.87,9.83,24.67,13.27,13.36,5.25,27.93,8.13,43.17,8.13s30.77-3.08,44.5-8.68c8.3-3.35,16.11-7.63,23.34-12.7,4.35-3.06,8.48-6.4,12.37-9.99,5.81-5.35,11.06-11.28,15.69-17.7,3-4.15,5.73-8.48,8.18-13.01v-.02c4.77-8.83,8.46-18.34,10.86-28.35,2.14-8.9,3.28-18.19,3.28-27.74,0-9.03-1.01-17.81-2.95-26.25-2.38-10.56-6.19-20.59-11.21-29.86-2.25-4.18-4.76-8.22-7.5-12.09-4.79-6.78-10.29-13.03-16.39-18.64-3.65-3.39-7.5-6.53-11.54-9.42-6.75,11.5-16.31,21.16-27.76,28.06-8.76,5.24-18.62,8.87-29.14,10.42-3.83.57-7.74.87-11.72.87-3.32,0-6.58-.2-9.79-.61-11.26-1.36-21.79-5.11-31.08-10.67-11.45-6.89-21-16.55-27.76-28.06-4.18-7.14-7.26-15-9.05-23.33-2.59,16-13.95,29.05-28.98,34.09,2.9,6.06,6.27,11.85,10.11,17.28,7.67,10.84,17.12,20.33,27.93,28.06,7.78,5.57,16.28,10.21,25.33,13.77,7.36,2.89,15.1,5.09,23.1,6.45,6.53,1.14,13.24,1.73,20.09,1.73h.11c.66,0,1.31,0,1.97-.02,6.21-.09,12.3-.68,18.23-1.71,8.74-1.49,17.16-3.96,25.13-7.28,8.28-3.43,16.09-7.78,23.3-12.92,6.91,11.78,10.86,25.49,10.88,40.15l-.02,1.84c-.33,14.51-4.55,28.04-11.63,39.62m-67.86,38.03c-6.54,0-12.9-.79-18.99-2.29-7.19-1.77-14.01-4.5-20.3-8.07,8.68-4.96,18.4-8.31,28.74-9.68,3.45-.46,6.97-.7,10.54-.7,4.26,0,8.42.33,12.5.98,9.62,1.51,18.65,4.76,26.8,9.4-5.81,3.3-12.09,5.9-18.69,7.65-6.58,1.77-13.48,2.71-20.61,2.71Z" />
  </svg>
);

interface SocialLinksProps {
  variant?: "desktop" | "mobile";
}

const SocialLinks = ({ variant = "desktop" }: SocialLinksProps) => {
  const { t } = useI18n();

  const getIcon = (iconName: string) => {
    const size = variant === "desktop" ? 20 : 16;
    switch (iconName) {
      case "github":
        return <Github size={size} />;
      case "linkedin":
        return <Linkedin size={size} />;
      case "bluesky":
        return <BlueskyIcon size={size} />;
      default:
        return null;
    }
  };

  const iconSize = variant === "desktop" ? 20 : 16;

  return (
    <div
      className={
        variant === "mobile" ? "flex justify-center gap-4" : "flex gap-4"
      }
    >
      {t.socials.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-all duration-300 hover:scale-110 ${
            variant === "mobile"
              ? "w-8 h-8 rounded-full flex items-center justify-center bg-[var(--bg-surface)] text-[var(--text-tertiary)] border border-[var(--border-color)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
              : "p-2 rounded-lg hover:bg-[var(--bg-surface)] text-[var(--text-tertiary)] hover:text-[var(--color-accent)]"
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {getIcon(social.icon)}
        </a>
      ))}

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-all duration-300 hover:scale-110 ${
          variant === "mobile"
            ? "w-8 h-8 rounded-full flex items-center justify-center bg-[var(--bg-surface)] text-[var(--text-tertiary)] border border-[var(--border-color)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
            : "p-2 rounded-lg hover:bg-[var(--bg-surface)] text-[var(--text-tertiary)] hover:text-[var(--color-accent)]"
        }`}
        aria-label="Ma société"
      >
        <CompanyIcon size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
