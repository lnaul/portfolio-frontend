import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from '../utils/SplitText'; // Import SplitText from utils

gsap.registerPlugin(SplitText);

function SplitTextAnimation() {
  useEffect(() => {
    var tl = gsap.timeline(),
        split = new SplitText("#quote", {type:"words,chars"}),
        words = split.words; //an array of all the divs that wrap each character

    tl.to(words, {
      duration: 7,
      "--weight": "300",
      ease: "power3.out",
      color: "hsl(+=110, +=80%, +=20%)",
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
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: 'transparent', color: '#eee' }}>
      <h2 id="quote" style={{
        fontFamily: "'Marvin Visions Variable'",
        fontSize: "4rem",
        fontWeight: "150",
        lineHeight: "1.1",
        margin: "0",
        textAlign: "left",
        // The color and font-variation-settings will be animated by GSAP
        // Initial color is set by GSAP's from/to, but we need a fallback for non-JS
        // Removed: color: "hsl(347, 7%, 29%)"
      }}>
        The ships hung in the sky<br/>much in the same way<br/>that bricks don't.
      </h2>
    </div>
  );
}

export default SplitTextAnimation;
