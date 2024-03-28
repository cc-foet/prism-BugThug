import time
from turtle import Turtle, Screen
from cars import Cars
from player import Player
from scoreboard import Scoreboard

screen = Screen()
screen.tracer(0)

player = Player()
scoreboard = Scoreboard()
screen.setup(width=600, height=600)


screen.update()

game_is_on = True
all_cars = []
counter = 0
screen.listen()

screen.onkeypress(player.up, "Up")

while game_is_on:
    if counter % 3 == 0:
        car = Cars()
        all_cars.append(car)

    counter += 1
    for car in all_cars:
        if player.distance(car) < 20:
            game_is_on = False
            scoreboard.game_over()
            break
        car.move()
    if player.ycor() > 260:
        player.next_level()
        scoreboard.update_level()
        for car in all_cars:
            car.increase_speed()

    time.sleep(0.1)
    screen.update()

screen.exitonclick()
