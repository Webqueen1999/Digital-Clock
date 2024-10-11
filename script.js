let day = document.getElementsByClassName("day");
let time = document.getElementsByClassName("time");

setInterval(() =>{

  let days = ["Sunday" , "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
   let months = ["January", "February","March", "April" , "May" , "June" , "July" ,"August","September","October","November","December"];
   let Today = new Date();
   
   let d = Today.getDay();
   let date = Today.getDate();
   let month = Today.getMonth();
   let year = Today.getFullYear();
   let hrs = Today.getHours();
   let min = Today.getMinutes();
   let sec = Today.getSeconds();

   let ampm = (hrs >12 ) ? "Pm" :"Am";
   hrs = hrs%12;

   day[0].innerHTML = days[d];
   day[1].innerHTML = String(date).padStart(2,"0");
   day[2].innerHTML = months[month];
   day[3].innerHTML = year;

   time[0].innerHTML = String(hrs).padStart(2,"0");
   time[2].innerHTML = String(min).padStart(2,"0");
   time[4].innerHTML = String(sec).padStart(2,"0");
   time[6].innerHTML = ampm

},1000)