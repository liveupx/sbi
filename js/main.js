// Tab 1
if ($(window).width() > 767) {
    var sectionIds_1 = $('.s-nav-1 a');
    
    $(".s-1").scroll(function () {
        let slider_this_1 = this;
        let active_slide_1 = false;

        $('.s-1 .timeline_slide').each(function () {

            if (active_slide_1 === false) {
                let slide_this_1 = this;
                if (slider_this_1.offsetTop + 20 <= (slide_this_1.offsetTop - slider_this_1.scrollTop) && slider_this_1.offsetTop <= ((slide_this_1.offsetTop + 20 + slide_this_1.offsetHeight) - slider_this_1.scrollTop)) {
                    active_slide_1 = slide_this_1;
                }
                $('.s-1 .timeline_slide,.timeline_img').removeClass('active');
                $(this).addClass('active');
                $('.s-nav-1 a').removeClass('active anext anext-1 anext-2 anext-3 anext-4 anext-5 anext-6 anext-7 anext-8 anext-9 anext-10 anext-11 anext-12');
                $(".s-nav-1 a[data-href='" + $(this).attr('id') + "']").addClass('active');
                $(".timeline_img[data-img='#" + $(this).attr('id') + "']").addClass('active');
                $('.s-nav-1 a.active').next().addClass('anext');
                $('.s-nav-1 a.active').prev().addClass('anext');
                $('.s-nav-1 a.active').next().next().addClass('anext-1');
                $('.s-nav-1 a.active').prev().prev().addClass('anext-1');
                $('.s-nav-1 a.active').next().next().next().addClass('anext-2');
                $('.s-nav-1 a.active').prev().prev().prev().addClass('anext-2');
                $('.s-nav-1 a.active').next().next().next().next().addClass('anext-3');
                $('.s-nav-1 a.active').prev().prev().prev().prev().addClass('anext-3');
                $('.s-nav-1 a.active').next().next().next().next().next().addClass('anext-4');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().addClass('anext-4');
                $('.s-nav-1 a.active').next().next().next().next().next().next().addClass('anext-5');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().addClass('anext-5');
                $('.s-nav-1 a.active').next().next().next().next().next().next().next().addClass('anext-6');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().prev().addClass('anext-6');

                $('.s-nav-1 a.active').next().next().next().next().next().next().next().next().addClass('anext-7');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-7');

                $('.s-nav-1 a.active').next().next().next().next().next().next().next().next().next().addClass('anext-8');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-8');

                $('.s-nav-1 a.active').next().next().next().next().next().next().next().next().next().next().addClass('anext-9');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-9');

                $('.s-nav-1 a.active').next().next().next().next().next().next().next().next().next().next().next().addClass('anext-10');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-10');

                $('.s-nav-1 a.active').next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-11');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-11');

                $('.s-nav-1 a.active').next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-12');
                $('.s-nav-1 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-12');
                var xindex_1 = $('.s-nav-1 a.active').index();

                if ($(window).width() > 1199) {
                    $(".s-nav-1").scrollTop(xindex_1 * 78.39);
                } else {

                    $(".s-nav-1").scrollTop(xindex_1 * 42);
                }

            }

        });

        

    });
} else {
    $('.s-nav-1 a').on('click', function (e) {
        // alert('a');
        //            e.preventDefault(); 
        $('.s-nav-1 a,.timeline_img,.s-1 .timeline_slide').removeClass('active');
        $(this).addClass('active');
        //            alert($(this).html())
        $("#" + $(this).attr('data-href') + "").addClass('active');
        $(".timeline_img[data-img='#" + $(this).attr('data-href') + "']").addClass('active');
    });
    
}


