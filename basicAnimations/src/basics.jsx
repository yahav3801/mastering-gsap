import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Basics = () => {
  const container = useRef(null);

  useGSAP(() => {
    const boxes = gsap.utils.toArray('.box');
    
    // Create main timeline
    const mainTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" }
    });

    // 1. Basic Translations
    mainTl.from(boxes, {
      opacity: 0,
      y: 100,
      stagger: 0.2,
    });

    // Individual box animations to showcase different properties
    boxes.forEach((box, i) => {
      const boxTl = gsap.timeline({
        
        repeatDelay: 1,
        defaults: { duration: 1 }
      });

      // 2. Scaling and Rotation
      boxTl.to(box, {
        scale: 1.2,
        rotation: 360,
        ease: "back.inOut(2)"
      })
      
      // Different easing for each box to showcase easing functions
      .to(box, {
        y: -50,
        ease: i === 0 ? "bounce.out" : 
              i === 1 ? "elastic.out(1, 0.3)" : 
              "power4.inOut"
      })
      
      // 3. Opacity/fade with movement
      .to(box, {
        opacity: 0.5,
        x: 50,
        ease: "power1.inOut"
      })
      
      // Reset position
      .to(box, {
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power2.inOut"
      });

      // 4. Add timeline to main sequence
      mainTl.add(boxTl, ">-0.5");
    });

  }, { scope: container });

  return (
    <div className="min-h-screen bg-gray-900 p-8" ref={container}>
      <div className="flex flex-col gap-8">
        {/* Instructions */}
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">GSAP Basics Demo</h2>
          <p>Demonstrating: translations, scaling, rotation, opacity, and easing functions</p>
        </div>

        {/* Animation containers */}
        <div className="flex gap-12 mt-12 justify-center">
          {[1, 2, 3].map((num, i) => (
            <div 
              key={num}
              className={`box w-32 h-32 rounded-xl cursor-pointer flex items-center justify-center
                ${i === 0 ? 'bg-red-500' : 
                  i === 1 ? 'bg-blue-500' : 
                  'bg-green-500'}`}
            >
              <span className="font-bold text-2xl text-white">{num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Basics;