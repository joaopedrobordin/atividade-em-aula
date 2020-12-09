function Trocar(){
    let numero = document.getElementById("numero").amostra;

    if(amostra<100)//teste
    {   
        //resposta verdadeira
        document.getElementById("mensagem").innerText = "Menor que 100";
    }
    else if(numero == 100)
    {
        document.getElementById("mensagem").innerText = "Igual a 100";
    }
    else
    {
        //resposta falsa
        document.getElementById("mensagem").innerText = "Maior que 100";
    }