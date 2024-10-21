numeros = [1,2,3,4,5,6,7,8,9,10,15,18,20]

function menorQue20Impar(num){
    if(num<20 && num%3==0)
        return num

}

console.log(numeros.filter(menorQue20Impar))