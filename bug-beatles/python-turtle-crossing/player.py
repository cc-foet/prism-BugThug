from turtle import Turtle


class Player(Turtle):

    def _init_(self):
        super()._init_()
        self.penup()
        self.shape("turtle")
        self.goto(0, -270)
        self.setheading(90)

    def up(self):
        self.forward(20)