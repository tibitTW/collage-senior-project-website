$(document).ready(function () {
    $('#hide-control').click(function () {
        $('.svg').fadeOut(250, 'linear')
        $('.main').fadeIn()
    })

    // $(document).on('click', 'a[href^="#"]', function (event) {
    //     event.preventDefault()

    //     $('html, body').animate({
    //         scrolltop: $($.attr(this, 'href')).offset().top
    //     }, 120)

    // })
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault()
        }

        var hash = this.hash

        $('html, body').animate({
            scrolltop: ($(hash).offset().top - 100)
        }, 120, function () {
            window.location.hash = hash
        })

    })
})
