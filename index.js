
let jogador = "X";
let resultado;

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");


function jogada(casa) {
    if (casa.innerHTML === "") {
        casa.innerHTML = jogador;
        alterna_jogador();

        verifica_ganhador();
    }

}
function alterna_jogador() {
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}
function verifica_ganhador() {
    if (casa01.innerHTML != "" && casa01.innerHTML === casa02.innerHTML && casa01.innerHTML === casa03.innerHTML) {
        resultado = "Parabéns jogador " + casa01.innerHTML + ", você ganhou!"
    } else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        resultado = "Parabéns jogador " + casa04.innerHTML + ", você ganhou!"
    } else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML) {
        resultado = "Parabéns jogador " + casa07.innerHTML + ", você ganhou!"
    } else if (casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa01.innerHTML === casa07.innerHTML) {
        resultado = "Parabéns jogador " + casa01.innerHTML + ", você ganhou!"
    } else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa02.innerHTML === casa08.innerHTML) {
        resultado = "Parabéns jogador " + casa02.innerHTML + ", você ganhou!"
    } else if (casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa03.innerHTML === casa09.innerHTML) {
        resultado = "Parabéns jogador " + casa03.innerHTML + ", você ganhou!"
    } else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa01.innerHTML === casa09.innerHTML) {
        resultado = "Parabéns jogador " + casa01.innerHTML + ", você ganhou!"
    } else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        resultado = "Parabéns jogador " + casa03.innerHTML + ", você ganhou!"
    } else { resultado = "Você não ganhou :("}

    document.getElementById("resultado").innerHTML = resultado;

}