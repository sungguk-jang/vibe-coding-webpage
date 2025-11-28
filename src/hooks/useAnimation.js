import { useState, useEffect } from 'react';

export function useAnimation(initialState = true) {
  const [isAnimating, setIsAnimating] = useState(initialState);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        setIsAnimating(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const toggle = () => setIsAnimating(prev => !prev);

  return [isAnimating, toggle];
}
