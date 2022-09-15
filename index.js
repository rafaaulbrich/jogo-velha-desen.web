
let jogador = "X";
let resultado = "";

let casa01 = document.getElementById("casa01");
let casa02 = document.getElementById("casa02");
let casa03 = document.getElementById("casa03");
let casa04 = document.getElementById("casa04");
let casa05 = document.getElementById("casa05");
let casa06 = document.getElementById("casa06");
let casa07 = document.getElementById("casa07");
let casa08 = document.getElementById("casa08");
let casa09 = document.getElementById("casa09");

let botaoJogar = document.getElementById("casa-botao");
let vitorias_x = 0;
let vitorias_o = 0;

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
        resultado = "Parabéns jogador " + casa01.innerHTML + ", você ganhou!";
        vitoria(casa01.innerHTML);
    }
    else if (casa04.innerHTML != "" && casa04.innerHTML === casa05.innerHTML && casa04.innerHTML === casa06.innerHTML) {
        resultado = "Parabéns jogador " + casa04.innerHTML + ", você ganhou!"
        vitoria(casa04.innerHTML);
    }
    else if (casa07.innerHTML != "" && casa07.innerHTML === casa08.innerHTML && casa07.innerHTML === casa09.innerHTML) {
        resultado = "Parabéns jogador " + casa07.innerHTML + ", você ganhou!"
        vitoria(casa07.innerHTML);
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa04.innerHTML && casa01.innerHTML === casa07.innerHTML) {
        resultado = "Parabéns jogador " + casa01.innerHTML + ", você ganhou!"
        vitoria(casa01.innerHTML);
    }
    else if (casa02.innerHTML != "" && casa02.innerHTML === casa05.innerHTML && casa02.innerHTML === casa08.innerHTML) {
        resultado = "Parabéns jogador " + casa02.innerHTML + ", você ganhou!"
        vitoria(casa02.innerHTML);
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa06.innerHTML && casa03.innerHTML === casa09.innerHTML) {
        resultado = "Parabéns jogador " + casa03.innerHTML + ", você ganhou!"
        vitoria(casa03.innerHTML);
    }
    else if (casa01.innerHTML != "" && casa01.innerHTML === casa05.innerHTML && casa01.innerHTML === casa09.innerHTML) {
        resultado = "Parabéns jogador " + casa01.innerHTML + ", você ganhou!"
        vitoria(casa01.innerHTML);
    }
    else if (casa03.innerHTML != "" && casa03.innerHTML === casa05.innerHTML && casa03.innerHTML === casa07.innerHTML) {
        resultado = "Parabéns jogador " + casa03.innerHTML + ", você ganhou!"
        vitoria(casa03.innerHTML);
    }
    else if (casa01.innerHTML != "" && casa02.innerHTML != "" && casa03.innerHTML != "" && casa04.innerHTML != "" && casa05.innerHTML != "" && casa06.innerHTML != "" && casa07.innerHTML != "" && casa08.innerHTML != "" && casa09.innerHTML != "") {
        resultado = "Ninguém ganhou :("
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function vitoria(vencedor) {
    if (vencedor === "X")
        vitorias_x += 1;
    else vitorias_o += 1;

    placar.innerHTML = `<p>Placar:</p><p>X: ${vitorias_x}</p><p>O: ${vitorias_o}</p>`;
    placar.style.display = "block";
    botaoJogar.style.display = "inline";
}

function iniciarJogo() {
    let casas = document.getElementsByClassName(`casa`);
    casas[0].innerHTML = "";
    casas[1].innerHTML = "";
    casas[2].innerHTML = "";
    casas[3].innerHTML = "";
    casas[4].innerHTML = "";
    casas[5].innerHTML = "";
    casas[6].innerHTML = "";
    casas[7].innerHTML = "";
    casas[8].innerHTML = "";

    botaoJogar.style.display = "none";
    document.getElementById("resultado").innerHTML = "";

    let quem_inicia = prompt("Quem iniciara novamente? X ou O:").toUpperCase();
    jogador = quem_inicia;
}