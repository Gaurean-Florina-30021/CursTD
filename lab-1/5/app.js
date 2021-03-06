
document.getElementById('n').addEventListener('input ', inputSum);

function inputSum() {
  var inputNumber = parseInt(document.getElementById('n').value);
  sum(inputNumber);
}

function sum(n) {
  if (typeof n === 'undefined ')  return 'n is undefined ';
   else if (typeof n === 'String ')  return 'n is not a number ';
    else if (typeof n === 'boolean  ')  return 'n is not a number ';
        else{
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;

}
  return sum;
}
}

 var ﬁrstNumberText = $('#ﬁrstNumber').val();
 var ﬁrstNumber=parseInt(firstNumberText)
  var secondNumberText = $('#ﬁrstNumber').val();
  var secondNumber=parseInt(firstNumberText)
 function printValue(divId,value){

     document.getElementById(divId).innerHTML(value);

 }
 var counter=0;
 printValue('counter',0);
 document.getElementById("inc").addEventListener("click",suma);
 document.getElementById("inc1").addEventListener("click",scadere);
 document.getElementById("inc2").addEventListener("click",inmultire);
 document.getElementById("inc3").addEventListener("click",impartire);

 function suma(){
    counter=0;
     counter=secondNumber+ﬁrstNumbe;
     printValue("firstNumber",counter);

 }
 function scadere(){
counter=0;
     counter=secondNumber+ﬁrstNumbe;
     printValue("counter",counter);


 }
 function inmultire(){
    counter=0;
      counter=secondNumber*ﬁrstNumbe;
      printValue("counter",counter);


  }
  function impartire(){
counter=0;
       counter=secondNumber/ﬁrstNumbe;
       printValue("counter",counter);


   }