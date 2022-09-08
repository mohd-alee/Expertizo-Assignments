var holder = document.getElementById('bulb-img');
var flag = 0;
function bulbOn(){
    if(flag){
        alert('Please turn off the bulb first');
        return;
    }else{
        holder.src = 'https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?w=2000';
        holder.height = '300';
        flag = 1;
    }
}
function bulbOff(){
    if(!flag){
        alert('Please turn on the bulb first');
        return;
    }else{
        holder.src = 'https://img.freepik.com/premium-photo/turn-tungsten-light-bulb-isolated-white_45716-9.jpg?w=2000';
        holder.height = '300';
        flag = 0;
    }
}
// Calculator Code Below
var input = document.getElementById('result');
var result;
function clr(){
    input.value = '';
}
function dis(param){
    input.value += param;
}
function solve(){
    result = eval(input.value);
    input.value = result;
}