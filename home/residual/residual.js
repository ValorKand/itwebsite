/*Aquí coloco el código residuo que ya no uso pero lo guardo "por si acaso" xdd
    Todo el codigo siempre va dentro del document ready function*/
$(document).ready(function() {
    // fija el menu cuando pasas la página (deprecado)
    $(".masthead").visibility({
        once: false,
        onBottomPassed: function() {
        $(".fixed.menu").transition("fade in");
        },
        onBottomPassedReverse: function() {
        $(".fixed.menu").transition("fade out");
        }
    });
});