$(function () {
//whole
    $(".section li").on('click', function() {
        var $box = $(this).closest('.view-panel')
//li system
        $box.find(".section li.active").removeClass('active')
        $(this).addClass('active');
//panel itself
        var panelToShow = $(this).attr('rel');

        $box.find('.panel.active').slideUp(300, showPanel);

        function showPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active')
            });
        };

    });
});

$(function () {
    $('li').on('click', function() {
        $('.context-active').hide()
    })
});
