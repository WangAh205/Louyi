document.addEventListener('DOMContentLoaded', function() {
    loadUserProfile();
});

document.getElementById('file-upload').addEventListener('change', function(e) {
    const fileName = e.target.files[0]?.name;
    document.getElementById('file-name').textContent = fileName || 'Chưa có file nào được chọn';
    
    const preview = document.getElementById('preview-image');
    const previewText = document.getElementById('preview-text');
    
    if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            previewText.style.display = 'none';
        }
        
        reader.readAsDataURL(e.target.files[0]);
    } else {
        preview.style.display = 'none';
        previewText.style.display = 'block';
    }
});

document.getElementById('profile-form').addEventListener('submit', function(e){
    e.preventDefault();

    const profile = {
        fullname: document.getElementById('ho ten').value,
        age: document.getElementById('tuoi').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('so dien thoai').value,
        address: document.getElementById('address').value,
        avatar: document.getElementById('preview-image').src,
        username: document.getElementById('username').value,
    }

    localStorage.setItem('userProfile', JSON.stringify(profile));

    alert('Thông tin được lưu thành công');
});

function loadUserProfile(){
    const savedProfile = localStorage.getItem('userProfile');

    if(savedProfile){
        const profile = JSON.parse(savedProfile);

        document.getElementById('ho ten').value = profile.fullname || '';
        document.getElementById('tuoi').value = profile.age || '';
        document.getElementById('address').value = profile.address || '';
        document.getElementById('email').value = profile.email || '';
        document.getElementById('so dien thoai').value = profile.phone || '';
        document.getElementById('username').value = profile.username || '';
        
        if(profile.avatar) {
            const preview = document.getElementById('preview-image');
            preview.src = profile.avatar;
            preview.style.display = 'block';
            document.getElementById('preview-text').style.display = 'none';
        }
    }
}

// Thêm chức năng đăng xuất
document.querySelector('.logout').addEventListener('click', function(e) {
    e.preventDefault(); 
    e.stopPropagation();  
    
    sessionStorage.removeItem('isLogged');
    alert('Đã đăng xuất tài khoản');
    window.location.href = 'index.html';
});