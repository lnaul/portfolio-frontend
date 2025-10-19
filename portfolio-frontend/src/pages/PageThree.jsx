import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import ScrollDownIndicator from '../components/icons/ScrollDownIndicator';
import ScrollUpIndicator from '../components/icons/ScrollUpIndicator';
import eventBus from '../utils/eventBus';
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
        bodyTexts = gsap.utils.toArray(component.querySelectorAll(".web-development-text")),
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
          const firstSlideTexts = splitBodyTexts.slice(0, 2);
          tl.fromTo(firstSlideTexts.flatMap(st => st.chars), { // Animate chars
              autoAlpha: 0,
              yPercent: 100 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.5,
              ease: "power2",
              stagger: { each: 0.002, from: "random" },
          }, 0.1);
        } else if (index === 1) {
          const secondSlideTexts = splitBodyTexts.slice(2, 4);
          tl.fromTo(secondSlideTexts.flatMap(st => st.chars), { // Animate chars
              autoAlpha: 0,
              yPercent: 100 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.5,
              ease: "power2",
              stagger: { each: 0.002, from: "random" },
          }, 0.1);
        } else if (index === 2) {
          const thirdSlideTexts = splitBodyTexts.slice(4, 6);
          tl.fromTo(thirdSlideTexts.flatMap(st => st.chars), { // Animate chars
              autoAlpha: 0,
              yPercent: 100 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.5,
              ease: "power2",
              stagger: { each: 0.002, from: "random" },
          }, 0.1);
        } else if (index === 3) {
          const fourthSlideTexts = splitBodyTexts.slice(6, 8);
          tl.fromTo(fourthSlideTexts.flatMap(st => st.chars), { // Animate chars
              autoAlpha: 0,
              yPercent: 100 * dFactor
          }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 0.5,
              ease: "power2",
              stagger: { each: 0.002, from: "random" },
          }, 0.1);
        }

        currentIndex = index;
        eventBus.dispatch('slideChanged', currentIndex);
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

      const handleNavigate = (index) => {
        if (!animating) {
          const direction = index > currentIndex ? 1 : -1;
          gotoSection(index, direction);
        }
      };

      eventBus.on('navigateTo', handleNavigate);

      gotoSection(0, 1);
      gsap.set(".columns-container", { visibility: "visible" });
      gsap.set(".section-three-container .first .section-heading, .section-three-container .first .web-development-text", { visibility: "visible" });

      if (window.matchMedia("(max-width: 1080px)").matches) {
        gsap.set(".scroll-up-indicator", { right: 20 });
        gsap.set(".scroll-down-indicator", { right: 20 });
      }

      // --- End of Main Page Scroll Logic ---

      // --- Button Animation Logic ---
      const buttons = component.querySelectorAll('.js-button');
      const buttonInstances = Array.from(buttons).map(el => new HoverBtn(el));

      const startJourneyBtn = buttons[0];
      const handleStartJourney = (e) => {
        e.preventDefault();
        if (!animating) {
          gotoSection(1, 1);
        }
      };
      if (startJourneyBtn) {
        startJourneyBtn.addEventListener('click', handleStartJourney);
      }



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
        if (startJourneyBtn) {
          startJourneyBtn.removeEventListener('click', handleStartJourney);
        }

        scrollDownBtn.removeEventListener('click', handleScrollDown);
        scrollUpBtn.removeEventListener('click', handleScrollUp);
        eventBus.remove('navigateTo', handleNavigate);
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
                  <p className="web-development-text">Hello, World! I'm Dmitry, also known as <span style={{color: '#c66a00'}}>Dee, UX/UI Developer.</span> My story starts with a nickname I got while living in Thailand. <span style={{color: '#c66a00'}}>'Dee' Means 'Good' in Thai.</span> It's my daily reminder, my work must never be just good but beyond. My objective is to craft seamless digital experiences for <span style={{color: '#c66a00'}}>Web, Mobile Apps, & Games.</span></p>
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
         <section class="second">
          <div class="outer">
            <div class="inner">
              <div class="bg one">
                <div class="columns-container">
                  <div class="column-left">
                  <h2 class="section-heading web-development-heading"><span style={{color: '#c66a00'}}>Crafted</span> Web Solutions</h2>
                  <p class="web-development-text">I ensure efficient project delivery by leveraging leading content management platform <span style={{color: '#c66a00'}}>WordPress with Elementor.</span> This allows rapid development. However, every digital experience I create is underpinned by a custom approach, using <span style={{color: '#c66a00'}}>HTML, CSS, and JavaScript</span> to guarantee responsiveness and a unique brand identity.</p>
                  <p class="web-development-text">I believe in the power of combining established tools with custom code to deliver functional, <span style={{color: '#c66a00'}}>User-Centric Results</span> that are both beautiful and performant. You can see how I merge <span style={{color: '#c66a00'}}>Efficiency with Creativity</span> to build websites that stand out.</p>
                  </div>
                  <div class="column-right">
                    <div class="gif-placeholder">
                      <img src="/gifs/gif-26.webp" alt="gif-26" class="gif-element" />
                    </div>
                    <a href="https://dhartidesign.com/" target="_blank" rel="noopener noreferrer" class="button js-button">
                      <span class="button__inner">
                        <span class="button__text js-button__text">View Live Project</span>
                        <span class="button__hover js-button__hover">View Live Project</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="new-columns-container">
                  <div class="new-column-1"></div>
                  <div class="new-column-2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="third">
          <div className="outer">
            <div className="inner">
              <div className="bg one">
                <div className="columns-container">
                  <div className="column-left">
                  <h2 className="section-heading web-development-heading"><span style={{color: '#c66a00'}}>Crafted</span> Web Solutions</h2>
                  <p className="web-development-text">I ensure efficient project delivery by leveraging leading content management platform <span style={{color: '#c66a00'}}>WordPress with Elementor.</span> This allows rapid development. However, every digital experience I create is underpinned by a custom approach, using <span style={{color: '#c66a00'}}>HTML, CSS, and JavaScript</span> to guarantee responsiveness and a unique brand identity.</p>
                  <p className="web-development-text">I believe in the power of combining established tools with custom code to deliver functional, <span style={{color: '#c66a00'}}>User-Centric Results</span> that are both beautiful and performant. You can see how I merge <span style={{color: '#c66a00'}}>Efficiency with Creativity</span> to build websites that stand out.</p>
                  </div>
                  <div className="column-right">
                    <div className="gif-placeholder">
                      <img src="/gifs/gif-28.webp" alt="gif-28" className="gif-element" />
                    </div>
                    <a href="https://dhartidesign.com/" target="_blank" rel="noopener noreferrer" className="button js-button">
                      <span className="button__inner">
                        <span className="button__text js-button__text">View Live Project</span>
                        <span className="button__hover js-button__hover">View Live Project</span>
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
        <section className="fourth">
          <div className="outer">
            <div className="inner">
              <div className="bg one">
                <div className="columns-container">
                  <div className="column-left">
                  <h2 className="section-heading web-development-heading"><span style={{color: '#c66a00'}}>Crafted</span> Web Solutions</h2>
                  <p className="web-development-text">I ensure efficient project delivery by leveraging leading content management platform <span style={{color: '#c66a00'}}>WordPress with Elementor.</span> This allows rapid development. However, every digital experience I create is underpinned by a custom approach, using <span style={{color: '#c66a00'}}>HTML, CSS, and JavaScript</span> to guarantee responsiveness and a unique brand identity.</p>
                  <p className="web-development-text">I believe in the power of combining established tools with custom code to deliver functional, <span style={{color: '#c66a00'}}>User-Centric Results</span> that are both beautiful and performant. You can see how I merge <span style={{color: '#c66a00'}}>Efficiency with Creativity</span> to build websites that stand out.</p>
                  </div>
                  <div className="column-right">
                    <div className="gif-placeholder">
                      <img src="/gifs/gif-16.webp" alt="gif-16" className="gif-element" />
                    </div>
                    <a href="https://dhartidesign.com/" target="_blank" rel="noopener noreferrer" className="button js-button">
                      <span className="button__inner">
                        <span className="button__text js-button__text">View Live Project</span>
                        <span className="button__hover js-button__hover">View Live Project</span>
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
