export let todoList = [
    {title:"food", items: [
        {title: "buy", description:"make purchases", date: "2026-03-26", status:true},
        {title:"cook", description:"cook delicacy", date : "2026-03-27", status: true},
    ]}, 
    {title: "School", items : [

    ]}
]

export class Projects {
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

export function addProject(title){
    //a function to add new projects to the todo list//
        if (!title || String(title).trim() === "") return null;
        const items = []
        const project = new Projects(String(title).trim(), items)
        todoList.push(project) 
        return project;
}

export function viewProject(){
    //function to view items in a project
    let projTitle = prompt("Which project will you view: ");
    let view = todoList.find(item => item.title == projTitle);
    return view 

}
export function delProject(){
    //function to delete project from todo list//
    let projTitle = prompt("Which project will you delete:");
    let del = todoList.filter(item => item.title !== projTitle);
    return del

}


export function projectControl(){
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
