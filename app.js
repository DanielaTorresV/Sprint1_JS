/*Ejercicio 1
Escribe una función llamada numPasos que reciba un número (entero positivo) y que retorne el número de pasos necesario para reducirlo a cero siguiendo estas instrucciones:

Si el número es par, dividirlo por 2, de lo contrario, restarle 1.

numPasos(14) // retorna 6
numPasos(8) // returna 4
numPasos(123) // retorna 12 */

const numPasos = num => {
    let cont = 0;
  
    while(num !== 0){
  
      if(num %2 === 0){
        num = num / 2;
        cont += 1;
      }
      else{
        num = num - 1
        cont += 1;
      }
    }
    return cont;
  }
  
  console.log(numPasos(123));

  /*Ejercicio 2
  Escribe una función llamada contraseña que reciba un string y retorne un nuevo string realizando los siguientes cambios:
  
  Las mayúsculas se reemplazan por minúsculas.
  Se eliminan los espacios en blanco.
  Reemplaza el caracter “a” por “4”.
  Reemplaza el caracter “e” por “3”.
  Reemplaza el caracter “i” por “1”.
  Reemplaza el carater “o” por “0”.
  contrasena("hola"); // "h0l4"
  contrasena("esta es una prueba"); // "3st43sun4pru3b4"
  contrasena(""); // "" */
  const contrasena = str => {
    let newStr = str
    newStr = newStr.toLowerCase().replaceAll(' ', '').split('');
  
    for(let i = 0; i < newStr.length; i++){
  
      if(newStr[i] === 'a'){
        newStr[i] = '4';
      }
      if(newStr[i] === 'e'){
        newStr[i] = '3';
      }
      if(newStr[i] === 'i'){
        newStr[i] = '1';
      }
      if(newStr[i] === 'o'){
        newStr[i] = '0';
      }
    }
  
    return newStr.join('');
  }
  
  console.log(contrasena("Esta es uNa prueba"));
  
/*Ejercicio 3
Escribe una función llamada likes que reciba un número y devuelva un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.

likes(983); // "983"
likes(1900); // "1K"
likes(54000); // "54K"
likes(120800); // "120K"
likes(25222444); // "25M"*/

  const likes = num => {
    let resolve = 0;
  
    if(num / 1000000 >= 1){
      resolve = Math.trunc(num / 1000000);
      str = resolve.toString().concat('M');
      return str;
    }
    if(num / 1000 >= 1){
      resolve = Math.trunc(num / 1000);
      str = resolve.toString().concat('K');
      return str;
    }
    else{
      return num.toString();
    }
  }
  
  console.log(likes(983));
  console.log(likes(120800))

  /* Ejercicio 4
Escribir una función llamada generarCodigo que reciba un string y retorne un nuevo string con las dos primeras letras de cada palabra.

console.log(generarCodigo("hola mundo")) // "homu"
console.log(generarCodigo("juan david berbeo")) // "judabe"
console.log(generarCodigo("")) // "" */

const generarCodigo = str =>{
  
}
  