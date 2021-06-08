//  Trigger Mixer Plugin 
let x = document.querySelector(".portfolio .my-potfolio .images .containerEl");
var mixer = mixitup(x);

let allButtons = document.querySelectorAll(".asked .box .btn-header");
let allIcons = document.querySelectorAll(".asked .box .btn-header .icon i");

//  This For Accodion On Asked Section
allButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        let contentSlibling = btn.nextElementSibling;
        // Toggle Class To Add Class OR Remove Class
        ToggleClass(contentSlibling, "active");

        let icon = btn.querySelector(".icon .fa-plus");
        //  Toggle Between Plus Icon And Minus Icons
        TogglePlusIcon(icon, allIcons);

        if(contentSlibling.classList.contains("active")) {
            btn.parentElement.parentElement.querySelectorAll(".content").forEach(content => {
                if (content !== contentSlibling) {
                    content.classList.remove("active");
                }
            });
        }
    });
});

let myNavbar = document.querySelector(".header .my-nav nav");
let allLi = document.querySelectorAll(".header .my-nav .navbar-nav li");


// Click On Nav Link To Go To Sections 
allLi.forEach(li => {
    li.addEventListener("click", function (e) {
        e.preventDefault();
        // Toggle Fun To Open OR Close
        ToggleClass(document.querySelector(".header .my-nav .navbar-collapse"),"show");
        // Click On Nav Link To Go To Sections
        goSection(li);
        
        // Click On Nav Link To Go Active Class and Remove Active Class From All Siblings
        addActive(li);

        // Remove Fixed Top Class From Navbar
        setTimeout(()=> {
            myNavbar.classList.remove("fixed-top");
            myNavbar.classList.remove("bg-dark");
        },800);
        
    });
});


//  Give Class Fixed Top To Navbar When Go to Down On Navbar When Scrolling
addFixedTop(myNavbar);

//  ====================        ALL Functions        =======================================

//  Give Class Fixed Top To Navbar When Go to Down On Navbar When Scrolling
function addFixedTop(ele) {
    let lastScroll = 0;
    window.addEventListener("scroll", function(){
        ele.classList.toggle("fixed-top", scrollY > 600);
        ele.classList.toggle("bg-dark", scrollY > 600);
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (window.pageYOffset > 500) {
            if (scrollTop > lastScroll) {
                myNavbar.style.top = "-62px";
            } else {
                myNavbar.style.top = "0";
            }
            lastScroll = scrollTop;
        }
    });
}

// Click On Nav Link To Go Active Class and Remove Active Class From All Siblings
function addActive (ele) {
    ele.parentElement.querySelector(".active").classList.remove("active");
    ele.classList.add("active");
}

// Click On Nav Link To Go To Sections 
function goSection(ele) {
    let sectionName = ele.dataset.section;
    document.querySelector("." + sectionName).scrollIntoView({
        behavior: "smooth"
    });
}

// Toggle Class To Add Class OR Remove Class
function ToggleClass(e1, e2) {
    e1.classList.toggle(e2);
}

//  Toggle Between Plus Icon And Minus Icons
function TogglePlusIcon(e1, e2) {
    if (e1.classList.contains("fa-minus")) {
        e1.classList.remove("fa-minus");
    } else {
        e2.forEach(icon => {
            icon.classList.remove("fa-minus");
        });    
        e1.classList.add("fa-minus");
    }
}



// Start Jquery 
$(document).ready(function(){
    //  Trigger Owl Carousel Plugin
    $('.testi .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $('.our-clients .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});