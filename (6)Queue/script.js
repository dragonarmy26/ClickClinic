function queueRand(){
    window.queue = Math.random()*(1000 - 1)+1;
    document.getElementById("queuenum").value=Math.round(queue);
}

function patientRand(){
    var patient = Math.random()*(queue - 1)+1;
    document.getElementById("patientnum").value=Math.round(patient);
}

function timeRand(){
    var h = Math.random()*(22 - 9)+9;
    var m = Math.random()*(59 - 0)+0;
    var hour = Math.round(h);
    var minute = Math.round(m);
    if (minute < 10){
        minute = "0" + minute
    }
    var time = hour + " : " + minute;
    document.getElementById("timefield").value=time;
}