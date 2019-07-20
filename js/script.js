// function hello() {
//     alert("Hello, world!");
//     }

function birth(){
    var sec,fourth;
var fullName= document.getElementById("firstName").value;
var dateInput=document.getElementById("jour").value;
var date=new Date(dateInput);
console.log(date);
var dd= date.getDate();
console.log(dd)
var mm= date.getMonth() + 1;
var yy= date.getFullYear();
console.log(mm);
var cc=parseInt(yy.toString().slice(0,2));
var Year=parseInt(yy.toString().slice(2,4));
if(document.getElementById('male').checked){
    var gender = 'Male'
}else{
    var gender = 'Female'
}

console.log(gender)
     var third,fir;
     fir=(parseInt(Year/4))+dd;
     if(cc===17){
     sec=fir+4;
     if(mm===1){
     third=sec+1;
     }
     else if(mm===2){
     third=sec+4;
     }
     else if(mm===3){
     third=sec+4;
     }
     else if(mm===4){
     third=sec+0;
     }
     else if(mm===5){
     third=sec+2;
     }
     else if(mm===6){
     third=sec+5;
     }
     else if(mm===7){
     third=sec+0;
     }
     else if(mm===8){
     third=sec+3;
     }
     else if(mm===9){
     third=sec+6;
     }
     else if(mm===10){
     third=sec+1;
     }
     else if(mm===11){
     third=sec+4;
     }
     else if(mm===12){
     third=sec+6;
     }
     else{
     alert("wrong input")
     }
}
else if (cc===18){
sec=fir+2;
if(mm===1){
     third=sec+1;
}
else if(mm===2){
     third=sec+4;
}
else if(mm===3){
     third=sec+4;
}
else if(mm===4){
     third=sec+0;
}
else if(mm===5){
     third=sec+2;
}
else if(mm===6){
     third=sec+5;
}
else if(mm===7){
     third=sec+0;
}
else if(mm===8){
     third=sec+3;
}
else if(mm===9){
     third=sec+6;
}
else if(mm===10){
     third=sec+1;
}
else if(mm===11){
     third=sec+4;
}
else if(mm===12){
     third=sec+6;
}
else{
     alert("wrong input")
}
}
else if (cc===19){
     sec=fir+0;
     if(mm===1){
          third=sec+1;
     }
     else if(mm===2){
          third=sec+4;
     }
     else if(mm===3){
          third=sec+4;
     }
     else if(mm===4){
          third=sec+0;
     }
     else if(mm===5){
          third=sec+2;
     }
     else if(mm===6){
          third=sec+5;
     }
     else if(mm===7){
          third=sec+0;
     }
     else if(mm===8){
          third=sec+3;
     }
     else if(mm===9){
          third=sec+6;
     }
     else if(mm===10){
          third=sec+1;
     }
     else if(mm===11){
          third=sec+4;
     }
     else if(mm===12){
          third=sec+6;
     }
     else{
          alert("wrong input")
     }
}
else if(cc===20){
     sec=fir+6;
     if(mm===1){
          third=sec+1;
     }
     else if(mm===2){
          third=sec+4;
     }
     else if(mm===3){
          third=sec+4;
     }
     else if(mm===4){
          third=sec+0;
     }
     else if(mm===5){
          third=sec+2;
     }
     else if(mm===6){
          third=sec+5;
     }
     else if(mm===7){
          third=sec+0;
     }
     else if(mm===8){
          third=sec+3;
     }
     else if(mm===9){
          third=sec+6;
     }
     else if(mm===10){
          third=sec+1;
     }
     else if(mm===11){
          third=sec+4;
     }
     else if(mm===12){
          third=sec+6;
     }
     else{
          alert("wrong input")
     }
}
fourth=(third+Year)%7;
if (fourth===0){
     day="Saturday";
     if(gender==="Female"){
          document.getElementById("Results").innerHTML="Ama/Amma";
     }
     else if(gender==="Male"){
        document.getElementById("Results").innerHTML="Kwame"
     }
}
else if(fourth===1){
     day="Sunday";
     if(gender==="Female"){
        document.getElementById("Results").innerHTML="Akosua"
     }
     else if(gender==="Male"){
        document.getElementById("Results").innerHTML="Kwasi"
     }
}
else if(fourth===2){
     day="Monday";
     if(gender==="Female"){
        document.getElementById("Results").innerHTML="Adwoa"
     }
     else if(gender==="Male"){
        document.getElementById("Results").innerHTML="Kwadwo"
     }
}
else if(fourth===3){
     day="Tuesday";
     if(gender==="Female"){
        document.getElementById("Results").innerHTML="Abenna"
     }
     else if(gender==="Male"){
        document.getElementById("Results").innerHTML="Kwabena"
     }
}
else if(fourth===4){
     day="Wednesday";
     if(gender==="Female"){
        document.getElementById("Results").innerHTML="Akua/Akuba"
     }
     else if(gender==="Male"){
        document.getElementById("Results").innerHTML="Kwaku"
     }
}
else if(fourth===5){
     day="Thursday";
     if(gender==="Female"){
        document.getElementById("Results").innerHTML="Yaa"
     }
     else if(gender==="Male"){
        document.getElementById("Results").innerHTML="Yaw"
     }
}
else if(fourth===6){
     day="Friday";
     if(gender==="Female"){
        document.getElementById("Results").innerHTML=("Afua");
     }
     else if(gender==="Male"){
        document.getElementById("Results").innerHTML=("Kofi");
     }
}
else{
     alert("no remaining days")
}
// console.log(name);
     }
// alert("your Akan name is:"+ birth());