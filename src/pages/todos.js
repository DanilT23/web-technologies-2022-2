import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Form from "../components/form.js";
import Todo from "../services/todo.js";

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    await todosGenerate();

    const formItem = document.getElementById('todo-form');
    new Form(formItem, {'description': () => false,
    }, async (values) => {
        await Todo.create(values.description);
        await todosGenerate();
    })
    // create POST /todo { description: string }
    // get get /todo/1 - 1 это id
    // getAll get /todo
    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id
}

const todosGenerate = async () => {
    const todos = await Todo.getAll();
    document.querySelector('.todos').innerHTML = '';

    todos.forEach(todo => {
        const todoNew = todoGenerate(todo);
        document.querySelector('.todos').appendChild(todoNew);
    });
}
function todoGenerate(todo) {
    const todoNew = document.createElement('div');
    todoNew.classList.add('todo');

    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.classList.add('todo__checkbox');
    todoCheckbox.checked = todo.values;
    todoCheckbox.onchange = async function(e) {
        const checkbox = e.target.checked;
        e.target.checked = !e.target.checked;
        await Todo.update(checkbox);
        e.target.checked = !e.target.checked;
    }

    const todoDescription = document.createElement('span');
    todoDescription.classList.add('todo__description');
    todoDescription.innerText = todo.description;

    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo__delete');
    todoDelete.innerText = 'Удалить';
    todoDelete.onclick = async function() {
        await Todo.delete(todo.id);
        await todosGenerate();
    }

    todoNew.appendChild(todoCheckbox);
    todoNew.appendChild(todoDescription);
    todoNew.appendChild(todoDelete);
    return todoNew;
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
