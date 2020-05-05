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

$('.menu-bar a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault()
    }

    var hash = this.hash
    offsetTopNow =
        $('html, body').animate({
            scrollTop: this.getAttribute('href').offset().top
        })
    offset: this.getAttribute('href')
    console.log($(this.getAttribute('href')).offset().top)

})
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

$('.menu-bar a').on('click', function (e) {
    e.preventDefault();
    var targetSelector = NexT.utils.escapeSelector(this.getAttribute('href'));

    var offset = $(targetSelector).offset().top;

    hasVelocity ?
        html.velocity('stop').velocity('scroll', {
            offset: offset + 'px',
            mobileHA: false
        }) :
        $('html, body').stop().animate({
            scrollTop: offset
        }, 500);
});