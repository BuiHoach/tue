// bài viết mới
$('.list-product').slick({
    dots: false,               // Ẩn dấu chấm điều hướng
    infinite: true,            // Vòng lặp vô hạn
    speed: 300,                // Tốc độ chuyển slide (ms)
    slidesToShow: 3,           // Hiển thị 4 sản phẩm cùng lúc
    slidesToScroll: 1,         // Cuộn 1 sản phẩm mỗi lần
    autoplay: true,            // Tự động chuyển slide
    autoplaySpeed: 1000,       // Thời gian chuyển slide tự động (2 giây)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,     // Hiển thị 3 sản phẩm với màn hình nhỏ hơn 1024px
          slidesToScroll: 3,   // Cuộn 3 sản phẩm mỗi lần
          infinite: true,      // Vòng lặp vô hạn
          dots: true           // Hiển thị dấu chấm điều hướng cho màn hình nhỏ
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,     // Hiển thị 2 sản phẩm với màn hình nhỏ hơn 600px
          slidesToScroll: 2    // Cuộn 2 sản phẩm mỗi lần
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,     // Hiển thị 1 sản phẩm với màn hình nhỏ hơn 480px
          slidesToScroll: 1    // Cuộn 1 sản phẩm mỗi lần
        }
      }
    ]
  });



  // header nav-icon
const navIcon = document.querySelector('.nav-icon i');

navIcon.addEventListener('click', () => {
    // Kiểm tra nếu biểu tượng là "fa-bars"
    if (navIcon.classList.contains('fa-bars')) {
navIcon.classList.replace('fa-bars', 'fa-times'); // Chuyển thành dấu X
    } else {
navIcon.classList.replace('fa-times', 'fa-bars'); // Chuyển về biểu tượng thanh ngang
    }
});
// nav-icon active
$(document).ready(function () {
    $('.nav-icon').click(function () {
        $('.header-menu').toggleClass('active');
    });
});