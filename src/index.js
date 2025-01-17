import "./style.css";
import { compareAsc, format } from "date-fns";

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
            if(this.toDoList[i].ProjectName == projectName){
                toDoNames.push(this.toDoList[i].Title)
            }
        }
        return toDoNames;
    }

    showProjectToDos(projectName){
        const toDos = this.returnToDoName(projectName);
        let selectedProject = projectName.replace(/\s+/g, '-');
        const projectDiv = document.querySelector(`.${selectedProject}`);
        
        for(let i=0;i<toDos.length;++i){
            const toDoDivs = document.createElement('div');
            // let childCount = selectedProject.childElementCount;
            // for(let i=0;i<childCount;++i){
            //     selectedProject.removeChild(selectedProject.lastChild);
            // }
            toDoDivs.textContent = toDos[i];
            toDoDivs.addEventListener('click',()=>this.showToDoContent(toDoDivs.textContent))
            projectDiv.appendChild(toDoDivs);
        }
        
    }

    showToDoContent(toDoName){
        console.log(toDoName);
        ///////////
    }

    populateSidebar(){ 

        const projectless = document.querySelector('.projectless');
        const hasProject = document.querySelector('.projects');
        removeAllChildNodes(projectless);
        removeAllChildNodes(hasProject);
        
        for(let i=1;i<this.arraySize()+1;++i){
            if(this.toDoList[i].ProjectName == null){
                const thisTask = document.createElement('div');
                thisTask.textContent = this.toDoList[i].Title;
                projectless.appendChild(thisTask);
            }
        }
        let allProjects = this.projectNames();
        for (let i=0;i<allProjects.length;++i){
            
            const projectDiv = document.createElement('div');
            projectDiv.setAttribute('class', allProjects[i].replace(/\s+/g, '-'));
            projectDiv.textContent = allProjects[i];
            projectDiv.addEventListener('click',()=>this.showProjectToDos(projectDiv.textContent))           
            
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
        1:{Title: 'ToDo1', Desc: 'Desc1', DueDate: 'date1', Prio: 'low', ProjectName: 'Project 1'}, 
        2:{Title: 'ToDo2', Desc: 'Desc2', DueDate: 'date2', Prio: 'high', ProjectName: null},
        3:{Title: 'ToDo3', Desc: 'Desc3', DueDate: 'date3', Prio: 'medium', ProjectName: 'Project 1'}
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
        showToDo.forEach((element)=>{
            element.style.display = 'block';
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









