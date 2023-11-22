window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    // console.log(scrollDistance);
    
    if (scrollDistance > 0) {
        document.querySelector('.header__wrapper-nav').classList.add('header__wrapper-nav--active')
        document.querySelector('.header').classList.add('element-show');
    }
    else if (scrollDistance < 90)
        document.querySelector('.header__wrapper-nav').classList.remove('header__wrapper-nav--active');
});

// document.querySelectorAll('.companies__item').forEach(el => {
//     el.addEventListener('click', () => {
//         document.querySelector('.companies__item').classList.remove('companies__item--active');
//         console.log();
//     });
// });

// let companiesItem = document.querySelectorAll('.companies__item');
// companiesItem.forEach(item => {
//     item.addEventListener('click', function(e) {
//         companiesItem.forEach(item => {
//             item.classList.remove('companies__item--active');
//         });
//         item.classList.add('companies__item--active');
//     });
// });
// console.log(document.querySelectorAll('.companies__item--active').this);




let burgerBlock = document.querySelector('.burger');
let menu = document.querySelector('.menu');

burgerBlock.addEventListener('click', function(e) {
    burgerBlock.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
});


// FILTER
const filterBox = document.querySelectorAll('.item-card__wrapper');
let companiesItem = document.querySelectorAll('.companies__item');

companiesItem.forEach(item => {
    item.addEventListener('click', event => {
        companiesItem.forEach(item => {
            item.classList.remove('companies__item--active');
        });
        item.classList.add('companies__item--active');

        let filterClass = event.target.dataset['f'];
        // console.log(filterClass);
        
        filterBox.forEach(elem => {
            elem.classList.add('show');
            elem.classList.remove('hide');

            if (!elem.classList.contains(filterClass) && filterClass != 'all') {
                elem.classList.add('hide');
            }
        });
    });
});



// ANIMATION (show content on scroll)
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = {
    threshold: [0.3]
};

let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim-block');

for (let elm of elements) {
    observer.observe(elm);
}