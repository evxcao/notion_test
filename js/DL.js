window.onload = function calculate(){
    var DL40 = 2.5 * Math.round((deadliftWeight*0.40)/2.5);
    var DL50 = 2.5 * Math.round((deadliftWeight*0.50)/2.5);
    var DL60 = 2.5 * Math.round((deadliftWeight*0.60)/2.5);
    var DL65 = 2.5 * Math.round((deadliftWeight*0.65)/2.5);
    var DL70 = 2.5 * Math.round((deadliftWeight*0.70)/2.5);
    var DL75 = 2.5 * Math.round((deadliftWeight*0.75)/2.5);
    var DL80 = 2.5 * Math.round((deadliftWeight*0.80)/2.5);
    var DL85 = 2.5 * Math.round((deadliftWeight*0.85)/2.5);
    var DL90 = 2.5 * Math.round((deadliftWeight*0.90)/2.5);
    var DL95 = 2.5 * Math.round((deadliftWeight*0.95)/2.5);

    function setText(id,text){
        var element = document.getElementById(id);
        if (element) {
            element.innerHTML = text;
        }
        return element;
    }

    setText("DL40",DL40);
    setText("DL50",DL50);    
    setText("DL60",DL60);
    setText("DL65",DL65);
    setText("DL70",DL70);
    setText("DL75",DL75);
    setText("DL80",DL80);
    setText("DL85",DL85);
    setText("DL90",DL90);
    setText("DL95",DL95);    
};
