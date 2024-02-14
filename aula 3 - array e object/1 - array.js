// o que são arrays

//como declarar um array
    let array1 = ['string', 1, true];
    console.log(array1);
// resultado: 'string', 1, true;

//pode guardar varios tipos de dados.
    let array = ['string', 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
    console.log(array[3]); //[0] <- setando esse indice, o resultado vai ser: "string", 1, true ;
    // Caso voce não setar nenhum indice vai aparecer todas as arrays; resultado: ['string', 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];

