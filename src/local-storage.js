/**
 * Accessor to set and get local storage items
 * @param key - The key of the item
 * @param value - The value of the item
 * @returns {boolean|any}
 */
function ls(key, value) {
    if (arguments.length === 1) {
        return get(key);
    }

    return set(key, value);
}

/**
 * Set a local storage item
 * @param key - The key of the item
 * @param value - The value of the item
 * @returns {boolean}
 */
function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

    dispatchEvent('ls.set', {
        key,
        value
    });

    return true;
}

/**
 * Get a local storage item
 * @param key - The key of the item
 * @param def - The default value if the item is not set
 * @returns {null|any}
 */
function get(key, def = null) {
    let item = localStorage.getItem(key);

    if (item === null) {
        return def;
    }

    return JSON.parse(item);
}

/**
 * Remove a local storage item
 * @param key - The key of the item
 * @returns {boolean}
 */
function remove(key) {
    localStorage.removeItem(key);

    dispatchEvent('ls.remove', {
        key
    });

    return true;
}

/**
 * Clear local storage completely
 * @returns {boolean}
 */
function clear() {
    localStorage.clear();

    dispatchEvent('ls.clear', {});

    return true;
}

/**
 * Listen to events defined by the package
 * @param type - 'ls.set', 'ls.remove', or 'ls.clear'
 * @param listener - Callback function
 */
function on(type, listener) {
    window.addEventListener(type, listener);
}

/**
 * Stop listening to events defined by the package
 * @param type - 'ls.set', 'ls.remove', or 'ls.clear'
 * @param listener - Callback function
 */
function off(type, listener) {
    window.removeEventListener(type, listener);
}

function dispatchEvent(type, detail) {
    window.dispatchEvent(new CustomEvent(type, {
        detail
    }));
}

ls.set = set;
ls.get = get;
ls.remove = remove;
ls.clear = clear;
ls.on = on;
ls.off = off;

export default ls;