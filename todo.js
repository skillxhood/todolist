var inputBox = document.getElementById("inp");
var listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("you must write something");
    }else{
        let li=document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    
    //removes element once we click on the x button
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//function for local storage to save data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//function for local storage to display data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


/*const getTodo(){
    var items = document.getElementById(inp);
}


document.getElementById("add").addEventListener("click", addTask);
document.getElementById("disp").innerHTML= items;*/




