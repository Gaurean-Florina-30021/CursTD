document.getElementById('n').addEventListener('input ', inputSum);

function inputSum() {
  var inputNumber = parseInt(document.getElementById('n').value);
  sum(inputNumber);
}

function sum(n) {
  if (typeof n === 'undefined ') return 'n is undefined ';
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}//functiile cu care am descarcat repository

var counter=sum(inputSum());
function printValue(divId,value){

    document.getElementById(divId).innerHTML(value);

}
printValue("counter",0);
document.getElementById("inc").addEventListener("click",increment);

function increment(){
    if(counter<10){
    counter++;
    printValue("counter",counter);
    }
    else{
     a="Maximum is reached";
       document.getElementById('counter1').innerHTML=a
     }

}
function decrement(){
 if(counter>0){
    counter--;

    printValue("counter",counter);
    }
    else
    {
     a="Minimum is reached";
     document.getElementById('counter1').innerHTML=a
     }

}

document.getElementById("inc1").addEventListener("click",decrement);


//functia de la 1.3.3



