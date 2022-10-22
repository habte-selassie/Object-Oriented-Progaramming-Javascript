// const Person = function(firstname,birthyear){
// this.firstname = firstname;
// this.birthyear = birthyear

// // this.calcag = function(){
// //     console.log(2099-this.birthyear);}

// }
// const jonas = new Person('jonas',1991)
// console.log(jonas);

// const arreolan = new Person('areola',1994)
// const nathnael = new Person('nathenael',1980)

// console.log(nathnael , arreolan);
 
// const arrizabalag = 'nathanle'
// console.log(nathnael instanceof Person);
// ///////////////////////////
// console.log(Person.prototype);
// Person.prototype.calcag = function(){
//     console.log(2099-this.birthyear);
// }

// jonas.calcag()


// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.birthyear = '1991'
// console.log(jonas,nathnael);

// console.log(jonas.__proto__);

// console.log(jonas.__proto__.__proto__);

// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);


// const arraya = [1,2,3,4,5,6,5,1]
// console.log(arraya.__proto__ === Array.prototype);
// console.log(arraya.__proto__.__proto__);

// Array.prototype.unique = function(){
//    return [new Set(this)]
// }

// console.log(arraya.unique());

// const h1 = document.querySelector('h1')
// console.dir(h1)
// console.dir(x=> x+1)




class Personcl{
    constructor(fullname,birthyear){
        this.fullname = fullname;
        this.birthyear = birthyear; 
    }
        /////////////////////
    sun(){
        console.log(2099-this.birthyear); 
    }
        //////////////////
    get age(){
        return 2099-this.birthyear
    }
//////////////
    set fullname(name){
        console.log(name);
    if(name.includes(' ')) {    
        this._fullname = name
    }
        else{
            console.log('is not full name');
        }

    }
//////////////////////////////////////////
    get fullname(){
        return this._fullname
    }
}

const gazzaniga = new Personcl('areola obrien',1998);
console.log(gazzaniga);

const kingoCr7 = new Personcl('crtsiano ronaldo',1988)
kingoCr7.fullname;

// gazzaniga.sun()
// console.log(gazzaniga.age)

// Personcl.prototype.greet = function(){
//     console.log(`hi ${this.firstname}`);
// }
// gazzaniga.greet()




// const account = {
//     owner :'jonas',
//     movments : [2,9,8,3,8,1],

// get latest(){
//     return this.movments.slice(-1).pop();
// },

// set latest(mov){
// this.movments.push(mov)
//     }
// }

// console.log(account.latest);
// account.latest = 50
// console.log(account.movments);








