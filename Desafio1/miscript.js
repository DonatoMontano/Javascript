alert('Bienvenidx a esta poco util calculadora de promedio de notas')
let repetir = true
while(repetir) {
    let palabra = prompt("Ingrese Usuario: AdminLocal ").toLowerCase() 
    if(palabra === "adminlocal") {
       repetir = false
    }
}

//----------------------------------------

let repetir1 = true
while(repetir1) {
    let palabra = prompt("Ingrese Contraseña: (.Castillo.4592) ")
    if(palabra === ".Castillo.4592") {
       repetir1 = false
    }
}

//----------------------------------------

let nota;
let i;
let sumatotal=0;
let promedio;

for(i=1;i<=5;i++){
    nota = parseInt(prompt("Ingrese su nota "+i+" de 5"));

    sumatotal = sumatotal+nota;
    
    promedio = sumatotal/5

}

console.log('su promedio es de:')
console.log(promedio)
