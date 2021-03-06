//Afisare mesaj subpunct 1

result=document.getElementById('message').innerHTML = 'Modified text from JavaScrit (problema 1 subpunctul1)';

//Afisare mesaj in consola subpunct 2

console.log(result);
console.log('Welcome to data transmission!!! ');

//Accesarea unei valori dintr-un obiect JSON   subpunc3

//obiect JSON
var user ={
    'id' : 23,
    'name' : 'Alexandru Cristea',
    'username': 'acristea',
    'email': 'acristea@test.com',
    'adress':{
        'street':'Charles Noir',
        'number': 'Ap. 11',
        'City':'Paris'
        }
}

console.log(user.username)
console.log(user.adress.number)
console.log(user.name)

//folosirea unui operator ternar SUBPUNCT 5
console.log(user.username==='acristea'?'ALLOW':'DENY')
console.log(user.adress.street==='Sant Pier'? 'ALLOW': 'DENY')

//definire functie si apelare subpunctul 4

//definire
function print(message1){


    console.log(message1);
   // document.getElementById('message').innerHTML = message1;
}

//Apelare
print('Hello!!!');


//ultimul subpunct
var counter=0;
function printVal(divID,value){
    $("#"+divID).html(value)

}

printVal("counter",0);
$("#inc").on('click',increment);
function increment(){
    counter++;
    printVal('counter',counter);
}

var textValue=$("#inputTextId").val();
$('inputTextId'),val('123')







