import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger);

const FullPage = () => {
  const main = useRef(null);

  useGSAP(
    () => {
      gsap.context(() => {
        const splitChar = new SplitType(".charSplit", { types: "chars" });
        const splitWord = new SplitType(".wordSplit", { types: "words" });
        const splitLine = new SplitType(".lineSplit", { types: "lines" });
        const splitLine2 = new SplitType(".about-text", { types: "lines" });
        const splitAll = new SplitType(".allSplit", {
          types: "chars,lines,words",
        });

        const mainTl = gsap.timeline();

        mainTl
          .from(splitWord.words, {
            x: (index) => (index % 2 === 0 ? -500 : 1200),
            opacity: 0,
            duration: 1,
            ease: "sine.out",
          })
          .from(splitLine.lines, {
            opacity: 0,
            stagger: 0.2,
            y: 20,
          });

        
        gsap.to(".hero-bg", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: "section:first-child",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

      
        const button = document.querySelector(".hero-cta");

        if (button) {
          
          const buttonHover = gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            paused: true,
            ease: "power2.out",
            backgroundColor: "#9333EA", 
          });

          button.addEventListener("mouseenter", () => buttonHover.play());
          button.addEventListener("mouseleave", () => buttonHover.reverse());
          
          
          gsap.to(button, {
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "sine.inOut",
          });
        }
        
        const aboutTl = gsap.timeline({
          scrollTrigger:{
            trigger:".about-stats",
            start:"top bottom"
          }
        })
        
        aboutTl.from(".about-section .section-title",{
          filter: "blur(12px)",
          opacity: 0,
          y: 80,
          duration: 0.8
        })
        .from(splitLine2.lines,{
          opacity:0,
          clipPath: "inset(0 100% 0 0)",
          stagger: 0.5,
          ease: "power4.inOut",
          duration: 1
        })

        const statItems = document.querySelectorAll(".raw-stats");
        
        statItems.forEach((stat) => {
          const endValue = parseInt(stat.textContent);
          
          aboutTl.fromTo(stat, 
            { textContent: 0 },
            {
              textContent: endValue,
              duration: 1.5,
              ease: "power1.out",
              snap: { textContent: 1 }, 
              onUpdate: function() {
                const current = Math.round(parseFloat(this.targets()[0].textContent));
                this.targets()[0].textContent = `${current}+`;
              }
            },
            "<"
          );
        });
        aboutTl.from(".stat-item", {
          opacity: 0,
          y: -80,
          duration: 0.8,
          stagger: 0.08,
          
        },"-=1.5")


        const projectsTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
          }
        })

        

        projectsTl.from(".section2-title",{
          filter: "blur(12px)",
          opacity: 0,
          y: 80,
          duration: 0.8
        }).from(".project-card",{
          opacity:0,
          x:(index)=>{
            if (index===0) {
              return -100
            }
            if (index===3) {
              return 100
            }
          },
          y:(index)=>{
            if (index===1) {
              return -100
            }
            if (index===2) {
              return 100
            }
          },
          duration:1,
          ease:"back.inOut"
        })

        
const servicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 100%",
  }
});

servicesTl.from(".section3-title", {
    filter: "blur(12px)",
    opacity: 0,
    y: 80,
    duration: 0.8
  })
  .from(".service-card", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(2)"
  });

document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
      duration: 0.3,
      ease: "sine.out"
    });
  
    gsap.to(card.querySelector(".text-4xl"), {
      rotate: 360,
      scale: 1.2,
      duration: 0.5,
      ease: "power1.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.in"
    });
   
    gsap.to(card.querySelector(".text-4xl"), {
      rotate: 0,
      scale: 1,
      duration: 0.5,
      ease: "power1.in"
    });
  });
});

const contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
  }
});

const contactSplit = new SplitType(".contact-info p", { types: "words" });

contactTl.from(".section4-title",{
  filter: "blur(12px)",
    opacity: 0,
    y: 80,
    duration: 0.8
})
  .from(".contact-info h3", {
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: "power2.out"
  })
  .from(contactSplit.words, {
    opacity: 0,
    y: 20,
    duration: 0.7,
    stagger: 0.02,
    ease: "power2.out"
  })
  .from(".contact-info .space-y-4 p", {
    opacity: 0,
    x: -30,
    stagger: 0.2,
    duration: 0.5
  });

contactTl.from(".contact-form input, .contact-form textarea", {
  clipPath: "inset(0 100% 0 0)",
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  ease: "power4.inOut"
});

document.querySelectorAll(".contact-form input, .contact-form textarea").forEach(input => {
  input.addEventListener("focus", () => {
    gsap.to(input, {
      scale: 1.02,
      borderColor: "#9333EA",
      duration: 0.3
    });
  });

  input.addEventListener("blur", () => {
    gsap.to(input, {
      scale: 1,
      borderColor: "transparent",
      duration: 0.3
    });
  });
});

contactTl.from(".contact-form button", {
  scale: 0,
  rotation: -180,
  duration: 0.8,
  ease: "back.out(1.7)"
}, "-=0.4");

const contactButton = document.querySelector(".contact-form button");
if (contactButton) {
  contactButton.addEventListener("mouseenter", () => {
    gsap.to(contactButton, {
      backgroundColor: "#7928CA",
      scale: 1.05,
      duration: 0.3
    });
  });

  contactButton.addEventListener("mouseleave", () => {
    gsap.to(contactButton, {
      backgroundColor: "#9333EA",
      scale: 1,
      duration: 0.3
    });
  });
  }

  const sections = document.querySelectorAll('section');
let currentSection = 0;
let isScrolling = false;


const scrollToSection = (index) => {
  if (!isScrolling) {
    isScrolling = true;
    sections[index].scrollIntoView({ 
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }
};

window.addEventListener('wheel', (e) => {
  e.preventDefault();
  
  if (!isScrolling) {
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      
      currentSection++;
      scrollToSection(currentSection);
    } else if (e.deltaY < 0 && currentSection > 0) {
    
      currentSection--;
      scrollToSection(currentSection);
    }
  }
}, { passive: false });

      }, main);
    },
    { scope: main }
  );

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
            Showcase of animations and interactive elements using GSAP and
            modern web technologies.
          </p>
          <button className="hero-cta px-8 py-4 bg-purple-600 rounded-full text-lg relative overflow-hidden">
            Explore Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center py-20 bg-neutral-900">
        <div className="container about-section mx-auto px-8">
          <h2 className="section-title text-5xl font-bold mb-16">About</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="about-text space-y-6">
              <p className="text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <p className="text-xl">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="about-stats grid grid-cols-2 gap-8">
              <div className="stat-item">
                <span className="text-5xl raw-stats font-bold text-purple-500">
                  10+
                </span>
                <p className="text-lg">Years Experience</p>
              </div>
              <div className="stat-item">
                <span className="text-5xl raw-stats font-bold text-purple-500">
                  50+
                </span>
                <p className="text-lg">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-8">
          <h2 className="section2-title text-5xl font-bold mb-8">Projects</h2>
          <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="project-card bg-neutral-900 rounded-lg overflow-hidden"
              >
                <div className="w-full h-60 bg-purple-900"></div>
                <div className="p-4">
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
          <h2 className="section3-title text-5xl font-bold mb-16">Services</h2>
          <div className="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="service-card p-8 bg-black rounded-lg">
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
          <h2 className="section4-title text-5xl font-bold mb-16">Contact</h2>
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
