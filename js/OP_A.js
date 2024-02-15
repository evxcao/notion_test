window.onload = function calculate(){
    var wpOP1 = 2.5 * Math.round((pressWeight*0.40)/2.5);
    document.getElementById('OP_WP1').innerHTML = wpOP1;
    var wpOP2 = 2.5 * Math.round((pressWeight*0.50)/2.5);
    document.getElementById('OP_WP2').innerHTML = wpOP2;
    var wpOP3 = 2.5 * Math.round((pressWeight*0.60)/2.5);
    document.getElementById('OP_WP3').innerHTML = wpOP3;
    var w1OP1 = 2.5 * Math.round((pressWeight*0.65)/2.5);
    document.getElementById('OP_W11').innerHTML = w1OP1;
    var w1OP2 = 2.5 * Math.round((pressWeight*0.75)/2.5);
    document.getElementById('OP_W12').innerHTML = w1OP2;
    var w1OP3 = 2.5 * Math.round((pressWeight*0.85)/2.5);
    document.getElementById('OP_W13').innerHTML = w1OP3;
};
