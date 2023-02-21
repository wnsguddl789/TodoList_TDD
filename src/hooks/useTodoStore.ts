import { useSyncExternalStore } from "react";
import TodoStore, { TodoStoreSnapshot } from "../store/TodoStore";

const todoStore = new TodoStore();

export default function useTodoStore(): [TodoStoreSnapshot, TodoStore] {
	const snapShot = useSyncExternalStore(
		(onStoreChange) => {
			todoStore.addListener(onStoreChange);
			return () => todoStore.removerListener(onStoreChange);
		},
		() => todoStore.getSnapShot()
	);

	return [snapShot, todoStore];
}
