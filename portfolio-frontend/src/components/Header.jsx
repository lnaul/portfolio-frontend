import React, { useState, useEffect } from 'react';
import eventBus from '../utils/eventBus';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleSlideChange = (index) => {
      setActiveIndex(index);
    };

    eventBus.on('slideChanged', handleSlideChange);

    return () => {
      eventBus.remove('slideChanged', handleSlideChange);
    };
  }, []);

  return (
    <nav className="main-nav">
      <div className="nav-links-frame">
        <a href="javascript:void(0)" onClick={() => eventBus.dispatch('navigateTo', 1)} className={`nav-link-text ${activeIndex === 1 ? 'active' : ''}`}>Web Dev</a>
        <a href="javascript:void(0)" onClick={() => eventBus.dispatch('navigateTo', 2)} className={`nav-link-text ${activeIndex === 2 ? 'active' : ''}`}>Mobile App</a>
        <a href="javascript:void(0)" onClick={() => eventBus.dispatch('navigateTo', 3)} className={`nav-link-text ${activeIndex === 3 ? 'active' : ''}`}>Game Dev</a>

      </div>
    </nav>
  );
};

export default Header;