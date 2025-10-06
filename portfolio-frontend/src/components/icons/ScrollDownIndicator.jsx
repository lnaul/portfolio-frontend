import React, { useEffect, forwardRef } from 'react';
import { gsap } from 'gsap';

const ScrollDownIndicator = forwardRef((props, ref) => {
  useEffect(() => {
    if (!ref.current) return;
    const elements = Array.from(ref.current.querySelectorAll('.scroll-text span, svg')).reverse();
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(elements, {
      y: '+=5px',
      stagger: 0.1,
      ease: 'power1.inOut',
      duration: 0.5
    });
  }, [ref]);

  return (
    <div className="scroll-indicator-content" ref={ref}>
      <span className="scroll-text">
        <span>N</span>
        <span>E</span>
        <span>X</span>
        <span>T</span>
      </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17L17 12H7L12 17Z" />
      </svg>
    </div>
  );
});

export default ScrollDownIndicator;
