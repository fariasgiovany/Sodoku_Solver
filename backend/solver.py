class SudokuSolver:
    def __init__(self, board):
        if len(board) != 81:
            print (len(board))
            raise ValueError("O tabuleiro deve conter exatamente 81 números.")
        self.board = [board[i*9:(i+1)*9] for i in range(9)]

    def is_valid(self, row, col, num):
        # Verifica linha
        if num in self.board[row]:
            return False
        # Verifica coluna
        if num in [self.board[i][col] for i in range(9)]:
            return False
        # Verifica bloco 3x3
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(3):
            for j in range(3):
                if self.board[start_row + i][start_col + j] == num:
                    return False
        return True

    def solve(self):
        for row in range(9):
            for col in range(9):
                if self.board[row][col] == 0:
                    for num in range(1, 10):
                        if self.is_valid(row, col, num):
                            self.board[row][col] = num
                            if self.solve():
                                return True
                            self.board[row][col] = 0
                    return False
        return True

    def get_solution(self):
        flat_board = [num for row in self.board for num in row]
        return flat_board

# Exemplo de uso:
# entrada = [0,0,0,...] # 81 números
# solver = SudokuSolver(entrada)
# if solver.solve():
#     print(solver.get_solution())
# else:
#     print("Sem solução válida.")