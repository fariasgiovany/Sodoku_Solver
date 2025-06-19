
import React, { use } from 'react';
import Board from './components/board';

export default function Home() {
  
  return (
    <div>

      <h1 className="text-4xl font-bold text-center mt-10">
        Resolver Sudoku
      </h1>
      <p className="text-center mt-4">
        Um simples resolvedor de Sudoku online
      </p>
      <div className="flex justify-center mt-10">
        <div className="inline-block border-4 border-gray-700 rounded-lg overflow-hidden">
          <Board  />
        </div>
        
      </div>
    </div>
  );
}
