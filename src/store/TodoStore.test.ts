import { describe, beforeEach, it, vitest } from "vitest";

import TodoStore from "./TodoStore";
import Todo from "../models/Todo";

test("TodoStore", () => {
	const todoStore = new TodoStore();

	const handleChange = vitest.fn();

	todoStore.addListener(handleChange);

	todoStore.createTodo({ title: "testTodo title", content: "testTodo content" });

	expect(handleChange).toBeCalled();

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
