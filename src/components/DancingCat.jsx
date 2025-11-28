import { useState } from 'react';
import dogImage from '../assets/images/dog.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Dog</h1>

      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <div className="dog-container">
          <img
            src={dogImage}
            alt="Dancing Dog"
            className="cat-image"
          />
          <div className="placard-text">
            혜성님~ 이번주도 너무 고생많았어요~
          </div>
        </div>
      </div>

      <button
        className="control-button"
        onClick={toggleAnimation}
      >
        {isAnimating ? 'Stop Dancing' : 'Start Dancing'}
      </button>
    </div>
  );
}

export default DancingCat;
