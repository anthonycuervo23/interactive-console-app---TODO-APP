require('colors');
const {saveDB, readDB} = require('./helpers/saveFile');
const Todos = require('./models/todos');
const { inquirerMenu, 
    pause, 
    readInput,
    listOfTodosToDelete,
    confirm,
    showCheckListTodos,
 } = require('./helpers/inquirer');




const main = async() => {

    let answer = '';
    const todos = new Todos();

    const todosDB = readDB();

    if(todosDB){
        todos.getTodosFromList(todosDB);
    }

    do {
        //show menu and save the selected option in variable
        answer = await inquirerMenu();
        
        //show an option according to the selected option
        switch (answer) {
            case '1':
                //create new todo
                const description = await readInput('Add a description: ');
                todos.newTodo(description);
            break;

            case '2':
                //list all todos
                todos.showAllTodos();
            break;
            
            case '3':
                //list all completed todos
                todos.showPendingOrCompletedTodos(true);
            break;
            
            case '4':
                //list all pending todos
                todos.showPendingOrCompletedTodos(false);
            break;
            
            case '5':
                //mark todo(s) completed
                const ids = await showCheckListTodos(todos.list);
                todos.toggleCompletedTodos(ids);
            break;
            
            case '6':
                //Delete todo
                const id = await listOfTodosToDelete(todos.list);

                if (id !== '0'){
                    const ok = await confirm('Are you sure?');
                    if( ok ) {
                        todos.deleteTodo(id);
                        console.log('TODO deleted successfully...')
                    }
                }
                
            break;
        }


        saveDB(todos.list);

        await pause();


    } while (answer !== '0');

}

main();