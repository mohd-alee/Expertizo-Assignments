var date = new Date();

// Answer 1
document.write('<p>'+ date +'</p>');

// Answer 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[date.getMonth()];
document.write('<p>Current month:'+ month +'</p>');

// Answer 3
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var day = days[date.getDay()];
document.write('<p>Today is '+ day +'</p>')

// Answer 4
if(day == 'Sat' || day == 'Sun'){
    document.write('<p>It\'s Fun Day</p>')
}

// Answer 5
if(date.getDate() < 16){
    document.write('<p>First Fifteen days of the month</p>');
}else{
    document.write('<p>Last Fifteen days of the month</p>');
}

// Answer 6
document.write('<p>Current Time: ' + date + '</p>');
document.write('<p>Elapsed miliseconds since January 1, 1970: ' + date.getTime() + '</p>');
document.write('<p>Elapsed minutes since January 1, 1970: ' + date.getTime() / 1000 + '</p>');

// Answer 7
if(date.getHours() < 13){
    document.write('<p>It\'s AM</p>')
}else{
    document.write('<p>It\'s PM</p>')
}

// Answer 8
document.write('<p>Later Date: ' + new Date("December 31, 2022") + '</p>');

// Answer 9
var startingDate = new Date('April 02, 2022').getTime();
var currentDate = date.getTime();
var daysInMS = currentDate - startingDate;
var days = daysInMS / (1000 * 60 * 60 * 24);
document.write('<p>'+Math.floor(days)+' days have been passed since 1st ramadan, 2022</p>');

// Answer 10
// ???

// Answer 11
document.write('<p>Current Date: ' + date + '</p>');
var anHourAgo = date.setHours(date.getHours() - 1);
document.write('<p>1 Hour Ago, it was '+new Date(anHourAgo)+'</p>');

// Answer 12
document.write('<p>Current Date: ' + date + '</p>');
var aCenturyAgo = date.setFullYear(date.getFullYear() - 100);
document.write('<p>100 Years Ago, it was '+new Date(aCenturyAgo)+'</p>');

// Answer 13
var age = +prompt('Enter Your Age.');
document.write('<p>Your Age is '+age+'</p>');
var birthYear = date.setFullYear(date.getFullYear() - age);
document.write('<p>Your birth year is '+new Date(birthYear).getFullYear()+'</p>');

// Answer 14
var customerName = 'Muhammad Alee';
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[date.getMonth()];
var totalUnits = 410;
var chargePerUnit = 16;
var netPayableAmount = totalUnits * chargePerUnit;
var latePaymentCharges = 350;
var grossPayableAmount = netPayableAmount + latePaymentCharges;

document.write('<h1>K-Electric Bill</h1>');
document.write('<p>Customer Name: '+customerName+'</p>');
document.write('<p>Month: '+month+'</p>');
document.write('<p>Number of units: '+totalUnits+'</p>');
document.write('<p>Charges per unit: '+chargePerUnit+'</p>');
document.write('<p>Net Amount Payable (within Due Date): '+netPayableAmount+'</p>');
document.write('<p>Late Payment Charges: '+latePaymentCharges+'</p>');
document.write('<p>Gross Amount Payable (after Due Date): '+grossPayableAmount+'</p>');