import { describe, beforeEach, it } from "vitest";

import TodoList from "./TodoList";

describe("TodoList", () => {
	let todoList: TodoList;

	beforeEach(() => {
		todoList = new TodoList();
	});

	it("create an Todo ", () => {
		todoList = todoList.createTodo({ title: "testTodo title", content: "testTodo content" });

		expect(todoList.list).toHaveLength(1);
	});
});
