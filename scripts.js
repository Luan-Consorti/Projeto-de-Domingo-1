//Criando uma função para ativar o botão

function addnumber(){ 

    //Recolher os números colocados pelo jogador
    const numeros =document.querySelector("#números").value;
    
    //Remover os espaços desnecessários
    const arr2 = numeros.trim();

    //Separar os números por espaços
    const arr1 = arr2.split(" ");
    
    //Caso o jogador não digite número algum
    if (!numeros){
    }

    //Caso o jogador digite menos de 6 números
    if(arr1.length < 6 ){
    };

    //Caso o jogador digite mais de 6 números
    if(arr1.length > 6 ){
    };
    
    //Quando o jogador digitar os 6 números
    if(arr1.length == 6 ){

    //Transformando os elementos da lista em inteiros, para posteriormente fazer a comparação com os números sorteados
        lista = []
    for(var i = 0; i < arr1.length ; i++){
        var elent = parseInt(arr1[i])
        lista.push(elent)}

    //Criando uma lista com os números sorteados
        var sorteados =[]
    while (sorteados.length < 6){
        e = Math.ceil( Math.random()*60 );
        if (sorteados.indexOf(e) == -1){
            sorteados.push(e)
        }
    }

    //Comparando os números sorteados com os jogados para verificar quantos acertos o jogador obteve
    var acertos = 0
    for(var i = 0 ; i < lista.length ; i++ ){
        for(var j = 0 ; j < sorteados.length ; j++ ){
            if( lista[i] == sorteados[j] ){
                acertos +=1

            }
        }
    }

    //clona template
    const template = document.querySelector(".template");
    const jogados = template.cloneNode(true);
    const sorteio = template.cloneNode(true);
    const acertados = template.cloneNode(true);
    


  


    
    // add titulo
    jogados.querySelector(".task-title").textContent = lista;

    sorteio.querySelector(".task-title").textContent = sorteados;

    acertados.querySelector(".task-title").textContent = acertos;

    


    //remove
    jogados.classList.remove("template");
    jogados.classList.remove("hide");

    sorteio.classList.remove("template");
    sorteio.classList.remove("hide");

    acertados.classList.remove("template");
    acertados.classList.remove("hide");

    
    // add lista
    const aparecer = document.querySelector("#Jogados");
    aparecer.appendChild(jogados);

    const aparecer1 = document.querySelector("#Sorteados");
    aparecer1.appendChild(sorteio);

    const aparecer2 = document.querySelector("#Acertos");
    aparecer2.appendChild(acertados);
    
    };

};
function resetar(){
    window.location.reload(true);
    
}


// Dando função para o botão jogar
const botão = document.querySelector("#jogar");

botão.addEventListener( "click" , function(a) {
    a.preventDefault();
    addnumber();
});


//dando a função para o botão limpar
const botão1 = document.querySelector("#Limpar");

botão1.addEventListener( "click" , function(e) {
    e.preventDefault();
    resetar();
   
});





