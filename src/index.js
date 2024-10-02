const todosListValues = [];
const addForm = document.getElementById("addForm");
const todoInput = document.querySelector('.todoInp');
const list = document.querySelector('.list');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = '';
    if (inputValue) {
        addItem(inputValue)
    }
});


const addItem = (item) => {
    todosListValues.push(item);
    generateList();
}

const editItem = (item) => {
    todosListValues.push(item);
}

const deleteItem = (item) => {
    todosListValues.filter((itemInArr) => itemInArr !== item)
}

const generateList = () => {
    list.innerHTML = '';

    todosListValues.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');

        const listItemText = document.createElement('div');
        listItemText.classList.add('list__item__text');
        listItemText.textContent = item;

        const editBtn = document.createElement('div');
        editBtn.classList.add('btn');
        editBtn.textContent = '✎';

        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('btn');
        deleteBtn.textContent = '✖';

        listItem.appendChild(listItemText);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        list.appendChild(listItem);
    });
}