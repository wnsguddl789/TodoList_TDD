import { describe, beforeEach, it } from "vitest";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

describe("TodoList", () => {
	let todoList: TodoList;

	beforeEach(() => {
		todoList = new TodoList();
	});

	it("Todo 생성 ", () => {
		const uuid = uuidv4();

		todoList = todoList.createTodo({
			id: uuid,
			input: { title: "testTodo title", content: "testTodo content" },
		});

		expect(todoList.list).toHaveLength(1);
	});

	it("Todo 수정", () => {
		const uuid = uuidv4();
		todoList = todoList.createTodo({
			id: uuid,
			input: { title: "testTodo title", content: "testTodo content" },
		});

		todoList = todoList.updateTodo({
			id: uuid,
			input: {
				title: "update testTodo title",
				content: "update testTodo content",
			},
		});

		const updatedTodo = todoList.list.find((todo) => todo.id === uuid);

		expect(updatedTodo).toEqual({
			id: uuid,
			title: "update testTodo title",
			content: "update testTodo content",
			createdAt: expect.anything(),
			updatedAt: expect.anything(),
			isFinished: false,
		});
	});

	it("Todo 삭제", () => {
		const uuid = uuidv4();
		const uuid2 = uuidv4();

		todoList = todoList.createTodo({
			id: uuid,
			input: { title: "testTodo title", content: "testTodo content" },
		});
		todoList = todoList.createTodo({
			id: uuid2,
			input: { title: "target testTodo title", content: "target testTodo content" },
		});

		todoList = todoList.deleteTodo({ id: uuid2 });

		expect(todoList.list).toHaveLength(1);
	});
});
