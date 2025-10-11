import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import ScrollDownIndicator from '../components/icons/ScrollDownIndicator';
import ScrollUpIndicator from '../components/icons/ScrollUpIndicator';
import './PageThree.css';

// Per your request, this is a fresh implementation based on the original code provided.
// It has been adapted to work within a React component and with the modern GSAP v3 library.

class HoverBtn {
  constructor(el) {
    this.btn = el;
    this.txt = this.btn.querySelector(".js-button__text");
    this.hoverTxt = this.btn.querySelector(".js-button__hover");
    
    // Bind methods for event listeners
    this.mouseIn = this.mouseIn.bind(this);
    this.mouseOut = this.mouseOut.bind(this);

    // Split the text into characters
    this.split1 = new SplitText(this.txt, { type: "chars, words" });
    this.split2 = new SplitText(this.hoverTxt, { type: "chars, words" });

    // Set initial random position for hover text, mimicking original
    gsap.set(this.split2.chars, { y: () => 200 * Math.random() });

    this.addListeners();
  }

  mouseIn() {
    // Animate out the main text to a random y position (no stagger, per original's for loop)
    gsap.to(this.split1.chars, {
      duration: 0.5,
      y: () => -200 * Math.random(),
      ease: 'power2.in'
    });
    // Animate in the hover text (with stagger, per original)
    gsap.to(this.split2.chars, {
      duration: 0.5,
      y: 0,
      stagger: 0.01,
      ease: 'power2.out'
    });
  }

  mouseOut() {
    // Animate in the main text (with stagger, per original)
    gsap.to(this.split1.chars, {
      duration: 0.5,
      y: 0,
      stagger: 0.01,
      ease: 'power2.out'
    });
    // Animate out the hover text to a random y position (no stagger, per original's for loop)
    gsap.to(this.split2.chars, {
      duration: 0.5,
      y: () => 200 * Math.random(),
      ease: 'power2.in'
    });
  }

  addListeners() {
    this.btn.addEventListener("mouseenter", this.mouseIn);
    this.btn.addEventListener("mouseleave", this.mouseOut);
  }

  // Method to clean up listeners and animations
  destroy() {
    this.btn.removeEventListener("mouseenter", this.mouseIn);
    this.btn.removeEventListener("mouseleave", this.mouseOut);
    this.split1.revert();
    this.split2.revert();
    gsap.killTweensOf(this.split1.chars);
    gsap.killTweensOf(this.split2.chars);
  }
}

