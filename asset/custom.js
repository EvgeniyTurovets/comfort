$(function() {
    window.onscroll = function(e) {
        console.log($('.sticky_nav'))
        if (window.scrollY > 10) {
            $('.sticky_nav').removeClass('sticky_nav--unstick').addClass('sticky_nav--stick')
        } else {
            $('.sticky_nav').removeClass('sticky_nav--stick').addClass('sticky_nav--unstick')
        }

        if ($('.product-sticky-form').length) {
            if (window.scrollY > 10) {
                $('.product-sticky-form').addClass('active')
            } else {
                $('.product-sticky-form').removeClass('active')

            }
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

    // каталог
    $('body').on('submit', ".product_form form, .shopify-product-form", function(e) {
        e.preventDefault();

        let $thisform = $(this)
        $thisform.find('span.text, .modal_price, .cta-arrow').removeClass("fadeInDown").addClass('zoomOut');
        $thisform.find('.checkmark').addClass('checkmark-active');
        $('#add-to-cart-modal').show()

        setTimeout(function() {
            $thisform.find('span.text, .modal_price, .cta-arrow').removeClass('zoomOut').addClass("fadeInDown");
            $thisform.find('.checkmark').removeClass('checkmark-active');
            $('#add-to-cart-modal').hide()
        }, 2000)

        return false;
    });

    $('.toggle-custom').on('click', function() {

        if ($(this).hasClass('active')) {
            $('.toggle-custom').removeClass('active')
            $(this).next('.toggle_list-custom').removeClass('opened').fadeOut()
            $(this).closest('.filters-container').removeClass('filter-active')
        } else {
            $('.toggle-custom').removeClass('active')

            $(this).addClass('active')
            $(this).next('.toggle_list-custom').addClass('opened').fadeIn()
            $(this).closest('.filters-container').addClass('filter-active')

            $('.toggle_list-custom').not($(this).next('.toggle_list-custom')).removeClass('opened').hide()
        }
    })



})