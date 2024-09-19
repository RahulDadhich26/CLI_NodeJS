const fs= require("fs") ;
const { Command } = require("commander");
const program = new Command() ;
const path = require("path");

 // path to the todos.json file
 const todosFilePath = path.join(__dirname , "todos.json");
// Helper function to read the todos from the file.
function readTodos() {
    if(!fs.existsSync(todosFilePath)){
        return [];
    }
    const data = fs.readFileSync(todosFilePath , "utf-8");
    return JSON.parse(data || "[]");
}
// helper function to write todos to the file
function writeTodos(todos){
    fs.writeFileSync(todosFilePath , JSON.stringify(todos , null ,2), "utf-8");
}
// command to add a new todo item
program 
    .command("add")
    .description("Add a new todo item")
    .argument("<Todo_Title>" , "Enter the todo title")
    .argument("<Time>","Enter the finish time")
    .action((todoTitle , time)=>{
        const todos = readTodos() ;

        const newTodo = {
            Title: todoTitle,
            Deadline: time,
            Done:false,
        };
        todos.push(newTodo);
        writeTodos(todos);

        console.log("Todo added successfully!");
    });

// command to remove a todo item 

program
    .command("remove")
    .description("Remove the existing todo item")
    .argument("<Todo_Title>" , "Enter the todo title to delete")
    .action((todoTitle) =>{
        let todos = readTodos();
        const updatedTodos = todos.filter((todo)=> todo.Title !== todoTitle);
        if(todos.length === updatedTodos.length){
           console.log("Todo not Found");
        }
        else{
            writeTodos(updatedTodos);
            console.log("Todo removed Successfully!");
        }
    });

// command to mark a todo item as done

program
    .command("mark")
    .description("Mark a todo item as done")
    .argument("<todo_Title>","Enter the todo title to mark as done")
    .action((todoTitle)=>{
        let todos = readTodos();
        let todoFound = false;
        todos = todos.map((todo)=>{
            if(todo.Title === todoTitle){
                todo.Done = true;
                todoFound = true;
            }
            return todo;
        });
        if(todoFound){
            writeTodos(todos);
            console.log("todo marked as done!");
        }
        else{
            console.log("Todo not Found!");
        }
    });
// parse and exceute the command

program.parse() ;