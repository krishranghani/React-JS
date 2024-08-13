import React, { useState, useEffect } from 'react';

const ClickCounterGame = () => {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameOver(true);
    }
  }, [timeLeft, isGameOver]);

  const handleClick = () => {
    if (!isGameOver) {
      setCount(count + 1);
    }
  };

  const resetGame = () => {
    setCount(0);
    setTimeLeft(10);
    setIsGameOver(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-6">Click Counter Game</h1>
      <p className="text-2xl mb-4">Time Left: {timeLeft}s</p>
      <p className="text-2xl mb-6">Clicks: {count}</p>
      <button
        onClick={handleClick}
        className={`px-6 py-3 text-xl font-semibold text-white rounded-lg ${
          isGameOver ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        disabled={isGameOver}
      >
        {isGameOver ? 'Game Over' : 'Click Me!'}
      </button>
      {isGameOver && (
        <button
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default ClickCounterGame;
