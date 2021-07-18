const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');
setInterval(update, 1000);


// var d = new Date();
// document.getElementById("d").innerHTML = d.getDay();
// var d = new Date();
// var days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday", "Friday,", "Saturday,"];
// document.getElementById("d").innerHTML = days[d.getDay()];
// var d = new Date();
//  document.getElementById("m").innerHTML = d.getMonth();
//  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  document.getElementById("m").innerHTML = month[d.getMonth()];
//  var d = new Date();
//  document.getElementById("d1").innerHTML = d.getDate(); 
//   var d = new Date();
//    document.getElementById("y").innerHTML=d.getFullYear();
 
// updateClock();



// var d = new Date();
// var p = d.toLocaleString('en-US', { timeZone: 'America/New_York' })
// console.log()
// console.log(d.toLocaleString('en-US', { timeZone: 'Africa/Abidjan' }))




// var a = 'Asia/Kolkata'

function update() {
var a = document.getElementById('tzlist').value;

let options = {
    timeZone: a,
    second: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);
  var second = formatter.format(new Date()) / 60


let options1 = {
    timeZone: a,
    minute: 'numeric',
  },
  formatter1 = new Intl.DateTimeFormat([], options1);
  var minute =(formatter1.format(new Date())) / 60
  

  let options2 = {
    timeZone: a,
    hour: 'numeric',

  },
  formatter2 = new Intl.DateTimeFormat([], options2);
  var hour = (parseInt (formatter2.format(new Date()))+ minute) / 12




	secDiv.style.transform = "rotate(" + (second * 360) + "deg)";
	minDiv.style.transform = "rotate(" + (minute * 360) + "deg)";
 	hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)";






	// secDiv.style.transform = "rotate(" + (sec * 360) + "deg)";
	// minDiv.style.transform = "rotate(" + (min * 360) + "deg)";
	// hourDiv.style.transform = "rotate(" + (h * 360) + "deg)";

}
update()