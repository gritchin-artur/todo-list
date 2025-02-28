const mainContainer = document.getElementById('main-container');
const inputContainer = document.getElementById('input-container');
const input = document.getElementById('input');
const button = document.getElementById('button');
const todoList = document.getElementById('todo-list');

let data = JSON.parse(localStorage.getItem('myData')) || [];

function getStorage() {
    localStorage.setItem('myData', JSON.stringify(data));
}

button.addEventListener('click', () => {
    if (input.value === '') {
        return;
    } else {
        data.push(input.value);
        updateList();
        input.value = '';
        return;
    }
});

function updateList() {
    todoList.innerHTML = createElement();
}

function createElement() {
    getStorage();

    return data
        .map(
            (toDo, i) =>
                `<li class='to-do'>
            <p class='to-do-text'>${toDo}</p>
            <div class='control-container'>
                <button class='control-btn' click onClick="getEdit(${i})">✏️</button>
                <button class='control-btn' click onClick="getDelete(${i})">❌</button>
            </div>
        </li>`
        )
        .join('');
}

function getEdit(i) {
    const newText = prompt('Change your text:', data[i]);
    if (newText !== null) {
        data[i] = newText;
        getStorage();
        updateList();
    }
}

function getDelete(i) {
    data.splice(i, 1);
    getStorage();
    updateList();
}

updateList();
