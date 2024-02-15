var deadliftWeight = 125;


function calculate(){
  return{
    DL_W1_1: 2.5 * Math.round((deadliftWeight*0.65)/2.5),
    DL_W1_2: 2.5 * Math.round((deadliftWeight*0.75)/2.5),
    DL_W1_3: 2.5 * Math.round((deadliftWeight*0.85)/2.5),
  }
}

document.getElementById('DL_warmup').innerHTML = "10 x 40 Kg <br> 5 x " + {deadliftWeight};

