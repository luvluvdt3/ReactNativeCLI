// -------- Spread Operator && Rest Operator --------
const hobbies = ['Sports', 'Cooking'];
const copiedHobbiesArray = [...hobbies, ...['travelling']];
console.log(copiedHobbiesArray); //[ 'Sports', 'Cooking', 'travelling' ]

const person = { name: 'Max', age: 30 };
const copiedPerson = { ...person, ...{hobby: 'travelling'} }; 
console.log(copiedPerson); //{ name: 'Max', age: 30, hobby: 'travelling' }

const toArray = (...args) => args;
//equals to
// const toArray = (...args) => {
//     return args;
// }
console.log(toArray(1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

//---------------------------------------------------------------------//
// -------- Destructuring --------
const person2 = {
    name: 'Max',
    age: 30,
    occupation: 'Software Engineer',
};

const { name, age } = person2;
//equals to
// const name = person2.name;
// const age = person2.age;
console.log(name, age); //Max 30

const numbers = [1, 2, 3, 4, 5];
const[first, second,third] = numbers;
console.log(first, second, third); //1 2 3

const {occupation, ...rest} = person2;
console.log(rest); //{ name: 'Max', age: 30 }


//---------------------------------------------------------------------//
// -------- Async, Await & Promises --------
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// 3 states of promises: pending, fulfilled, rejected

const getUser = username => {
    const API_URL = `https://api.github.com/users/${username}`;
    return fetch(API_URL).then((value) => value.json());
}
getUser('openai').then((data) => console.log(data));

const getUserAsync = async (username) => {
    const API_URL = `https://api.github.com/users/${username}`;
    const response = await fetch(API_URL);
    return response.json();
}
getUserAsync('openai').then((data) => console.log(data));

const getUserPromise = username => {
    return new Promise((resolve, reject) => {
        const API_URL = `https://api.github.com/users/${username}`;
        fetch(API_URL).then((response) => response.json()).then((data) => {
            if(data.message === 'Not Found'){
                reject("User not found");
            }
            else{
                resolve(data);
            }
        }).catch(err => reject(err))
    })
}

//successful call
getUserPromise('johndoe').then((val) => console.log(val)).catch((err)=>console.log('error', err))

//unsuccessful call -> error User not found
getUserPromise('akjsdhkasjdhksajhdkasjdhksajhdkajhdkajshd').then((val) => console.log(val)).catch((err)=>console.log('error', err))