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
finish_line_y = 280
car_speed = 10

screen.listen()
screen.onkeypress(player.up, "Up")

while game_is_on:
    if counter % 3 == 0:
        car = Cars(car_speed)
        all_cars.append(car)

    counter += 1
    for car in all_cars:
        if player.distance(car) < 20:
            game_is_on = False
            scoreboard.game_over()
            break
        car.move()

    if player.ycor() > finish_line_y:
        for car in all_cars:
            car.clear()  # Clear the car from the screen
            car.hideturtle()  # Hide the car turtle
        all_cars.clear()  # Clear the list of cars
        player.goto(0, -270)
        scoreboard.update_level()
        car_speed += 2

    time.sleep(0.1)
    screen.update()

screen.exitonclick()