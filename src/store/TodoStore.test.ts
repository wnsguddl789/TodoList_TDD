import { vitest, describe, beforeEach, it } from "vitest";
import { v4 as uuidv4 } from "uuid";
import TodoStore from "./TodoStore";
import Todo from "../models/Todo";

describe("TodoStore", () => {
	it("Todo 생성 버튼 클릭", () => {
		const uuid = uuidv4();
		const todoStore = new TodoStore();

		const onClickCreateTodoButton = vitest.fn();

		todoStore.addListener(onClickCreateTodoButton);

		todoStore.createTodo({
			id: uuid,
			input: { title: "testTodo title", content: "testTodo content" },
		});

		expect(onClickCreateTodoButton).toBeCalled();

		expect(todoStore.getSnapShot()).toEqual({
			todoList: [
				new Todo({
					id: expect.anything(),
					title: "testTodo title",
					content: "testTodo content",
					createdAt: expect.anything(),
					updatedAt: expect.anything(),
					isFinished: false,
				}),
			],
		});
	});

	it("Todo 수정 버튼 클릭", () => {
		const todoStore = new TodoStore();

		const onClickUpdateTodoButton = vitest.fn();

		todoStore.addListener(onClickUpdateTodoButton);

		const uuid1 = uuidv4();
		const uuid2 = uuidv4();

		todoStore.createTodo({
			id: uuid1,
			input: { title: "testTodo title", content: "testTodo content" },
		});
		todoStore.createTodo({
			id: uuid2,
			input: { title: "testTodo title", content: "testTodo content" },
		});

		todoStore.updateTodo({
			id: uuid2,
			input: {
				title: "updated testTodo title",
				content: "updated testTodo content",
			},
		});

		expect(onClickUpdateTodoButton).toBeCalled();

		expect(todoStore.getSnapShot()).toEqual({
			todoList: [
				new Todo({
					id: uuid1,
					title: "testTodo title",
					content: "testTodo content",
					createdAt: expect.anything(),
					updatedAt: expect.anything(),
					isFinished: false,
				}),
				new Todo({
					id: uuid2,
					title: "updated testTodo title",
					content: "updated testTodo content",
					createdAt: expect.anything(),
					updatedAt: expect.anything(),
					isFinished: false,
				}),
			],
		});
	});
	it("Todo 삭제 버튼 클릭", () => {
		const todoStore = new TodoStore();

		const onClickUpdateTodoButton = vitest.fn();

		todoStore.addListener(onClickUpdateTodoButton);

		const uuid1 = uuidv4();
		const uuid2 = uuidv4();

		todoStore.createTodo({
			id: uuid1,
			input: { title: "testTodo title", content: "testTodo content" },
		});
		todoStore.createTodo({
			id: uuid2,
			input: { title: "testTodo title", content: "testTodo content" },
		});

		todoStore.deleteTodo({ id: uuid2 });

		expect(onClickUpdateTodoButton).toBeCalled();

		expect(todoStore.getSnapShot()).toEqual({
			todoList: [
				new Todo({
					id: uuid1,
					title: "testTodo title",
					content: "testTodo content",
					createdAt: expect.anything(),
					updatedAt: expect.anything(),
					isFinished: false,
				}),
			],
		});
	});
});
