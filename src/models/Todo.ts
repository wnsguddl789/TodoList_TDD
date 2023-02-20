type TodoType = {
	id: number;
	title: string;
	content: string;
	createdAt: Date;
	updatedAt: Date;
	isFinished: boolean;
};

export default class Todo {
	readonly id;
	readonly title;
	readonly content;
	readonly createdAt;
	readonly updatedAt;
	readonly isFinished;

	constructor(todo: TodoType) {
		this.id = todo.id;
		this.title = todo.title;
		this.content = todo.content;
		this.createdAt = todo.createdAt;
		this.updatedAt = todo.updatedAt;
		this.isFinished = todo.isFinished;
	}
}
