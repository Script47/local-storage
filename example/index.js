import ls from '../src/local-storage.js';

// const keys = {
//     name: 'John Doe',
//     age: 25,
//     pi: Math.PI,
//     authenticated: true,
//     user: {
//         token: btoa(Math.random().toString())
//     },
//     languages: ['English', 'French', 'Russian'],
// };
//
// Object.keys(keys).forEach((key) => {
//     ls(key, keys[key]);
// });

ls.on('ls.set', ({ detail }) => {
    console.log(detail.key, detail.value); // name John Doe
});

ls.set('name', 'John Doe');