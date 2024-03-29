from turtle import Turtle
import random
COLORS = ['blue', 'red', 'yellow', 'purple', 'green']


class Cars(Turtle):

    def __init__(self):
        super().__init__()
        self.x_move = 10
        self.color(random.choice(COLORS))
        self.shape("square")
        self.shapesize(1, 2)
        self.penup()
        self.goto(280, random.randint(-230, 250))

    def move(self):
        self.goto(self.xcor()-self.x_move, self.ycor())


