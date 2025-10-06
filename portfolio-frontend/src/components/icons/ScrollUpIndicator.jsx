import React, { useEffect, forwardRef } from 'react';
import { gsap } from 'gsap';

const ScrollUpIndicator = forwardRef((props, ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const elements = Array.from(ref.current.querySelectorAll('.scroll-text span, svg')).reverse();
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(elements, {
      y: '-=5px',
      stagger: 0.1,
      ease: 'power1.inOut',
      duration: 0.5
    });
  }, [ref]);

  return (
    <div className="scroll-indicator-content" ref={ref}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7L7 12H17L12 7Z" />
      </svg>
      <span className="scroll-text">
        <span>P</span>
        <span>R</span>
        <span>E</span>
        <span>V</span>
      </span>
    </div>
  );
});

export default ScrollUpIndicator;
