import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Fade in section on mount
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate cards on scroll
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * index,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Project 1 */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/Lodgify.avif" alt="Lodgify"  loading='lazy'/>
            </div>
            <div className="text-content">
              <h2>Lodgify – A Travel & Listings Platform</h2>
              <p className="text-white-50 md:text-xl">
                A fullstack app built with EJS, Node.js & MongoDB for a fast and user-friendly experience.
              </p>
            </div>
          </div>

          {/* Project 2 & 3 */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/aura.avif" alt="Aura AI" loading='lazy'/>
              </div>
              <h2>Aura AI – Mood-Based Recommendation</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/weather.avif" alt="Weather App"  loading='lazy'/>
              </div>
              <h2>Weather App using React</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;