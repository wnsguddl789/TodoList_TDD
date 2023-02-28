import { useState } from "react";
import useTodoStore from "./hooks/useTodoStore";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [input, setInput] = useState({
		title: "",
		content: "",
	});
	const [snapshot, todoStore] = useTodoStore();
	const { todoList } = snapshot;

	const onClickCreateTodoButton = () => todoStore.createTodo({ id: uuidv4(), input });
	const onClickUpdateTodoButton = (id: string) => todoStore.updateTodo({ id, input });
	const onClickDeleteTodoButton = (id: string) => todoStore.deleteTodo({ id });

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
			<button onClick={onClickCreateTodoButton}>생성</button>
			{todoList.map((todo) => (
				<div key={todo.id}>
					<p>{todo.title}</p>
					<p>{todo.content}</p>
					<button onClick={() => onClickUpdateTodoButton(todo.id)}>수정</button>
					<button onClick={() => onClickDeleteTodoButton(todo.id)}>삭제</button>
				</div>
			))}
		</div>
	);
};

export default App;
