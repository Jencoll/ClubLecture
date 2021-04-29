const btn = document.querySelector('.btn1');
const menu = document.querySelector('.menu');
const allLinks = document.querySelectorAll('.menu-item');
let itemColor = '';

btn.addEventListener('click', function(){
    btn.classList.toggle('active');
    menu.classList.toggle('active');
})

function highlightItem(item_) {
    allLinks.forEach(function(item) {
        if (item !== item_) {
            item.style.backgroundColor = 'white';
        }
    })
    item_.style.backgroundColor = '#C7B7CD';
}

function faireSignet(item_) {
    allLinks.forEach(function(item){
        if(item !== item_) {
            item.classList.remove('signet');
        }
    })
    if(item_ !== null) {
        item_.classList.add('signet');
    }
}

allLinks.forEach(function(item){
    item.addEventListener('click', function(){
        menu.classList.remove('active');
        btn.classList.remove('active');
    })

    item.addEventListener('mousedown', function(){
        faireSignet(item);
    })

    item.addEventListener('mouseup', function(){
        faireSignet(null);
    })





    // item.addEventListener('mousedown', function(){
    // //item.addEventListener('touchstart', function(){
    //     highlightItem(item);
    //     //itemColor = item.style.backgroundColor;
    //     //item.style.backgroundColor = '#C7B7CD';
    // })

    // item.addEventListener('mouseup', function(){
    // //item.addEventListener('touchend', function(){
    //     //item.style.backgroundColor = itemColor;
    //     allLinks.forEach(function(item_) {
    //         item_.style.backgroundColor = 'white';
    //     })
    // })
})