import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { words } from '../constants/index.js';
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(
    () => {
      gsap.fromTo(
        '.hero-text h1',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '.hero-text',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <section id="hero" ref={heroRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.avif" alt="background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="lazy"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Reality</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p>
              Hi I'm Deepak Soni, a full stack developer based in India with a passion for code.
            </p>

            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work" />

            {isTablet && (
              <div className="flex justify-center items-center mt-4 ">
                <img
                  src="/images/profile.avif"
                  alt="Hero fallback"
                  className=" w-auto h-auto object-contain"
                />
              </div>
            )}
          </div>
        </header>

        {!isTablet && (
          <figure>
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        )}
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
