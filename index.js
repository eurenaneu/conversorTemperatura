let temp, tempConvertida, prefix;

document.getElementById("submitButton").onclick = function(){

    document.getElementById("tempField").classList.add("required");

    temp = Number(document.getElementById("tempField").value);

    if(document.getElementById("celsiusOption").checked){
        prefix = "ºC";
        tempConvertida = Math.round(((temp - 32)/1.8)*10)/10; // temperatura em celsius (formatado como X.XXºC)
    } 
    
    else if(document.getElementById("fahrenheitOption").checked){
        prefix = "ºF";
        tempConvertida = Math.round((temp*1.8 + 32)*10)/10; // temperatura em fahrenheit (formatado como X.XXºC)
    }

    if (tempConvertida == undefined){
        window.alert("Entrada inválida");
    }
    
    else { 
        document.getElementById("resultText").innerHTML = "<strong>RESULTADO:</strong> " + tempConvertida + prefix;
    }

}