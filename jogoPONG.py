import tkinter as tk

class PongGame:
    def __init__(self, master):
        self.master = master
        self.master.title("PONG")
        self.canvas = tk.Canvas(master, width=800, height=600, bg='black')
        self.canvas.pack()

        self.paddle1 = self.canvas.create_rectangle(20, 250, 30, 350, fill='white')
        self.paddle2 = self.canvas.create_rectangle(770, 250, 780, 350, fill='white')
        self.ball = self.canvas.create_oval(390, 290, 410, 310, fill='white')

        self.ball_dx = 5
        self.ball_dy = 5

        self.score1 = 0
        self.score2 = 0

        self.score_label = self.canvas.create_text(400, 50, text=f"{self.score1} - {self.score2}", fill='white', font=('Arial', 24))

        self.master.bind("<KeyPress-w>", self.move_up_paddle1)
        self.master.bind("<KeyPress-s>", self.move_down_paddle1)
        self.master.bind("<KeyPress-Up>", self.move_up_paddle2)
        self.master.bind("<KeyPress-Down>", self.move_down_paddle2)

        self.update()

    def move_up_paddle1(self, event):
        self.canvas.move(self.paddle1, 0, -20)

    def move_down_paddle1(self, event):
        self.canvas.move(self.paddle1, 0, 20)

    def move_up_paddle2(self, event):
        self.canvas.move(self.paddle2, 0, -20)

    def move_down_paddle2(self, event):
        self.canvas.move(self.paddle2, 0, 20)

    def update(self):
        self.canvas.move(self.ball, self.ball_dx, self.ball_dy)
        ball_pos = self.canvas.coords(self.ball)

        # Colisão com o teto e o chão
        if ball_pos[1] <= 0 or ball_pos[3] >= 600:
            self.ball_dy = -self.ball_dy

        # Colisão com as paddles
        if (ball_pos[0] <= 30 and ball_pos[1] >= self.canvas.coords(self.paddle1)[1] and
            ball_pos[3] <= self.canvas.coords(self.paddle1)[3]) or \
           (ball_pos[2] >= 770 and ball_pos[1] >= self.canvas.coords(self.paddle2)[1] and
            ball_pos[3] <= self.canvas.coords(self.paddle2)[3]):
            self.ball_dx = -self.ball_dx

        # Pontuação e reinício da bola
        if ball_pos[0] <= 0:
            self.score2 += 1
            self.reset_ball()
        elif ball_pos[2] >= 800:
            self.score1 += 1
            self.reset_ball()

        # Atualiza o placar
        self.canvas.itemconfig(self.score_label, text=f"{self.score1} - {self.score2}")

        self.master.after(30, self.update)

    def reset_ball(self):
        self.canvas.coords(self.ball, 390, 290, 410, 310)
        self.ball_dx = -self.ball_dx

if __name__ == "__main__":
    root = tk.Tk()
    game = PongGame(root)
    root.mainloop()