'use client'
import React from 'react'

export default function Board() {
    const getvalue = () => {
        console.log(ler());
        
    }
    var cont=0;

    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        e.target.value = value.replace(/[^1-9]/g, ''); // Allow only numbers 1-9
        if (Number(value) > 9) {
            e.target.value = String(Number(value) % 10); // Ensure value is between 1 and 9
        }
        const lista=ler();

        


    }

    const ler = () => {
        const lista: string[] = [];
        for (let i = 0; i < 81; i++) {
            
                lista[i] = (document.getElementById("quadrado" + i) as HTMLInputElement)?.value || '0';
            
        }
        return lista;
    }
    
    
  return (
  <div>
    <div className="inline-block border-4 border-gray-700 rounded-lg overflow-hidden">
            <table className="border-collapse">
                <tbody>
                    {Array.from({ length: 9 }).map((_, rowIdx) => (
                        <tr key={rowIdx}>
                            {Array.from({ length: 9 }).map((_, colIdx) => {
                                // Bold border for 3x3 blocks
                                const borderClasses = [
                                    rowIdx % 3 === 0 ? "border-t-2" : "border-t",
                                    colIdx % 3 === 0 ? "border-l-2" : "border-l",
                                    rowIdx === 8 ? "border-b-2" : "",
                                    colIdx === 8 ? "border-r-2" : "",
                                    "border-gray-700",
                                ].join(" ");

                                return (
                                    <td key={colIdx} className={borderClasses + " w-14 h-14 p-0"} >
                                        
                                        
                                        <input
                                        
                                            id={"quadrado"+cont++}
                                            type="text"
                                            min={1}
                                            max={9}
                                            className="w-full h-full text-center text-lg outline-none focus:bg-green-200"
                                            onChange={handleInputChange}
                                            
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        <button className="mt-4 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600" onClick={getvalue}>
                Resolver Sudoku
        </button>
    </div>
  )
  
}
