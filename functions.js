function sum(a,b){

    var c=a+b;
    return c;
}
function sub(a,b){

    return a-b;
}
function mul(a,b){

    return a*b;
}
function percent(a,b){

    return b/a;
}
function div(a,b){

    return a/b;
}
function integerDiv(a,b){

    return Math.floor(a/b);
}

function abs(a){

    return Math.abs(a);
}
function sqr(a){

    return Math.pow(a,2);
}
function factorial(a){

    if (a==1) return 1;
    else return a*factorial(a-1);
}
function round(a){

    return Math.round(a);
}
function sin(a){

    return Math.sin(a);
}
function cos(a){

    return Math.cos(a);
}
function tg(a){

    return Math.tan(a);
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
document.getElementById('percent').innerHTML=percent(10,5);
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