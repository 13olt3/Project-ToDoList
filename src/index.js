import "./style.css";
import { compareAsc, format } from "date-fns";
import plusImg from "./images/plus.svg";
import minusImg from "./images/minus.svg";

window.createUser = function createUser(){
    let username = prompt('Hi there, what is your name?');
    console.log(username);
    if ((username != "") && (username != null)){
        let inputName = document.querySelector('.user');
        inputName.textContent = `Welcome ${username}!`;
    } 
}

window.ToDoClass = class ToDoClass{
    constructor(toDoList){
        this.toDoList = toDoList;
    }
    addNewItem(userInput){
        this.toDoList[this.arraySize()+1] = userInput;
    }
    get showList(){
        return this.toDoList;
    }
    arraySize(){
        return (Object.keys(this.toDoList).length);        
    }
    removeItem(number){
        let resizedArray = {}
        for (let i=1;i<number;++i){
            resizedArray[i] = this.toDoList[i]
        }
        for (let i = number+1; i <= Object.keys(this.toDoList).length; ++i){
            resizedArray[i-1] = this.toDoList[i];
        }
        this.toDoList = resizedArray;
    }
    projectNames(){
        let projectNames = [];
        
        for (let i=1;i<=this.arraySize();++i){
            if ((!projectNames.includes(this.toDoList[i].ProjectName)) && (this.toDoList[i].ProjectName != null)){
                projectNames.push(this.toDoList[i].ProjectName)
            }
        }
        return projectNames;
    }

    returnToDoName(projectName){
        let toDoNames = []
        for (let i=1;i<=this.arraySize();++i){
            if(this.toDoList[i].ProjectName == projectName.replace('-',' ')){
                toDoNames.push(this.toDoList[i].Title)
            }
        }
        return toDoNames;
    }

    showProjectToDos(projectName){
        const toDos = this.returnToDoName(projectName);
        const projectDiv = document.querySelector(`.${projectName}`);
        if ( projectDiv.childElementCount == 1){            
            for(let i=0;i<toDos.length;++i){
                const toDoDivs = document.createElement('div');
                toDoDivs.textContent = toDos[i];
                toDoDivs.style.cssText = "grid-column: 1 / 3;"
                toDoDivs.addEventListener('click',()=>this.showToDoContent(toDoDivs.textContent))
                projectDiv.appendChild(toDoDivs);
            }
        }
        else if (projectDiv.childElementCount > 1 ){
            while (projectDiv.childElementCount > 1){
                projectDiv.removeChild(projectDiv.lastChild);
            }
        }               
    }

    showToDoContent(toDoName){

        let selectedToDo = {}
        const displayPanel = document.querySelector('#selectedToDo');
        const displayTitle = document.querySelector('.selectedTitle');
        const displayDesc = document.querySelector('.selectedDesc');
        const displayPrio = document.querySelector('.selectedPrio');
        const displayDate = document.querySelector('.selectedDate');
        const displayProj = document.querySelector('.selectedProject');
        for (let i=1;i<=this.arraySize();++i){
            if (this.toDoList[i].Title == toDoName){
                selectedToDo = this.toDoList[i];                
            }
        }
        if( (checkStyle('submit','display') !='none') && (checkStyle('toDoData','display') != 'none')){
            const showToDo = document.querySelectorAll('#toDoData, #submit');
            showToDo.forEach((element)=>{
                element.style.display = 'none';
            });
        }
        displayPanel.style.cssText = "display: block;";
        displayTitle.textContent = 'Title: ' + selectedToDo.Title;
        displayDesc.textContent = 'Description: ' + selectedToDo.Desc;
        displayPrio.textContent = 'Priority: ' + selectedToDo.Prio;
        displayDate.textContent = 'Due date: ' + selectedToDo.DueDate;
        if(selectedToDo.ProjectName != null){
            displayProj.textContent = 'Associated project: ' + selectedToDo.ProjectName;
        }
        else if (selectedToDo.ProjectName == null){
            displayProj.textContent = 'Associated project: ' + 'none';
        }
        


    }

    populateSidebar(){ 

        const projectless = document.querySelector('.projectless');
        const hasProject = document.querySelector('.projects');
        removeAllChildNodes(projectless);
        removeAllChildNodes(hasProject);
        //no project
        for(let i=1;i<this.arraySize()+1;++i){
            if(this.toDoList[i].ProjectName == null){
                const thisTask = document.createElement('div');
                thisTask.textContent = this.toDoList[i].Title;
                thisTask.setAttribute('class',this.toDoList[i].Title.replace(/\s+/g, '-'));
                
                /////
                thisTask.addEventListener('click',()=>this.showToDoContent(thisTask.className));
                /////     
                projectless.appendChild(thisTask);

            }
        }

        //has project
        let allProjects = this.projectNames();
        for (let i=0;i<allProjects.length;++i){
            
            const projectDiv = document.createElement('div');
            const plus = document.createElement('img');
            plus.src = plusImg;

            plus.setAttribute('id', 'expand');


            projectDiv.setAttribute('class', allProjects[i].replace(/\s+/g, '-'));
            projectDiv.textContent = allProjects[i];
            // plus.addEventListener('click', function(e){
            //     console.log(e.target.parentNode.className);
            //     console.log(e.target.parentNode.childElementCount);
            //     if(e.target.parentNode.childElementCount > 1){
            //        e.target.parentNode.removeChild(e.target.parentNode.lastChild); 
            //     }
            // });

            plus.addEventListener('click', function(e){
                console.log(e.target.parentNode.className)
                if (e.target.src == 'http://localhost:8080/a0101e53ed9ed4000e47.svg'){
                    e.target.src = 'http://localhost:8080/3cffe9a515498593b872.svg' 
                }
                else if (e.target.src == 'http://localhost:8080/3cffe9a515498593b872.svg'){
                    e.target.src = 'http://localhost:8080/a0101e53ed9ed4000e47.svg'
                }
            });
            plus.addEventListener('click',()=>this.showProjectToDos(projectDiv.className));
            projectDiv.style.cssText = "display: grid; grid-template-columns: 3fr 1fr;";

            projectDiv.appendChild(plus);
            // projectDiv.addEventListener('click',()=>this.showProjectToDos(projectDiv.className));
            hasProject.appendChild(projectDiv);
        }
    }
}

