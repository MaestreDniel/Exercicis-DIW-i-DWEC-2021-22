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
            num++; // Cada vegada que troba una a minúscula o majúscula, es compta 1
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
        } else if (paraula.charAt(i) == "A") { // D'aquesta manera el faig case-sensitive
            document.getElementById("resultado").innerHTML = 
            "La posició de la lletra (A majúscula) és " + paraula.indexOf("A",0) + " i la darrera és " + paraula.lastIndexOf("A",paraula.length);
        }
    }
}

function extractor() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = paraula.replaceAll("la", "");
}

function substitutor() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = paraula.replaceAll("la", "*");
}

function capicua() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = paraula.charAt(0)+paraula+paraula.charAt(0);
}

function foraEspai() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = paraula.replaceAll(" ", "");
}

function guionizator() {
    // He transformat els espais per guions pas per pas (m'ha sortit d'aquesta manera)
    let paraula = document.getElementById("uno").value;
    paraula = paraula.replaceAll("  ", "-");
    paraula = paraula.replaceAll(" ", "-");
    for (let i = 0; i < paraula.length; i++) {
        paraula = paraula.replaceAll("--", "-");
    }
    document.getElementById("resultado").innerHTML = paraula;
}

function acronimator() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = "Codi en construcció";
}

function email() {
    let paraula = document.getElementById("uno").value;
    document.getElementById("resultado").innerHTML = "Codi en construcció";
}

function signeNum() {
    let num = document.getElementById("uno").value;
    if (num < 0) {
        document.getElementById("resultado").innerHTML = num + " es de signe negatiu.";
    } else if (num > 0) {
        document.getElementById("resultado").innerHTML = num + " es de signe positiu.";
    } else {
        document.getElementById("resultado").innerHTML = num + " es 0, ni + ni -.";
    }
}