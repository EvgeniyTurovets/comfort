$(function() {
    window.onscroll = function(e) {
        console.log(window.scrollY); // Value of scroll Y in px
        if (window.scrollY > 10) {
            $('.sticky_nav').removeClass('sticky_nav--unstick').addClass('sticky_nav--stick')
        } else {
            $('.sticky_nav').removeClass('sticky_nav--stick').addClass('sticky_nav--unstick')
        }
    };

    $('.btn-to-wishlist').on('click', function() {
        $('#swall-wichlist').show();
    })

    $('.swal2-close').on('click', function() {
        $('#swall-wichlist').hide();
    })

    $('.swal2-confirm').on('click', function() {
        $('#swall-wichlist').hide();
    })

    $('.swal2-container').mouseup(function(e) { // событие клика по веб-документу
        var div = $(".swal2-popup"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('#swall-wichlist').hide();
        }
    });

    $('.ssw-instagram-load-more').on('click', function() {
        $(this).hide()
        $('.ssw-instagram-loader').show()
    })
})