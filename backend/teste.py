from solver import SudokuSolver

mesa= [0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0,
       0,0,0,0,0,0,0,0,0]

solver = SudokuSolver(mesa)
if solver.solve():
    print(solver.get_solution())