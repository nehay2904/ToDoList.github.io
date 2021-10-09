// getting all the required elements
console.log('hello world');
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;  //getting use
    if(userData.trim() != 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
}
showTasks();
// if users click on the add button
addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStroage = localStorage.getItem("New Todo");
    if(getLocalStroage == null){
        listArr = [];
    }
    else{
      listArr = JSON.parse(getLocalStroage);

    }
    listArr.push(userData);
    localStorage.setItem("New Todo" , JSON.stringify(listArr));
    showTasks();
}
function showTasks(){
    let getLocalStroage = localStorage.getItem("New Todo");
    if(getLocalStroage == null){
        listArr = [];
    }
    else{
      listArr = JSON.parse(getLocalStroage);
    }
    const pendingNumb = document.querySelector(".pendingNumb");
    pendingNumb.textContent = listArr.length;
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += ` <li> ${element} <span onclick="deleteTask(${index})";> <i class="fas fa-trash"></i></span></li>`;

    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}
function deleteTask(index){
    let getLocalStroage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStroage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo" , JSON.stringify(listArr));
    showTasks();
}