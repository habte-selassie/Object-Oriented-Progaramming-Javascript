const Person = function(firstname,birthyear){
this.firstname = firstname;
this.birthyear = birthyear




// this.calcag = function(){
//     console.log(2099-this.birthyear);}

}
const jonas = new Person('jonas',1991)
console.log(jonas);

const arreolan = new Person('areola',1994)
const nathnael = new Person('nathenael',1980)

console.log(nathnael , arreolan);
 
const arrizabalag = 'nathanle'
console.log(nathnael instanceof Person);


///////////////////////////

console.log(Person.prototype);
Person.prototype.calcag = function(){
    console.log(2099-this.birthyear);
}

jonas.calcag()


console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.birthyear = '1991'
console.log(jonas,nathnael);














