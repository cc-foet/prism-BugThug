from turtle import Turtle


class Player(Turtle):

    def __init__(self):
        super().__init__()
        self.penup()
        self.shape("turtle")
        self.goto(0, -270)
        self.setheading(90)

    def up(self):
        self.forward(20)