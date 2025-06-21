import React from 'react';
import TitleHeader from '../components/TitleHeader.jsx';
import { techStackIcons, techStackImgs } from '../constants';
import TechIcon from '../components/models/TechLogos/TechIcon.jsx';
import useIsDesktop from '../hooks/useIsDesktop';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const TechStack = () => {
  const isDesktop = useIsDesktop();

  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
      },
    });
  });

  const stackData = isDesktop ? techStackIcons : techStackImgs;

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader
          title='My Preferred Tech Stack'
          sub='🤝 The Skills I Bring to the Table'
        />
        <div className='tech-grid'>
          {stackData.map((item) => (
            <div key={item.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  {isDesktop ? (
                    <TechIcon model={item} />
                  ) : (
                    <img
                      src={item.imgPath}
                      alt={item.name}
                      className='w-35 h-35 object-contain'
                      loading='lazy'
                    />
                  )}
                </div>
                <div className='padding-x w-full'>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