// Tab 2
if ($(window).width() > 767) {
    var sectionIds_2 = $('.s-nav-2 a');

    $(".s-2").scroll(function () {
        let slider_this_2 = this;
        let active_slide_2 = false;

        $('.s-2 .timeline_slide').each(function () {

            if (active_slide_2 === false) {
                let slide_this_2 = this;
                if (slider_this_2.offsetTop + 20 <= (slide_this_2.offsetTop - slider_this_2.scrollTop) && slider_this_2.offsetTop <= ((slide_this_2.offsetTop + 20 + slide_this_2.offsetHeight) - slider_this_2.scrollTop)) {
                    active_slide_2 = slide_this_2;
                }
                $('.s-2 .timeline_slide,.timeline_img').removeClass('active');
                $(this).addClass('active');
                $('.s-nav-2 a').removeClass('active anext anext-1 anext-2 anext-3 anext-4 anext-5 anext-6 anext-7 anext-8 anext-9 anext-10 anext-11 anext-12 anext-13 anext-14 anext-15 anext-16');
                $(".s-nav-2 a[data-href='" + $(this).attr('id') + "']").addClass('active');
                $(".timeline_img[data-img='#" + $(this).attr('id') + "']").addClass('active');
                $('.s-nav-2 a.active').next().addClass('anext');
                $('.s-nav-2 a.active').prev().addClass('anext');
                $('.s-nav-2 a.active').next().next().addClass('anext-1');
                $('.s-nav-2 a.active').prev().prev().addClass('anext-1');
                $('.s-nav-2 a.active').next().next().next().addClass('anext-2');
                $('.s-nav-2 a.active').prev().prev().prev().addClass('anext-2');
                $('.s-nav-2 a.active').next().next().next().next().addClass('anext-3');
                $('.s-nav-2 a.active').prev().prev().prev().prev().addClass('anext-3');
                $('.s-nav-2 a.active').next().next().next().next().next().addClass('anext-4');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().addClass('anext-4');
                $('.s-nav-2 a.active').next().next().next().next().next().next().addClass('anext-5');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().addClass('anext-5');
                $('.s-nav-2 a.active').next().next().next().next().next().next().next().addClass('anext-6');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().addClass('anext-6');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().addClass('anext-7');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-7');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().addClass('anext-8');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-8');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().addClass('anext-9');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-9');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().next().addClass('anext-10');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-10');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-11');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-11');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-12');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-12');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-13');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-13');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-14');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-14');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-15');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-15');

                $('.s-nav-2 a.active').next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().next().addClass('anext-16');
                $('.s-nav-2 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-16');
                
                var xindex_2 = $('.s-nav-2 a.active').index();

                if ($(window).width() > 1199) {
                    $(".s-nav-2").scrollTop(xindex_2 * 78.39);
                } else {

                    $(".s-nav-2").scrollTop(xindex_2 * 42);
                }

            }

        });

    });
} else {
    $('.s-nav-2 a').on('click', function (e) {
        // alert('a');
        //            e.preventDefault(); 
        $('.s-nav-2 a,.timeline_img,.s-2 .timeline_slide').removeClass('active');
        $(this).addClass('active');
        //            alert($(this).html())
        $("#" + $(this).attr('data-href') + "").addClass('active');
        $(".timeline_img[data-img='#" + $(this).attr('data-href') + "']").addClass('active');
    });
    
}

// Tab 3
if ($(window).width() > 767) {
    var sectionIds_3 = $('.s-nav-3 a');

    $(".s-3").scroll(function () {
        let slider_this_3 = this;
        let active_slide_3 = false;

        $('.s-3 .timeline_slide').each(function () {

            if (active_slide_3 === false) {
                let slide_this_3 = this;
                if (slider_this_3.offsetTop + 30 <= (slide_this_3.offsetTop - slider_this_3.scrollTop) && slider_this_3.offsetTop <= ((slide_this_3.offsetTop + 30 + slide_this_3.offsetHeight) - slider_this_3.scrollTop)) {
                    active_slide_3 = slide_this_3;
                }
                $('.s-3 .timeline_slide,.timeline_img').removeClass('active');
                $(this).addClass('active');
                $('.s-nav-3 a').removeClass('active anext anext-1 anext-2 anext-3 anext-4 anext-5 anext-6 anext-7 anext-8 anext-9 anext-10');
                $(".s-nav-3 a[data-href='" + $(this).attr('id') + "']").addClass('active');
                $(".timeline_img[data-img='#" + $(this).attr('id') + "']").addClass('active');
                $('.s-nav-3 a.active').next().addClass('anext');
                $('.s-nav-3 a.active').prev().addClass('anext');
                $('.s-nav-3 a.active').next().next().addClass('anext-1');
                $('.s-nav-3 a.active').prev().prev().addClass('anext-1');
                $('.s-nav-3 a.active').next().next().next().addClass('anext-2');
                $('.s-nav-3 a.active').prev().prev().prev().addClass('anext-2');
                $('.s-nav-3 a.active').next().next().next().next().addClass('anext-3');
                $('.s-nav-3 a.active').prev().prev().prev().prev().addClass('anext-3');
                $('.s-nav-3 a.active').next().next().next().next().next().addClass('anext-4');
                $('.s-nav-3 a.active').prev().prev().prev().prev().prev().addClass('anext-4');
                $('.s-nav-3 a.active').next().next().next().next().next().next().addClass('anext-5');
                $('.s-nav-3 a.active').prev().prev().prev().prev().prev().prev().addClass('anext-5');
                $('.s-nav-3 a.active').next().next().next().next().next().next().next().addClass('anext-6');
                $('.s-nav-3 a.active').prev().prev().prev().prev().prev().prev().prev().addClass('anext-6');

                $('.s-nav-3 a.active').next().next().next().next().next().next().next().next().addClass('anext-7');
                $('.s-nav-3 a.active').prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-7');

                $('.s-nav-3 a.active').next().next().next().next().next().next().next().next().next().addClass('anext-8');
                $('.s-nav-3 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-8');

                $('.s-nav-3 a.active').next().next().next().next().next().next().next().next().next().next().addClass('anext-9');
                $('.s-nav-3 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-9');

                $('.s-nav-3 a.active').next().next().next().next().next().next().next().next().next().next().next().addClass('anext-10');
                $('.s-nav-3 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-10');
                var xindex_3 = $('.s-nav-3 a.active').index();

                if ($(window).width() > 1199) {
                    $(".s-nav-3").scrollTop(xindex_3 * 78.39);
                } else {

                    $(".s-nav-3").scrollTop(xindex_3 * 42);
                }

            }

        });

    });
} else {
    $('.s-nav-3 a').on('click', function (e) {
        // alert('a');
        //            e.preventDefault(); 
        $('.s-nav-3 a,.timeline_img,.s-3 .timeline_slide').removeClass('active');
        $(this).addClass('active');
        //            alert($(this).html())
        $("#" + $(this).attr('data-href') + "").addClass('active');
        $(".timeline_img[data-img='#" + $(this).attr('data-href') + "']").addClass('active');
    });
    
}


