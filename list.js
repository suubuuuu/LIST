// script.js
function addtask() {
    const taskInput = document.getElementById("taskinput");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const table = document.getElementById("todolist").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();

        const taskCell = newRow.insertCell(0);
        const actionCell = newRow.insertCell(1);

        taskCell.textContent = taskValue;


        const editButton = document.createElement("button");
        editButton.textContent="Edit";
        editButton.className="edit-btn";
        editButton.onclick=function(){
            editTask(newRow,taskCell);
        };


        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function () {
            table.deleteRow(newRow.rowIndex - 1);
        };

        actionCell.appendChild(deleteButton);
        actionCell.appendChild(editButton);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}


function editTask(row,taskCell){
    const currentTask=taskCell.textContent;
    const newTask = prompt("Edit your task:",currentTask);
     

    if(newTask !== null && newTask.trim()!==""){
    taskCell.textContent=newTask.trim();


}else if (newTask===""){
    alert("task cannot be empty.")
}
}
