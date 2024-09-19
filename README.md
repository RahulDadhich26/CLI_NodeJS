
## Todo CLI

A simple command-line interface (CLI) tool to manage your to-do list. This tool allows you to add, remove, and mark tasks as done using intuitive commands. Built with Node.js and the Commander.js library, it provides a lightweight and efficient way to keep track of tasks.

## Features

- **Add a todo**: Quickly add tasks to your to-do list.
- **Remove a todo**: Easily remove tasks that you no longer need.
- **Mark as done**: Mark tasks as completed when finished.

## Installation

1. Make sure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/todo-cli.git
   ```
3. Navigate into the project directory:
   ```bash
   cd todo-cli
   ```
4. Install the required dependencies:
   ```bash
   npm install
   ```
5. Link the CLI globally (optional for easy access):
   ```bash
   npm link
   ```

## Usage (Primary Way or teminal way)

Once the CLI is installed and set up, you can use the following commands to manage your to-do list:

### Add a todo
```bash
todo add "Buy groceries"
```
This command will add a new task to your to-do list.

### Remove a todo
```bash
todo remove 1
```
This will remove the task with the specified ID (e.g., `1`).

### Mark a todo as done
```bash
todo done 1
```
This marks the task with the specified ID (e.g., `1`) as completed.

### View all todos
```bash
todo list
```
This command will display all the tasks, along with their IDs and completion status.

## Usage (Secondary or Easy way to use)
   ### Filesystem based todo list.

   ___
    Create a `cli` that lets a user
    1. Add a todo
    2. Delete a todo
    3. Mark a todo as done

    Store all the data in files (todos.json)


    1. Add a To-Do : To add a new to-do item, use the add command followed by the deadline and the to-do title:
    $ node index.js add <Todo_Ttle> <Time>
    $ node index.js add "Go to Gym" "18:00"

    2. Remove a To-Do : To remove an existing to-do item, use the remove command followed by the title and the date of the JSON file:
    $ node index.js remove <Todo_Ttle> <Date>
    $ node index.js remove "Go to Gym" "2024-08-25"

    3. Mark a To-do done : To Mark an existing to-do item done, use the mark command followed by the title and the date of the JSON file:
    $ node index.js mark <Todo_Ttle> <Date>
    $ node index.js mark "Go to Gym" "2024-08-25"

    - For help
    $ node index.js -h
 
   ____
   
## Technologies Used

- **Node.js**: JavaScript runtime used to build the CLI.
- **Commander.js**: A minimalistic command-line interface (CLI) framework for Node.js that provides powerful tools to build and manage commands.
- **File System (fs)**: To handle saving and retrieving tasks from a local JSON file.
- **Chalk** (optional): Used for adding color to the terminal output for better readability.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request.

~ Thanks...
