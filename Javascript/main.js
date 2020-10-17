 /*alert("Hello World");
console.log("See here is Console Log");
console.error("Here is Red console Error");
console.warn("Warning colour is ");

//-Javascript variables -var,let,const
//var[old way Globally stored ],
//[Latest variablesintroducted ES2015 - let,const 

let age=20;
age=30;

console.log(age);

const score=7;
console.log(score); 


//String,Numbers,Boolean,null,undefined

const name='sri';
const age1=10;
const price =89.0;
const isFlag =true;
const a=null;
const b = undefined;
let c;
console.log(typeof c);

console.log('My name is '+name+' and my age is '+age);
//Template String -Back Tick
console.log(`My name is ${name} and age is ${age}`);

const s='Hello World!';
console.log(s.length);
console.log(s.substring(0,5).toLocaleUpperCase());

const s1 ='c++, C+,Java,Javascript';
console.log(s1.split(','));


//Arrays - Variables that hold multiple values

const arr= new Array(1,2,3,4,5);  //OLD way
const fruits =['apple','grape',10,true];
console.log(fruits);

fruits[4] ='managoes';
fruits.push('fig');
fruits.unshift('Cherry');
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('grape'));


const person  = {
    firstName: 'Sri',
    LastName:'Vidhya',
    age:18,
    hobbies:['music','singing','travelling'],
    address:{
        street:'50 cross street',
        city:'Boston',
        state:'NA'
    }
}
console.log(person);
console.log(person.firstName,person.LastName,person.address.city,person.hobbies[2]);

//ECMA 2015/ES 6 Pulling varaibales from person

const {firstName,LastName,address:{city}} =person;
console.log(city);
person.email='sri@gmail.com';
console.log(person);
*/

//Array of Objects

const todos =[
    {
        id:1,
        text:'Take to trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting Celebrities',
        isCompleted:false
    },
    {
        id:3,
        text:'Going for shopping',
        isCompleted:true
    }
];
console.log(todos);
console.log(`${JSON.stringify(todos)}`);
console.log('Converting array of javascript object to JSON' + JSON.stringify(todos));

//for
for(let i=0;i<10;i++){
    console.log(`Inside For Loop ${i}`);
}

//While
let i=0;
while (i<10){
    console.log(`Inside while Loop ${i}`);
    i++;
}

for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);
}

//New For loop

for(let todo of todos){
    console.log(todo.id);
}


//forEach,Map,filter : High Order Array method

todos.forEach(function(todo){
    console.log(todo.text);
});

//Arrow functon 
todos.forEach(todo => console.log(`Inside arrow Function`+todo.text));

const mapArray = todos.map(function(todo){
    return  todo.text;
})
console.log(mapArray);


const completed = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(completed);


//conditionals

// == Just check the values 
// == It checks both value and the type

const x=10;
const y=15;

if(x==10){
    console.log('x is 10');
}

if(x===10){
    console.log('x value is 10 and type is also matching');
}

if(x>5 && y>10){
    console.log('x is > 5 and y is >10');
}


//Ternary Operator 

const ab=11;
const color = ab > 10 ? 'red':'blue';

console.log(color);
//swtich

switch(color){
    case 'red':
        console.log("Colour is red");
        break;
    case 'blue':
        console.log("Colour is blue");
        break;
     default:
        console.log("Colour is not red/blue");
        break;
}


//Function num=1 is default value assigning

function addNum(num1=1,num2=2){
   return num1+num2;
}

console.log(addNum())


//Same in Arrow Function 

const add= (num1=1,num2=2) => num1+num2 
console.log(add(4,8));



//Constructur Function : Old way ES5

function Person1(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob=new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}

Person1.prototype.getFullName =function(){
    return `${this.firstName} ${this.lastName}`
}

//Instantiate Object 
const person1 = new Person1('Sri','Padma','2-3-1999');
const person2 = new Person1('Krishna','priya','11-8-1988');
console.log(person2);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

//ES6/ES2015 Class Declaration

class  Person{  
    constructor(firstName,lastName,dob) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
//Instantiate Object 
const personClass1 = new Person('Sri','Padma','2-3-1999');
const personClass2 = new Person('Krishna','priya','11-8-1988');
console.log(personClass2);
console.log(personClass2.getBirthYear());
console.log(personClass2.getFullName());

