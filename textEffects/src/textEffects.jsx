import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

const TextEffects = () => {
  const container = useRef(null);
  useGSAP(()=>{
    const splitChar = new SplitType('.char-split',{types:'chars'})
    const splitWord = new SplitType('.word-split',{types:'words'})
    const splitLine = new SplitType('.line-split',{types:'lines'})
    const splitMulti = new SplitType('.multi-split',{types:'chars, words, lines'})
    
    gsap.from(splitChar.chars, {
      opacity: 0,
      scale: 0,
      // rotation: () => Math.random() * 360, 
      // y: () => gsap.utils.random(-100, 100),
      stagger: {
        amount: 1,
        from: "random" 
      },
      ease: "elastic.out(1, 0.3)"
    });
    
    
    gsap.from(splitWord.words, {
      filter: "blur(12px)",
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1
    });

    gsap.from(splitLine.lines, {
      clipPath: "inset(100% 100% 0 0)",
      stagger: 0.5,
      ease: "power4.inOut",
      duration: 2
    });

    const tl = gsap.timeline()

    tl.from(splitMulti.chars, {
      opacity: 0,
      duration: 0.5,
    })
    .to(splitMulti.words, {
      scale: 1.2,
      duration: 0.3,
      stagger: 0.1,
      yoyo: true,
      repeat: 1
    })
    .from(splitMulti.lines, {
      x: 100,
      opacity: 0,
      stagger: 0.2
    });
    
  },{scope:container})
  return (
    <div ref={container} className="min-h-screen bg-gray-900 p-8 text-white space-y-16">
      {/* Character Split Practice */}
      <section>
        <h3 className="text-sm text-blue-400 mb-4">Character Split Practice</h3>
        <p className="char-split text-4xl font-bold">
          Split By Characters
        </p>
      </section>

      {/* Word Split Practice */}
      <section>
        <h3 className="text-sm text-blue-400 mb-4">Word Split Practice</h3>
        <p className="word-split text-4xl font-bold">
          Each Word Is Split Separately
        </p>
      </section>

      {/* Line Split Practice */}
      <section>
        <h3 className="text-sm text-blue-400 mb-4">Line Split Practice</h3>
        <p className="line-split text-4xl font-bold" style={{ maxWidth: '400px' }}>
          This text is split by lines. It will break based on container width and line breaks.
          Each line can be animated separately.
        </p>
      </section>

      {/* Multiple Split Types Practice */}
      <section>
        <h3 className="text-sm text-blue-400 mb-4">Multiple Split Types Practice</h3>
        <p className="multi-split text-4xl font-bold" style={{ maxWidth: '500px' }}>
          This text is split by lines, words, and characters all at once!
        </p>
      </section>

      {/* Extra Practice Section */}
      <section>
        <h3 className="text-sm text-blue-400 mb-4">Extra Practice Section</h3>
        <p className="extra-practice text-4xl font-bold">
          Here's some extra text to practice different animations
        </p>
      </section>

      {/* Long Text Practice */}
      <section>
        <h3 className="text-sm text-blue-400 mb-4">Long Text Practice</h3>
        <p className="long-text text-4xl font-bold" style={{ maxWidth: '600px' }}>
          Here's a longer piece of text that you can use to practice more complex 
          animations and different timing effects with multiple lines of content.
        </p>
      </section>
    </div>
  );
};

export default TextEffects;