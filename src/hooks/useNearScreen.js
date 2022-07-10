import { useEffect, useState, useRef } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      console.log(el);
      if (el.isIntersecting) {
        console.log("entra if");
        setShow(true);
      } else {
        console.log("entra else");
        setShow(false);
      }
    };

    let observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
      threshold: 1
    });

    if (element) {
      console.log("eyyyyy");
      observer.observe(element);
    }

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
