import random
games = 10000
doors = [1, 2, 3]
cntWin, cntLose = 0, 0

# If not change
for i in range(games):
    win_door = random.choice(doors)
    choice_door = random.choice(doors)
    if win_door == choice_door: cntWin += 1
    else: cntLose += 1
print("Nếu người chơi không đổi lựa chọn:")
print("Số lần thắng - thua: {0} - {1}".format(cntWin, cntLose))
print("Tỉ lệ thắng: {:.2f}".format(cntWin / games))

cntWin, cntLose = 0, 0
# If change
for i in range(games):
    win_door = random.choice(doors)
    choice_door = random.choice(doors)
    open_door = random.choice([door for door in doors if door != win_door and door != choice_door])
    choice_door = [door for door in doors if door != choice_door and door != open_door][0]
    if win_door == choice_door: cntWin += 1
    else: cntLose += 1
print("Nếu người chơi đổi lựa chọn:")
print("Số lần thắng - thua: {0} - {1}".format(cntWin, cntLose))
print("Tỉ lệ thắng: {:.2f}".format(cntWin / games))