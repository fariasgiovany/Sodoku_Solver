from fastapi import FastAPI
from solver import SudokuSolver
from fastapi import Body,Path
#para rodar o servidor: uvicorn main:app --reload
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Olá bem vindo ao Sudoku Solver API! Para iniciar, envie um problema de sudoku para o endpoint /solve."}
       


@app.put("/solve")
async def solve_problem(problem: list[int]= Body(
    ...,
    example=[
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0
        ],
        description="Lista de 81 inteiros representando o tabuleiro do Sudoku (0 para células vazias).")):
    """
    Endpoint para resolver um problema de Sudoku.   
    """
    
    # Placeholder for solving the problem
    print("Received problem:", problem)
    solver = SudokuSolver(problem)
    if solver.solve():
        solution = solver.get_solution()
        return {"solution": solution}
    else:
        return {"problem": problem, "solution": "No valid solution found."}