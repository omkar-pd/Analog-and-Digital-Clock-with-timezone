function showTime(){
    var a = document.getElementById("tzlist").value;
    console.log(a)
    let options = {
    timeZone:a,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  },
  formatter = new Intl.DateTimeFormat([], options);
  var t = formatter.format(new Date())

  let options1 = {
    timeZone: a,
    weekday: 'long',
  },
  formatter1 = new Intl.DateTimeFormat([], options1);
  var weekday =formatter1.format(new Date());

let options2 = {
    timeZone: a,
    day: 'numeric',
  },
  formatter2 = new Intl.DateTimeFormat([], options2);
  var day =formatter2.format(new Date());

   let options3 = {
    timeZone: a,
    month: 'numeric',
  },
  formatter3 = new Intl.DateTimeFormat([], options3);
  var month =formatter3.format(new Date());

   let options4 = {
    timeZone: a,
    year: 'numeric',
  },
  formatter4 = new Intl.DateTimeFormat([], options4);
  var year =formatter4.format(new Date());

  var d = day + "-" + month + "-" + year + " " + weekday;

  document.getElementById('date').innerHTML = d;
  document.getElementById('time').innerHTML = t;



  setTimeout(showTime, 1000);
    
}

showTime();

