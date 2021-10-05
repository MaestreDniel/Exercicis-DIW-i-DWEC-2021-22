function stringBuit() {
    let paraula = document.getElementById("uno").value;
    if (paraula.length > 0) {
        document.getElementById("resultado").innerHTML = "Aquest string no està buit";
    } else {
        document.getElementById("resultado").innerHTML = "Aquest string està buit";
    }
    
}

function stringInvers() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = "Codi en construcció"; // Després ho miraré millor
}

function comptadorDeA() {
    let paraula = document.getElementById("uno").value;
    let num = 0;
    for (let i = 0; i < paraula.length; i++) {
        if (paraula.charAt(i) == "a" || paraula.charAt(i) == "A") {
            num++;
        }
    }
    document.getElementById("resultado").innerHTML = "Hi ha " + num + " lletres 'a' en aquest string";
}

function abansDeA() {
    let paraula = document.getElementById("uno").value;
    let substr = "";
    for (let i = 0; i < paraula.length; i++) {
        if (paraula.charAt(i) == "a" || paraula.charAt(i) == "A") {
            substr = paraula.substr(0,i);
            break;
        }
    }
    document.getElementById("resultado").innerHTML = substr;
}

function firstlastA() {
    let paraula = document.getElementById("uno").value;
    for (let i = 0; i < paraula.length; i++) {
        if (paraula.charAt(i) == "a") {
            document.getElementById("resultado").innerHTML = 
            "La posició de la primera lletra (a minúscula) és " + paraula.indexOf("a",0) + " i la darrera és " + paraula.lastIndexOf("a",paraula.length);
        } else if (paraula.charAt(i) == "A") {
            document.getElementById("resultado").innerHTML = 
            "La posició de la lletra (A majúscula) és " + paraula.indexOf("A",0) + " i la darrera és " + paraula.lastIndexOf("A",paraula.length);
        }
    }
}

function extractor() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = "Codi en construcció";
}