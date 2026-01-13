
Projects = class{
    //class to create projects for the todo list 
    //including a module to this project to the list 
    constructor(title, items){
        this.title = title;
        this.items = items;

    }

    addPro(){
        return todoList.push(this)

    }

}

function addProject(){
    //a function to add new projects to the todo list//

    let numberItems = prompt("how many projects do you want to add: ");
    numberItems = Number(number);//changing the number of items from string to numbers//
    let i = 0;
    while (i< numberItems){
        title = prompt("What is the project tile:");
        items = []
        let project = new Projects(title, items)
        project.addPro()
         i = i+1
    }
   
    return todoList
}

function viewProject(){
    //function to view items in a project
    let projTitle = prompt("Which project will you view: ");
    let view = todoList.find(item => item.title == projTitle);
    return view 

}
function delProject(){
    //function to delete project from todo list//
    let projTitle = prompt("Which project will you delete:");
    let del = todoList.filter(item => item.title !== projTitle);
    return del

}


function projectControl(){
    //this function controls operations with the
    //  project (add, delete, view and modify)
    let result;
    let todo = prompt("what do you want to do 'add proje: AP', 'Del proj: DP', 'modify proj: MP', 'view: VP': ");
    if (todo == "AP"){
        result = addProject()
    }
    else if (todo == "VP"){
        result = viewProject()
    }
    else if (todo == "DP"){
        result = delProject()
    }


return result 
}

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

function addActivity(){
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

function viewTodolist(){
    //function view specific activities.
    let viewProj = prompt("Title of Project: ")//first find the project containing the activity//
    let desiredProj = todoList.find(item => item.title == viewProj)
    let itemTitle = prompt("title of item to view: ")
    let result = desiredProj.items.find(item => item.title == itemTitle)
    return result  

}

function deleteItem(){
    //function to delete items from the todo list//
    let viewProj = prompt("Enter the project containing the item:  ");
    let desProject = todoList.find(item => item.title == viewProj)
    let deltodo = prompt("Title of specific activity: ")
    desProject.items =  desProject.items.filter(item => item.title !== deltodo)
    return todoList
    
}
function itemProject(){
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

main = function(){
    //function to control both project and list of items in the projects
    whattoDo = prompt(("what do you want to do 'Project: P' or 'Items: I' : "))
    if (whattoDo == "P"){
        result = projectControl()

    }
    else if (whattoDo == "I"){
        result = itemProject()
    }

    console.log(result)
}

main()




