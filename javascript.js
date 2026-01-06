let todoList = []
Todos = class{
    //class to create a todo and add it to a list//
    constructor(title, description, date, status){
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status 
    }
    //method to add activities to the list// 
    addTodo(){
        todoList.push(this)

    }

}

function addActivity(){
    //function to add activities to the todo list 
    let title = prompt("Input title: ");
    let description = prompt("Input description for this todo: ");
    let date = prompt("Input date in the format yyyy-mm-dd:");
    let status  = prompt ("Is the activity conclluded 'true or false': ");
    let todo1 = new Todos(title, description, date, status)
    todo1.addTodo()
    console.log(todoList)


}

function viewTodolist(){
    //function view specific activities.
    let actToView = prompt("Enter Title of activity: ")
    let act01 = todoList.find(item =>item.title == actToView)
    console.log(act01)
      

}

main = function(){
    //main function controlling the todo list// 
    let whatToDo = prompt("what will u do 'input todo:T', 'view todo: v': ")
    if (whatToDo == "T"){
        return addActivity()
    }
    else if (whatToDo == "v"){
        return viewTodolist()
    }


}

main()




