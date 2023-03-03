import RootStore from "./RootStore";
import { makeObservable, observable } from "mobx";
import Todo from "../models/Todo";

export default class TodoStore {
	readonly todoList = observable<Todo>([]);
	constructor() {}

	public addTodoList = (todo: Todo) => {
		this.todoList.push(todo);
	};

	public updateTodoList = (id: Todo["id"]) => {};

	public deleteTodo = (id: Todo["id"]) => {};
}
