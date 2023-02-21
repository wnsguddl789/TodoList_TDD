import { useState } from "react";
import useTodoStore from "./hooks/useTodoStore";

const App = () => {
	const [input, setInput] = useState({
		title: "",
		content: "",
	});
	const [snapshot, todoStore] = useTodoStore();
	const { todoList } = snapshot;

	return (
		<div>
			<h1>메인페이지</h1>
			<input
				name="title"
				onChange={(e) => setInput((prev) => ({ ...prev, title: e.target.value }))}
			/>
			<input
				name="content"
				onChange={(e) => setInput((prev) => ({ ...prev, content: e.target.value }))}
			/>
			<button
				onClick={() => todoStore.createTodo({ title: input.title, content: input.content })}
			>
				생성
			</button>
			{todoList.map((todo) => (
				<div key={todo.id}>
					<p>{todo.title}</p>
					<p>{todo.content}</p>
				</div>
			))}
		</div>
	);
};

export default App;
