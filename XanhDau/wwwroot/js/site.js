// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function increaseQuantity() {
    var qty = document.getElementById("quantity");
    qty.value = parseInt(qty.value) + 1;
}
function decreaseQuantity() {
    var qty = document.getElementById("quantity");
    if (qty.value > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    const mainImage = document.getElementById('main-image');
    let currentIndex = 0; // Chỉ số hiện tại của thumbnail

    function updateMainImage(index) {
        const selectedImageSrc = thumbnails[index].getAttribute('data-src');
        mainImage.src = selectedImageSrc; // Cập nhật hình ảnh chính
    }

    // Hàm để cập nhật vị trí của thumbnail
    function updateSliderPosition() {
        const thumbnailContainer = document.querySelector('.thumbnail-images');
        const offset = currentIndex * (100 / thumbnails.length); // Tính toán offset dựa trên chỉ số hiện tại
        thumbnailContainer.style.transform = `translateX(-${offset}%)`; // Cập nhật vị trí của slider
    }

    // Xử lý sự kiện cho các nút
    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1; // Quay lại thumbnail trước
        updateMainImage(currentIndex);
        updateSliderPosition();
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1; // Chuyển đến thumbnail tiếp theo
        updateMainImage(currentIndex);
        updateSliderPosition();
    });

    // Xử lý sự kiện cho các thumbnail
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index; // Cập nhật chỉ số hiện tại
            updateMainImage(currentIndex);
            updateSliderPosition();
        });
    });

    // Cập nhật hình ảnh và slider khi tải trang
    updateMainImage(currentIndex);
    updateSliderPosition();
});


function toggleAnswer(element) {
    const questionItem = element.parentElement;
    const isActive = questionItem.classList.contains('active');
    const allItems = document.querySelectorAll('.question_item');

    allItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.toggle_icon').textContent = '+';
        item.querySelector('.question_answer').style.display = 'none';
    });

    if (!isActive) {
        questionItem.classList.add('active');
        element.querySelector('.toggle_icon').textContent = '-';
        questionItem.querySelector('.question_answer').style.display = 'block';
    }
}