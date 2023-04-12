const setItem = (id: string, obj: {}) => localStorage.setItem(id, JSON.stringify(obj));
const getItem = (id: string) => {
    const items = localStorage.getItem(id);
    return items ? JSON.parse(items) : null;
};

class ManipulateLocalStorage {
    constructor(key: string) {
        this.keyName = key;
        getItem(key) || setItem(this.keyName, []);
    };

    private keyName: string;

    createItem(newItem: {}) {
        const items = getItem(this.keyName);
        items.unshift(newItem);
        setItem(this.keyName, items);
    };

    readItem(id?: string) {
        return id ?
            getItem(this.keyName)
                .filter((item: { id: string }) => item.id === id)
            : getItem(this.keyName);
    };

    updateItem(upItem: { id: string }) {
        const items = this.readItem();
        setItem(this.keyName, items.map((item: { id: string }) =>
            item.id === upItem.id ? upItem : item));
    };

    deleteItem(id: string) {
        const items = getItem(this.keyName);
        setItem(this.keyName, items.filter((item: { id: string }) =>
            item.id != id));
    };
};

export default ManipulateLocalStorage;
