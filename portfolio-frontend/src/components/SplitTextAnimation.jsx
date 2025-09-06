import React, { useEffect } from 'react';
import { gsap } from 'gsap'; // Changed import path back to just 'gsap'
import { SplitText } from '../utils/SplitText'; // Import SplitText from utils

gsap.registerPlugin(SplitText);

function SplitTextAnimation() {
  useEffect(() => {
    var tl = gsap.timeline(),
        split = new SplitText("#quote", {type:"words,chars"}),
        words = split.words; //an array of all the divs that wrap each character

    tl.to(words, {
      duration: 7,
      "--weight": "400", // Changed to 800
      ease: "power3.out",
      color: "var(--color-accent)", // Changed to use CSS variable
      stagger: {
        each: 0.1,
      }
    });

    // Cleanup function for SplitText when component unmounts
    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="split-text-animation-wrapper" style={{ padding: '0px', textAlign: 'center', backgroundColor: 'transparent', color: 'var(--color-primary-light)' }}> {/* Updated color */}
      <h2 id="quote" style={{
        // Removed fontFamily inline style
        // Removed fontSize
        fontWeight: "400", // Changed to 800
        lineHeight: "1.2",
        margin: "0",
        textAlign: "left",
        letterSpacing: "0rem",
        // The color and font-variation-settings will be animated by GSAP
        // Initial color is set by GSAP's from/to, but we need a fallback for non-JS
        // Removed: color: "hsl(347, 7%, 29%)"
      }}>
        Crafting Digital Experiences Through Design & Development
      </h2>
    </div>
  );
}

export default SplitTextAnimation;