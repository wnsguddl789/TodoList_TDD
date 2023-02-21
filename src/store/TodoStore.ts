import Store from "./Store";

import TodoList from "../models/TodoList";
import Todo from "../models/Todo";

export type TodoStoreSnapshot = {
	todoList: Todo[];
};

export default class TodoStore extends Store<TodoStoreSnapshot> {
	private todoList = new TodoList();

	constructor() {
		super();
		this.takeSnapshot();
	}

	createTodo({ title, content }: { title: string; content: string }) {
		this.todoList = this.todoList.createTodo({ title, content });

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