const PageThree = () => {
  const componentRef = useRef(null);
  const scrollDownRef = useRef(null);
  const scrollUpRef = useRef(null);

  useEffect(() => {
    const component = componentRef.current;
    gsap.registerPlugin(Observer, SplitText);

    const initAnimation = () => {
      // --- Main Page Scroll Logic --- 
      let sections = component.querySelectorAll("section"),
        images = component.querySelectorAll(".bg"),
        headings = gsap.utils.toArray(component.querySelectorAll(".section-heading")),
        bodyTexts = gsap.utils.toArray(component.querySelectorAll(".first .web-development-text")),
        outerWrappers = gsap.utils.toArray(component.querySelectorAll(".outer")),
        innerWrappers = gsap.utils.toArray(component.querySelectorAll(".inner")),
        splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })),
        splitBodyTexts = bodyTexts.map(text => new SplitText(text, { type: "chars,lines" })),
        currentIndex = -1,
        wrap = gsap.utils.wrap(0, sections.length),
        animating;

      gsap.set(outerWrappers, { yPercent: 100 });
      gsap.set(innerWrappers, { yPercent: -100 });

      function gotoSection(index, direction) {
        index = wrap(index);
        animating = true;
        let fromTop = direction === -1,
            dFactor = fromTop ? -1 : 1,
            tl = gsap.timeline({
              defaults: { duration: 1.25, ease: "power1.inOut" },
              onComplete: () => animating = false
            });
        if (currentIndex >= 0) {
          gsap.set(sections[currentIndex], { zIndex: 0 });
          tl.to(images[currentIndex], { yPercent: -15 * dFactor })
            .set(sections[currentIndex], { autoAlpha: 0 });
        }
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
          }, { 
            yPercent: 0 
          }, 0)
          .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
          .fromTo(splitHeadings[index].chars, { 
              autoAlpha: 0, 
              yPercent: 150 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: { each: 0.02, from: "random" }
            }, 0.2);

        if (index === 0) {
          tl.fromTo(splitBodyTexts.flatMap(st => st.chars), { // Animate chars
              autoAlpha: 0,
              yPercent: 100 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.5,
              ease: "power2",
              stagger: { each: 0.002, from: "random" },
          }, 0.1); // Start this animation slightly after the heading animation
        }

        currentIndex = index;
      }

      const observer = Observer.create({
        target: component,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 10,
        preventDefault: true
      });

      gotoSection(0, 1);
      gsap.set(".columns-container", { visibility: "visible" });
      gsap.set(".section-three-container .first .section-heading, .section-three-container .first .web-development-text", { visibility: "visible" });

      // --- End of Main Page Scroll Logic ---

      // --- Button Animation Logic ---
      const buttons = component.querySelectorAll('.js-button');
      const buttonInstances = Array.from(buttons).map(el => new HoverBtn(el));

      const scrollDownBtn = document.getElementById('scroll-down-btn');
      const scrollUpBtn = document.getElementById('scroll-up-btn');

      const handleScrollDown = () => !animating && gotoSection(currentIndex + 1, 1);
      const handleScrollUp = () => !animating && gotoSection(currentIndex - 1, -1);

      scrollDownBtn.addEventListener('click', handleScrollDown);
      scrollUpBtn.addEventListener('click', handleScrollUp);

      // Cleanup function to run when the component unmounts
      return () => {
        observer.kill();
        splitHeadings.forEach(s => s.revert());
        splitBodyTexts.forEach(s => s.revert());
        buttonInstances.forEach(instance => instance.destroy());
        scrollDownBtn.removeEventListener('click', handleScrollDown);
        scrollUpBtn.removeEventListener('click', handleScrollUp);
      };
    };

    WebFont.load({
      google: {
        families: ['Outfit:400,600,700']
      },
      active: initAnimation
    });

  }, []);

  return (
    <>
      
      
      <div ref={componentRef} className="section-three-container">
        <section className="first">
          <div className="outer">
            <div className="inner">
              <div className="bg one">
                <div className="columns-container">
                  <div className="column-left">
                  <h2 className="section-heading web-development-heading"><span style={{color: '#c66a00'}}>Dee-Lighted</span> to Meet You</h2>
                  <p className="web-development-text">Hello, World! I'm Dmitry, also known as Dee, <span style={{color: '#c66a00'}}>UX/UI Developer.</span> My story starts with a nickname I got while living in Thailand. <span style={{color: '#c66a00'}}>'Dee' Means 'Good' in Thai.</span> It's my daily reminder, my work must never be just good but beyond. My objective is to craft seamless digital experiences for <span style={{color: '#c66a00'}}>Web, Mobile Apps, & Games.</span></p>
                  <p className="web-development-text">The portfolio you are navigating is a fully custom solution, architected with <span style={{color: '#c66a00'}}>Node.js & React,</span> which clearly demonstrates my expertise in bringing a design vision to life with integrated <span style={{color: '#c66a00'}}>High-Quality,</span> functional code. Take a moment to click around and experience the <span style={{color: '#c66a00'}}>Live Examples of My Work.</span></p>
                  </div>
                  <div className="column-right">
                    <div className="gif-placeholder">
                      <img src="/gifs/gif-21.webp" alt="gif-21" className="gif-element" />
                    </div>
                    <a href="#" className="button js-button">
                      <span className="button__inner">
                        <span className="button__text js-button__text">Start the Journey</span>
                        <span className="button__hover js-button__hover">Start the Journey</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="new-columns-container">
                  <div className="new-column-1"></div>
                  <div className="new-column-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ... other sections ... */}
         <section className="second">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Animated with GSAP</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="third">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">GreenSock</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="fourth">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Animation platform</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="fifth">
          <div className="outer">
            <div className="inner">
              <div className="bg">
                <h2 className="section-heading">Keep scrolling</h2>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="scroll-down-btn" className="scroll-indicator scroll-down-indicator">
        <ScrollDownIndicator ref={scrollDownRef} />
      </div>
      <div id="scroll-up-btn" className="scroll-indicator scroll-up-indicator">
        <ScrollUpIndicator ref={scrollUpRef} />
      </div>
    </>
  );
};

export default PageThree;
