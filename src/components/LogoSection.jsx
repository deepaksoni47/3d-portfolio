import React from 'react';
import { logoIconsList } from '../constants';

// Memoized LogoIcon for performance
const LogoIcon = React.memo(({ icon }) => (
  <div className='flex-none flex-center marquee-item'>
    <img
      src={icon.imgPath}
      alt={icon.name}
      loading="lazy"
      width="120"
      height="64"
    />
  </div>
));

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge' />
      <div className='gradient-edge' />
      <div className='marquee h-52 overflow-hidden relative'>
        <div className='marquee-box md:gap-12 gap-5 flex'>
          {logoIconsList.concat(logoIconsList).map((icon, index) => (
            <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
