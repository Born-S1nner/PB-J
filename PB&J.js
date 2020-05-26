$(function () {
    $(".section li").on('click', function() {
        let $box = $(this).closest('.view-panel');
        let panelToShow = $(this).attr('rel');
        let $jotaro = $box.find(".section li.active");
        let $dio =  $box.find('.panel.active')
        const $lily = $('.context');

        $jotaro.removeClass('active')
        $(this).addClass('active');

        $dio.slideUp(300, showNextPanel);

        function showNextPanel() {
            $lily.hide()            
            $(this).removeClass('active');
            $('#'+panelToShow).slideDown(300, activate);
        }
        function activate() {
                $(this).addClass('active');
        }
    });
    let game = {
        init: function () {
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.$myGameBoard = $('.videoG');
            this.$gameScreen = this.$myGameBoard.find('.gamer');
            this.$myGamePieceOne = this.$gameScreen.find('.gameBlock');
            this.$myGamePieceTwo = this.$gameScreen.find('.endGoal');
            this.$down = this.$myGameBoard.find("#downwards");

        },
        bindEvents: function () {
            this.$down.on('click', this.moveDown.bind(this))
        },
        moveDown() {
            this.$myGamePieceOne.show()
            this.$myGamePieceTwo.show()
            this.$gameScreen.toggleClass('animation');
            this.$down.toggleClass('proActive');
            this.$myGamePieceOne.toggleClass('blockOne');
            this.$myGamePieceTwo.toggleClass('blockTwo')
        }
    }
    game.init()    
}() );
