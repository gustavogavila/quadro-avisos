
const getAll = () => {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    
    return values;
}

const add = (key, json) => {
    const obj = JSON.stringify(json);
    localStorage.setItem(key, obj);
}

const remove = (key) => {
    localStorage.removeItem(key);
}

const findById = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const markedAsRead = (obj) => {
    const key = `postIt${obj.id}`;
    const objFinded = findById(key);
    const objModified = {...objFinded, lido: !objFinded.lido};
    localStorage.setItem(key, JSON.stringify(objModified));
}

export { getAll, add, remove, findById, markedAsRead };