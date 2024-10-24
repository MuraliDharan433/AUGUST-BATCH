"use strict";

// // let a = 10;
// // let b = 20;

// // let total = a + b

// // console.log(total);

// // let a = 13;

// // let b = 2;

// // let aaa = a = a + 3 //a += 3

// // let opra = a - 1 //a--\

// // let name = "Karthik"

// // let role = "WEB DEV";

// // let dob = 2000

// // let findage = 2024 - dob


// // // console.log("I am " + name + " I am a " + role + " My Age is " + findage);

// // console.log(`I am ${name} I am a ${role} My Age is ${2024 - dob}`);


// // console.log();



// // let age = 50;

// // if(age >= 18 ){
// //      console.log("it if stament");
     
// //      if(age < 50){
// //           console.log("Eligible For Voting");
// //      } else{
// //           console.log("Else statement");
          
// //      }   
// //      console.log("it if stament");
     
     
// // }else if(age >= 50){
// //      console.log('Senior Citizen');
     
// // }else if(age == 0){
// //      console.log("plese Enter age");
     
// // }
// // else{
// //      console.log("Not Eligible For Voting");
     
// // }
// // let time = 9

// // if (time < 10) {
// //      greeting = "Good morning";
// //    } else if (time < 16) {
// //      greeting = "Good day";
// //    } else {
// //      greeting = "Good evening";
// //    }

// //    console.log(greeting);
   


// let arr = [1,2,3,4,5]
// let obj = {id:1,name:'murali',age:21,role:'web Dev'}
// let cars = ["BMW", "Volvo", "Mini"];
// let name = 'Muralidharan'
// // console.log(arr.length);

// // for(let i = 0; i < 100;i++){
// //      console.log(i)
     
// // }

// // for(let item in obj){
// //      console.log(item,obj[item]);
     
// // }


// // for(let data of cars){
// //      console.log(data);
     
// // }

// // for(let char of name){
// //      console.log(char);
     
// // }

// // let i = 1;

// // do{
// //      console.log(i);
// //      i++;
     
// // }while(i < 10)
// // let day = prompt('Enter the day in num')
// // console.log(typeof(day));



// // switch(Number(day)){
// //      case 1:
// //           console.log('MON');
// //           break;
// //      case 2:
// //           console.log("TUS");
// //           break
// //      case 3:
// //           console.log("WED");
// //           break
// //      case 4:
// //           console.log("THURS");
// //           break
// //      case 5:
// //           console.log("FRI");
// //           break
// //      case 6:
// //           console.log("SAT");
// //           break
// //      case 7:
// //           console.log("SUN"); 
// //           break
// //      default:
// //           console.log("Enter Valid Number");
// //           break
                  
// // }



// // let age = 20;

// // var vote = age>18? 'Eligible':'Not Eligible'
// // console.log(vote);

// // if(age > 18){
// //      console.log("Eligible");
     
// // }else{
// //      console.log('Not Eligible');
     
// // }
// // function changeName() {
     
// // }   

// // let changeName = function(){

// // }

// let email = document.getElementById('email-input');
// let password = document.getElementById('pass-input');
// let errorEmail = document.getElementById('error-email')


// let checkInput = (event)=>{
//      let text = event.target.value

//      let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;

//      if(regex.test(text)){
//           errorEmail.textContent = "Success"
//           errorEmail.style.color = 'green'
          
//      }else{
//           errorEmail.textContent = "Error"
//           errorEmail.style.color = 'red'
//           // console.log('');
          
//      }


     
     
     
// }

// let getInputdata = ()=>{
     
//      if(email.value === "murali@gmail.com" && password.value === "12345678"){
//           console.log("Login Succes");
          
//      }else if(email.value === "" || password.value === ""){
//           console.log('Enter the Detiles');
          
//      }
//      else{
//           console.log('Login Faild');
          
//      }
    
     
     
// }




// let btn = document.getElementById('hoverBtn')
// let box = document.querySelector('.box')




// let chageColor = ()=>{
//      btn.style.backgroundColor = 'red'
//      box.style.display = 'block'
     
// }

// let chageColorleave = () =>{
//      btn.style.backgroundColor = 'green'
//      box.style.display = 'none'
     
     
// }


// hoverBtn.addEventListener('mouseenter',chageColor)
// hoverBtn.addEventListener('mouseleave',chageColorleave)



// let num = 100

// let arr = ['name','role']

// let str = String(num)

// let str2 = num.toString()

// let a = '21'
// let b = 2
// console.log(a - b);


// let number = 3.6644
// let value = number.toFixed(1)

// let str = 'djbd'
// let value = 0;
// let user = prompt('Enter login')


// if(user == 'login'){
//      value += 1
// }else{
//      console.log('user is not login');
     
// }



// if(value){
//      console.log('If statement');
     
// }else{
//      console.log('Else statement');
     
// }

// const arr = [23,5,43,4364,4354,435,435,4,2]
// const fruits = ["Banana", "Lemon", "Kiwi", "Apple", "Mango"];



// let retunValue = fruits.reverse()

// let val = retunValue.join('-')

// console.log(val);



// console.log(fruits);
// console.log(retunValue);

// let list = document.getElementById('list')

// let appendData = () =>{
//      var names = ["Bob ", "Alice ", "Ceaser ", "David",'Murali'];

//      let listitems = "";

//      names.forEach((data)=>{
//           listitems += `<li>${data}</li>`
          
//      })

//      list.innerHTML = listitems;


// }

// appendData()
// let obj2 = {
//      role:"Web Dev"
// }

// let obj = {
//      fname:'murali',
//      lname:'dharan',
//      age:21,
//      role:'WebDeveloper',
//      isEmploye: false,
//      fullName:function(location = '',age = ''){
//           return this.fname + " " + this.lname + " " + location + " " + age
//      }
// }

// let userdata = {
//      fname:'mythili',
//      lname:'palanisamy'
// }

// let fullname = obj.fullName.call(userdata,"Chennai" , 24)
// let fullname2 = obj.fullName.apply(userdata,)

// let bind = obj.fullName.bind(userdata)
// console.log(bind());


// let json = '[{"name":"Barath","age":61,"role":"Test","id":"1"},{"name":"name 2","age":27,"role":"role 2","id":"2"},{"name":"name 3","age":32,"role":"role 3","id":"3"},{"name":"name 4","age":48,"role":"role 4","id":"4"}]'
let jstring = '{"name":"John", "age":30, "city":"New York"}'

let userData = {
     name:'Murali',
     age:21,
     role:"Web DEv"
}



// let obj = JSON.parse(jstring)
// console.log(jstring);

// console.log(obj);

let json = JSON.stringify(userData)

console.log(json);
let message;

let exaple = function(){
     message = "Hello"
     console.log(message);
     
}

exaple()

console.log(message);








// console.log(fullname);
// console.log(this);










 






