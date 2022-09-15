import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

// Source code: from [Lesson script](https://www.youtube.com/watch?v=wPCQq4rBLnw)

const Confetti = () => {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth - 20, // Subtracting 20 to get rid of horizontal scrollbar
    height: window.innerHeight - 20,
  });

  const detectSize = () => {
    setDimension({
      width: window.innerWidth - 20,
      height: window.innerHeight - 20,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension]);

  return (
    <ReactConfetti
      width={windowDimension.width}
      height={windowDimension.height}
      tweenDuration={1000}
    />
  );
};

export default Confetti;
