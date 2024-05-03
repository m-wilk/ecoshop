import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";





const ScrollReveal = ({ children, origin = "bottom"}) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        distance: '150%',
        origin: origin,
        delay: 400,
        duration: 500,
        reset: true
      });
  }, []);

  return (
    <section
      ref={sectionRef}

      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
