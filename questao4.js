function booOUnum(valor){
  if((typeof valor) == 'boolean'){
    return console.log(!valor);
  }

  if((typeof valor) == 'number'){
    return console.log(valor * -1);
  }
}

booOUnum(false)