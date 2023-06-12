import TodoRepository from "../repository/todo.js";

class Todo {

    static async create (description) {return await TodoRepository.create(description);}

    static async get (id) {return await TodoRepository.get(id);}

    static async getAll () {return await TodoRepository.getAll();}

    static async update (values) {return await TodoRepository.update(values);}

    static async delete (id) {return await TodoRepository.delete(id);}
}

export default Todo