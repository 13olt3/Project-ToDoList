import "./style.css";
import { compareAsc, format } from "date-fns";

// window.ToDo = class ToDo {
//     constructor(anArray){
//         this.anArray = anArray;
//     }

//     get itemName(){
//         return console.log(`This item is called ${this.toDoItem}`);
//     }
//     getArrayItem(arrayIndex){
//         console.log(`Name: ${this.anArray[arrayIndex].Name} is ${this.anArray[arrayIndex].Age}`)
//     }
// }


// window.addNum = function addNum(num1,num2){
//     return num1+num2;
// }
// console.log('hi');
// window.myVar = 'asdf';

// window.myClass = [
//     'asdf','asdf2','asdf3'

// ]


// window.myArray = {Name:'asdf', Age:'2', asdf: null}
// window.myOtherArray = [1,2,3];


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
        let projectNames = {};
        
        for (let i=1;i<=this.arraySize();++i){
            projectNames[i] = {Text: this.toDoList[i].ProjectName, Value: `Value ${i}`};
        }
        return projectNames;
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

}
window.toDoSize = function toDoSize(){
    let size = Object.keys(toDoArray);
    return size.length;
}

const button = document.querySelector('.submit');
button.addEventListener('click', function(){
    toDoList.addNewItem({
        Title: inputTitle(),
        Desc: inputDesc(),
        DueDate: inputDate(),
        Prio: inputPrio(),
        ProjectName: null
        
    })
});



// window.newArray = { 1: {Name: 'first', Age: 10}, 2: {Name: 'two', Age: 20}, 3:{Name: 'three', Age: 30}}
window.toDoList = new ToDoClass({1:{Title: 'ToDo1', Desc: 'Desc1', DueDate: 'date1', Prio: 'Low', ProjectName: 'Project1'}, 2:{Title: 'ToDo2', Desc: 'Desc2', DueDate: 'date2', Prio: 'High', ProjectName: null}});

window.testFunction = function testFunction(){
    const testSelector = document.querySelector("input[name=testCheckBox]");
    const extraInformation = document.createElement('div');
    extraInformation.style.cssText = "background-color: red; font-size: 1em;";
    extraInformation.textContent = 'extra Info';
    testSelector.appendChild(extraInformation);
}
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
    for (let i=1;i<=(Object.keys(allProjects).length);++i){
        const newOption = document.createElement('option');
        newOption.value = allProjects[i].Value;
        newOption.text = allProjects[i].Text;
        projectsList.appendChild(newOption);
    }    

});



window.checkStyle = function checkStyle(item, property){
    const check = document.getElementById(item);
    const style = window.getComputedStyle(check);
    const propertyValue = style.getPropertyValue(property);
    return propertyValue;
}


window.myOptions = [{
    text: 'option 1',
    value: 'value 1'
},
{
    text: 'option 2',
    value: 'value 2',
    selected: true
},
{
    text: 'option 3',
    value: 'value 3'
}]
window.testButton = document.querySelector('#testButton');
testButton.addEventListener('click',function(){
    const optionList = document.querySelector('#testSelect');
    for (let i=0;i<myOptions.length;++i){
        const newOption = document.createElement('option');
        newOption.value = myOptions[i].value;
        newOption.text = myOptions[i].text;
        optionList.appendChild(newOption);
    }

})









