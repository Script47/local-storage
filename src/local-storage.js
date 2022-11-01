/**
 * Accessor to set and get local storage items
 * @param key - The key of the item
 * @param value - The value of the item
 * @returns {boolean|any}
 */
function ls(key, value) {
    if (arguments.length === 1) {
        if (typeof key === 'string') {
            return get(key);
        } else if (Object.prototype.toString.call(key) === '[object Object]') {
            return set(key);
        } else {
            throw new Error(`Unknown key type, expected string or object.`);
        }
    }

    return set(key, value);
}

/**
 * Set a local storage item
 * @param key - The key of the item
 * @param value - The value of the item
 * @returns {boolean}
 */
function set(key, value = undefined) {
    if (Object.prototype.toString.call(key) === '[object Object]') {
        Object.keys(key).forEach((k) => {
            localStorage.setItem(k, JSON.stringify(key[k]));

            dispatchEvent('ls.set', {
                key: k,
                value: key[k]
            });
        });
    } else {
        if (value === undefined) {
            throw new Error(`Missing argument value.`);
        }

        localStorage.setItem(key, JSON.stringify(value));

        dispatchEvent('ls.set', {
            key,
            value
        });
    }

    return true;
}

/**
 * Get a local storage item
 * @param key - The key of the item
 * @param def - The default value if the item is not set
 * @returns {any|undefined}
 */
function get(key, def = undefined) {
    let item = localStorage.getItem(key);

    if (item === null) {
        return undefined;
    }

    return JSON.parse(item);
}

/**
 * Remove a local storage item
 * @param key - The key of the item
 * @returns {boolean}
 */
function remove(key) {
    if (Array.isArray(key)) {
        key.forEach((k) => {
            localStorage.removeItem(k);

            dispatchEvent('ls.remove', {
                key
            });
        });
    } else {
        localStorage.removeItem(key);

        dispatchEvent('ls.remove', {
            key
        });
    }

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

export default ls;