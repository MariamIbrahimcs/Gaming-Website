let test =500
$('#arrowup').click(function(){
    console.log('up');

    console.log(window.pageYOffset);
    $('html, body').animate({
        scrollTop:0
    }, 500);
})

$('#arrowdown').click(function(){
    console.log('down');

    console.log(window.pageYOffset);
    $('html, body').animate({
        scrollTop:document.body.scrollHeight
    }, 500);

})


// $("#racing-tab").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#racing-games").offset().top
//     }, 500);
// });

$("#racing-tab").click(function() {
    $('html').animate({
        scrollTop: $("#racing-games").offset().top
    }, 500);
});

$("#zombie-tab").click(function() {
    $('html, body').animate({
        scrollTop: $("#zombie-games").offset().top
    }, 500);
});

$("#action-tab").click(function() {
    $('html, body').animate({
        scrollTop: $("#action-games").offset().top
    }, 500);
});

let games = document.querySelectorAll('.card')

// $('#ongamebtn').click(function(){
//     console.log('play game');
// })

let playgame = document.querySelectorAll('.ongamebtn')


for (let i = 0 ; i< playgame.length;i++){
    
    playgame[i].addEventListener('click',function(){
        let targetimg = games[i].closest(".card").firstElementChild;
        let mysource = targetimg.getAttribute('src');
        let gamename = games[i].closest(".card").getAttribute('name')
        // console.log(gamename);
        localStorage.setItem('gamename',gamename)
        // console.log(localStorage.getItem('gamename'));
        // console.log('play game');
        localStorage.setItem('mysource',mysource)
        // console.log(localStorage.getItem('mysource'));
        window.location.href = "game.html";
    })
};