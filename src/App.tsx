import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toJS } from "mobx";
import { observer, Provider as MobxStoreProvider } from "mobx-react";

import RootStore from "./store/RootStore";
import TodoStore from "./store/TodoStore";

const stores = { todoStore: new TodoStore() };

const App = observer(() => {
	const [input, setInput] = useState({
		title: "",
		content: "",
	});
	const rootStore = useMemo(() => RootStore.createRootStoreInstance(stores), []);

	const { todoStore } = rootStore.getStores();
	const todoList = toJS(todoStore.todoList);

	const onClickCreateTodoButton = () => {
		const todo = {
			id: uuidv4(),
			...input,
			createdAt: new Date(),
			updatedAt: new Date(),
			isFinished: false,
		};
		todoStore.addTodoList(todo);
	};

	const onClickUpdateTodoButton = (id: string) => {
		todoStore.updateTodoList(id);
	};

	const onClickDeleteTodoButton = (id: string) => {
		todoStore.deleteTodo(id);
	};

	return (
		<MobxStoreProvider {...rootStore.getStores()}>
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
		</MobxStoreProvider>
	);
});

export default App;
