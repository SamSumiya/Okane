export function createUser(username, firstname, pw) {
    const name = getUser(username);
    if (name) {
        alert('Username is already taken');
        return (-1);
    }
    else {
        const user = {
            id: username,
            name: firstname,
            password: pw,
            month: new Date().getMonth()
        };
        setUser(user);
        loginUser(username, pw);
    }
}

export function loginUser(username, password) {
    const user = getUser(username);
    if (user) {
        if (user.password === password) {
            localStorage.setItem('CURRENTUSER', username);
            window.location.href = './dashboard/index.html';
        }
        else {
            alert('username and/or password is incorrect');
        }
    }
    else
        alert('Username is incorrect');
}

export function getUser(username) {
    const stringUser = localStorage.getItem(username);
    const parsedUser = JSON.parse(stringUser);
    return (parsedUser);
}

export function getCurrentUser() {
    const currentUser = localStorage.getItem('CURRENTUSER');
    const user = getUser(currentUser);
    return (user);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(user.id, stringyUser);
}

export function findById(someArray, Id) {
    for (let item of someArray) {
        if (item.id === Number(Id)) {
            return (item);
        }
    }
    return (-1);
}

export function logout() {
    localStorage.setItem('CURRENTUSER', []);
}

