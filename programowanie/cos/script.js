import User from './user.js';
import {printName} from './user.js';
import {printAge} from './user.js';

const mojCzlowiek = new User('Jan', 25)
//console.log(mojCzlowiek)
const mojKolega2 = new User('Adam', 30)

 printName(mojCzlowiek);
 printAge(mojCzlowiek);

 printName(mojKolega2);
 printAge(mojKolega2);