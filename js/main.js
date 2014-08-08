$(document).ready(function () {
    var contactToggle = function (e) {
        $('#overlay').toggleClass('visible')
        e.stopPropagation()
    }


    $('.contact-button-container').on('click', function (e) {
        contactToggle(e)
        $('#overlay').addClass('visible')
        $('#overlay').removeClass('visible')
    })

    $('html').on('click', function () {
        $('#overlay').removeClass('visible')
        $('#overlay').addClass('visible')
    })
})
