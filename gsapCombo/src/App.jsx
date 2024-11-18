import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const FullPage = () => {
  const main = useRef(null);
  const heroBtn = useRef(null);
  const heroBtnBg = useRef(null);

  useGSAP(() => {
    const splitChar = new SplitType(".charSplit",{types:"chars"})
    const splitWord = new SplitType(".wordSplit",{types:"words"})
    const splitLine = new SplitType(".lineSplit",{types:"lines"})
    const splitAll = new SplitType(".allSplit",{types:"chars,lines,words"})

    const mainTl = gsap.timeline()

    mainTl.from(splitWord.words,{
      x: index => index % 2 === 0 ? -500 : 1200,
      opacity:0,
      duration:1,
      ease:"sine.out"
    })
    .from(splitLine.lines,{
      opacity:0,
      stagger:0.2,
      y:20
    })

    // Button hover effects
    heroBtn.current.addEventListener('mouseenter', () => {
      gsap.to(heroBtnBg.current, {
        scaleX: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    });

    heroBtn.current.addEventListener('mouseleave', () => {
      gsap.to(heroBtnBg.current, {
        scaleX: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    });

  }, { scope: main });

  return (
    <main ref={main} className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative p-8">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background elements for parallax */}
          <div className="hero-bg absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h1 className="wordSplit hero-title text-7xl font-bold mb-6">
            Creative
            <br />
            Portfolio
          </h1>
          <p className="lineSplit hero-text text-xl max-w-lg mb-8">
            Showcase of animations and interactive elements using GSAP and modern web technologies.
          </p>
          <button 
            ref={heroBtn} 
            className="hero-cta px-8 py-4 bg-purple-600 rounded-full text-lg relative overflow-hidden"
          >
            <div 
              ref={heroBtnBg}
              className="absolute inset-0 bg-purple-800 -z-10"
              style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
            ></div>
            <span className="relative z-10">Explore Work</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center py-20 bg-neutral-900">
        <div className="container mx-auto px-8">
          <h2 className="section-title text-5xl font-bold mb-16">About</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="about-text space-y-6">
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore.
              </p>
              <p className="text-xl">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="about-stats grid grid-cols-2 gap-8">
              <div className="stat-item">
                <span className="text-5xl font-bold text-purple-500">10+</span>
                <p className="text-lg">Years Experience</p>
              </div>
              <div className="stat-item">
                <span className="text-5xl font-bold text-purple-500">50+</span>
                <p className="text-lg">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-8">
          <h2 className="section-title text-5xl font-bold mb-16">Projects</h2>
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="project-card bg-neutral-900 rounded-lg overflow-hidden"
              >
                <div className="aspect-video bg-purple-900"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Project {item}</h3>
                  <p className="text-neutral-400">
                    Description of project {item}. Click to view more details.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex items-center py-20 bg-neutral-900">
        <div className="container mx-auto px-8">
          <h2 className="section-title text-5xl font-bold mb-16">Services</h2>
          <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="service-card p-8 bg-black rounded-lg"
              >
                <div className="text-4xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Service {item}</h3>
                <p className="text-neutral-400">
                  Description of service {item}. This is what we can do for you.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center py-20 bg-black">
        <div className="container mx-auto px-8">
          <h2 className="section-title text-5xl font-bold mb-16">Contact</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="contact-info space-y-8">
              <h3 className="text-3xl font-bold">Get in Touch</h3>
              <p className="text-xl text-neutral-400">
                Ready to start your project? Send us a message!
              </p>
              <div className="space-y-4">
                <p>📧 email@example.com</p>
                <p>📱 (123) 456-7890</p>
                <p>📍 New York, NY</p>
              </div>
            </div>
            <form className="contact-form space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Name"
                  className="w-full p-4 bg-neutral-900 rounded-lg"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-4 bg-neutral-900 rounded-lg"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message"
                  rows={4}
                  className="w-full p-4 bg-neutral-900 rounded-lg"
                ></textarea>
              </div>
              <button className="px-8 py-4 bg-purple-600 rounded-full text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FullPage;