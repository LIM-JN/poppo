document.addEventListener("DOMContentLoaded", () => {
    const IconButtons = document.querySelectorAll('.icon-btn');

    const TabText = document.querySelector('.text-box')

    const TextArr = [
        "<h2>2024.25 PASSES & EDGE CARDS ON SALE</h2>",
        "<h2>BOOK YOUR MOUNTAIN GETAWAY</h2>",
        "<h2>SKI & BOARD LESSONS</h2>",
        "<h2>SEAMLESS SKI & BOARD RENTALS</h2>",
        "<h2>GET SPECIAL OFFERS AND MORE!</h2>"
    ]

    const TabContent = document.querySelectorAll('.tab-content')

    for(let i=0;i<IconButtons.length;i++) {
        IconButtons[i].addEventListener("click",()=> {
            TabText.innerHTML=TextArr[i];
            IconButtons[i].classList.add('on');
            TabContent[i].classList.add('on')
            for (let j=0;j<IconButtons.length;j++) {
                if (i !==j) {
                    IconButtons[j].classList.remove('on')
                    TabContent[j].classList.remove('on');
                }
            }
        }) 
    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        slidesPerView: 1,

        // Responsive breakpoints
        breakpoints: {
            1032.8: {
            slidesPerView: 3,
            spaceBetween: 10
            }
        },
        centeredSlides:true,
        spaceBetween:10,
        effect:"coverflow",
        scale:1.1,
        rotate:15,
        depth:50
    });

    const menuBtn = document.querySelector('#menu-btn');
    const subMenu = document.querySelector('.sub-menu');

    menuBtn.addEventListener('click',()=> {
        subMenu.classList.toggle("on")
    })
})