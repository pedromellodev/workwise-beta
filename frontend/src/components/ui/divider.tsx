import React from 'react';

// Definindo as props para o Divider
interface DividerProps {
  className?: string;
  color?: 'gray' | 'purple' | 'blue' | 'green' | 'red'; // Cores mais comuns do Tailwind
  thickness?: '2' | '4' | '8'; // Espessuras comuns de borda
}

// Divider Horizontal
export const DividerHorizontal: React.FC<DividerProps> = ({
  className = '',
  color = 'gray',
  thickness = '2',
}) => {
  return (
    <div
      className={`${className} border-t-${thickness} border-${color}-500 w-full`}
    />
  );
};

// Divider Vertical
export const DividerVertical: React.FC<DividerProps> = ({
  className = '',
  color = 'gray',
  thickness = '2',
}) => {
  return (
    <div
      className={`${className} border-l-${thickness} border-${color}-500 h-full`}
    />
  );
};