// Tab 4
if ($(window).width() > 767) {
    var sectionIds_4 = $('.s-nav-4 a');

    $(".s-4").scroll(function () {
        let slider_this_4 = this;
        let active_slide_4 = false;

        $('.s-4 .timeline_slide').each(function () {

            if (active_slide_4 === false) {
                let slide_this_4 = this;
                if (slider_this_4.offsetTop + 40 <= (slide_this_4.offsetTop - slider_this_4.scrollTop) && slider_this_4.offsetTop <= ((slide_this_4.offsetTop + 40 + slide_this_4.offsetHeight) - slider_this_4.scrollTop)) {
                    active_slide_4 = slide_this_4;
                }
                $('.s-4 .timeline_slide,.timeline_img').removeClass('active');
                $(this).addClass('active');
                $('.s-nav-4 a').removeClass('active anext anext-1 anext-2 anext-3 anext-4 anext-5 anext-6 anext-7 anext-8 anext-9 anext-10');
                $(".s-nav-4 a[data-href='" + $(this).attr('id') + "']").addClass('active');
                $(".timeline_img[data-img='#" + $(this).attr('id') + "']").addClass('active');
                $('.s-nav-4 a.active').next().addClass('anext');
                $('.s-nav-4 a.active').prev().addClass('anext');
                $('.s-nav-4 a.active').next().next().addClass('anext-1');
                $('.s-nav-4 a.active').prev().prev().addClass('anext-1');
                $('.s-nav-4 a.active').next().next().next().addClass('anext-2');
                $('.s-nav-4 a.active').prev().prev().prev().addClass('anext-2');
                $('.s-nav-4 a.active').next().next().next().next().addClass('anext-3');
                $('.s-nav-4 a.active').prev().prev().prev().prev().addClass('anext-3');
                $('.s-nav-4 a.active').next().next().next().next().next().addClass('anext-4');
                $('.s-nav-4 a.active').prev().prev().prev().prev().prev().addClass('anext-4');
                $('.s-nav-4 a.active').next().next().next().next().next().next().addClass('anext-5');
                $('.s-nav-4 a.active').prev().prev().prev().prev().prev().prev().addClass('anext-5');
                $('.s-nav-4 a.active').next().next().next().next().next().next().next().addClass('anext-6');
                $('.s-nav-4 a.active').prev().prev().prev().prev().prev().prev().prev().addClass('anext-6');

                $('.s-nav-4 a.active').next().next().next().next().next().next().next().next().addClass('anext-7');
                $('.s-nav-4 a.active').prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-7');

                $('.s-nav-4 a.active').next().next().next().next().next().next().next().next().next().addClass('anext-8');
                $('.s-nav-4 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-8');

                $('.s-nav-4 a.active').next().next().next().next().next().next().next().next().next().next().addClass('anext-9');
                $('.s-nav-4 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-9');

                $('.s-nav-4 a.active').next().next().next().next().next().next().next().next().next().next().next().addClass('anext-10');
                $('.s-nav-4 a.active').prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().prev().addClass('anext-10');
                var xindex_4 = $('.s-nav-4 a.active').index();

                if ($(window).width() > 1199) {
                    $(".s-nav-4").scrollTop(xindex_4 * 78.39);
                } else {

                    $(".s-nav-4").scrollTop(xindex_4 * 44);
                }

            }

        });

    });
} else {
    $('.s-nav-4 a').on('click', function (e) {
        // alert('a');
        //            e.preventDefault(); 
        $('.s-nav-4 a,.timeline_img,.s-4 .timeline_slide').removeClass('active');
        $(this).addClass('active');
        //            alert($(this).html())
        $("#" + $(this).attr('data-href') + "").addClass('active');
        $(".timeline_img[data-img='#" + $(this).attr('data-href') + "']").addClass('active');
    });
    
}



