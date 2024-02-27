import { useState } from 'react';
import Button from '../Button';
import './TicTacToe.scss';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (items: string[]) => {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (!!items[a] && items[a] === items[b] && items[a] === items[c]) {
      return items[a];
    }
  }
  return null;
}

const TicTacToe = () => {
  const [items, setItems] = useState(Array(9).fill(''));
  const [isX, setIsX] = useState(true);

  const winner = checkWinner(items);
  const isDraw = items.every(item => !!item);

  const restart = () => {
    setItems(Array(9).fill(null));
    setIsX(true);
  }

  const onClickSquare = (index: number) => {
    if (!items[index]) {
      setItems(prev => {
        const newItems = prev;
        newItems[index] = isX ? 'X' : 'O';
        return newItems;
      });
      setIsX(prevX => !prevX);
    }
  }
  
  return (
    <div className="container">
      <div className="board">
        {items.map((item, index) => (
          <Button key={index} value={item} onClick={() => onClickSquare(index)} />
        ))}
      </div>
      <div>
        {winner ? `${winner} wins.` : isDraw ? 'Draw' : ''}
      </div>
      {(!!winner || !!isDraw) && (
        <button onClick={restart}>play again</button>
      )}
    </div>
  );
};

export default TicTacToe;
