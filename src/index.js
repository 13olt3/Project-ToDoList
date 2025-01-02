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

window.ToDoClass = class ToDoClass{
    constructor(toDoList){
        this.toDoList = toDoList;
    }
    addNewItem(userInput){
        this.toDoList[(Object.keys(this.toDoList).length)+1] = userInput;
    }
    get showList(){
        return this.toDoList;
    }
    arraySize(){
        console.log(Object.keys(this.toDoList).length);
        
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
        Prio: inputPrio()
    })
});

window.newArray = { 1: {Name: 'first', Age: 10}, 2: {Name: 'two', Age: 20}, 3:{Name: 'three', Age: 30}}
window.toDoList = new ToDoClass({});









