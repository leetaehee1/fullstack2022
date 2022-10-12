function setClock() {
 var dateInfo = new Date();
 var hour = modifyNumber(dateInfo.getHours());
 var min = modifyNumber(dateInfo.getMinutes());
 var sec = modifyNumber(dateInfo.getSeconds());
 document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;

 var year = modifyNumber(dateInfo.getFullYear());
 var month = modifyNumber(dateInfo.getMonth() + 1);
 var date = modifyNumber(dateInfo.getDate());
 document.getElementById("date").innerHTML = year + "-" + month + "-" + date;
};

function modifyNumber(time){
 if(parseInt(time)<10){
  // 10보다 작은 숫자는 앞에 0을 붙임
  // 7 -> 07
     return "0"+ time;
 }
 else
     return time;
}

setClock();
setInterval(setClock, 1000);