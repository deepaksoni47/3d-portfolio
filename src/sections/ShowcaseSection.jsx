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
    // Fade in the whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animate each project card when scrolled into view
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
            delay: 0.3 * index,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    });
  }, []); // Empty deps => run once on mount after refs are set

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/Lodgify.png" alt="Project1" />
            </div>
            <div className="text-content">
              <h2>Lodgify a travel and listings platform.</h2>
              <p className="text-white-50 md:text-xl">
                A fullstack app built with EJS, NodeJS & MongoDB for a fast and user-friendly experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/aura.png" alt="Project2" />
              </div>
              <h2>Aura AI – Mood Based Recommendation</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/weather.png" alt="Project3" />
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
