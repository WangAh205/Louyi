const imgContainer = document.querySelector(".aspect-ratio-169");
const images = document.querySelectorAll(".aspect-ratio-169 img");
let index = 0;

// Dưới đây là chức năng tự động chuyển ảnh
function imgSlide() {
  index++;
  if (index >= images.length) {
    index = 0; // Quay lại ảnh đầu tiên
  }
  imgContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Chuyển ảnh tự động sau mỗi 5 giây
setInterval(imgSlide, 5000);

// Chuyển ảnh khi nhấn nút "Next"
document.getElementById("next").addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0; // Quay lại ảnh đầu tiên khi đến ảnh cuối
  }
  imgContainer.style.transform = `translateX(-${index * 100}%)`;
});

// Chuyển ảnh khi nhấn nút "Previous"
document.getElementById("prev").addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1; // Quay lại ảnh cuối cùng nếu đang ở ảnh đầu tiên
  }
  imgContainer.style.transform = `translateX(-${index * 100}%)`;
});


