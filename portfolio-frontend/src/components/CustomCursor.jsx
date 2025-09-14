import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

const NUM_CIRCLES = 3;
const EASING = 0.3;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRefs = useRef([]);
  
  const isClickedRef = useRef(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const circlePositions = useRef(Array(NUM_CIRCLES).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dotRef.current.style.left = `${mousePos.current.x}px`;
      dotRef.current.style.top = `${mousePos.current.y}px`;
    };

    const animateCircles = () => {
      const time = performance.now() / 400; // Adjust divisor for speed
      let leaderPos = mousePos.current;

      circlePositions.current.forEach((pos, i) => {
        let { x, y } = pos;
        const dx = leaderPos.x - x;
        const dy = leaderPos.y - y;
        x += dx * EASING;
        y += dy * EASING;

        circlePositions.current[i] = { x, y };
        const currentCircle = circleRefs.current[i];

        if (currentCircle) {
          currentCircle.style.left = `${x}px`;
          currentCircle.style.top = `${y}px`;

          const baseScale = 0.4 + i * 0.2;
          const pulse = Math.sin(time - i * 0.4) * 0.1; // Wave effect
          let targetScale = baseScale + pulse;

          // Click effect for all circles
          if (isClickedRef.current) {
            targetScale = baseScale * 0.5; // Expand each circle
          }
          
          const baseBorderWidth = isClickedRef.current ? 4 : 2;

          currentCircle.style.transform = `translate(-50%, -50%) scale(${targetScale})`;
          currentCircle.style.opacity = 0.5;
          currentCircle.style.borderWidth = `${baseBorderWidth / baseScale}px`;
        }

        leaderPos = { x, y };
      });

      requestAnimationFrame(animateCircles);
    };

    const onMouseDown = () => { isClickedRef.current = true; };
    const onMouseUp = () => { isClickedRef.current = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    const animationFrameId = requestAnimationFrame(animateCircles);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cursor-container">
      <div ref={dotRef} className="cursor-dot" />
      {Array.from({ length: NUM_CIRCLES }).map((_, i) => (
        <div
          key={i}
          ref={el => circleRefs.current[i] = el}
          className="cursor-circle"
        />
      ))}
    </div>
  );
};

export default CustomCursor;