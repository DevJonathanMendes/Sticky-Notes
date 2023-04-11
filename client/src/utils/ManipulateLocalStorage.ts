const setItem = (id: string, obj: {}) => localStorage.setItem(id, JSON.stringify(obj));
const getItem = (id: string) => JSON.parse(localStorage.getItem(id));

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
        const up = items.filter((item: { id: string }) => item.id !== upItem.id);
        up.unshift(upItem);
        setItem(this.keyName, up);
    };

    deleteItem(id: string) {
        const items = getItem(this.keyName);
        setItem(this.keyName, items.filter((item: { id: string }) =>
            item.id != id));
    };
};

export default ManipulateLocalStorage;
