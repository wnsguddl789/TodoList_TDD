export default abstract class Store<Snapshot> {
	protected listeners = new Set<() => void>();

	protected snapShot = {} as Snapshot;

	addListener(listener: () => void) {
		this.listeners.add(listener);
	}

	removerListener(listener: () => void) {
		this.listeners.delete(listener);
	}

	getSnapShot() {
		return this.snapShot;
	}

	publish() {
		this.listeners.forEach((listener) => listener());
	}
}
