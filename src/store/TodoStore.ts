import Store from "./Store";

import TodoList from "../models/TodoList";
import Todo from "../models/Todo";

import type { CreateTodoDto, UpdateTodoDto, DeleteTodoDto } from "../models/TodoList";

export type TodoStoreSnapshot = {
	todoList: Todo[];
};

export default class TodoStore extends Store<TodoStoreSnapshot> {
	private todoList = new TodoList();

	constructor() {
		super();
		this.takeSnapshot();
	}

	createTodo({ id, input }: CreateTodoDto) {
		this.todoList = this.todoList.createTodo({ id, input });

		this.update();
	}

	updateTodo({ id, input }: UpdateTodoDto) {
		this.todoList = this.todoList.updateTodo({ id, input });

		this.update();
	}

	deleteTodo({ id }: DeleteTodoDto) {
		this.todoList = this.todoList.deleteTodo({ id });

		this.update();
	}

	takeSnapshot() {
		this.snapShot = {
			todoList: this.todoList.list,
		};
	}

	update() {
		this.takeSnapshot();
		this.publish();
	}
}
