// replace()
// replaceAll()

let ball = "bola" // substituir duas letras
console.log(ball.replace('bo', 'ba')); // bala

let house = "Casa Amarela" //substituir as duas primeiras letras de uma frase.
console.log(house.replace('Ca', 'Ci').replace('Am', 'An')
);

let repeat = "Banana Amarela" //Todas as ocorrencias de 'a'
console.log(repeat.replaceAll('a', 'o')); //Bonono Omorelo

let multiwording = "Banana Bonobo" // Multi ocorrencia
console.log(multiwording.replaceAll('a', 'e').replaceAll('o', 'i')); //Benene Binibi

let multi2 = "Brother" //mais de uma letra diferente
console.log(multi2.replace('o' , 'a').replace('e', 'u')); //Brathur

let only = "banana" //Apenas o segundo
console.log(
    only.slice(0, 3) +
    only.slice(3, 4).replace('a', 'o') +
    only.slice(4, 6)

)

