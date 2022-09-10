// Answer 1
function alertBox(){
    alert('Mujhe kiyu dabaya?');
}

// Answer 2
function thankYouMsg(){
    alert('Thank you for purchasing a phone from us');
}

// Answer 3
function suspendStudent(param){
    param.parentElement.parentElement.remove();
}

// Answer 4
var image = document.getElementById('img-holder');
var text = document.getElementById('text-holder');
function showReality(){
    image.src = 'https://propakistani.pk/wp-content/uploads/2018/01/Suzuki-Mehran-e1543324071673.jpg';
    text.innerHTML = 'Auqaat';
}

function showDreams(){
    image.src = 'https://cdn.motor1.com/images/mgl/6ZpqJk/s1/ford-mustang-electric-by-charge-cars.jpg';
    text.innerHTML = 'Khuwahishaat';
}

// Answer 5
function counter(param){
    var counter = document.getElementById('counter').innerHTML
    if(param.value == 'increment'){
        counter++
    }else if(param.value == 'decrement'){
        counter--;
    }
    document.getElementById('counter').innerHTML = counter;
}