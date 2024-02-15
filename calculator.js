var deadliftWeight = 125;


window.onload = function calculate(){
    var wpDL1 = 2.5 * Math.round((deadliftWeight*0.40)/2.5);
    document.getElementById('DL_WP1').innerHTML = wpDL1;
  //  DL_W1_1: 2.5 * Math.round((deadliftWeight*0.65)/2.5),
  //  DL_W1_2: 2.5 * Math.round((deadliftWeight*0.75)/2.5),
  //  DL_W1_3: 2.5 * Math.round((deadliftWeight*0.85)/2.5),
};



