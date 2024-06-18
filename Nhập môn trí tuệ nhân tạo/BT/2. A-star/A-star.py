import heapq

class Point:
    def __init__(self):
        self.f = float('inf')  # g + h
        self.g = float('inf') 
        self.h = 0  
        self.parent_i = 0  
        self.parent_j = 0  

def cal_heuristic(i, j, G):
    return abs(i - G[0]) + abs(j - G[1])

def print_res(points, S, G, matrix):
    print("Đường đi từ S đến G là: ")
    path = []
    row, col = G[0], G[1]
 
    while not (points[row][col].parent_i == row and points[row][col].parent_j == col):
        path.append((row, col))
        temp_row = points[row][col].parent_i
        temp_col = points[row][col].parent_j
        row = temp_row
        col = temp_col
 
    path.append((row, col))
    path.reverse()
 
    for i in path:
        if (i[0] == S[0] and i[1] == S[1]): print("S -> ", end='')
        elif (i[0] == G[0] and i[1] == G[1]): print("G ", end='')
        else: 
            matrix[i[0]][i[1]] = 'R'
            print(i, "->", end=" ")
    print()

    print("Các điểm đã duyệt qua được đánh số 2, đường đi từ S đến G là R: ")
    for row in matrix:
        print(' '.join('{:>2}'.format(i) for i in row))


def Astar(matrix, S, G):
    jumps = ((-1, 0), (0, 1), (0, -1), (1, 0), (-1, 1), (1, 1), (1, -1), (-1, -1))
    visited = [[False for _ in range(10)] for _ in range(8)]
    points = [[Point() for _ in range(10)] for _ in range(8)]
 
    i, j = S[0], S[1]
    points[i][j].f = points[i][j].g = points[i][j].h = 0
    points[i][j].parent_i = i
    points[i][j].parent_j = j
 
    O = []
    heapq.heappush(O, (0, i, j))
 
    while len(O) > 0:
        n = heapq.heappop(O)
 
        i, j = n[1], n[2]
        visited[i][j] = True

        for jmp in jumps:
             i1 = i + jmp[0]
             j1 = j + jmp[1]
             if i1 < 0 or i1 >= 8 or j1 < 0 or j1 >= 10 or matrix[i1][j1] == -1 or visited[i1][j1]: continue

             if i1 == G[0] and j1 == G[1]:
                points[i1][j1].parent_i, points[i1][j1].parent_j = i, j
                print_res(points, S, G, matrix)
                return
             
             g_new = points[i][j].g + 1
             h_new = cal_heuristic(i1, j1, G)
             f_new = g_new + h_new
             matrix[i1][j1] = 2
             
             if points[i1][j1].f == float('inf') or points[i1][j1].f > f_new:
                heapq.heappush(O, (f_new, i1, j1))
                points[i1][j1].f = f_new
                points[i1][j1].g = g_new
                points[i1][j1].h = h_new
                points[i1][j1].parent_i = i
                points[i1][j1].parent_j = j

if __name__ == '__main__':
    matrix = (
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, -1, -1, -1, -1, -1, 0, 0, 0, 0],
            [0, 0, 0, 0, -1, -1, -1, -1, 0, 0],
            ['S', 0, 0, 0, 0, 0, 0, -1, 0, 'G'],
            [0, 0, 0, 0, -1, -1, -1, -1, 0, 0],
            [0, -1, -1, -1, -1, -1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    )

    S = [3, 0]
    G = [3, 9]

    Astar(matrix, S, G)