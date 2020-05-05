$('#hide-control').click(function () {
    $('.svg').fadeOut(250, 'linear')
    $('.main').fadeIn()
})

window.onscroll = function () {
    menubar = document.getElementById('menu-bar')
    menu = document.getElementById('menu')
    menuListTrigger = document.getElementsByClassName('menu-li-trigger')

    if (window.pageYOffset > 80 || document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
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

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault()

//     $('html, body').animate({
//         scrolltop: $($.attr(this, 'href')).offset().top
//     }, 120)

// })
// $('a').on('click', function (event) {
//     if (this.hash !== '') {
//         event.preventDefault()
//     }

//     var hash = this.hash

//     $('html, body').animate({
//         scrolltop: ($(hash).offset().top - 100)
//     }, 120, function () {
//         window.location.hash = hash
//     })

// })
