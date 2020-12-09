function Trocar(){
    let numero = document.getElementById("numero").idade;
    if(idade<18)
    {   
        document.getElementById("mensagem").innerText = "Menor";
    }
    else if(idade>=18)
    {
        document.getElementById("mensagem").innerText = "maior";
    }