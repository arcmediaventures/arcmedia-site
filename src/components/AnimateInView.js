import React, { useState, useRef, useEffect } from "react";

export default function AnimateInView({ children, className, animation, ...props }) {
  const [inView, setInView] = useState(false);
  const component = useRef();

  const onScroll = (e) => {
    const offsetTop = component.current.getBoundingClientRect().top;
    const innerHeight = window.innerHeight;
    const isInView = offsetTop <= innerHeight;
    setInView(isInView);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const finalClassName = `${className || ""} animate__animated animate__${inView ? animation : ""}`;

  return (
    <div className={finalClassName} ref={component} {...props}>
      {children}
    </div>
  );
}
