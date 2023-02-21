import Todo from "./Todo";
import { v4 } from "uuid";

interface CartType {
	createTodo: ({ title, content }: { title: string; content: string }) => TodoList;
}

export default class TodoList {
	list: Todo[] = [];

	constructor({ list = [] }: { list?: Todo[] } = {}) {
		this.list = list;
	}
	createTodo: CartType["createTodo"] = ({ title, content }) => {
		const todo = new Todo({
			id: v4(),
			title,
			content,
			createdAt: new Date(),
			updatedAt: new Date(),
			isFinished: false,
		});

		return new TodoList({
			list: [...this.list, todo],
		});
	};
}
