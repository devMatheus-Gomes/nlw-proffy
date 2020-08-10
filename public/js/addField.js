//Procurar o botão 

document.querySelector('#add-time').addEventListener('click', function(){
    const newFieldContainer = document.querySelector('.shedule-item').cloneNode(true) 

    const fields = newFieldContainer.querySelectorAll('input')

      //AQUI EU PODERIA FAZ A FUNÇÃO SEPARADA E ADICIONAR APENAS O NOME DELE É FUNÇÃO DO CLIQUE TAMABEM 
      //forEach SERVE COMO LAÇO DE REPETIÇÃO EX -> AQUI ESTÁ FALANDO PARA REPETIR A FUNÇÃO QUANTAS VEZES FOREM NECESSARIAS NO FIELDS 
    fields.forEach(function(field){
      field.value =''
    })

    document.querySelector('#shedule-items').appendChild(newFieldContainer)
})



