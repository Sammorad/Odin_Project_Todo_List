let todoList = []
Todos = class{
    //class to create a todo and add it to a list//
    constructor(title, description, date, status){
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status 
    }

    addTodo(){
        todoList.push(this)

    }

}

function viewTodolist(){
    //function to add to the list 
    return console.log(todoList)

}
function to deleteItem(){
    

}
const eat = new Todos("eba","eaten for strength", "2026-03-10", true)
eat.addTodo()
viewTodolist()

