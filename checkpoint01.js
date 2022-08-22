function Microondas(comida, tempo)
    {
   if (comida == 'Pipoca') {
       TempoMicroondas(10, tempo);
   } else if (comida == 'Macarrao') {
      TempoMicroondas(8, tempo);
   } else if (comida == 'Carne') {
      TempoMicroondas(15, tempo);
   } else if (comida == 'Feijao') {
      TempoMicroondas(12, tempo);
   } else if (comida == 'Brigadeiro') {
      verificarTempo(8, tempo);
   } else { (!comida)
       console.log('Comida inexistente');
   }
}


 function TempoMicroondas(tempoPadrao, tempoEscolhido) {
   if (tempoEscolhido > tempoPadrao * 2 && tempoEscolhido < tempoPadrao * 3){
   console.log("Comida Queimou"),console.log("Prato pronto, bom apetite!!!") ;
    } else if(tempoEscolhido >= tempoPadrao * 3 ){
   console.log("Kabumm"), console.log("Prato pronto, bom apetite!!!");
     } else if ( tempoEscolhido < tempoPadrao ){
   console.log("Tempo Insuficiente");
     } else {tempoEscolhido >= tempoPadrao && tempoEscolhido <= tempoPadrao * 2
      console.log("Prato pronto, bom apetite!!!");
     }

 
   }
 Microondas("Carne", 46);