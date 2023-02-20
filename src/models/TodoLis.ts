import Todo from "./Todo";

interface CartType {
	createTodo: ({ title, content }: { title: string; content: string }) => TodoList;
}

export default class TodoList {
	list: Todo[] = [];

	constructor({ list = [] }: { list?: Todo[] } = {}) {
		this.list = list;
	}
	createTodo: CartType["createTodo"] = ({ title, content }) => {
		const id = Math.max(0, ...this.list.map((i) => i.id));

		const todo = new Todo({
			id,
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
