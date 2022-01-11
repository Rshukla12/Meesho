export const loadData = (key) => {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value;
    } catch {
        return null;
    }
};

export const saveData = (key, value) => {
    try {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    } catch {
        return -1;
    }
};