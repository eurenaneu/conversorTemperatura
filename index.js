let temp, tempConvertida, prefix;
const resultado = document.getElementById("resultText");

document.getElementById("submitButton").onclick = function(){

    document.getElementById("tempField").classList.add("required");

    temp = Number(document.getElementById("tempField").value);

    if(!isNaN(temp) && !temp == false){
        if(document.getElementById("celsiusOption").checked){
            prefix = "ºC";
            tempConvertida = Math.round(((temp - 32)/1.8)*10)/10; // temperatura em celsius (formatado como X.XXºC)
        } 
        
        else if(document.getElementById("fahrenheitOption").checked){
            prefix = "ºF";
            tempConvertida = Math.round((temp*1.8 + 32)*10)/10; // temperatura em fahrenheit (formatado como X.XXºC)
        }

        resultado.innerHTML = `<strong>RESULTADO:</strong> ${tempConvertida} ${prefix}`;
    } else {
        resultado.innerHTML = "\u26A0 <strong>ENTRADA INVÁLIDA</strong> \u26A0";
    }

}