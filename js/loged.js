const isLogged = sessionStorage.getItem("isLogged");

if(isLogged === "true"){
    document.querySelector(".sign-buttons").style.display = "none"; // phần đăng nhập | đăng ký
    document.querySelector(".account-section").style.display = "flex"; // phần tài khoản
}