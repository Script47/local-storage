const keys = {
    name: 'John Doe',
    age: 25,
    pi: Math.PI,
    authenticated: true,
    user: {
        token: btoa(Math.random().toString())
    },
    languages: ['English', 'French', 'Russian'],
};

Object.keys(keys).forEach((key) => {
    ls(key, keys[key]);

    console.log(ls(key));
});
