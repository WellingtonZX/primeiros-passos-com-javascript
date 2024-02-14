
// IF
var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0){    //se o jogador1 for maior que zero ele vai mostrar: jogador1 marcou ponto!;
    console.log('jogador 1 marcou ponto! ');
}
// como ler: se o jogador1 tiver valor maior que 0 ele marcou ponto.;
// resposta: não aparece nada porque o jogador1 não tem valor maior que zero;
// caso eu mude de 0 para 1, aparece -> jogador 1 marcou ponto!;


//ELSE(se não)
var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0){         //se o jogador1 for maior que zero ele vai mostrar: jogador1 marcou ponto!;
    console.log('jogador 1 marcou ponto! ');
} else{                  //caso ninguem tenha marcado ponto, então ele vai mostrar que ninguem marcou ponto;
    console.log('Ninguem marcou ponto! ');
}
//resposta: Ninguem marcou ponto!;
//caso eu mude o valor do jogador1 para 1, resposta: -> jogador 1 marcou ponto!;

//ELSE IF
var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0){          //se o jogador1 for maior que zero ele vai mostrar: jogador1 marcou ponto!;
    console.log('jogador 1 marcou ponto! ');
} else if (jogador2 > 0){  //se o jogador2 for maior que zero ele vai mostrar: jogador2 marcou ponto!;
    console.log('jogador 2 marcou ponto! ');
} else{                   //caso ninguem tenha marcado ponto, então ele vai mostrar que ninguem marcou ponto;
    console.log('Ninguem marcou ponto! ');
}
//resposta: Ninguem marcou ponto!;
//caso eu mude o valor do jogador1 para 1, resposta: -> jogador1 marcou ponto!;
//caso eu mude o valor do jogador2 para 1, resposta: -> jogador2 marcou ponto!;

//NINHO DE IF
var jogador1 = -1;
var jogador2 = 0;
var placar;

if(jogador1 != -1){               //se o jogador1 for diferente de -1, então execute as linhas de codigo abaixo, se for igual vai apresentar erro;
    if (jogador1 > 0){           //se o jogador1 for maior que zero ele vai mostrar: jogador1 marcou ponto!;
        console.log('jogador 1 marcou ponto! ');
} else if (jogador2 > 0) {      //se o jogador2 for maior que zero ele vai mostrar: jogador2 marcou ponto!;
    console.log('jogador 2 marcou ponto! ');
} else{                        //caso ninguem tenha marcado ponto, então ele vai mostrar que ninguem marcou ponto;
    console.log('Ninguem marcou ponto! ');
}
}
//resposta: não aparece nada, da erro, porque a partida não pode comecar com -1 ponto.;
//caso eu mude o valor do jogador1 para 1, resposta: -> jogador1 marcou ponto!;
//caso eu mude o valor do jogador2 para 1, resposta: -> jogador2 marcou ponto!;

// IF TERNÁRIO
var jogador1 = -1;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') ://se o jogador1 for diferente de -1 e jogador2 for diferente de menos 1
console.log('jogadores Inválidos');
if (jogador1 > 0){          //se o jogador1 for maior que zero ele vai mostrar: jogador1 marcou ponto!;
    console.log('jogador 1 marcou ponto! ');
} else if (jogador2 > 0){  //se o jogador2 for maior que zero ele vai mostrar: jogador2 marcou ponto!;
    console.log('jogador 2 marcou ponto! ');
} else{                   //caso ninguem tenha marcado ponto, então ele vai mostrar que ninguem marcou ponto;
    console.log('Ninguem marcou ponto! ');
}
// lembre de usar a interrogação “?” e dois pontos “:”
//interrogação indica que é um if ternário
//resposta: Os jogadores são válidos, Ninguem marcou ponto!;
//caso eu mude o valor do jogador1 para -1, resposta: -> jogadores Inválidos, Ninguem marcou ponto! - e assim sucessivamente...

//OUTRO EXEMPLO DE IF TERNÁRIO/DEIXANDO O CODIGO MELHOR
var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('jogadores Inválidos');

if (jogador1 > 0 && jogador2 == 0) {     //se o jogador1 for maior que 0 e jogador2 for igual igual a zero, então 'jogador 1 marcou ponto';     
    console.log('jogador 1 marcou ponto! ');
    placar = jogador1 > jogador2;
}
 else if (jogador2 > 0 && jogador1 == 0){  //se o jogador2 for maior que 0 e jogador1 for igual igual a zero, então 'jogador 2 marcou ponto';     
    console.log('jogador 2 marcou ponto! ');
    placar = jogador2 > jogador1;   
}
 else{                
    console.log('Ninguem marcou ponto! ');
}

//SWITCH/CASE
switch (placar){       //Passar o placar que é o que vamos verificar;
    case placar = jogador1 > jogador2:  //caso o placar seja que o jogador1 for maior que o jogador2;
        console.log('jogador 1 ganhou');    //então imprima essa mensagem: jogador 1 ganhou;
        break;       // usado break para parar a condição/para não entrar em loop.;
    case  placar = jogador2 > jogador1: //caso o placar seja ugual a jogador2 maior que jogador1;
        console.log('jogador 2 ganhou'); //então imprima essa mensagem: jogador 2 ganhou;
        break;     // usado break para parar a condição/para não entrar em loop.;
     default:      //Esse default vai funcionar como um valor padrão/ caso os dois casos acima não tenha atendido ele vai pular pro default;
        console.log('ninguem ganhou'); // o default vai imprimir: ninguem ganhou;
}
//Lembrar sempre de usar a palavra break para que ele pare a instrução.;
//Para fazer esse teste foi usando o //OUTRO EXEMPLO DE IF TERNÁRIO/DEIXANDO O CODIGO MELHOR
//resultado: Os jogadores são válidos, Ninguem marcou ponto!, ninguem ganhou;
//caso eu mude o valor do jogador1 para 1, resposta: -> Os jogadores são válidos, jogador1 marcou ponto!, jogador 1 ganhou;
//caso eu mude o valor do jogador1 para -1, resposta: -> jogadores Inválidos, Ninguem marcou ponto!, ninguem ganhou;, e assim sucessivamente...


//


