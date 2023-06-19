function numeros(primeiro, segundo){
    if(primeiro>segundo){
        console.log('O numero '+ primeiro +' é maior ao '+ segundo + '.')
    }
    else if(primeiro==segundo){
        console.log('O numero '+ primeiro +' é igual ao '+segundo)
    }
    else{
        console.log('O numero '+ primeiro + ' é menor que o ' +segundo + '.')
    }

}
numeros( 10, 10)