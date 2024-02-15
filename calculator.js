var squatWeight = 117.5;
var deadliftWeight = 125;

window.onload = function calculate(){
    var wpDL1 = 2.5 * Math.round((deadliftWeight*0.40)/2.5);
    document.getElementById('DL_WP1').innerHTML = wpDL1;
    var wpDL2 = 2.5 * Math.round((deadliftWeight*0.50)/2.5);
    document.getElementById('DL_WP2').innerHTML = wpDL2;
    var wpDL3 = 2.5 * Math.round((deadliftWeight*0.60)/2.5);
    document.getElementById('DL_WP3').innerHTML = wpDL3;
    var w1DL1 = 2.5 * Math.round((deadliftWeight*0.65)/2.5);
    document.getElementById('DL_W11').innerHTML = w1DL1;
    var w1DL2 = 2.5 * Math.round((deadliftWeight*0.75)/2.5);
    document.getElementById('DL_W12').innerHTML = w1DL2;
    var w1DL3 = 2.5 * Math.round((deadliftWeight*0.85)/2.5);
    document.getElementById('DL_W13').innerHTML = w1DL3;

    var wpSQ1 = 2.5 * Math.round((deadliftWeight*0.40)/2.5);
    document.getElementById('SQ_WP1').innerHTML = wpDL1;
    //var wpDL2 = 2.5 * Math.round((deadliftWeight*0.50)/2.5);
    //document.getElementById('SQ_WP2').innerHTML = wpDQ2;
    var wpSQ3 = 2.5 * Math.round((deadliftWeight*0.60)/2.5);
    document.getElementById('SQ_WP3').innerHTML = wpSQ3;
};
//random
