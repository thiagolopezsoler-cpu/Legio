import time

while True:
    tiempo = time.strftime('%H:%M:%S')  # Indent this line
    print(f'\rHora actual: {tiempo}', end='')  # Indent this line
    time.sleep(1)