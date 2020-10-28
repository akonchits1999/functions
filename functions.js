/*let are the same like var but there is diference between:
var is function scoped and let is block scoped.*/
//const - for const variables(we can't change this variable in code)


function sum(a,b){

    return a+b;
}
function sub(a,b){

    return a-b;
}
function mul(a,b){

    return a*b;
}
function percent(totalValue,partialValue){

    return partialValue/totalValue *100;
}
function div(a,b){

    return a/b;
}
function integerDiv(a,b){

    return sub(a,a%b)/b;
   //return Math.floor(a/b);
}

function abs(a){

   if (a>=0)
    return a;
   else return a*-1;
}
function sqr(a){

    return a*a;
}
function factorial(a){

    if (a<0) 
     return;
    else if (a==1) return 1;
     else return a*factorial(a-1);
}
function round(a){

    if  (a-integerDiv(a,1)<0.5)
     return integerDiv(a,1);
    else return integerDiv(a,1)+1;
    
    
}
function sin(a){

    return Math.sin(a);
}
function cos(a){

    return Math.sqrt(1- sqr(sin(a)));
}
function tg(a){

    return (sin(a)/cos(a));
}
function ctg(a){

    return (cos(a)/sin(a));
}


console.log(sum(1,2));
console.log(sub(2,1));
console.log(mul(5,3));
console.log(percent(10,5));
console.log(div(1,2));
console.log(integerDiv(9,2));
console.log(abs(-1));
console.log(sqr(2));
console.log(factorial(3));
console.log(round(3.6));
console.log(sin(0.5));
console.log(cos(0.5));
console.log(tg(0.5));
console.log(ctg(0.5));


document.getElementById('sum').innerHTML=sum(1,2);
document.getElementById('sub').innerHTML=sub(2,1);
document.getElementById('mul').innerHTML=mul(5,3);
document.getElementById('percent').innerHTML=percent(10,5) + "%";
document.getElementById('div').innerHTML=div(1,2);
document.getElementById('integerDiv').innerHTML=integerDiv(9,2);
document.getElementById('abs').innerHTML=abs(-1);
document.getElementById('sqr').innerHTML=sqr(2);
document.getElementById('factorial').innerHTML=factorial(3);
document.getElementById('round').innerHTML=round(3.6);
document.getElementById('sin').innerHTML=sin(0.5);
document.getElementById('cos').innerHTML=cos(0.5);
document.getElementById('tg').innerHTML=tg(0.5);
document.getElementById('ctg').innerHTML=ctg(0.5);







//console.log(percent(10,5));
