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

    var BP40 = 2.5 * Math.round((benchWeight*0.40)/2.5);
    var BP50 = 2.5 * Math.round((benchWeight*0.50)/2.5);
    var BP60 = 2.5 * Math.round((benchWeight*0.60)/2.5);
    var BP65 = 2.5 * Math.round((benchWeight*0.65)/2.5);
    var BP70 = 2.5 * Math.round((benchWeight*0.70)/2.5);
    var BP75 = 2.5 * Math.round((benchWeight*0.75)/2.5);
    var BP80 = 2.5 * Math.round((benchWeight*0.80)/2.5);
    var BP85 = 2.5 * Math.round((benchWeight*0.85)/2.5);
    var BP90 = 2.5 * Math.round((benchWeight*0.90)/2.5);
    var BP95 = 2.5 * Math.round((benchWeight*0.95)/2.5);
    
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

    var OP40 = 2.5 * Math.round((pressWeight*0.40)/2.5);
    var OP50 = 2.5 * Math.round((pressWeight*0.50)/2.5);
    var OP60 = 2.5 * Math.round((pressWeight*0.60)/2.5);
    var OP65 = 2.5 * Math.round((pressWeight*0.65)/2.5);
    var OP70 = 2.5 * Math.round((pressWeight*0.70)/2.5);
    var OP75 = 2.5 * Math.round((pressWeight*0.75)/2.5);
    var OP80 = 2.5 * Math.round((pressWeight*0.80)/2.5);
    var OP85 = 2.5 * Math.round((pressWeight*0.85)/2.5);
    var OP90 = 2.5 * Math.round((pressWeight*0.90)/2.5);
    var OP95 = 2.5 * Math.round((pressWeight*0.95)/2.5);

    function setText(id,text){
        var element = document.getElementById(id);
        if (element) {
            element.innerHTML = text;
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
    
    setText("BP40",BP40);
    setText("BP50",BP50);
    setText("BP60",BP60);
    setText("BP65",BP65);
    setText("BP70",BP70);
    setText("BP75",BP75);
    setText("BP80",BP80);
    setText("BP85",BP85);
    setText("BP90",BP90);
    setText("BP95",BP95);    

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

    setText("OP40",OP40);
    setText("OP50",OP50);
    setText("OP60",OP60);
    setText("OP65",OP65);
    setText("OP70",OP70);
    setText("OP75",OP75);
    setText("OP80",OP80);
    setText("OP85",OP85);
    setText("OP90",OP90);
    setText("OP95",OP95);   
};
