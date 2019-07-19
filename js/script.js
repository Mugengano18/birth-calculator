// function hello() {
//     alert("Hello, world!");
//     }
var sec,fourth,fifth;
var dd=parseInt(prompt("enter your date of birth"));
var mm=parseInt(prompt("enter your month of birth"));
var yy=parseInt(prompt("enter the year you were born in:"));
var cc=parseInt(yy.toString().slice(0,2));
var Year=parseInt(yy.toString().slice(2,4));
var gender=prompt("enter your gender");
function birth(){
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
          name="Ama/Amma"
     }
     else if(gender==="Male"){
          name="Kwame"
     }
}
else if(fourth===1){
     day="Sunday";
     if(gender==="Female"){
          name="Akosua"
     }
     else if(gender==="Male"){
          name="Kwasi"
     }
}
else if(fourth===2){
     day="Monday";
     if(gender==="Female"){
          name="Adwoa"
     }
     else if(gender==="Male"){
          name="Kwadwo"
     }
}
else if(fourth===3){
     day="Tuesday";
     if(gender==="Female"){
          name="Abenna"
     }
     else if(gender==="Male"){
          name="Kwabena"
     }
}
else if(fourth===4){
     day="Wednesday";
     if(gender==="Female"){
          name="Akua/Akuba"
     }
     else if(gender==="Male"){
          name="Kwaku"
     }
}
else if(fourth===5){
     day="Thursday";
     if(gender==="Female"){
          name="Yaa"
     }
     else if(gender==="Male"){
          name="Yaw"
     }
}
else if(fourth===6){
     day="Friday";
     if(gender==="Female"){
          name="Afua"
     }
     else if(gender==="Male"){
          name="Kofi"
     }
}
else{
     alert("no remaining days")
}
return  name;
     }
alert("your Akan name is:"+ birth());