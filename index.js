//VARIABLES
//01
let variableSinValor;

//02
let booleano1 = true;
let booleano2 = false;

//03
const PI = 3.14

//04
const TAU = (2 * PI);
console.log(TAU);

//BOOLEANOS
//05
let booleanoAnd = booleano1 && booleano2

//06
let booleanoNot = !booleano1
console.log (booleanoNot);

//07
let booleanoMix0 = (booleano1 || booleano2) || (booleano1&&(!booleano1&&booleano2));
console.log (booleanoMix0);

//OPERADORES
//08
let incrementarDesp = 2
let resultadoDesp = incrementarDesp++
console.log(resultadoDesp)

//09
let incrementarAntes = 2
let resultadoAntes = ++incrementarAntes
console.log(resultadoAntes);

//BUCLES
//10
let contarHasta10_2 = 0;
for (let i = 1; i <11; i++)
{
    console.log(contarHasta10_2=i);
}


//11
var postI =0
var postJ =0
for(a=0; a<11; a++)
{
    postI = postI + postJ;
    postJ++;
}
console.log(postI);


//12
var sumaPares = 0;
for (let i =0; i<10; i++)
    {
        if (i % 2 === 0)
        {
            sumaPares = sumaPares + i;           
        }
        else
        {
            sumaPares = sumaPares;
        }
    }
    console.log("el numero es: "+sumaPares);


//ITERACIONES
//13
  let variableValorNumerico = 4;
  console.log(variableValorNumerico);

//14
  const MiNombre ="Eduardo";
  console.log(MiNombre);

//15
  const MiNumeroFav = 4;
  console.log(MiNumeroFav);

//BOOLEANOS
//16
  let booleanoOr = (booleano1 || booleano2);
  console.log(booleanoOr);

//17
  let booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || 
  (variableValorNumerico >= MiNumeroFav);
  console.log (booleanoMix1);

//18
  let seisNoEsNueve = (6 !== 9);
  console.log(seisNoEsNueve);

//19
let booleanoMix2 =((variableValorNumerico > 0) ||
(variableValorNumerico < (MiNumeroFav*TAU)));
console.log(booleanoMix2);

//OPERADORES
//20
let valorSuma = (MiNumeroFav + variableValorNumerico);
console.log(valorSuma);

//21
let valorResta = (MiNumeroFav - variableValorNumerico);
console.log(valorResta);

//22
let valorMultiplicacion = (MiNumeroFav * variableValorNumerico);
console.log(valorMultiplicacion);

//23
let valorDivision = (MiNumeroFav / 3);
console.log(valorDivision);

//BUCLES
//24
let contarHasta10 = 0;
while (contarHasta10 < 10)
{
    contarHasta10++
}
console.log(contarHasta10);

//25
let preI = 0;
let preJ = 0;
for(let i = 0; i<11; i++)
{
    preI = (preI + ++preJ);
}
console.log(preI);

//26
let sumaImpares = 0;
for(let i = 0; i < 10; i++)
{
    if (i % 2 == 1)
    {
        sumaImpares = (sumaImpares + i);
    }
}
console.log(sumaImpares);


