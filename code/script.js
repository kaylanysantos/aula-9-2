const formulario = document.querySelector("#formulario");
const resultadoTexto = document.querySelector("#resultadoTexto");

function calculoImc(altura, peso) {
  return peso / (altura * altura);
}

formulario.onsubmit = (event) => {
  event.preventDefault();

  const altura = parseFloat(document.querySelector("#altura").value);
  const peso = parseFloat(document.querySelector("#peso").value);
  
  const imc = calculoImc(altura,peso)

  if (imc < 16,9) 
    resultadoTexto.innerHTML = `o seu imc é ${imc}. vocé está abaixo do peso ideal`

  else if (imc > 17 && imc < 18.4)
    resultadoTexto.innerHTML = `abaixo do peso`

  else if (imc > 18.5 && imc < 24.9)
    resultadoTexto.innerHTML = `o seu peso ta normal`

  else if (imc < 25 && imc 29.9)
    resultadoTexto.innerHTML = `esta acima do peso`
   
  else if (imc > 30 && imc 34.9)
    resultadoTexto.innerHTML = `obesidade grau 1`

  else if (imc > 35 && imc 40)
    resultadoTexto.innerHTML = `obesidade grau 2`

  else if (imc >= 40) 
    resultadoTexto.innerHTML = `obesidade grau 3` 
  
  // Faça condicionais verificando os dados fornecidos

  // Verificar se os dados inseridos são válidos

  // Se está abaixo do peso
  // Se está com o peso ideal
  // Se está acima do peso
};
