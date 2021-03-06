
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

function test() {
  console.log(sum(0) == 0 ? ' Passed ' : ' Failed ');
   console.log(sum(1) == 1? ' Passed ' : ' Failed ');
  console.log(sum(2) == 3 ? ' Passed ' : ' Failed ');
  console.log(sum(4) == 5 ? ' Passed ' : ' Failed ');
  console.log(sum() == 'n is undefined ' ? ' Passed ' : ' Failed ');
  console.log(sum(true) == 'n is not a number ' ? ' Passed ' : ' Failed ');
  console.log(sum("TextTest") == 'n is not a number ' ? ' Passed ' : ' Failed ');
}
test();



