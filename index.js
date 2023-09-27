document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.getElementById("form");
    const todoInput = document.getElementById("tarea");
    const todoList = document.getElementById("listaTareas");

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const tarea = todoInput.value.trim();
        if (tarea !== "") {
            agregarTarea(tarea);
            todoInput.value = "";
        }else{
            alert('Debes de indicar una tarea');
        }
    });

    function agregarTarea(text) {
        const listItem = document.createElement("tr");
        listItem.innerHTML = `
                <tbody>
                    <tr class="text-center">
                        <td class="align-middle col-8">${text}</td>
                        <td class="align-middle col-4">
                            <button class="delete-button btn btn-danger">ELIMINAR</button>
                            |
                            <button class="edit-button btn btn-warning">EDITAR</button>
                        </td>
                    </tr>
                </tbody>
    
        `;
        listItem.querySelector("button.delete-button").addEventListener("click", function () {
            listItem.remove();
        });

        //EDITAR
        const editButton = listItem.querySelector('button.edit-button');
        editButton.addEventListener('click', function(){
            const td = listItem.querySelector('td');
            const newText = prompt("Editar tarea", td.innerText);
            if(newText !== null && newText.trim() !== ''){
                td.innerText = newText;
            }
        });

        listItem.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });

        todoList.appendChild(listItem);
    }
});


