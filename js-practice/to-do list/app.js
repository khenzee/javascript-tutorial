const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const count = document.getElementById("count");

let tasks = [];

renderTasks();

form.addEventListener("submit", function(event){

    event.preventDefault(); // Prevents page reload on submit

    const task = taskInput.value.trim();

    if(task === "") return;

    tasks.push({
        text: task,
        completed: false
    });

    renderTasks();

    taskInput.value = "";
});



function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li =
            document.createElement("li");

        li.innerHTML = `
            <p class="${
                task.completed ? "done" : ""
            }">
                ${task.text}
            </p>

            <div class="actions">

                <button class="complete">
                    ${
                        task.completed
                        ? "Undo"
                        : "Done"
                    }
                </button>

                <button class="delete">
                    Delete
                </button>

            </div>
        `;

        const completeBtn =
            li.querySelector(".complete");

        const deleteBtn =
            li.querySelector(".delete");

        completeBtn.addEventListener(
            "click",
            function(){

                tasks[index].completed =
                !tasks[index].completed;

                renderTasks();
            }
        );

        deleteBtn.addEventListener(
            "click",
            function(){

                tasks.splice(index,1);
                renderTasks();
            }
        );

        taskList.appendChild(li);

    });

    count.textContent = tasks.length;
}