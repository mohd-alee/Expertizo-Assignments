/*
// Answer 1
var firstName = prompt('Enter First Name');
var lastName = prompt('Enter Last Name');
var fullName = firstName + " " + lastName;
document.write('<h1>Welcome ' + fullName + "</h1>");

// Answer 2
var favPhone = prompt('What\'s Your Favourite Phone?');
document.write('<h1>My Favourite Phone Is: ' + favPhone + "</h1>");
document.write('<h1>Length of String: ' + favPhone.length + "</h1>");

// Answer 3
var string = 'Pakistani';
document.write('<h1>String: '+ string +'</h1>');
var searchedIndex = string.indexOf('n');
document.write('<h1>Index of \'n\': '+ searchedIndex +'</h1>');

// Answer 4
var string = 'Hello World';
document.write('<h1>String: '+ string +'</h1>');
var searchedIndex = string.lastIndexOf('l');
document.write('<h1>Index of \'l\': '+ searchedIndex +'</h1>');

// Answer 5
var string = 'Pakistani';
document.write('<h1>String: '+ string +'</h1>');
var searchedIndex = string.charAt(3);
document.write('<h1>Character at Index: '+ searchedIndex +'</h1>');

// Answer 6
var firstName = prompt('Enter First Name');
var lastName = prompt('Enter Last Name');
var fullName = firstName.concat(' ',lastName);
document.write('<h1>Welcome ' + fullName + "</h1>");

// Answer 7
var city = 'Hyderabad';
var dreamCity = city.replace('Hyder','Islam');
document.write('<h1>City ' + city + "</h1>");
document.write('<h1>After Replacement ' + dreamCity + "</h1>");

// Answer 8
var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,'&');
document.write('<h1>' + message + "</h1>");

// Answer 9
var number = '472';
document.write('<h1>Value: '+ number +'</h1>');
document.write('<h1>Value: '+ typeof number +'</h1>');
number = parseInt(number);
document.write('<h1>Value: '+ number +'</h1>');
document.write('<h1>Value: '+ typeof number +'</h1>');

// Answer 10
var userInput = prompt('Enter Anything');
document.write('<h1>User Input: '+ userInput +'</h1>');
userInput = userInput.toUpperCase();
document.write('<h1>Upper Case: '+ userInput +'</h1>');

// Answer 11
var userInput = prompt('Enter Anything');
document.write('<h1>User Input: '+ userInput +'</h1>');
userInput = userInput[0].toUpperCase() + userInput.slice(1);
document.write('<h1>Title Case: '+ userInput +'</h1>');

// Answer 12
var num = 35.36;
document.write('<h1>Number: '+ num +'</h1>');
num = num.toString();
num = num.replace('.','');
document.write('<h1>Result: '+ num +'</h1>');

// Answer 13
do {
    var error = 0;
    var userInput = prompt('Enter Username');
    for(var i = 0; i < userInput.length; i++){
        if( userInput[i] == '!' || userInput[i] == ',' || userInput[i] == '.' || userInput[i] == '@' || userInput[i] == '[' || userInput[i] == ']'){
            error = 1;
        }
    }
    if(error){
        alert('Please Enter a Valid Username');
    }else{
        alert('Username is valid');
    }
    
} while (error);

// Answer 14
var itemsArr = ['cake','apple pie','cookie','chips','patties']
var userInput = prompt('Welcome to Expertizo Bakery. What do you want to order?');
var itemFound = 0;
var index = 0;
userInput = userInput.toLowerCase();
for (var i = 0; i < itemsArr.length; i++) {
    if(itemsArr[i] === userInput){
        itemFound = 1; index = i;
    }
}
if (itemFound) {
    document.write('<h1>' + userInput + ' is available at index ' + index + ' in our bakery</h1>');
}else{
    document.write('<h1>We are Sorry. ' + userInput + ' is not available in our bakery</h1>');
}
// Answer 15
var userPassword = prompt('Enter Password');

// Answer 16
var university = 'University of Karachi';
university = university.split('');
for (let i = 0; i < university.length; i++) {
    document.write(university[i] +"<br>");
}
*/
// Answer 17
var userInput = prompt('Enter any string');
