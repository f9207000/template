import m1, {n} from './test_1.js';
import m2 from './test_2.js';
function f1() {
    let x;
    for (let i = 0; i < 10; i++) {
       x = 'foo';
    }
    const y = 10;
    y++; // error
}
let user = {
    name: 'Bob',
    friends: ['Alice', 'John'],
    greet: function() {
        this.friends.forEach(f => {
            /* lexical this */
            console.log('Hi ' + f + ", I'm " + this.name);
        });
    }
}
function f2(x, y = 12) { // default param
    return x + y;
}
function f3(x, ...y) { // rest param
    return x + y.length; // y is an array
}
function f4(x, y, z) {
    return x + y + z;
}
class Member {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `I\'m ${this.name}`;
    }
    static yell() {
        return 'Ahh~';
    }
}

let user1 = {
    name: 'Bob',
    friends: ['AA', 'JJ'],
    [Symbol.iterator]: function* () {    // generator
        for (let i = 0; i < this.friends.length; i++) {
            yield this.friends[i];
        }
    }
}

window.onload = function() {
    console.log(n);
    m1();
    m2();
    user.greet();
    console.log(f2(3));
    console.log(f3(3, 'hello', true));
    console.log(f4(...[1, 2, 3]));

    let {name, friends} = user;
    console.log(name) // 'Bob'
    console.log(friends) // ['Alice', 'John']

    let m = new Member('Bob');
    console.log(m.greet()) // "I'm Bob"
    console.log(Member.yell()) // 'Ahh~' 

    for (let f of user1) {
        console.log(f); // 'Alice', 'John'
    }

    f1();
};