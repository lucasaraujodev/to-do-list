function addTodo(todoText, id) {
    const todoobject = {
        todoText: document.querySelector('.inputselect').value,
        checked: false,
        id: Date.now(),
    };
    console.log(todoobject); //console log for demo purpose
    renderTodo(todoobject);
};

const form = document.querySelector(".formselect");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
    form.reset();
});

function renderTodo(todo) { 
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
    const list = document.querySelector(".todo-list");
    const item = document.querySelector(`[data-key='${todo.id}']`);
    const isChecked = todo.checked ? "done" : "";
    const newlist = document.createElement("li");
    newlist.setAttribute("class", `todo-item ${isChecked}`);
    newlist.setAttribute("data-key", todo.id);
    newlist.innerHTML = `
        <input id="${todo.id}" type="checkbox">
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.todoText}</span>
        <button class="delete-todo js-delete-todo">
        <svg fill="var(--svgcolor)" xmls="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
        </button>
    `;
    //if the item already exists in the DOM
    if (item) {
    //replace it
    list.replaceChild(newlist, item);
    } else {
        //otherwhise append it to the end of the list
        list.append(newlist);
    }
};

//to mantain todo list when you refresh page
let todoArray =[];
todoArray.push(todoobject);

document.addEventListener("DOMContentLoaded", () => {
    const ref = localStorage.getItem("todoArray");
    if (ref) {
        todoArray = JSON.parse(ref);
        todoArray.forEach((t) => {
            renderTodo(t);
        });
    }
});

function toggleDone(key) {
    const index = todoArray.findIndex((myitem) => myitem.id === Number(key));
    todoArray[index].checked = !todoArray[index].checked;
    renderTodo(todoArray[index]);
    console.log(todoArray[index]); //for demo purpose
    console.logo(index); //for demo purpose
}

const list = document.querySelector(".js-todo-list");
list.addEventListener("click", (event) => {
    if (event.target.classList.contains("js-tick")) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
});

//delete
functiondeleteTodo(key) {
    const index = todoArray.findIndex((myitem) => myitem.id === Number(key));
    const emptytodo = {
        deleted: true,
        ...todoArray[index], };
        todoArray = todoArray.filter((myitem) => myitem.id !== Number(c));
        renderTodo(emptytodo);
}






/*function switchTheme (e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem ('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem ('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false); */

