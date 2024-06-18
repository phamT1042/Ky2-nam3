import random
import numpy as np

def vectorToDistMatrix(coords):
    '''
    Create the distance matrix: ma trận khoảng cách giữa 2 điểm bất kì (hiểu như ma trận kề)
    '''
    return np.sqrt((np.square(coords[:, np.newaxis] - coords).sum(axis=2)))


def nearestNeighbourSolution(dist_matrix):
    '''
    Sinh 1 phương án di chuyển theo cách chọn đỉnh gần nhất
    '''
    node = random.randrange(len(dist_matrix))
    result = [node]

    nodes_to_visit = list(range(len(dist_matrix)))
    nodes_to_visit.remove(node)

    while nodes_to_visit:
        nearest_node = min([(dist_matrix[node][j], j) for j in nodes_to_visit], key=lambda x: x[0])
        node = nearest_node[1]
        nodes_to_visit.remove(node)
        result.append(node)

    return result
