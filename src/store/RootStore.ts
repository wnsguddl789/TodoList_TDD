import TodoStore from "./TodoStore";

interface Stores {
	todoStore: TodoStore;
}

class RootStore {
	protected todoStore: TodoStore;

	constructor(stores: Stores) {
		this.todoStore = stores.todoStore;
	}

	static createRootStoreInstance = (stores: Stores) => new RootStore(stores);

	static type = {
		TODO_STORE: "todoStore",
	};

	public getStores = () => ({
		[RootStore.type.TODO_STORE]: this.todoStore,
	});
}

export default RootStore;
