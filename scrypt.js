function empezarFunciones() {
  console.log("Parte 1: Ejercicios");
  alert("Bienvenido dale ok para jugar");

  // Ejercicio Potencia
  alert("Potencia de un Número");
  console.log("Potencia de un Número");
  function potencia() {
    let numero = +prompt("Ingrese un número");
    let potencia = +prompt("Ingrese la potencia");

    if (isNaN(numero) || isNaN(potencia)) {
      alert("Ingrese solo números validos");
      console.log("Ingrese solo números validos");
    } else if (numero < 0 || potencia < 0) {
      alert("Ingrese solo números positivos");
      console.log("Ingrese solo números positivos");
    } else {
      let resultado = `La potencia de ${numero} elevado a ${potencia} es ${
        numero ** potencia
      }`;
      alert(resultado);
      console.log(resultado);
    }
  }
  potencia();

  // Ejercicio Millas a Kilometros
  alert("Millas a Kilómetros");
  console.log("Millas a Kilómetros");
  let millas = +prompt("Ingrese una distancia en millas");
  let Kilometros = 1.61;

  if (isNaN(millas)) {
    alert("Ingrese un valor en números");
    console.log("Ingrese un valor en números");
  } else if (millas < 0) {
    alert("Ingrese solo números positivos");
    console.log("Ingrese solo números positivos");
  } else {
    let resultado = `La distancia en kilómetros es de ${+(
      millas / Kilometros
    ).toFixed(2)}`;
    console.log(resultado);
    alert(resultado);
  }

  // Ejercicio Mayor de Edad
  alert("Mayoria de Edad");
  console.log("Mayoria de Edad");
  function esMayorDeEdad() {
    let edad = +prompt("Ingrese su edad");

    if (isNaN(edad)) {
      alert("Ingrese solo números validos");
      console.log("Ingrese solo números validos");
    } else if (edad < 0) {
      alert("Ingrese solo números positivos");
      console.log("Ingrese solo números positivos");
    } else if (edad > 110) {
      console.log("Ingrese una edad válida");
      alert("Ingrese una edad válida");
    } else if (edad < 18) {
      console.log("Usted es menor de edad");
      alert("Usted es menor de edad");
    } else {
      console.log("Usted es mayor de edad");
      alert("Usted es mayor de edad");
    }
  }
  esMayorDeEdad();

  // Ejercicio Comparar dos números
  console.log("Comparar dos números");
  alert("Comparar dos números");
  let primerNumero = +prompt("Ingrese el primer numero");
  let segundoNumero = +prompt("Ingrese el segundo numero");

  if (isNaN(primerNumero) || isNaN(segundoNumero)) {
    alert("Ingrese solo números validos");
    console.log("Ingrese solo números validos");
  } else if (primerNumero < 0 || segundoNumero < 0) {
    alert("Ingrese solo números positivos");
    console.log("Ingrese solo números positivos");
  } else if (primerNumero === segundoNumero) {
    console.log("Los números son iguales");
    alert("Los números son iguales");
  } else if (primerNumero < segundoNumero) {
    console.log(`${segundoNumero} es mayor`);
    alert(`${segundoNumero} es mayor`);
  } else {
    console.log(`${primerNumero} es mayor`);
    alert(`${primerNumero} es mayor`);
  }

  // Ejercicio Conversión de moneda
  console.log("Conversión de moneda");
  alert("Conversión de moneda");
  let monedaLocal = +prompt("Ingrese monto en Soles");
  let TCUSA = 3.62;
  let TCEU = 4.13;

  if (isNaN(monedaLocal)) {
    alert("Ingrese solo números validos");
    console.log("Ingrese solo números validos");
  } else if (monedaLocal < 0) {
    alert("Ingrese solo números positivos");
    console.log("Ingrese solo números positivos");
  } else {
    let resultado = `S/.${monedaLocal} son: \n$${+(monedaLocal / TCUSA).toFixed(
      2
    )} \n€${+(monedaLocal / TCEU).toFixed(2)} `;
    console.log(resultado);
    alert(resultado);
  }

  // Ejercicio Horas de sueño promedio
  alert("Horas promedio");
  console.log("Horas promedio");
  let primerDia = +prompt("Ingrese las horas dormidas en el primer día");
  let segundoDia = +prompt("Ingrese las horas dormidas en el segundo día");
  let tercerDia = +prompt("Ingrese las horas dormidas en el tercer día");

  if (isNaN(primerDia) || isNaN(segundoDia) || isNaN(tercerDia)) {
    alert("Ingrese solo números validos");
    console.log("Ingrese solo números validos");
  } else if (primerDia < 0 || segundoDia < 0 || tercerDia < 0) {
    alert("Ingrese solo números positivos");
    console.log("Ingrese solo números positivos");
  } else {
    let promedio = (primerDia + segundoDia + tercerDia) / 3;
    let resultado = `${
      promedio < 8
        ? "Su promedio está por debajo de las 8h. Debería dormir más"
        : promedio === 8
        ? "Su promedio es de 8h. Siga así"
        : "Su promedio esta por encima de las 8h. Puede reducir sus horas"
    }`;
    console.log(resultado);
    alert(resultado);
  }

  // Ejercicio Verificación año bisiesto
  console.log("Verificación de año bisiesto");
  alert("Verificación de año bisiesto");
  let año = +prompt("ingrese un año");

  if (isNaN(año)) {
    alert("Ingrese solo números validos");
    console.log("Ingrese solo números validos");
  } else if (año <= 0) {
    alert("Ingrese solo números positivos o mayores a 0");
    console.log("Ingrese solo números positivos o mayores a 0");
  } else {
    let añobisiesto = (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
    let resultado = añobisiesto
      ? `${año} es bisiesto`
      : `${año} no es bisiesto`;
    console.log(resultado);
    alert(resultado);
  }

  // Ejercicio Días en un mes
  console.log("Días en un mes");
  alert("Días en un mes");

  let mes = +prompt("Ingrese un numero del 1 al 12");
  let años = +prompt("Ingrese en un año");
  let meses31 = [1, 3, 5, 7, 8, 10, 12];

  if (isNaN(mes) || isNaN(años)) {
    alert("Ingrese solo números validos");
    console.log("Ingrese solo números validos");
  } else if (mes <= 0 || mes > 12 || años <= 0) {
    alert("Ingrese un mes válido (1-12) y un año mayor que 0");
    console.log("Ingrese un mes válido (1-12) y un año mayor que 0");
  } else {
    let añobisiesto = (años % 4 === 0 && años % 100 !== 0) || años % 400 === 0;

    let días;
    if (mes === 2) {
      días = añobisiesto ? 29 : 28;
    } else if (meses31.includes(mes)) {
      días = 31;
    } else {
      días = 30;
    }
    let resultado = `El mes ${mes} del año ${años} tiene ${días} días`;
    console.log(resultado);
    alert(resultado);
  }

  // Ejercicio Cálculo promedio ponderado
  alert("Cálculo del promedio ponderado");
  console.log("Cálculo del promedio ponderado");
  alert("Las notas deben de estar entre 0 y 20");
  let nota = +prompt("Ingrese la primera nota");
  let nota2 = +prompt("Ingrese la segunda nota");
  let nota3 = +prompt("Ingrese la tercera nota");

  alert("Recuerde que los 3 pesos deben sumar 1 (100%)");
  let peso = +prompt("Ingrese el peso de la primera nota en decimales");
  let peso2 = +prompt("Ingrese el peso de la segunda nota en decimales");
  let peso3 = +prompt("Ingrese el peso de la tercera nota en decimales");

  if (
    isNaN(nota) ||
    isNaN(nota2) ||
    isNaN(nota3) ||
    isNaN(peso) ||
    isNaN(peso2) ||
    isNaN(peso3)
  ) {
    alert("Ingrese solo números validos");
    console.log("Ingrese solo números validos");
  } else if (
    nota < 0 ||
    nota > 20 ||
    nota2 < 0 ||
    nota2 > 20 ||
    nota3 < 0 ||
    nota3 > 20 ||
    peso <= 0 ||
    peso2 <= 0 ||
    peso3 <= 0
  ) {
    alert("Ingrese notas positivas o  pesos mayores que 0");
    console.log("Ingrese notas positivas o  pesos mayores que 0");
  } else {
    let resultado = +(nota * peso + nota2 * peso2 + nota3 * peso3).toFixed(2);
    console.log(`Su promedio ponderado es de ${resultado}`);
    alert(`Su promedio ponderado es de ${resultado}`);
  }

  // Ejercicio Conversión de tiempo
  console.log("Conversión de tiempo");
  alert("Conversión de tiempo");

  function tiempo() {
    let minutos = +prompt("Ingrese los minutos");
    let resultado = `${minutos} minutos son ${Math.floor(
      minutos / 60
    )} horas y ${minutos % 60} minutos`;
    alert(resultado);
    console.log(resultado);
  }
  tiempo();
}
document.addEventListener("DOMContentLoaded", function () {
  const activar = document.getElementById("empezar");
  if (activar) {
    activar.addEventListener("click", empezarFunciones);
  }
});
