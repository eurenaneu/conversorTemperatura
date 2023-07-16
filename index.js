const resultado = document.getElementById("resultText")
const fahrenheit = document.querySelector("#fahrenheitOption")
const celsius = document.querySelector("#celsiusOption")
const tempInput = document.querySelector("#tempInput")
const submit = document.querySelector("#submitButton")

submit.onclick = function(){

    tempInput.classList.add("required");

    let tempConvertida;
    let temp = Number(tempInput.value);

    try{
        if(isNaN(temp) || temp == "") throw new Error("Número inválido");

        if(celsius.checked){
            tempConvertida = Math.round(((temp - 32)/1.8)*10)/10 + " ºC"; // temperatura em celsius (formatado como X.XXºC)
        } 
        
        else if(fahrenheit.checked){
            tempConvertida = Math.round((temp*1.8 + 32)*10)/10 + " ºF"; // temperatura em fahrenheit (formatado como X.XXºC)
        }

        else {
            throw new Error("Nenhuma opção selecionada");
        }

        resultado.innerHTML = `<strong>RESULTADO:</strong> ${tempConvertida}`;
    }
    catch(error) {
        console.error(error);
        resultado.innerHTML = error;
    }

}