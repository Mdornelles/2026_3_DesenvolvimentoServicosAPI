function conectar(){
    var nome = document.getElementById("nometxt").value;
    var idade = document.getElementById("idadetxt").value;
    var numero = document.getElementById("numerotxt").value;
    var divmostrar = document.getElementById("divmostrar");

    if (nome == ""){
        alert("O nome não pode ser vazio")
    }if (idade == ""){
        alert("A iadade não pode ser vazia")
    }if (numero == ""){
        alert("O número de telefone não pode ser vazio")
    }else{
        var pessoa = {
            nome : nome,
            idade : idade,
            numero : numero,
        }
        divmostrar.innerHTML = "Nome: "+ pessoa.nome + " - " + "idade: " + pessoa.idade + " - " + "numero:  " + pessoa.numero
    }
}

usuario = {
    nome: "",
    peso: 0.0,
    altura: 0.0,
    calcularIMC : function(){
        imc = this.peso/(this.altura*this.altura)
        return imc
    }
}
function calcular(){
    var nome = document.getElementById("txtnome").value
    var peso = document.getElementById("pesotxt").value
    var altura = document.getElementById("alturatxt").value
    var divcalcular = document.getElementById("divIMC")

    if(nome == "" || peso == "" || altura == ""){
        alert("Os elementos não podem ser vazio.")
    }else{
        usuario.nome = nome
        usuario.peso = peso.replace("," , ".")
        usuario.altura = altura.replace("," , ".")
        divcalcular.innerHTML = "Nome: " + usuario.nome
        divcalcular.innerHTML += "Peso: " + usuario.peso  
        divcalcular.innerHTML += "altura: " + usuario.altura
        divcalcular.innerHTML += "IMC: " + usuario.calcularIMC()   
    }
}



$("#quadrado").css("width", "200px")
$("#quadrado").css("background", "blue")        
$("#quadrado").css("color", "#fff")
$("#quadrado").hide(5000)
$("#quadrado").show(5000)


