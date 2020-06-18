alert ( "Olá! Seja bem vindo a minha página!" );
alert ( "Vamos descobrir qual dentre 2 números é maior! Você me ajuda?" );

let valorA = window.prompt ("Digite um número!");
let valorB = window.prompt ("Agora digite outro número!");

if (valorA > valorB) { 
    alert ("O número "+ valorA + " é maior que o número "+ valorB +"." )
}   else if (valorA < valorB){
    alert ("O número "+ valorB + " é maior que o número "+ valorA + ".")
}  else {
    alert ("Os números que você digitou são iguais!")
}

alert ( "Atualize sua página para usar novamente! Obrigado ;D")