/usr/bin/python3 -m pip install pynputfrom pynput import keyboard
import pyautogui
import time

clicking = False

def on_press(key):
    global clicking
    try:
        if key == keyboard.Key.f6:
            clicking = not clicking
            print("Clicking:", clicking)
        elif key == keyboard.Key.f7:
            print("Exiting...")
            return False
    except:
        pass

listener = keyboard.Listener(on_press=on_press)
listener.start()

print("F6 = start/stop | F7 = exit")

while True:
    if clicking:
        pyautogui.click()
        time.sleep(0.1)
    else:
        time.sleep(0.01)