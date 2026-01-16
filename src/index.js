//javascript index file 
import "./style.css";
import plus01 from "./images/plus.svg";
import searchImg from "./images/search-web.svg"
import {todoList, addProject, viewProject, delProject, getTodoList } from "./projects.js";
import projImg from "./images/list-box-outline.svg"

let currentTodoList = todoList

//adding various sections to template//
let section = document.querySelector("section");//section from template.html
let div1 = document.createElement("div")
div1.classList.add("section")
let div2 =document.createElement("div")
div2.classList.add("section");  
section.appendChild(div1)
section.appendChild(div2)
let div3 = document.createElement("div")//div tag warehousing menu and plus sign//
div3.classList.add("menu");
const menu = document.createElement("h2");
menu.innerText = "Menu";
div3.appendChild(menu);
const plus = document.createElement("img");
plus.src = plus01
div3.appendChild(plus)
div1.appendChild(div3)
const searchForm = document.createElement("form");//form warehousing search and its icon//
searchForm.classList.add("searchform")
const searchInput = document.createElement("input");
searchInput.type = "search";
searchInput.id = "searchId";
searchInput.style.width = "270px"
searchInput.name = "q";
searchInput.placeholder = "Search projects";
searchForm.appendChild(searchInput)
const searchIcon = document.createElement("img")//attached the search icon to 
searchIcon.src = searchImg;
searchIcon.id = "searchId";
searchIcon.classList.add("searchIcon")
searchForm.appendChild(searchIcon)
div1.appendChild(searchForm)
let div4 = document.createElement("div")//div contain the projects
div1.appendChild(div4)

const projectTitle = document.createElement("h2");//The prject anchor 
projectTitle.innerText = "Project";


div4.appendChild(projectTitle);
let div5 = document.createElement("div");//div containing a list of projects in the order they are added 
div4.appendChild(div5)
function ProjdivListerner(){
    
}

//attach each project in todo list to div 5 to display under project//
function updateProjectDisplay(){
    div5.innerHTML = "";
    for (let project of currentTodoList){
    let Projdiv = document.createElement("div");
    Projdiv.classList.add("projdiv")
    let projIcon = document.createElement("img");
    projIcon.classList.add("searchIcon")
    projIcon.src = projImg;
    Projdiv.appendChild(projIcon)
    let projList = document.createElement("h4");
    projList.textContent = project.title
    Projdiv.appendChild(projList)
    div5.appendChild(Projdiv)
    


}


}






plus.addEventListener("click", ()=>{
    //first is to ensure a form does not exist by clearing it if it does exist//
    const existing = div2.querySelector(".projectForm");
    if(existing) existing.remove()
    //adding an event listner to the plus icon
    //adding a title, an input, and a cancel and save button to the form//
    let projectForm = document.createElement("form");
    projectForm.classList.add("projectForm")
    const formHeading = document.createElement("h1");
    formHeading.textContent = "New Project";
    projectForm.appendChild(formHeading);
    //creating a container for input and its label//
    const inputDiv = document.createElement("div")
    inputDiv.classList.add("inputdiv")
    let projectLabel = document.createElement("label");
    projectLabel.htmlFor = "project-input";
    projectLabel.textContent = "Project name"
    inputDiv.appendChild(projectLabel)
    let projectInput = document.createElement("input");
    projectInput.id = "project-input"
    projectInput.type = "text"
    projectInput.required = true
    inputDiv.appendChild(projectInput)
    projectForm.appendChild(inputDiv)
    const buttonDiv = document.createElement("div");//creating a div for the button for easy styling//
    buttonDiv.classList.add("buttondiv")
    const ProjectSave = document.createElement("button");
    ProjectSave.type = "submit";
    ProjectSave.textContent = "Save";
    buttonDiv.appendChild(ProjectSave)
    //lets add an event listner to the Projectsave button//
    ProjectSave.addEventListener("click", function(event){
        event.preventDefault();
        //add the project to the and also under div 5 where Projects appear//
        try{
            console.log("Project input value: ", projectInput.value)
            currentTodoList = addProject(projectInput.value)
            console.log("Current todoList from getter:", getTodoList());
            updateProjectDisplay()
            
            console.log("Project displayed in UI");
        } catch(error){
            console.error("error adding project:", error);
            console.error("Stack trace:", error.stack);
        }
        
        
        
    })
    const ProjectCancel = document.createElement("button");
    ProjectCancel.textContent = "Cancel"
    ProjectCancel.type = "button"
    ProjectCancel.addEventListener("click", (event)=>{
         event.preventDefault();
        projectForm.remove();


    })
    buttonDiv.appendChild(ProjectCancel)
    projectForm.appendChild(buttonDiv)
    div2.appendChild(projectForm)   
})














