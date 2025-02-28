import { useState, useEffect, useRef } from "react";

const useLazyLoad = (externalRef = null) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = externalRef ?? useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef]);

  return { isVisible, elementRef };
};

export default useLazyLoad;
