"use client"; 

import { useEffect, useCallback } from 'react';

const SpacebarTrigger = ({ onSpacebarPress }) => {

  const handleKeyDown = useCallback((event) => {
    if (event.code === 'Space' || event.key === ' ') {
      event.preventDefault();
      onSpacebarPress();
    }
  }, [onSpacebarPress]); 

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]); 

  return null;
};

export default SpacebarTrigger;