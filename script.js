// Variáveis para aplicar os resultados do teste. Não as altere.
const gender = process.argv[2]; // Genero
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

// variavel let com boleano
let passed = false;

//verificação de genero
if(gender === `male`){

  //verificação de altura
  if(height >= 1.70){

    //verificação do teste com barra
    if((barReps >= 6) || barSeconds >= 15){

      //verificação do teste de abdomem
      if(abs >= 41){

        //verificação do resultado do teste de corrida
        if((runDistance >= 3000 && runTime <= 12*60) || runDistance >= 5000 && runTime <= 20*60){
          
          //verificação do teste de natação
          if((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30){
            //testes que passaram = true(verdade)
            passed = true;
          }
        }
      }
    }
  }
  //verificação de genero
} else if(gender === `female`){

  //verificação de altura
  if(height >= 1.60){

    //verificação do teste com barra
    if((barReps >= 5) || barSeconds >= 12){

      //verificação do teste de abdomem
      if(abs >= 41){

        //verificação do resultado do teste de corrida
        if((runDistance >= 4000 && runTime <= 15*60) || runDistance >= 6000 && runTime <= 22*60){

          //verificação do teste de natação
          if((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30){

            //testes que passaram = true(verdade)
            passed = true;
          }
        }
      }
    }
  }
}
//impressão do codigo
console.log(passed);


