document.getElementById('n').addEventListener('input ', inputSum);

function inputSum() {
  var inputNumber = parseInt(document.getElementById('n').value);
  sum(inputNumber);
}

function  getFibonaci(n){
        if (typeof n !='number') return "Not allowed";
        if(n<1 || n>10) return "Not allowed";
         fib=[];
        fib[1]=[1] ;
        fib[2]= [1 , 1]
        if(n===1)  return fib[1];
        if(n===2)  return fib[2];

        for(var i=3;i<=n;i++)
            fib[i]=fib[i-1]+fib[i-2]
         return fib;



}

function Test(){
      console.log(getFibonaci(1) == 1 ? ' Passed ' : ' Failed ');
      console.log(getFibonaci(0) == "Not allowed" ? ' Passed ' : ' Failed ');
      console.log(getFibonaci(2) ==fib[2]? ' Passed ' : ' Failed ');
      console.log(getFibonaci(5) === fib ? ' Passed ' : ' Failed ');
      console.log(getFibonaci(4) == 10 ? ' Passed ' : ' Failed ');
      console.log(getFibonaci() == 'Not allowed' ? ' Passed ' : ' Failed ');
      console.log(getFibonaci(true) == 'Not allowed' ? ' Passed ' : ' Failed ');
      console.log(getFibonaci('TextTest') == 'Not allowed' ? ' Passed ' : ' Failed ');
        console.log(getFibonaci(11) == "Not allowed" ? ' Passed ' : ' Failed ');

}
Test();
function getElement(){

}


