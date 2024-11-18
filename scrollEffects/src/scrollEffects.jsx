import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ScrollEffects = () => {
  const container = useRef(null);

  useGSAP(() => {
    // 1. Basic Fade Up
    gsap.from(".fade-up", {
      scrollTrigger: {
        trigger: ".fade-up",
        start: "top center",
        markers: true,
      },
      y: 100,
      opacity: 0,
      duration: 1
    });

    // 2. Continuous Rotation with Scrub
    gsap.to(".rotate-scroll", {
      scrollTrigger: {
        trigger: ".rotate-scroll",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: true,
      },
      rotation: 360,
      scale: 1.5
    });

    // 3. Staggered Cards
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".cards-container",
        start: "top center",
        markers: true,
      },
      y: 200,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });

    // 4. Text Reveal with Scrub
    gsap.to(".text-reveal", {
      scrollTrigger: {
        trigger: ".text-reveal",
        start: "top center",
        end: "center center",
        scrub: true,
        markers: true,
      },
      clipPath: "inset(0 0% 0 0)",
      ease: "none"
    });

    // 5. Parallax Effect
    gsap.to(".parallax", {
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      y: -100,
      ease: "none"
    });

    // 6. Pin Element with Animation
    ScrollTrigger.create({
      trigger: ".pin-section",
      start: "top center",
      end: "+=300",
      pin: true,
      markers: true,
    });

    // 7. Scale and Fade Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-section",
        start: "top center",
        end: "+=400",
        scrub: 1,
        markers: true,
      }
    });

    tl.from(".timeline-box", {
      scale: 0.3,
      opacity: 0,
      rotation: -45,
      stagger: 0.2
    })
    .to(".timeline-box", {
      y: -50,
      stagger: 0.1
    });

  }, { scope: container });

  return (
    <div ref={container} className="min-h-[400vh] bg-gray-900 text-white p-8">
      {/* Initial Spacer */}
      <div className="h-[50vh]" />

      {/* 1. Basic Fade Up */}
      <section className="mb-[40vh]">
        <h2 className="text-2xl mb-4">Fade Up Effect</h2>
        <div className="fade-up bg-blue-500 p-8 rounded-lg w-64">
          I fade up when scrolled into view
        </div>
      </section>

      {/* 2. Rotate on Scroll */}
      <section className="mb-[40vh]">
        <h2 className="text-2xl mb-4">Rotate with Scroll</h2>
        <div className="rotate-scroll bg-green-500 p-8 rounded-lg w-64">
          I rotate as you scroll
        </div>
      </section>

      {/* 3. Staggered Cards */}
      <section className="cards-container mb-[40vh]">
        <h2 className="text-2xl mb-4">Staggered Cards</h2>
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="card bg-purple-500 p-8 rounded-lg w-64">
              Card {i}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Text Reveal */}
      <section className="mb-[40vh]">
        <h2 className="text-2xl mb-4">Text Reveal</h2>
        <div className="overflow-hidden">
          <div 
            className="text-reveal bg-red-500 p-8 rounded-lg w-64"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            Reveal as you scroll
          </div>
        </div>
      </section>

      {/* 5. Parallax */}
      <section className="parallax-container mb-[40vh] h-[50vh] relative overflow-hidden">
        <h2 className="text-2xl mb-4">Parallax Effect</h2>
        <div className="parallax bg-yellow-500 p-8 rounded-lg w-64 absolute">
          I move at a different speed
        </div>
      </section>

      {/* 6. Pinned Section */}
      <section className="pin-section mb-[40vh] bg-pink-500 p-8 rounded-lg">
        <h2 className="text-2xl">Pinned Section</h2>
        <p>I stay pinned while you scroll</p>
      </section>

      {/* 7. Timeline Section */}
      <section className="timeline-section mb-[40vh]">
        <h2 className="text-2xl mb-4">Timeline Animation</h2>
        <div className="flex gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="timeline-box bg-indigo-500 p-8 rounded-lg w-64">
              Timeline Box {i}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ScrollEffects;