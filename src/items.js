Todos = class{
    //class to create a todo and add it to a list//
    constructor(title, description, date, status){
        this.title = title;
        this.description = description;
        this.date = date;
        this.status = status 
    }
    //method to add activities to the list// 
    addTodo(projTitle, title, description, date, status){
        let intendedProject = todoList.find(item => item.title == projTitle);
        if (intendedProject){
            intendedProject.items.push(new Todos(title, description, date, status))
        }
        
        return todoList

    }

}

export function addActivity(){
    //function to add activities to the todo list 
    let projTitle = prompt("Title of project you want to add to:")
    numberItems = prompt("how many items will you add: ")
    numberItems = Number(numberItems)
    let i = 0
    while (i < numberItems){
    let title = prompt("Input title: ");
    let description = prompt("Input description ");
    let date = prompt("input date in the format yyyy-mm-dd:");
    let status = prompt("In activity included 'true or false': ");
    new Todos().addTodo(projTitle, title, description, date, status);
    i = i + 1

    }
    
  return todoList


}

export function viewTodolist(){
    //function view specific activities.
    let viewProj = prompt("Title of Project: ")//first find the project containing the activity//
    let desiredProj = todoList.find(item => item.title == viewProj)
    let itemTitle = prompt("title of item to view: ")
    let result = desiredProj.items.find(item => item.title == itemTitle)
    return result  

}

export function deleteItem(){
    //function to delete items from the todo list//
    let viewProj = prompt("Enter the project containing the item:  ");
    let desProject = todoList.find(item => item.title == viewProj)
    let deltodo = prompt("Title of specific activity: ")
    desProject.items =  desProject.items.filter(item => item.title !== deltodo)
    return todoList
    
}
export function itemProject(){
    //function to add to dos inside item of project 
    let result;
    let whatToDo = prompt("what will u do 'input todo:T', 'view todo: v', 'delete activity : d' : ")
    if (whatToDo == "T"){
        result = addActivity()
    }
    else if (whatToDo == "v"){
        result = viewTodolist()
    }

    else if (whatToDo == "d"){
        result = deleteItem()
    }

return result 
}
