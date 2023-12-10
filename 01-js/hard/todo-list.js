/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todolist = [];
  }
    add(todo){
      this.todolist.push(todo)
    }
    getAll(){
      return this.todolist
    }
    remove(indexOfTodo){
      if(indexOfTodo > 0 && indexOfTodo < this.todolist.length || indexOfTodo == 0 ){
        this.todolist.splice(indexOfTodo, 1);
      }
    }
    update(index, updatedTodo){
      if(index > 0 && index < this.todolist.length || index == 0 ){
      return this.todolist[index] = updatedTodo
      }
    }
    get(indexOfTodo){
      if(indexOfTodo > 0 && indexOfTodo < this.todolist.length || indexOfTodo == 0 ){
      return this.todolist[indexOfTodo];
      }
      return null
    }
    clear(){
      return this.todolist = []
    }
}

module.exports = Todo;
