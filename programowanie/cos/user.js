export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function printName(MySuperUser){
    console.log(MySuperUser.name);
}

function printAge(MySuperUser){
    console.log(MySuperUser.age);
}

export {printName}
export {printAge}