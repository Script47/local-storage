# local-storage

A simple but effective wrapper around localStorage.

---

## API

```javascript
/**
 * Accessor to set and get local storage items
 * @param key - The key of the item
 * @param value - The value of the item
 * @returns {boolean|any}
 */
ls(key, value);
```

#### Usage

```javascript
ls('key', 'value'); // true
ls('key'); // 'value'
```

---

```javascript
/**
 * Set a local storage item
 * @param key - The key of the item
 * @param value - The value of the item
 * @returns {boolean}
 */
set(key, value);
```

#### Usage

```javascript
ls.set('key', 'value'); // true
```

---

```javascript
/**
 * Get a local storage item
 * @param key - The key of the item
 * @param def - The default value if the item is not set
 * @returns {null|any}
 */
get(key, def = null);
```

#### Usage

```javascript
ls.set('key', 'value'); // true
ls.get('key', 'default value'); // 'value'
ls.get('i-dont-exist', 'default value'); // 'default value'
ls.get('i-dont-exist'); // null
```

---

```javascript
/**
 * Remove a local storage item
 * @param key - The key of the item
 * @returns {boolean}
 */
remove(key);
```

#### Usage

```javascript
ls.set('key', 'value'); // true
ls.get('key'); // 'value'
ls.remove('key'); // true
ls.get('key'); // null
```

---

```javascript
/**
 * Clear local storage completely
 * @returns {boolean}
 */
clear();
```

#### Usage

```javascript
ls.set('key', 'value'); // true
ls.set('another-key', 'another-value'); // true
ls.clear(); // -> true
ls.get('key'); // null
ls.set('another-key'); // null
```

---

```javascript
/**
 * Listen to events defined by the package
 * @param type - 'ls.set', 'ls.remove', or 'ls.clear'
 * @param listener - Callback function
 */
on(type, listener);
```

#### Usage

```javascript
ls.on('ls.set', ({detail}) => {
    console.log(detail.key, detail.value); // 'name' 'John Doe'
});

ls.set('name', 'John Doe'); // true
```