import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardContext = React.createContext();

const CardProvider = ({ children }) => {
  const [counts, setCounts] = useState({});

  const incrementCount = (title) => {
    setCounts((prevCounts) => {
      const currentCount = prevCounts[title] || 0;
      return { ...prevCounts, [title]: currentCount + 1 };
    });
  };

  return (
    <CardContext.Provider value={{ counts, incrementCount }}>
      {children}
    </CardContext.Provider>
  );
};

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};

const Card = ({ title, icon, initialCount, incrementValue }) => {
  const { counts, incrementCount } = useCardContext();
  const [isHovered, setIsHovered] = useState(false);
  const [currentCount, setCurrentCount] = useState(1);

  useEffect(() => {
    let interval;
    if (isHovered || currentCount < incrementValue) {
      interval = setInterval(() => {
        if (currentCount < incrementValue) {
          setCurrentCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(interval);
        }
      }, 3);
    }

    return () => clearInterval(interval);
  }, [isHovered, incrementValue, currentCount]);

  const titleColorClass = isHovered ? 'text-blue-500' : 'text-gray-700';
  const scaleClass = isHovered ? 'scale-105' : '';

  useEffect(() => {
    // Start incrementing on component mount
    setIsHovered(true);

    return () => {
      // Stop incrementing when component unmounts
      setIsHovered(false);
    };
  }, []);

  return (
    <div
      className={`max-w-full bg-white shadow-md rounded-lg overflow-hidden m-4 transform transition-transform hover:${scaleClass}`}
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentCount(1); // Reset count on hover
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-6 py-4 flex items-center justify-center flex-col">
        <div className="bg-red-500 rounded-full p-3 mb-2">
          <FontAwesomeIcon icon={icon} className="text-white text-lg" />
        </div>
        <p className={`text-base mb-2 ${titleColorClass}`}>{title}</p>
        <div className="font-bold text-xl mb-2">{currentCount}+</div>
      </div>
    </div>
  );
};

export { CardProvider, Card, useCardContext };
