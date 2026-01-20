// $(document).ready(function () {
//   // some jquery codes
// });

$(function () {
  $('.nav-lists li').on('click', function () {
    const targetIndex = $(this).index(); // 클릭핸 대상의 인덱스 저장
    const pagePosition = $('.nav-target').eq(targetIndex).offset().top; // 해당 인덱스의 .nav-target 위치 저장

    $('html, body').animate({ scrollTop: pagePosition }, 300);
  });
});
