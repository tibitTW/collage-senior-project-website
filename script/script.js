$('#hide-control').click(function () {
    $('.svg').fadeOut(250, 'linear')
    $('.main').fadeIn()
})

window.onscroll = function () {
    menubar = document.getElementById('menu-bar')
    menu = document.getElementById('menu')
    menuListTrigger = document.getElementsByClassName('menu-li-trigger')

    yOffset = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    if (yOffset > 60) {
        menubar.style.height = '80px'
        menubar.style.padding = '20px'
        menu.style.lineHeight = '40px'
        menu.style.marginRight = '.5vw'
        for (var i = 0; i < 6; i++) {
            menuListTrigger[i].style.margin = 'auto 1vw'
        }
    } else {
        menubar.style.height = '120px'
        menubar.style.padding = '25px'
        menu.style.lineHeight = '70px'
        menu.style.marginRight = '.5vw'
        for (var i = 0; i < 6; i++) {
            menuListTrigger[i].style.margin = 'auto 2.2vw'
        }
    }
}

// menu link smooth scroll
$('.menu-bar a').on('click', function (event) {
    yOffset = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    offsetTop = $(this.getAttribute('href')).offset().top
    if (yOffset > offsetTop) {
        time = yOffset - offsetTop
    } else {
        time = offsetTop - yOffset
    }

    $('html, body').animate({
        scrollTop: (offsetTop - 80)
    }, (time * 0.4))
})
