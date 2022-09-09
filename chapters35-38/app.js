// Answer 1
function returnDate(){
    document.write(new Date());
}
returnDate();

// Answer 2
function greetings(){
    var firstName = prompt('First Name?');
    var lastName = prompt('Last Name?');
    var fullName = firstName + ' ' + lastName;
    alert('Welcome ' + fullName);
}
greetings();

// Answer 3
function sumTwoNumbers(){
    var firstNumb = +prompt('First Number?');
    var secondNumb = +prompt('Second Number?');
    var result = firstNumb + secondNumb;
    return result;
}
sumTwoNumbers();

// Answer 4
function calculate(num1, num2, operation){
    var result;
    if(operation == '+'){
        result = num1 + num2;
    }else if(operation == '-'){
        result = num1 - num2;
    }else if(operation == '*' || operation == 'x'){
        result = num1 * num2;
    }else if(operation == '/'){
        result = num1 / num2;
    }else {
        alert('Invalid Operation given');
    }
    return result;
}
document.write(calculate(5,5,'+'));

// Answer 5
function square(param){
    var result = param * param;
    return result;
}
document.write(square(4));

// Answer 6
function factorial(){
    var fact = 1;
    var input = +prompt('Enter Positive Integer');
    for (let i = 1; i <= input; i++) {
        fact *= i;
    }
    console.log('The factorial of ' +input+ ' is ' +fact+ '.');
}
factorial();

// Answer 7
function counting(){
    var startingPoint = +prompt('Enter Starting Point');
    var endingPoint = +prompt('Enter Ending Point');
    for (let i = startingPoint; i <= endingPoint; i++) {
        document.write('<p>'+i+'</p>');
    }
}
counting();

// Answer 8
function calculateHypotenuse(){
    function calculateSquare(param){
        var result = param * param;
        return result;
    }
    var base = +prompt('Enter Base');
    var perpendicular = +prompt('Enter Perpendicular');
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
    return calculateSquare(hypotenuse);
}
document.write('<p>Hypotenuse<sup>2</sup> = '+calculateHypotenuse()+'</p>');

// Answer 9
function areaofRect(width, height){
    var area = width * height;
    document.write('<p>Area: '+area+'</p>');
}
areaofRect(5,2);

// Answer 10
function checkPalindrome(){
    var input = prompt('Enter Any String');
    var tempstring = '';
    for (let i = input.length - 1; i >= 0; i--) {
        tempstring += input[i];
    }
    if(tempstring == input){
        alert('Given String is Palindrome');
    }else{
        alert('Given String is not Palindrome');
    }
}
checkPalindrome();

// Answer 11
function camelCase(param){
    var words = param.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    alert(words.join(' '));
}
camelCase('the quick brown fox');

// Answer 12
function longestString(param){
    var longestIndex;
    var length = 0;
    var words = param.split(" ");
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > length){
            longestIndex = words[i];
            length = words[i].length;
        }
    }
    alert(longestIndex);
}
longestString('Web Development Tutorial');

// Answer 13
function occurenceofchar(string,letter){
    var count = 0;
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if(string[i] == letter)
        count++;
    }
    console.log(count);
}
occurenceofchar('JSResourceS.com','s')

// Answer 14
function calcCircumference(radius){
    document.write('<p>The Circumference is '+ (2*3.142*radius)+'</p>');
}
function calcArea(radius){
    document.write('<p>The Area is '+ (3.142*radius*radius)+'</p>');
}
calcCircumference(5);
calcArea(5);
