let mysource = localStorage.getItem('mysource')
console.log(mysource);

let gameimg = document.querySelector('.game-img')
console.log(gameimg);
let texta = ``

texta+= `
        <img src="${mysource}" alt="">
         `
gameimg.innerHTML = texta

let gamename = document.getElementById('gamename')

gamename.innerHTML = localStorage.getItem('gamename')