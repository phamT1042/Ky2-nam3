import math
import random
import matplotlib.pyplot as plt
import tsp_utils
import animated_visualizer

class SimulatedAnnealing:
    def __init__(self, coords, temp, alpha, stopping_temp, stopping_iter):
        ''' 
            coords: array_like
                list of coordinates
            temp: float
                initial temperature (T)
            alpha: float
                rate at which temp decreases
            stopping_temp: float
                temperature at which annealing process terminates
            stopping_iter: int
                iteration at which annealing process terminates
        '''

        self.coords = coords
        self.sample_size = len(coords)
        self.temp = temp
        self.alpha = alpha
        self.stopping_temp = stopping_temp
        self.stopping_iter = stopping_iter
        self.iteration = 1

        self.dist_matrix = tsp_utils.vectorToDistMatrix(coords)
        self.curr_solution = tsp_utils.nearestNeighbourSolution(self.dist_matrix)
        self.best_solution = self.curr_solution

        self.solution_history = [self.curr_solution]

        self.curr_cost = self.cost(self.curr_solution)
        self.initial_cost = self.curr_cost
        self.min_cost = self.curr_cost

        self.cost_list = [self.curr_cost]

        print('Intial cost: ', self.curr_cost)

    def cost(self, sol):
        '''
        calculate cost: tổng khoảng cách 2 đỉnh cạnh nhau trong 1 phương án, sử dụng distance matrix
        '''
        return sum([self.dist_matrix[i, j] for i, j in zip(sol, sol[1:] + [sol[0]])])

    def acceptance_probability(self, candidate_cost):
        # tính xác suất p chọn phương án khác nếu delta(x, y) >= 0
        return math.exp(-abs(candidate_cost - self.curr_cost) / self.temp)

    def accept(self, candidate):
        '''
        Accept with probability 1 if candidate solution is better than
        current solution, else accept with probability equal to the
        acceptance_probability()
        '''
        candidate_cost = self.cost(candidate)
        if candidate_cost < self.curr_cost:
            self.curr_cost = candidate_cost
            self.curr_solution = candidate
            if candidate_cost < self.min_cost:
                self.min_cost = candidate_cost
                self.best_solution = candidate

        else:
            if random.random() < self.acceptance_probability(candidate_cost):
                self.curr_cost = candidate_cost
                self.curr_solution = candidate

    def anneal(self):
        '''
        Annealing process with 2-opt
        described here: https://en.wikipedia.org/wiki/2-opt
        '''
        while self.temp >= self.stopping_temp and self.iteration < self.stopping_iter:
            candidate = list(self.curr_solution)
            l = random.randint(2, self.sample_size - 1)
            i = random.randint(0, self.sample_size - l)

            candidate[i: (i + l)] = reversed(candidate[i: (i + l)])

            self.accept(candidate)
            self.temp *= self.alpha
            self.iteration += 1
            self.cost_list.append(self.curr_cost)
            self.solution_history.append(self.curr_solution)

        print('Minimum cost: ', self.min_cost)
        print('Improvement: ',
              round((self.initial_cost - self.min_cost) / (self.initial_cost), 4) * 100, '%')

    def animateSolutions(self):
        animated_visualizer.animateTSP(self.solution_history, self.coords)

    def plotLearning(self):
        plt.plot([i for i in range(len(self.cost_list))], self.cost_list)
        line_init = plt.axhline(y=self.initial_cost, color='r', linestyle='--')
        line_min = plt.axhline(y=self.min_cost, color='g', linestyle='--')
        plt.legend([line_init, line_min], ['Initial cost', 'Optimized cost'])
        plt.ylabel('cost')
        plt.xlabel('Iteration')
        plt.show()
