function queueRand(){
    window.queue = Math.random()*(1000 - 1)+1;
    document.getElementById("queuenum").value=Math.round(queue);
}

function patientRand(){
    var patient = Math.random()*(queue - 1)+1;
    document.getElementById("patientnum").value=Math.round(patient);
}