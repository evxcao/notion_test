window.onload = function calculate(){
    var SQ40 = 2.5 * Math.round((squatWeight*0.40)/2.5);
    var SQ50 = 2.5 * Math.round((squatWeight*0.50)/2.5);
    var SQ60 = 2.5 * Math.round((squatWeight*0.60)/2.5);
    var SQ65 = 2.5 * Math.round((squatWeight*0.65)/2.5);
    var SQ70 = 2.5 * Math.round((squatWeight*0.70)/2.5);
    var SQ75 = 2.5 * Math.round((squatWeight*0.75)/2.5);
    var SQ80 = 2.5 * Math.round((squatWeight*0.80)/2.5);
    var SQ85 = 2.5 * Math.round((squatWeight*0.85)/2.5);
    var SQ90 = 2.5 * Math.round((squatWeight*0.90)/2.5);
    var SQ95 = 2.5 * Math.round((squatWeight*0.95)/2.5);

    function setText(id, text) {
        var element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
        return element;
    }
    
    setText("SQ40",SQ40);
    setText("SQ50",SQ50);
    setText("SQ60",SQ60);
    setText("SQ65",SQ65);
    setText("SQ70",SQ70);
    setText("SQ75",SQ75);
    setText("SQ80",SQ80);
    setText("SQ85",SQ85);
    setText("SQ90",SQ90);
    setText("SQ95",SQ95);    
}
