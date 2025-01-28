(()=>{"use strict";var e={208:(e,t,o)=>{o.d(t,{A:()=>s});var n=o(601),r=o.n(n),i=o(314),c=o.n(i)()(r());c.push([e.id,"fieldset > div {\n    padding-top: 5px;\n}\nfieldset{\n    border: 3px solid rgb(155, 150, 150);\n    margin: 2px;\n    padding: 5px;\n}\n\nbody{\n    min-height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n.user{\n    padding-bottom: 10px;\n}\n\n.plus{\n    width: 10%;\n    padding-right: 10px;\n}\n.cross{\n    width: 100%;\n    \n    grid-column: 2 / 3;\n    grid-row: 1 / 20;\n    \n}\n\n.addToDo{\n    display: flex;  \n    justify-content: flex-start;\n    align-items: center; \n\n}\n\n#addToProject{\n    display:none;\n}\n\n#toDoData{\n    display: none;\n    grid-template-columns: 9fr 1fr;\n\n}\n#selectedToDo{\n    display: none;\n    border: 3px solid rgb(155, 150, 150);\n    margin: 2px;\n    padding: 5px;\n\n}\n\n#submit{\n    display:none;\n}\n\n.projects > div > div{\n    margin-left: 10px;\n}\n\n.sideBar{\n    grid-column: 1 / 2;\n    border: 3px solid black;\n    \n}\n#expand, #minimize{\n    width: 80%;    \n}\n\n.toggleOff{\n    display: none;\n}\n.toggleOn{\n    display: block;\n\n}\n\n\n",""]);const s=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(c[a]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},c=[],s=0;s<e.length;s++){var a=e[s],l=n.base?a[0]+n.base:a[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=o(u),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var s=o(i[c]);t[s].references--}for(var a=n(e,r),l=0;l<i.length;l++){var d=o(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=a}}},659:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o.nc=void 0;var n=o(72),r=o.n(n),i=o(825),c=o.n(i),s=o(659),a=o.n(s),l=o(56),d=o.n(l),u=o(540),p=o.n(u),m=o(113),h=o.n(m),f=o(208),y={};y.styleTagTransform=h(),y.setAttributes=d(),y.insert=a().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),r()(f.A,y),f.A&&f.A.locals&&f.A.locals;const D=o.p+"3cffe9a515498593b872.svg";o.p,window.createUser=function(){let e=prompt("Hi there, what is your name?");console.log(e),""!=e&&null!=e&&(document.querySelector(".user").textContent=`Welcome ${e}!`)},window.ToDoClass=class{constructor(e){this.toDoList=e}addNewItem(e){this.toDoList[this.arraySize()+1]=e}get showList(){return this.toDoList}arraySize(){return Object.keys(this.toDoList).length}removeItem(e){let t={};for(let o=1;o<e;++o)t[o]=this.toDoList[o];for(let o=e+1;o<=Object.keys(this.toDoList).length;++o)t[o-1]=this.toDoList[o];this.toDoList=t}projectNames(){let e=[];for(let t=1;t<=this.arraySize();++t)e.includes(this.toDoList[t].ProjectName)||null==this.toDoList[t].ProjectName||e.push(this.toDoList[t].ProjectName);return e}returnToDoName(e){let t=[];for(let o=1;o<=this.arraySize();++o)this.toDoList[o].ProjectName==e.replace("-"," ")&&t.push(this.toDoList[o].Title);return t}showProjectToDos(e){const t=this.returnToDoName(e),o=document.querySelector(`.${e}`);if(1==o.childElementCount)for(let e=0;e<t.length;++e){const n=document.createElement("div");n.textContent=t[e],n.style.cssText="grid-column: 1 / 3;",n.addEventListener("click",(()=>this.showToDoContent(n.textContent))),o.appendChild(n)}else if(o.childElementCount>1)for(;o.childElementCount>1;)o.removeChild(o.lastChild)}showToDoContent(e){let t={};const o=document.querySelector("#selectedToDo"),n=document.querySelector(".selectedTitle"),r=document.querySelector(".selectedDesc"),i=document.querySelector(".selectedPrio"),c=document.querySelector(".selectedDate"),s=document.querySelector(".selectedProject");for(let o=1;o<=this.arraySize();++o)this.toDoList[o].Title==e&&(t=this.toDoList[o]);"none"!=checkStyle("submit","display")&&"none"!=checkStyle("toDoData","display")&&document.querySelectorAll("#toDoData, #submit").forEach((e=>{e.style.display="none"})),o.style.cssText="display: block;",n.textContent="Title: "+t.Title,r.textContent="Description: "+t.Desc,i.textContent="Priority: "+t.Prio,c.textContent="Due date: "+t.DueDate,null!=t.ProjectName?s.textContent="Associated project: "+t.ProjectName:null==t.ProjectName&&(s.textContent="Associated project: none")}populateSidebar(){const e=document.querySelector(".projectless"),t=document.querySelector(".projects");removeAllChildNodes(e),removeAllChildNodes(t);for(let t=1;t<this.arraySize()+1;++t)if(null==this.toDoList[t].ProjectName){const o=document.createElement("div");o.textContent=this.toDoList[t].Title,o.setAttribute("class",this.toDoList[t].Title.replace(/\s+/g,"-")),o.addEventListener("click",(()=>this.showToDoContent(o.className))),e.appendChild(o)}let o=this.projectNames();for(let e=0;e<o.length;++e){const n=document.createElement("div"),r=document.createElement("img");r.src=D,r.setAttribute("id","expand"),n.setAttribute("class",o[e].replace(/\s+/g,"-")),n.textContent=o[e],r.addEventListener("click",(function(e){console.log(e.target.parentNode.className),"http://localhost:8080/a0101e53ed9ed4000e47.svg"==e.target.src?e.target.src="http://localhost:8080/3cffe9a515498593b872.svg":"http://localhost:8080/3cffe9a515498593b872.svg"==e.target.src&&(e.target.src="http://localhost:8080/a0101e53ed9ed4000e47.svg")})),r.addEventListener("click",(()=>this.showProjectToDos(n.className))),n.style.cssText="display: grid; grid-template-columns: 3fr 1fr;",n.appendChild(r),t.appendChild(n)}}},window.inputTitle=function(){return document.querySelector("#inputTitle").value},window.inputDesc=function(){return document.querySelector("#inputDesc").value},window.inputDate=function(){return document.querySelector("#inputDate").value},window.inputPrio=function(){const e=document.querySelector("#low"),t=document.querySelector("#medium"),o=document.querySelector("#high");return e.checked?"low":t.checked?"medium":o.checked?"high":void 0},window.inputProject=function(){const e=document.querySelector("#projectName"),t=document.querySelector("#addToExisting");return document.querySelector("#project").checked?t.checked?document.querySelector("#projectSelect").textContent:t.checked?void 0:e.value:null},window.toDoSize=function(){return Object.keys(toDoArray).length},document.querySelector("#submit").addEventListener("click",(function(){toDoList.addNewItem({Title:inputTitle(),Desc:inputDesc(),DueDate:inputDate(),Prio:inputPrio(),ProjectName:inputProject()}),toDoList.populateSidebar()})),window.toDoList=new ToDoClass({1:{Title:"ToDo1",Desc:"Desc1",DueDate:"date1",Prio:"low",ProjectName:"Clean room"},2:{Title:"ToDo2",Desc:"Desc2",DueDate:"date2",Prio:"high",ProjectName:null},3:{Title:"ToDo3",Desc:"Desc3",DueDate:"date3",Prio:"medium",ProjectName:"Project 1"},4:{Title:"ToDo4",Desc:"Desc4",DueDate:"date4",Prio:"medium",ProjectName:"Project 1"},5:{Title:"ToDo5",Desc:"Desc5",DueDate:"date5",Prio:"low",ProjectName:"Clean room"},6:{Title:"ToDo6",Desc:"Desc6",DueDate:"date6",Prio:"high",ProjectName:"Clean room"}}),window.checkedFunction=document.querySelector("input[name=project]"),checkedFunction.addEventListener("change",(function(e){"none"==checkStyle("addToProject","display")?document.getElementById("addToProject").style.display="block":"block"==checkStyle("addToProject","display")&&(document.getElementById("addToProject").style.display="none")})),window.addToExistingChecked=document.querySelector("input[name=addToExisting]"),addToExistingChecked.addEventListener("change",(function(e){const t=document.getElementById("projectName"),o=document.getElementById("projectSelect");1==t.disabled?(t.disabled=!1,o.disabled=!0):0==t.disabled&&(t.disabled=!0,o.disabled=!1);const n=toDoList.projectNames(),r=document.querySelector("#projectSelect");removeAllChildNodes(r);for(let e=1;e<=n.length;++e){const t=document.createElement("option");t.value=`Value: ${e}`,t.text=n[e-1],r.appendChild(t)}})),window.removeAllChildNodes=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},window.sideBarProjects=function(){const e=document.querySelector(".projects");for(let t=0;t<toDoList.projectNames().length;++t){const o=document.createElement("div");o.classList.add(toDoList.projectNames()[t].replace(/\s+/g,"-")),o.textContent=toDoList.projectNames()[t],e.appendChild(o)}},window.sidebarAdd=document.querySelector(".addToDo"),sidebarAdd.addEventListener("click",(function(){if("none"==checkStyle("submit","display")&&"none"==checkStyle("toDoData","display")){const e=document.querySelectorAll("#toDoData, #submit");document.querySelector("#selectedToDo").style.cssText="display: none",e.forEach((e=>{e.style.display="grid"}))}})),window.hideSidebar=document.querySelector(".cross"),hideSidebar.addEventListener("click",(function(){"none"!=checkStyle("submit","display")&&"none"!=checkStyle("toDoData","display")&&document.querySelectorAll("#toDoData, #submit").forEach((e=>{e.style.display="none"}))})),window.checkStyle=function(e,t){const o=document.getElementById(e);return window.getComputedStyle(o).getPropertyValue(t)}})();