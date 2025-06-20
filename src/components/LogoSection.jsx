import React from 'react';
import { logoIconsList } from '../constants';

// Memoized logo icon component
const LogoIcon = React.memo(({ icon }) => (
  <div className="flex-none flex-center marquee-item">
    <img
      src={icon.imgPath}
      alt={icon.name}
      loading="lazy"
      width="120"
      height="64"
      className="object-contain"
    />
  </div>
));

const LogoSection = () => {
  const repeatedIcons = [...logoIconsList, ...logoIconsList]; // Ensure loop

  return (
    <div className="relative my-10 md:my-20">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      
      <div className="marquee relative h-52 overflow-hidden">
        <div className="marquee-box flex gap-5 md:gap-12">
          {repeatedIcons.map((icon, index) => (
            <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;