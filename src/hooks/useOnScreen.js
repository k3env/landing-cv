import { useRef, useState, useEffect } from 'react';

export function useOnScreen(options) {
  const ref = useRef(null);
  const [onScreen, setOnScreen] = useState(false);
  const callback = (entries) => {
    const [entry] = entries;
    setOnScreen(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return { ref, onScreen };
}
