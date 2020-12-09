function soma() {
    let Number1 = Document.getElementByid("numero1").value;
    let Number2 = Document.getElementByid("numero2").value;
    let conta = parseFloat("Numero1") + parseFloat("numero2");
    //document.getElementByid("resultado").innertText = conta;
}
if (conta == 0) {
    document.getElementById("resultado").innerText = "Neutro";
}
else if (conta > 0) {
    document.getElementById("resultado").innerText = "Positivo";
}
else {
    document.getElementById("resultado").innerText = "Negativo";
}



