function startTime(){
    var today = new Date();
    var hour = today.getHours();
    var minut = today.getMinutes();
    var secc = today.getSeconds();

    // show in three p in number clasds
    var number = document.getElementById('numbers');
    number.innerHTML = hour + ":" + minut + ":" + secc;

    if(secc < 10){
        number.innerHTML = hour + ":" + minut + ":0" + secc;
    }  
    if(minut <10){
        number.innerHTML = hour + ":0" + minut + ":" + secc;
    }

    var t = setTimeout(startTime , 1000);
}
startTime();