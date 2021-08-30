const { v4: uuidv4 } = require('uuid');

class Todo {

    id = '';
    description = '';
    completedOn =  null;

    constructor(description) {
        this.id = uuidv4();
       this.description = description;
       this.completedOn = null;
    }

}

module.exports = Todo;