window.inputTitle = function inputTitle(){
    const title = document.querySelector('#inputTitle');
    return title.value;
}
window.inputDesc = function inputDesc(){
    const desc = document.querySelector('#inputDesc');
    return desc.value;
}
window.inputDate = function inputDate(){
    const date = document.querySelector('#inputDate');
    return date.value;
}
window.inputPrio = function inputPrio(){
    const low = document.querySelector('#low');
    const medium = document.querySelector('#medium');
    const high = document.querySelector('#high');
    if(low.checked){
        return 'low'
    }
    else if (medium.checked){
        return 'medium'
    }
    else if (high.checked){
        return 'high'
    }
}
window.inputProject = function inputProject(){
    const projectName = document.querySelector('#projectName');
    const checkExisting = document.querySelector('#addToExisting');
    const addToProject = document.querySelector('#project')
    if (!addToProject.checked){
        return null
    }
    else if (checkExisting.checked){
        const selected = document.querySelector('#projectSelect');
        return selected.textContent;
    }
    else if(!checkExisting.checked){
        return projectName.value;
    }


}
window.toDoSize = function toDoSize(){
    let size = Object.keys(toDoArray);
    return size.length;
}

const button = document.querySelector('#submit');
button.addEventListener('click', function(){
    toDoList.addNewItem({
        Title: inputTitle(),
        Desc: inputDesc(),
        DueDate: inputDate(),
        Prio: inputPrio(),
        ProjectName: inputProject()
        
    })
    toDoList.populateSidebar();
});



