import tkinter as tk

# Crear la ventana principal
root = tk.Tk()
root.title("Canvas en Tkinter")

# Crear el canvas (lienzo)
canvas = tk.Canvas(root, width=500, height=500, bg="black")
canvas.pack()

# Función para manejar el clic en el canvas
def on_click(event):
    x = event.x
    y = event.y
    print(f"Clic en la posición: ({x}, {y})")
    canvas.create_oval(x-5, y-5, x+5, y+5, fill="red")

# Vincular evento de clic al canvas
canvas.bind("<Button-1>", on_click)

# Mostrar la ventana
root.mainloop()