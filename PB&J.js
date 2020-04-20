$(function () {

    $(".section li").on('click', function() {
        var $box = $(this).closest('.view-panel')

        $box.find(".section li.active").removeClass('active')
        $(this).addClass('active');
//what is shown
        var panelToShow = $(this).attr('rel');

        $box.find('.panel.active').slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }

    });
});

$(function () {
    $('li').on('click', function() {
        $('.context').hide()
    })
});

$(function() {

    //configuration
    let width = 720;
    let animationSpeed = 1000;
    let pause = 3000;
    let currentSlide = 1;

    //cache DOM
    let $slider = $('#flex-slider');
    let $slideContainer = $slider.find('.slides');
    let $slides = $slideContainer.find('.slide');

    let interval;

    function startSlider(){
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                currentSlide++;
                if(currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

    startSlider();
    //listen to mouseEnter and pause
    //resume at mouse leave
});
