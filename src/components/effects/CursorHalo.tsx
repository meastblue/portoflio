import { useState, useEffect, useMemo } from "react";
import { useDarkMode } from "@/contexts/DarkModeContext";

const CursorHalo = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const checkDesktop =
      !("ontouchstart" in window) && window.innerWidth > 1024;
    setIsDesktop(checkDesktop);

    if (!checkDesktop) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const mainGradient = useMemo(() => {
    if (!isVisible) return "transparent";

    const { x, y } = mousePosition;
    return isDarkMode
      ? `radial-gradient(circle 350px at ${x}px ${y}px,
         rgba(255, 255, 255, 0.15) 0%,
         rgba(255, 255, 255, 0.08) 30%,
         rgba(255, 255, 255, 0.03) 60%,
         transparent 100%)`
      : `radial-gradient(circle 350px at ${x}px ${y}px,
         rgba(59, 130, 246, 0.12) 0%,
         rgba(59, 130, 246, 0.06) 30%,
         rgba(59, 130, 246, 0.02) 60%,
         transparent 100%)`;
  }, [isVisible, mousePosition, isDarkMode]);

  const secondaryGradient = useMemo(() => {
    if (!isVisible) return "transparent";

    const { x, y } = mousePosition;
    return isDarkMode
      ? `radial-gradient(circle 150px at ${x}px ${y}px,
         rgba(255, 255, 255, 0.1) 0%,
         rgba(255, 255, 255, 0.05) 40%,
         transparent 80%)`
      : `radial-gradient(circle 150px at ${x}px ${y}px,
         rgba(37, 99, 235, 0.1) 0%,
         rgba(37, 99, 235, 0.05) 40%,
         transparent 80%)`;
  }, [isVisible, mousePosition, isDarkMode]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[1] mix-blend-screen transition-all duration-150"
        style={{
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          background: mainGradient,
        }}
      />

      <div
        className="fixed pointer-events-none z-[0] mix-blend-soft-light transition-all duration-200"
        style={{
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          background: secondaryGradient,
        }}
      />
    </>
  );
};

export default CursorHalo;
