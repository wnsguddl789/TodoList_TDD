import TodoList from "../models/TodoLis";

export default class TodoStore {
	listeners = new Set<() => void>();

	snapShot = {};

	todoList = new TodoList();

	addListener(listener: () => void) {
		this.listeners.add(listener);
	}

	removerListener(listener: () => void) {
		this.listeners.delete(listener);
	}

	getSnapShot() {
		return this.snapShot;
	}

	publish() {
		this.listeners.forEach((listener) => listener());
	}

	createTodo({ title, content }: { title: string; content: string }) {
		this.todoList = this.todoList.createTodo({ title, content });

		// 상태를 저장하고 변경을 알린다.
		this.snapShot = {
			list: this.todoList.list,
		};

		this.publish();
	}
}
