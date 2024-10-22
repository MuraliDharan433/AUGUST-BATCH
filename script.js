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


let str = 'Hello'
let str2 = 'World'
let str3 = 'Wellcome'

console.log(str.split('e'));






