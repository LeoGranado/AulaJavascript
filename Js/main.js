function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}


function redirecionar(){
    window.open("https://www.linkedin.com/in/leonardo-granado-a735b319b/")    
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value);
}



/*
function soma (n1, n2){
    return n1 + n2;
}
alert (soma(5,10));
*/


/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false
    } 
    return validar;
}

var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade));
*/



/*
var d = new Date();
alert(d.getMonth +1);
*/

/*
var count;
for (count=0; count <= 5; count++){
    alert(count);
}
*/

/* var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
} 
*/

/* var idade = prompt ("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};
*/

/* var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"} ]
console.log(frutas)
alert(frutas[1].nome); */

/* var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome)
alert(fruta.cor); */


//var lista = ["maça", "pêra", "laranja"]
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));



/*var nome = "Leonardo Granado";
var n1 = 5;
var n2 = 3;
var frase = "Japão tem o melhor sushi do mundo"
alert(nome + " tem " + idade + " anos ")
alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace ("Japão", "Brasil"));
console.log(frase.toUpperCase())
alert(frase.replace("Japão", "Brasil")); */