window.toDoList = new ToDoClass({
        1:{Title: 'ToDo1', Desc: 'Desc1', DueDate: 'date1', Prio: 'low', ProjectName: 'Clean room'}, 
        2:{Title: 'ToDo2', Desc: 'Desc2', DueDate: 'date2', Prio: 'high', ProjectName: null},
        3:{Title: 'ToDo3', Desc: 'Desc3', DueDate: 'date3', Prio: 'medium', ProjectName: 'Project 1'},
        4:{Title: 'ToDo4', Desc: 'Desc4', DueDate: 'date4', Prio: 'medium', ProjectName: 'Project 1'},
        5:{Title: 'ToDo5', Desc: 'Desc5', DueDate: 'date5', Prio: 'low', ProjectName: 'Clean room'},
        6:{Title: 'ToDo6', Desc: 'Desc6', DueDate: 'date6', Prio: 'high', ProjectName: 'Clean room'}
});


window.checkedFunction = document.querySelector("input[name=project]");
checkedFunction.addEventListener('change',function(e){
       
    if(checkStyle('addToProject', 'display') == 'none'){
        document.getElementById("addToProject").style.display = 'block';
    }
    else if(checkStyle('addToProject', 'display') == 'block'){
        document.getElementById("addToProject").style.display = 'none';
    }
});

window.addToExistingChecked = document.querySelector("input[name=addToExisting]");
addToExistingChecked.addEventListener('change',function(e){
    const projectName = document.getElementById('projectName');
    const selectProjects = document.getElementById('projectSelect');
    if (projectName.disabled == true){
        projectName.disabled = false;
        selectProjects.disabled = true;
    }
    else if (projectName.disabled == false){
        projectName.disabled = true;
        selectProjects.disabled = false;
    }
    const allProjects = toDoList.projectNames();
    const projectsList = document.querySelector('#projectSelect');
    removeAllChildNodes(projectsList);

    for (let i=1;i<=(allProjects.length);++i){
        const newOption = document.createElement('option');
        newOption.value = `Value: ${i}`
        newOption.text = allProjects[i-1]
        projectsList.appendChild(newOption);
    }    

});

window.removeAllChildNodes = function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

window.sideBarProjects = function sideBarProjects(){
    const projects = document.querySelector('.projects');
    
    for(let i=0;i<toDoList.projectNames().length;++i){
        const createDiv = document.createElement('div');
        createDiv.classList.add(toDoList.projectNames()[i].replace(/\s+/g, '-'));
        createDiv.textContent = toDoList.projectNames()[i];
        projects.appendChild(createDiv);
    }
}

window.sidebarAdd = document.querySelector('.addToDo');
sidebarAdd.addEventListener('click',function(){
    if( (checkStyle('submit','display') =='none') && (checkStyle('toDoData','display') == 'none')){
        const showToDo = document.querySelectorAll('#toDoData, #submit');
        const hideData = document.querySelector('#selectedToDo');
        hideData.style.cssText = 'display: none';
        showToDo.forEach((element)=>{
            element.style.display = 'grid';
        });
    }
})
window.hideSidebar = document.querySelector('.cross');
hideSidebar.addEventListener('click',function(){
    if( (checkStyle('submit','display') !='none') && (checkStyle('toDoData','display') != 'none')){
        const showToDo = document.querySelectorAll('#toDoData, #submit');
        showToDo.forEach((element)=>{
            element.style.display = 'none';
        });
    }
})



window.checkStyle = function checkStyle(item, property){
    const check = document.getElementById(item);
    const style = window.getComputedStyle(check);
    const propertyValue = style.getPropertyValue(property);
    return propertyValue;
}




// window.myOptions = [{
//     text: 'option 1',
//     value: 'value 1'
// },
// {
//     text: 'option 2',
//     value: 'value 2',
//     selected: true
// },
// {
//     text: 'option 3',
//     value: 'value 3'
// }]
// window.testButton = document.querySelector('#testButton');
// testButton.addEventListener('click',function(){
//     const optionList = document.querySelector('#testSelect');
//     for (let i=0;i<myOptions.length;++i){
//         const newOption = document.createElement('option');
//         newOption.value = myOptions[i].value;
//         newOption.text = myOptions[i].text;
//         optionList.appendChild(newOption);
//     }

// })

// window.testFunction = function testFunction(){
//     const testSelector = document.querySelector("input[name=testCheckBox]");
//     const extraInformation = document.createElement('div');
//     extraInformation.style.cssText = "background-color: red; font-size: 1em;";
//     extraInformation.textContent = 'extra Info';
//     testSelector.appendChild(extraInformation);
// }









