const todosListValues = JSON.parse(localStorage.getItem('list')) || ['Тестовая'];
const addForm = document.getElementById("addForm");
const todoInput = document.querySelector('.todoInp');
const list = document.querySelector('.list');
const deleteBtns = document.querySelectorAll('.list');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = '';
    if (inputValue) {
        addItem(inputValue)
    }
});

deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.parentNode.value;
        if (id > -1) {
            deleteItem(id);
        }
    });
})

const addItem = (item) => {
    todosListValues.push(item);
    updateStorage('list', JSON.stringify(todosListValues));
    generateList();
}

const editItem = (item) => {
    console.log(123);
}

const deleteItem = (id) => {
    todosListValues.splice(id, 1);
    updateStorage('list', JSON.stringify(todosListValues));
    generateList();
}

const updateStorage = (id, data) => {
    localStorage.setItem(id, data)
}

const generateList = () => {
    list.innerHTML = '';

    todosListValues.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list__item');
        listItem.value = index;

        const listItemText = document.createElement('div');
        listItemText.classList.add('list__item__text');
        listItemText.textContent = item;

        const editBtn = document.createElement('div');
        editBtn.classList.add('btn', 'editBtn');
        editBtn.textContent = '✎';

        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('btn', 'deleteBtn');
        deleteBtn.textContent = '✖';

        listItem.appendChild(listItemText);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        list.appendChild(listItem);
    });
}

generateList();