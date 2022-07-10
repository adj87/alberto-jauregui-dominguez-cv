import { useEffect, useState, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = false,
  threshold
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    let observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
      threshold: threshold ?? 1
    });

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
