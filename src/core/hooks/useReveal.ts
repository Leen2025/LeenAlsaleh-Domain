import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = elementRef.current;
    if (!current || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, [isVisible]);

  return { elementRef, isVisible };
}
