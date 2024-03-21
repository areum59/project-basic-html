$(document).ready(function (){

    $('.team-item-wrap').owlCarousel({
        items : 1, //화면에 표시 할 슬라이드 수
        animateOut : 'fadeOut', // 사라질때의 애니메이션
        nav : false,
        margin: 40, //사이 간격
        dots : true, // Pagination 표시 여부
        autoplay : false, // 자동 슬라이드 여부
        loop : true, // 무한 반복 여부
    });

});