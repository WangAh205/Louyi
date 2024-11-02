let igLogged;
function checkLogin() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (email.trim() === '') {
        alert('Vui lòng nhập email');
        return;
    } else if (username.trim() === '') {
        alert('Vui lòng nhập tài khoản');
        return;
    } else if (password.trim() === '') {
        alert('Vui lòng nhập mật khẩu');
        return;
    }
    
    // Lấy danh sách tài khoản từ Local Storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email && user.username === username && user.password === password);
    
    if (user) {
        alert('Đăng nhập thành công');
        window.location.href = "index.html";
        sessionStorage.setItem("isLogged", "true");
    } else {
        alert('Thông tin đăng nhập không chính xác');
    }
}

// Event listener cho phím 'Enter' để đăng nhập
document.getElementById('loginForm').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        checkLogin();
    }
});

function succesLogin(){
    
    sessionStorage.setItem("isLogged", "true");
    
    window.location.href = "index.html"
}

const isLog = sessionStorage.getItem("isLogged");

if(isLogged === "true"){
    document.querySelector(".sign-buttons").style.display = "none"; // phần đăng nhập | đăng ký
    document.querySelector(".account-section").style.display = "flex"; // phần tài khoản
}