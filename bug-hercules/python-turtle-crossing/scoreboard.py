from turtle import Turtle

class Scoreboard(Turtle):

    def __init__(self):
        super().__init__()
        self.hideturtle()
        self.level = 0
        self.penup()
        self.color("black")
        self.goto(-260, 260)
        self.update_level()

    def update_level(self):
        self.level += 1
        self.clear()
        self.write(f"Level: {self.level}", align="center", font=("Courier", 15, "normal"))

    def game_over(self):
        self.hideturtle()
        self.penup()
        self.color("black")
        self.goto(0, 0)
        self.write(f"Game Over", align="center", font=("Courier", 20, "normal"))

