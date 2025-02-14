import React, { useEffect, useState } from 'react';
import { FaPlane } from 'react-icons/fa';

const FAQBackground = () => {

  const generateBubble = () => {
    const size = Math.random() * (60 - 20) + 20;
    const left = Math.random() * 100;
    const animationDuration = Math.random() * (10 - 5) + 5;

    return {
      size: size,
      left: left,
      animationDuration: `${animationDuration}s`,
    };
  };

  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const numBubbles = 80;
    const newBubbles = Array.from({ length: numBubbles }, generateBubble);
    setBubbles(newBubbles);
  }, []);

  return (
    <div
      className="faq-container"
      style={{
        position: 'relative',
        height: '100px',
        overflow: 'hidden',
        backgroundColor: 'white',
      }}
    >
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="bubble"
          style={{
            position: 'absolute',
            bottom: 0,
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(173, 216, 230, 0.7)',
            animation: `float ${bubble.animationDuration} ease-in-out infinite`,
            opacity: 0.8,
            boxShadow: '0 4px 15px rgba(173, 216, 230, 0.6), 0 0 20px rgba(173, 216, 230, 0.3)',
          }}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2rem',
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
          opacity: 0.8,
        }}
      >
      </div>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-30px) rotate(180deg);
            }
            100% {
              transform: translateY(0) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FAQBackground;
