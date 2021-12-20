/* Puedo convertir mi input de string a array con un .split(),
lo que separa una palabra de otra es la coma. Input esperado: hola,que,tal,muy,buenas */

function separaDolar() {
    let myinput = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = myinput.split(",").join(" $ ");
}

function concatenar() {
    let myinput = document.getElementById("uno").value;
    let arrrray = ["zen", 19, "choice"];
    document.getElementById("resultado").innerHTML = myinput.split(",").concat(arrrray);
}

function spliceElem() {
    /* .splice() retorna el elemento que se ha eliminado, pero lo que interesa ver es lo que se queda,
    así que a diferencia de otros métodos, no se va a imprimir lo que ocurre en este método, solo se ejecuta */
    let myinput = document.getElementById("uno").value.split(",");
    myinput.splice(1, 1);
    document.getElementById("resultado").innerHTML = myinput;
}

function spliceParteDos() {
    let myinput = document.getElementById("uno").value.split(",");
    myinput.splice(1, 1, "Doe", 3.1415);
    document.getElementById("resultado").innerHTML = myinput;
}

function ordena() {
    let myinput = document.getElementById("uno").value.split(",").sort();
    document.getElementById("resultado").innerHTML = myinput;
}

let numCrec = function (a, b) {
    return a - b;
}

let numDecr = function (a, b) {
    return b - a;
}

function ordenaNum() {
    let myinput = document.getElementById("uno").value.split(",").sort(numCrec);
    document.getElementById("resultado").innerHTML = myinput;
}

function ordenaNumParteDos() {
    let myinput = document.getElementById("uno").value.split(",").sort(numDecr);
    document.getElementById("resultado").innerHTML = myinput;
}