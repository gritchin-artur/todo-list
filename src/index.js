const mainContainer = document.getElementById('main-container');
const inputContainer = document.getElementById('input-container');
const input = document.getElementById('input');
const button = document.getElementById('button');
const todoList = document.getElementById('todo-list');

button.addEventListener('click', () => {
    if (input.value === '') {
        return;
    } else {
        const toDo = document.createElement('li');
        toDo.classList.add('to-do');

        const toDoText = document.createElement('p');
        toDoText.classList.add('to-do-text');
        toDoText.textContent = input.value;
        input.value = '';

        const controlContainer = document.createElement('div');
        controlContainer.classList.add('control-container');

        const editBtn = document.createElement('button');
        editBtn.classList.add('control-btn');
        editBtn.textContent = '✏️';

        editBtn.addEventListener('click', () => {
            const newText = prompt('Change your text:', toDoText.textContent);
            if (newText !== null) {
                toDoText.textContent = newText;
            }
        });

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('control-btn');
        closeBtn.textContent = '❌';

        closeBtn.addEventListener('click', () => {
            toDo.remove();
        });

        controlContainer.appendChild(editBtn);
        controlContainer.appendChild(closeBtn);
        toDo.appendChild(toDoText);
        toDo.appendChild(controlContainer);

        todoList.appendChild(toDo);
    }
});
