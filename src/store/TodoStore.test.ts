import "@testing-library/jest-dom";

import TodoStore from "./TodoStore";
import Todo from "../models/Todo";

test("TodoStore", () => {
	const cartStore = new TodoStore();

	const handleChange = jest.fn();

	cartStore.addListener(handleChange);

	cartStore.createTodo({ title: "testTodo title", content: "testTodo content" });

	expect(handleChange).toBeCalled();

	expect(cartStore.getSnapShot()).toEqual({
		list: [
			new Todo({
				id: 1,
				title: "title",
				content: "content",
				createdAt: new Date(),
				updatedAt: new Date(),
				isFinished: false,
			}),
		],
	});
});
