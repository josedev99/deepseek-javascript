/**
 * DECLARACION DE VARIABLES
*/

let formCalcEdad = document.getElementById('formCalcEdad');
if(formCalcEdad){
    formCalcEdad.addEventListener('submit', (e)=>{
        e.preventDefault();
        let formData = new FormData(e.target);
        let monitor = document.getElementById('display_code');//Monitor de texto
        let input_edad = formData.get('i_edad');
        let edad = Number(input_edad) ?? parseInt(input_edad);
        if(edad !== 0){
            isMayorEdad(edad);
        }else {
            monitor.innerHTML = 'Sin resultado';
        }
    })
}

/**let input_edad = document.getElementById('i_edad');

if(input_edad){
    input_edad.addEventListener('keyup', (e)=>{
        let monitor = document.getElementById('display_code');
        let edad = Number(e.target.value) ?? parseInt(e.target.value);
        if(edad !== 0){
            isMayorEdad(edad);
        }else {
            monitor.innerHTML = 'Sin resultado';
        }
    })
}**/


function isMayorEdad(edad){
    let monitor = document.getElementById('display_code');
    if(edad >= 15 && edad <= 18){
        monitor.innerHTML = `Es mayor de edad`;
    }else if(edad > 18 && edad < 25){
        monitor.innerHTML = `Es un adulto joven`;
    }else{
        monitor.innerHTML = `Es menor de edad`;
    }
}
const valorFinal = 5;
let salidaFor = document.getElementById('salidaFor')
for(let i = 1; i <= valorFinal; i++){
    console.log('Estoy dango el paso: ' + i)
    salidaFor.innerHTML += `Estoy dando el paso: ${i} <br>`;
}

const API_KEY = "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";
const API_URL = 'https://openrouter.ai/api/v1/chat/completions'

let headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
}

let data = {
    "method": "post",
    body: JSON.stringify({
        model: "deepseek/deepseek-chat:free",
        messages: [{"role": "user", "content": "Hola?"}],
    }),
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    }
}
fetch(API_URL,data)
.then((response)=>response.json()).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})