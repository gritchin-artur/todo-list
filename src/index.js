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
        toDo.textContent = input.value;
        input.value = '';

        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = '❌';

        closeBtn.addEventListener('click', () => {
            toDo.remove();
        });

        toDo.appendChild(closeBtn);

        todoList.appendChild(toDo);
    }
});
