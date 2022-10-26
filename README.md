# `@script47/local-storage`

A handy wrapper around localStorage.

- What you see is what you get; Simple and clean wrapper, nothing extra
- Respects types; no longer do you have to worry about casting items after retrieving them
- Custom events on actions; listen to events on `set`, `remove`, and `clear`

**Note:** This wrapper will not work if the `localStorage` API is not available.
---

## Installation

#### via NPM

```shell
npm i @script47/local-storage
```

#### via CDN

```html
<script src="https://unpkg.com/@script47/local-storage@0.0.5/dist/local-storage.js"></script>
```

## API

#### Set or get a key using the quick accessor:

```javascript
ls(key, value);
```

#### Example

```javascript
ls('key', 'value'); // true
ls('key'); // 'value'
```

---

#### Set a local storage item:

```javascript
set(key, value);
```

#### Example

```javascript
ls.set('key', 'value'); // true
```

---

#### Get a local storage item:

```javascript
get(key, def = undefined);
```

#### Example

```javascript
ls.set('key', 'value'); // true
ls.get('key', 'default value'); // 'value'
ls.get('i-dont-exist', 'default value'); // 'default value'
ls.get('i-dont-exist'); // undefined
```

---

#### Remove a local storage item:

```javascript
remove(key);
```

#### Example

```javascript
ls.set('key', 'value'); // true
ls.get('key'); // 'value'
ls.remove('key'); // true
ls.get('key'); // undefined
```

---

#### Clear local storage completely:

```javascript
clear();
```

#### Example

```javascript
ls.set('key', 'value'); // true
ls.set('another-key', 'another-value'); // true
ls.clear(); // true
ls.get('key'); // undefined
ls.get('another-key'); // undefined
```

---

#### Listen to events attached to localStorage actions by the package:

```javascript
on(type, listener);
```

#### Example

```javascript
ls.on('ls.set', ({detail}) => {
    console.log(`${detail.key}=${detail.value}`);
});

ls.on('ls.remove', ({detail}) => {
    console.log(`${detail.key} was removed.`);
});

ls.on('ls.clear', () => {
    console.log('localStorage was cleared.');
})

ls.set('name', 'John Doe');
ls.set('age', 35);

setTimeout(() => {
    ls.remove('name');

    setTimeout(() => {
        ls.clear();
    }, 2500);
}, 2500);
```