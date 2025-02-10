// Ejercicio 3: Contador de Ocurrencias
// Descripción
// Cree una función llamada contarOcurrencias que:
// Reciba un array de elementos (strings, números, etc.).
// Retorne un objeto donde las claves sean los elementos del array y los valores sean la
// cantidad de veces que aparecen.

const contarOcurrencias = (array) => {
    let contador = {};
    array.forEach((element) => {
        if (!contador[element]) {
            contador[element] = 1;
        } else {
            contador[element]++;
        }
    });
    return contador;
};  

const element = ['a', 'b', 'a', 'c', 'b', 'a']; 
console.log(contarOcurrencias(element)); // { a: 3, b: 2, c: 1 }     