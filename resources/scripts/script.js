const ham = document.querySelector('#hamburger')
const close_ham = document.querySelector('#sidebar > .close > i')
const sidebar = document.querySelector('#sidebar')
const mask = document.querySelector('#mask')
const main = document.querySelector('main')
const menu_links = document.querySelectorAll('#sidebar a')

// mobile menu script
ham.addEventListener('click', function() {
    sidebar.classList.add('active')
    mask.classList.add('active')
    main.classList.add('inactive')
})

close_ham.addEventListener('click', function(){
    sidebar.classList.remove('active')
    mask.classList.remove('active')
    main.classList.remove('inactive')
})

mask.addEventListener('click', function(){
    sidebar.classList.remove('active')
    mask.classList.remove('active')
    main.classList.remove('inactive')
})

menu_links.forEach(each => {
    each.addEventListener('click', function(){
        sidebar.classList.remove('active')
        mask.classList.remove('active')
        main.classList.remove('inactive')
    })
})

// Skills folder slide script
$("#skills-wrapper p").click(function(){
    let folder_name = $(this).attr('folder')
    $('#skills-wrapper ul[id="'+folder_name+'"]').slideToggle('slow')
})

// header box shadow script
$('#intro').waypoint(function (direction) {
    if (direction == "down") {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
}, {
    offset: '-150px;'
});