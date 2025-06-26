
import React, { use } from 'react';
import Board from './components/board';

export default function Home() {
  
  return (
    <div className='bg-white text-black'>

      <h1 className="text-4xl font-bold text-center mt-10">
        Resolver Sudoku
      </h1>
      <p className="text-center mt-4">
        Um simples resolvedor de Sudoku online
      </p>
      <div className="flex justify-center mt-10 ">
      
          <Board  />
        
        
      </div>
    </div>
  );
}
