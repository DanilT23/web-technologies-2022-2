import api from "../services/api.js";

const TodoRepository = {

    async create (description) {
        try {
            return await api('/todo', {
                method: 'POST',
                body: JSON.stringify({description: description})
            });
        }
        catch (e) {
            return null;
        }
    },

    async get (id) {
        const response = await api('/todo/' + id, { method: 'GET' });
        return response.data;
    },

    async getAll () {
        try {
            const response = await api('/todo');
            return response.data;
        }
        catch (e) {
            return TodoRepository.getAll()
        }
    },

    async update (values) {
        try {
            return await api(`/todo/${values.id}`, {
                method: 'PUT',
                body: JSON.stringify({values : values})
            });
        }
        catch (e) {
            return null;
        }
    },

    async delete (id) {
        try {
            return await api(`/todo/${id}`, {method: 'DELETE'});
        }
        catch (e) {
            return TodoRepository.delete(id);
        }
    }
}

export default TodoRepository