import './styles.css'
import {Todo , TodoList} from './class'
import { crearTodoHTML } from './js/componentes'
// import {Todo} from './class/todo.class.js'
// import {TodoList} from './class/todo-list.class.js'


export const todoList = new TodoList()

todoList.todos.forEach( crearTodoHTML )


console.log('todos', todoList.todos)
