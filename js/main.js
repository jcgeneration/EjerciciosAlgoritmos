function preguntaNums(){
    let num1 = prompt("Dime el primer número","");
    let num2 = prompt("Dime el segundo número","");
    let num3 = prompt("Dime el tercer número","");

}// preguntaNums

//preguntaNums();

//*1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor
//*2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números
// 3. Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles
//*4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3
//*5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos
//*6. Elabora un algoritmo para leer un número y determinar si es par o impar


// Terminar los ejercicios 1, 2, 4, 5 y 6

// 1  100   50   89    99   8
function Adivinar() {
    let superior = 100;
    let inferior = 0;
    let noEncontrado = true;
    while(noEncontrado) {
        let mid = parseInt(inferior + ((superior-inferior)/ 2));
        console.log(mid);
        console.log(((superior-inferior)/ 2));
        if (((superior-inferior)/ 2)<1){
            noEncontrado=false;
            alert("Tu número es el " + (parseInt(mid)+1));
            break;
        }//if
        let res = confirm("Tu número es menor o igual a " + mid);
        if (res) {
            superior=mid;
        } else {
            inferior=mid;
        }//if 
        console.log(inferior, superior);
    } //while
} //Adivinar

Adivinar();