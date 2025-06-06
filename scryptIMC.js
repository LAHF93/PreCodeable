function calcularIMC() {
  let peso = +document.getElementById("peso").value;
  console.log(peso);
  let altura = +document.getElementById("altura").value;
  console.log(altura);

  let imc = +(peso / altura ** 2).toFixed(2);
  console.log(imc);

  let resultado = document.getElementById("resultado");

  if (imc < 18.5) {
    resultado.textContent = `Tu IMC es ${imc} - Bajo Peso`;
  } else if (imc < 25) {
    resultado.textContent = `Tu IMC es ${imc} - Peso Normal`;
  } else if (imc < 30) {
    resultado.textContent = `Tu IMC es ${imc} - Sobre Peso`;
  } else {
    resultado.textContent = `Tu IMC es ${imc} - Obesidad`;
  }
}
