/*
// Answer 1
function power(a,b){
    return a ** b
}
document.write(power(5,10));

// Answer 2
function leapYear(){
    var year = prompt('Enter any year starting from 2012');
    var flag = 0;
    var leapYears = [];
    for (let i = 2012; i < 3001; i = i+4) {
        leapYears.push(i);
    }
    for (let i = 0; i < leapYears.length; i++) {
        if(year == leapYears[i]){
            flag = 1;
            break;
        }
    }
    if(flag){
        alert('Given Year is Leap Year');
    }else{
        alert('Given Year is not a Leap Year');
    }
}
leapYear();

// Answer 3
function calcS(a,b,c){
    return (a+b+c)/2;
}
function calcArea(a,b,c,){
    var S = calcS(a,b,c);
    var area = S*(S-a)*(S-b)*(S-c);
    document.write(area);
}
calcArea(10,10,10);

// Answer 4
function mainFunc(){
    var mark1 = +prompt('Enter Marks of subject 1');
    var mark2 = +prompt('Enter Marks of subject 2');
    var mark3 = +prompt('Enter Marks of subject 3');
    var averagemarks = avrgMarks(mark1, mark2, mark3);
    var percentage1 = percentage(mark1);
    var percentage2 = percentage(mark2);
    var percentage3 = percentage(mark3);
    document.write('Subject 1 Marks: '+ mark1 + ' | Subject Perc: ' + percentage1.toFixed(2) + '%<br>');
    document.write('Subject 2 Marks: '+ mark2 + ' | Subject Perc: ' + percentage2.toFixed(2) + '%<br>');
    document.write('Subject 3 Marks: '+ mark3 + ' | Subject Perc: ' + percentage3.toFixed(2) + '%<br>');
    document.write('Average Marks: '+ averagemarks);
}
function avrgMarks(param1, param2, param3){
    var averageMarks = (param1 + param2 + param3) / 300;
    return averageMarks;
}
function percentage(marks){
    var percentage = (marks/100)*100;
    return percentage;
}
mainFunc();

// Answer 5
function indexof(string,char){
    string = string.toLowerCase();
    var foundAt;
    for (let i = 0; i < string.length; i++) {
        if(string[i] == char){
            foundAt = i;
            break;
        }
    }
    document.write(char + ' found at ' + foundAt + ' index');
}
indexof('Hello World', 'w');

// Answer 6
function deleteVowels(string){
    for (let i = 0; i < string.length; i++) {
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
            string.splice(i, 1);
        }        
    }
    console.log(string);
}

deleteVowels('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,')
*/