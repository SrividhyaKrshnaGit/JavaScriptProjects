//Single Element Selector 

console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//Multiple Selector

console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

console.log('foreach arrow function for document');
document.querySelectorAll('.item').forEach(item =>console.log(item));
const ul = document.querySelector('.items');
//ul.remove();
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerHTML='<h1> World</h1>';
//ul.lastElementChild.innerHTML='<h2> is here </h2>';


const name=document.querySelector('#name');
const email=document.querySelector('#email');
const myForm=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const users=document.querySelector('#users');

myForm.addEventListener('submit',onSub);

function onSub(e){
   e.preventDefault();

   if(name.value === '' || email.value ===''){
       msg.classList.add('error');
       msg.innerHTML ='Please enter all values';
       setTimeout(() => msg.remove(),3000);
   }
   else{
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${name.value} :${email.value}`));
       users.appendChild(li);

       //Clear Fields 

       name.value= '';
       email.value= '';
   }
}

