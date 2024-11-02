// Function for sign-up (from formDangKy.js)
function checkSignup() {
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

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra tài khoản trùng lặp
    if (users.some(user => user.email === email || user.username === username)) {
        alert('Email hoặc tài khoản đã được đăng ký');
        return;
    }

    // Thêm tài khoản mới
    let newUser = {
        email: email,
        username: username,
        password: password,
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); 

    alert('Đăng ký tài khoản thành công');
    window.location.href = "formDangNhap.html";
}

// Function for login (from formDangNhap.js)
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
