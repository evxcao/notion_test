var deadliftWeight = 126;


alert("hola");

document.getElementById('text_test').innerHTML = deadliftWeight;

var DLTest = deadliftWeight *2;

function calculate(){
  return{
    DL_W1_1: 2.5 * Math.round((deadliftWeight*0.65)/2.5),
    DL_W1_2: 2.5 * Math.round((deadliftWeight*0.75)/2.5),
    DL_W1_3: 2.5 * Math.round((deadliftWeight*0.85)/2.5)};
};

