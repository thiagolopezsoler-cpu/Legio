toDo = []

def add_task(task):
    """add a task to the list"""
    toDo.append(task)
    print(f"Task '{task}' added to the list.")

def remove_task(task):
    """remove a task from the list"""
    if task in toDo:
        toDo.remove(task)
        print(f"Task '{task}' removed from the list.")
    else:
        print(f"Task '{task}' not found in the list.")

def view_tasks():
    """view all tasks in the list"""
    if toDo:
        print("To Do list:")
        for task in toDo:
            print(f"- {task}")
    else:
        print("The list is empty.")

def main():
    while True:
        print("\n1. Add task")
        print("2. Remove task")
        print("3. View tasks")
        print("4. Exit")
        choice = input("Enter your choice: ")
        if choice == "1":
            task = input("Enter the task to add: ")
            add_task(task)
        elif choice == "2":
            task = input("Enter the task to remove: ")
            remove_task(task)
        elif choice == "3":
            view_tasks()
        elif choice == "4":
            break
        else:
            print("Invalid choice, please try again.")

if __name__ == "__main__":
    main()
