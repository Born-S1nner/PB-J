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
