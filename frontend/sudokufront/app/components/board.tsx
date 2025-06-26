'use client'
import React from 'react'

export default function Board() {
    const getvalue = async() => {
        
        const lista = ler();
        const response = await fetch('/api/enviar', {
            method: 'POST', 
            body: JSON.stringify(lista),
        });
        const dados= await response.json();
        addtotable(dados.status);
        console.log("Resposta do servidor:",   dados.status);
    }
    var cont=0;

    const addtotable= (lista: string) => {
        for (let i = 0; i < 81; i++) {
            const inputElement = document.getElementById("quadrado" + i) as HTMLInputElement;
            if (inputElement) {
                inputElement.value = lista[i] !== '0' ? lista[i] : '';
            }
        }

    }

    
    const handleInputChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        e.target.value = value.replace(/[^1-9]/g, ''); // Allow only numbers 1-9
        if (Number(value) > 9) {
            e.target.value = String(Number(value) % 10); // Ensure value is between 1 and 9
        }
        const lista=ler();
        const verificar=verifica(e); //verifica erros de entrada e mostra alertas
        
    }
    const verifica = (e: React.ChangeEvent<HTMLInputElement>) => {

        const resposta= true;
        // Verifica se o Sudoku é válido
        if (e.target.value === '') {
            return true; // Se o campo estiver vazio, não há repetição
        }
        for (let i = 0; i < 9; i++) {
            //Verifica se o número já existe na linha
            const linha= e.target.id.replace(/^\D+/g, '');
            const baseLinha= (9*(Math.floor(Number(linha)/9)))+i;
            if (document.getElementById("quadrado" + baseLinha) !== null) {
                if(Number(linha)!=baseLinha){
                    if(e.target.value === (document.getElementById("quadrado" + baseLinha) as HTMLInputElement)?.value){
                        alert("Número repetido na linha");
                        e.target.value = '';
                        return false;
                    }
                }
            }
        }
        for (let i = 0; i < 9; i++) {
            // Verifica se o número já existe na coluna
            const coluna = Number(e.target.id.replace(/^\D+/g, '')) % 9;
            const baseColuna = i * 9 + coluna;
            if (document.getElementById("quadrado" + baseColuna) !== null) {
                if (Number(e.target.id.replace(/^\D+/g, '')) !== baseColuna) {
                    if (e.target.value === (document.getElementById("quadrado" + baseColuna) as HTMLInputElement)?.value) {
                        alert("Número repetido na coluna");
                        e.target.value = '';
                        return false;
                    }
                }
            } 
        }
        for (let i = 0; i < 9; i++) {
            // Verifica se o número já existe no bloco 3x3
            const linha = Math.floor(Number(e.target.id.replace(/^\D+/g, '')) / 9);
            const coluna = Number(e.target.id.replace(/^\D+/g, '')) % 9;
            const blocoLinha = Math.floor(linha / 3) * 3;
            const blocoColuna = Math.floor(coluna / 3) * 3;
            const baseBloco = (blocoLinha * 9) + blocoColuna + i % 3 + Math.floor(i / 3) * 9;
            if (document.getElementById("quadrado" + baseBloco) !== null) {
                if (Number(e.target.id.replace(/^\D+/g, '')) !== baseBloco) {
                    if (e.target.value === (document.getElementById("quadrado" + baseBloco) as HTMLInputElement)?.value) {
                        alert("Número repetido no bloco 3x3");
                        e.target.value = '';
                        return false;
                               }
                }
            } 
        }    
        
        // Retorna true se for válido, false caso contrário
        
        return resposta; //se for válido resposta será true, caso contrário será false
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
    <div className="background-gray-800 p-4 rounded-lg ">
            <table >
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
                                            autoComplete='off'
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
        <div className="flex justify-center">
            <button className="mt-4 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-600" onClick={getvalue}>
            Resolver Sudoku
            </button>
        </div>
    </div>
  )
  
}
