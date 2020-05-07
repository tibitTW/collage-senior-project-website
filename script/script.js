$('#hide-control').click(function () {
    $('.svg').fadeOut(250, 'linear')
    $('.main').fadeIn()
})

window.onscroll = function () {
    var menubar = document.getElementById('menu-bar')
    var menu = document.getElementById('menu')
    var menuListTrigger = document.getElementsByClassName('menu-li-trigger')
    var homeOffsetY = $('#home').offset().top - 100
    var aboutOffsetY = $('#about').offset().top - 100
    var subjectOffsetY = $('#subject').offset().top - 100
    var contentOffsetY = $('#content').offset().top - 100
    var useOffsetY = $('#use').offset().top - 100
    var contactOffsetY = $('#contact').offset().top - 100
    var focusd_el = this.document.getElementsByClassName('aside-focus')[0]

    var yOffset = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
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

    if (yOffset < homeOffsetY) {
        if (focusd_el) {
            focusd_el.classList.remove('aside-focus')
        }
    } else if (yOffset < aboutOffsetY) {
        if (focusd_el) {
            focusd_el.classList.remove('aside-focus')
        }
        document.getElementById('aside-character-1').classList.add('aside-focus')
    } else if (yOffset < subjectOffsetY) {
        if (focusd_el) {
            focusd_el.classList.remove('aside-focus')
        }
        document.getElementById('aside-character-2').classList.add('aside-focus')
    } else if (yOffset < contentOffsetY) {
        if (focusd_el) {
            focusd_el.classList.remove('aside-focus')
        }
        document.getElementById('aside-character-3').classList.add('aside-focus')
    } else if (yOffset < useOffsetY) {
        if (focusd_el) {
            focusd_el.classList.remove('aside-focus')
        }
        document.getElementById('aside-character-4').classList.add('aside-focus')
    } else if (yOffset < contactOffsetY) {
        if (focusd_el) {
            focusd_el.classList.remove('aside-focus')
        }
        document.getElementById('aside-character-5').classList.add('aside-focus')
    } else {
        if (focusd_el) {
            focusd_el.classList.remove('aside-focus')
        }
        document.getElementById('aside-character-6').classList.add('aside-focus')
    }
}

// menu link smooth scroll
$('.menu-bar a').on('click', function (event) {
    var yOffset = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    var offsetTop = $(this.getAttribute('href')).offset().top
    if (yOffset > offsetTop) {
        time = yOffset - offsetTop
    } else {
        time = offsetTop - yOffset
    }

    $('html, body').animate({
        scrollTop: (offsetTop - 80)
    }, (time * 0.2 + 200))
})
