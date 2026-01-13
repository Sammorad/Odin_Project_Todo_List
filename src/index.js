//javascript index file 
import "./style.css";
import plus01 from "./images/plus.svg";
import searchImg from "./images/search-web.svg"
import { addProject, viewProject, delProject } from "./projects";

let todoList = [
    {title:"food", items: [
        {title: "buy", description:"make purchases", date: "2026-03-26", status:true},
        {title:"cook", description:"cook delicacy", date : "2026-03-27", status: true},
    ]}, 
    {title: "School", items : [

    ]}
]
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
    const inputDiv = document.createElement("div")//creating a container for input and its label//
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
    const ProjectCancel = document.createElement("button");
    ProjectCancel.textContent = "Cancel"
    ProjectCancel.type = "button"
    buttonDiv.appendChild(ProjectCancel)
    projectForm.appendChild(buttonDiv)
    div2.appendChild(projectForm)


    
})






