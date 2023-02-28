import Todo from "./Todo";

export interface CreateTodoDto {
	id: string;
	input: {
		title: string;
		content: string;
	};
}

export interface UpdateTodoDto {
	id: string;
	input: {
		title: string;
		content: string;
	};
}

export interface DeleteTodoDto {
	id: string;
}

interface TodoMethod {
	createTodo: ({ id, input }: CreateTodoDto) => TodoList;
	updateTodo: ({ id, input }: UpdateTodoDto) => TodoList;
	deleteTodo: ({ id }: DeleteTodoDto) => TodoList;
}

export default class TodoList {
	list: Todo[] = [];

	constructor({ list = [] }: { list?: Todo[] } = {}) {
		this.list = list;
	}

	private getTodoList = () => this.list;

	private generateTodo = ({ id, input: { title, content } }: CreateTodoDto) =>
		new Todo({
			id,
			title,
			content,
			createdAt: new Date(),
			updatedAt: new Date(),
			isFinished: false,
		});

	public createTodo: TodoMethod["createTodo"] = ({ id, input }) => {
		const todo = this.generateTodo({ id, input });

		return new TodoList({
			list: [...this.getTodoList(), todo],
		});
	};

	public updateTodo: TodoMethod["updateTodo"] = ({ id, input }) => {
		const todo = this.generateTodo({ id, input });
		return new TodoList({
			list: [...this.getTodoList().filter((todo) => todo.id !== id), todo],
		});
	};

	public deleteTodo: TodoMethod["deleteTodo"] = ({ id }) => {
		return new TodoList({
			list: [...this.getTodoList().filter((todo) => todo.id !== id)],
		});
	};
}
