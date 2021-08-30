const Todo = require("./todo");

class Todos {

    _list = {};

    get list(){
        const array = [];
        //this will return a list of all the keys
        Object.keys(this._list).forEach((key) => {
            const todo = this._list[key];
            array.push(todo);
        });

        return array;
    }

    constructor(){
        this._list = {};
    }

    deleteTodo(id = ''){
        if (this._list[id]){
            delete this._list[id];
        }
    }

    getTodosFromList(todos = []) {
        
        todos.forEach((todo) => {
            this._list[todo.id] = todo;
        });

    }

    newTodo(description){

        const todo = new Todo(description);
        this._list[todo.id] = todo;
    }

    showAllTodos(){

        console.log();

        this.list.forEach((todo, i) =>{

            const index = `${i + 1}`.green;
            const description = todo.description;
            const completedOn = todo.completedOn;
            const status = completedOn ? 'Completed'.green : 'Incompleted'.red;
            console.log(`${(index + '.')} ${description} :: ${status}`);
        });
    }

    showPendingOrCompletedTodos(isCompleted = true){

        console.log();
        let counter = 0;
        this.list.forEach((todo) => {

            const description = todo.description;
            const completedOn = todo.completedOn;
            const status = completedOn ? 'Completed'.green : 'Incompleted'.red;

            if(isCompleted){
                if(completedOn){
                    counter += 1;
                    console.log(`${(counter + '.').green} ${description} :: ${completedOn.green}`);
                }
            }else{
                if(!completedOn){
                    counter += 1;
                    console.log(`${(counter + '.').green} ${description} :: ${status}`);
                }
            }
        });


    }


    toggleCompletedTodos(ids = []){
        //we check if todo is not completed and if we selected
        //we put the date of completition
        ids.forEach((id) =>{

            const todo = this._list[id];
            if(!todo.completedOn){
                todo.completedOn = new Date().toISOString();
            }


        });

        // but if we want to uncomplete again a todo we have to 
        //check again and mark the completeOn option as null
        this.list.forEach((todo) => {

            if (!ids.includes(todo.id)){
                this._list[todo.id].completedOn = null;
            }
        });
    }


}

module.exports = Todos;