function testar(){
    var nome = document.getElementById("nometxt").value 
    var nomemae = document.getElementById("nomemae").value
    var fone = document.getElementById("telefone").value
    var divmostrar = document.getElementById("mostrardados")

    /*if(nome == ""){
        alert("O nome não pode ser vazio")
    }else if (nomemae == ""){
        alert("O nome da mãe não pode ser vazio")
    }else if (fone == ""){
        alert("O telefone não pode ser vazio")
    }else{
        var Pessoa = {
            nome : nome,
            mae : nomemae,
            telefone : fone,
        }
    
        divmostrar.innerHTML = "Nome: "+ Pessoa.nome + " - " + "Mãe: "+ Pessoa.mae + " - " + " Telefone: "+ Pessoa.telefone
    }*/
}

function somar(){
    function sum(a,b){
        var resultado = a + b
        divmostrar.innerHTML = resultado
    }

    var num = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value

    if(num == ""){
        alert("o número não pode ser vazio")
    }else if(num2 == ""){
        alert("o número não pode ser vazio")
    }else{
        var Pessoa = {
            num : num,
            num2 : num2,
        }

        sum(Pessoa.num, Pessoa.num2)
        
    }
}