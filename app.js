// Initializing Application with dummy Ads
var adsObject = [
    {
        'index': 0,
        'product_title': 'iPhone XS',
        'product_price': 85000,
        'product_location': 'Clifton, Karachi',
        'product_images': new Array(
            'https://images.olx.com.pk/thumbnails/289199891-400x300.webp',
            'https://images.olx.com.pk/thumbnails/289199892-800x600.webp',
            'https://images.olx.com.pk/thumbnails/289199893-400x300.webp',
        )
    },
    {
        'index': 1,
        'product_title': 'Honda Accord CL9 - 2003',
        'product_price': 1699000,
        'product_location': 'Gulberg, Lahore',
        'product_images': new Array(
            'https://images.olx.com.pk/thumbnails/289153731-400x300.webp',
            'https://images.olx.com.pk/thumbnails/289153732-400x300.webp',
            'https://images.olx.com.pk/thumbnails/289153733-400x300.webp',
            'https://images.olx.com.pk/thumbnails/289153734-400x300.webp',
            'https://images.olx.com.pk/thumbnails/289153735-400x300.webp',
        )
    },
    {
        'index': 2,
        'product_title': 'YAMAHA R6 2011',
        'product_price': 1530000,
        'product_location': 'PECHS, Karachi',
        'product_images': new Array(
            'https://images.olx.com.pk/thumbnails/268684139-400x300.webp',
            'https://images.olx.com.pk/thumbnails/285671446-400x300.webp',
            'https://images.olx.com.pk/thumbnails/285671548-800x600.webp',
            'https://images.olx.com.pk/thumbnails/268684140-400x300.webp',
        )
    },
    {
        'index': 3,
        'product_title': '10 Marla House',
        'product_price': 25900000,
        'product_location': 'Central Park Housing Scheme, Lahore',
        'product_images': new Array(
            'https://images.olx.com.pk/thumbnails/273493115-400x300.webp',
            'https://images.olx.com.pk/thumbnails/273493116-400x300.webp',
            'https://images.olx.com.pk/thumbnails/273493122-400x300.webp',
            'https://images.olx.com.pk/thumbnails/273493124-400x300.webp',
            'https://images.olx.com.pk/thumbnails/273493125-400x300.webp',
        )
    }
];
var ads_section = document.getElementById('ads-loop');
var html = '';
for (key in adsObject) {
    html += '<div class="col-3 single-ad"><div class="img-wrap"><img src="'+adsObject[key].product_images[0]+'" alt="'+adsObject[key].product_title+'" class="img-fluid"></div><div class="content-wrap"><p class="prod-title">'+adsObject[key].product_title+'</p><h4 class="prod-price">RS '+adsObject[key].product_price.toLocaleString()+'</h4><p class="prod-location">'+adsObject[key].product_location+'</p></div></div>';
}
ads_section.innerHTML = html;

// Function to change the body of modal
function showModalFront(){
    document.getElementById('modal-page-1').style.display = 'block';
    document.getElementById('modal-page-2').style.display = 'none';
    document.getElementById('modal-page-3').style.display = 'none';
}
function showLoginForm(){
    document.getElementById('modal-page-1').style.display = 'none';
    document.getElementById('modal-page-3').removeAttribute('class');
    document.getElementById('modal-page-3').style.display = 'block';
}
function showSignupForm(){
    document.getElementById('modal-page-1').style.display = 'none';
    document.getElementById('modal-page-2').removeAttribute('class');
    document.getElementById('modal-page-2').style.display = 'block';
}

// Button behaviour based on user status
function checkUserStatus(){
    if(localStorage.getItem('isLoggedIn') == 1){
        window.location.href = '/post-ad.html'
    }else{
        $('#loginSignupModal').modal('show')
    }
}

// User Signup
var users = [];
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }else{
        return (false)
    }
}
function registerUser(){
    var name = document.getElementById('signup_username').value;
    var email = document.getElementById('signup_email').value;
    var password = document.getElementById('signup_password').value;

    // Checking if form isn't empty
    if(name !== '' && email !== '' && password !== ''){
        // checking if provided email is valid
        if(!ValidateEmail(email)){
            showNotification('Please Enter a Valid Email to Register!','error');
            return;
        }
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('isLoggedIn', 0);
        showNotification('Registration Successful, You Can Login Now','success');
        showModalFront();

    }else{
        showNotification('Please Fill out the form to register','error');
    }
}
function showNotification(message, type){
    var bg = '', classname = '';
    if(type == 'error'){
        classname = 'error';
        bg = 'linear-gradient(to right, rgb(197 59 59), rgb(118 42 42))';
    }else{
        classname = 'info';
        bg = 'linear-gradient(to right, #00b09b, #96c93d)';
    }
    Toastify({
        text: message,
        duration: 3000,
        stopOnFocus: true,
        className: classname,
        style: {
            background: bg,
        }
    }).showToast();
        
}

// User Login
function loginUser(){
    var email = document.getElementById('login_email').value;
    var password = document.getElementById('login_password').value;
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    if(!ValidateEmail(email)){
        showNotification('Please Enter a Valid Email to signup!','error');
        return;
    }
    if(email === storedEmail && password === storedPassword){
        localStorage.setItem('isLoggedIn', 1);
        showNotification('Login Successful','success');
        setTimeout(function(){
            window.location.href = window.location.href;
        },3000);
    }else{
        showNotification('Invalid Credentials.','error');
    }
}