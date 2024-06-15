import React, { useState, useEffect, useRef } from 'react';
import './SnakeGame.css';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = 'red';
    snake.forEach(part => context.fillRect(part.x * 20, part.y * 20, 20, 20));

    context.fillStyle = 'blue';
    context.fillRect(food.x * 20, food.y * 20, 20, 20);

    if (isGameOver) {
      context.fillStyle = 'white';
      context.font = '30px Courier New';
      context.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);
    }
  }, [snake, food, isGameOver]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    const moveSnake = () => {
      if (isGameOver) return;

      const newSnake = [...snake];
      const head = { x: newSnake[0].x + direction.x, y: newSnake[0].y + direction.y };

      if (head.x === food.x && head.y === food.y) {
        setFood({ x: Math.floor(Math.random() * 25), y: Math.floor(Math.random() * 25) });
      } else {
        newSnake.pop();
      }

      if (head.x < 0 || head.x >= 25 || head.y < 0 || head.y >= 25 || newSnake.some(part => part.x === head.x && part.y === head.y)) {
        setIsGameOver(true);
      } else {
        newSnake.unshift(head);
        setSnake(newSnake);
      }
    };

    const interval = setInterval(moveSnake, 200);
    return () => clearInterval(interval);
  }, [snake, direction, food, isGameOver]);

  const handleRestart = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 1, y: 0 });
    setIsGameOver(false);
  };

  return (
    <div className="snake-game">
      <canvas ref={canvasRef} width="500" height="500" />
      {isGameOver && <button className="restart-button" onClick={handleRestart}>Restart Game</button>}
    </div>
  );
};

export default SnakeGame;
