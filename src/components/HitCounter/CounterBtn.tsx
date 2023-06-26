'use client';
import React from 'react';

export default function CounterBtn({ hits }: { hits: number }) {
  const [isCensored, setIsCensored] = React.useState(true);

  const handleClick = () => {
    setIsCensored(!isCensored);
  };
  return (
    <button
      onClick={handleClick}
      className={`font-bold text-xl text-lime-600 ${
        isCensored ? 'censored' : undefined
      }`}
    >
      {hits}
    </button>
  );
}
