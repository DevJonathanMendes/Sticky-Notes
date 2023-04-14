interface Id { id: string };

const setItem = (id: string, obj: {}) => {
    localStorage.setItem(id, JSON.stringify(obj));
};

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
        const items = this.readItem();
        items.unshift(newItem);
        setItem(this.keyName, items);
    };

    readItem(id?: string) {
        const items = getItem(this.keyName);
        return id
            ? items.filter((item: Id) => item.id === id)
            : items;
    };

    updateItem(upItem: Id) {
        const items = this.readItem();
        setItem(this.keyName, items.map((item: Id) =>
            item.id === upItem.id ? upItem : item));
    };

    deleteItem(id: string) {
        const items = this.readItem();
        setItem(this.keyName, items.filter((item: Id) =>
            item.id != id));
    };
};

export default ManipulateLocalStorage;
