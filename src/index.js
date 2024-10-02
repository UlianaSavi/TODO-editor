const todosListValues = JSON.parse(localStorage.getItem('list')) || ['Тестовая'];
const addForm = document.getElementById("addForm");
const todoInput = document.getElementById("todoInp");
const list = document.getElementById("todoList");

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value.trim();
    if (inputValue) {
        addItem(inputValue);
        updateStorage();
        generateList();
    }
    todoInput.value = '';
});

const addItem = (item) => {
    todosListValues.push(item);
};

const editItem = (id, newText) => {
    todosListValues[id] = newText;
};

const deleteItem = (id) => {
    todosListValues.splice(id, 1);
};

const updateStorage = () => {
    localStorage.setItem('list', JSON.stringify(todosListValues));
};

const handleAction = (action, index) => {
    if (action === 'edit') {
        const newText = prompt('Редактировать заметку:', todosListValues[index]);
        if (newText) {
            editItem(index, newText.trim());
        }
    } else if (action === 'delete') {
        deleteItem(index);
    }
    updateStorage();
    generateList();
};

const generateList = () => {
    list.innerHTML = '';

    todosListValues.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');

        const listItemText = document.createElement('div');
        listItemText.classList.add('list__item__text');
        listItemText.textContent = item;

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'editBtn', 'list__item__btn');
        editBtn.textContent = '✎';
        editBtn.addEventListener('click', () => handleAction('edit', index));

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'deleteBtn', 'list__item__btn');
        deleteBtn.textContent = '✖';
        deleteBtn.addEventListener('click', () => handleAction('delete', index));

        listItem.appendChild(listItemText);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        list.appendChild(listItem);
    });
};

generateList();
