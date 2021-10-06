import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import './style.scss';

interface ILoading {
  size: 'sm' | 'md' | 'bg';
}

const Loading: React.FC<ILoading> = ({ size }) => {
  let stringToSize: number;

  switch (size) {
    case 'sm':
      stringToSize = 20;
      break;

    case 'md':
      stringToSize = 30;
      break;

    case 'bg':
      stringToSize = 50;
      break;

    default:
      stringToSize = 10;
      break;
  }

  return (
    <div id="loading">
      <AiOutlineLoading size={stringToSize} />
    </div>
  );
};

export default Loading;
