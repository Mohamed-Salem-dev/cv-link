// ===========================================================================================================================
// Navbar
var wstick = $(window);
wstick.on('scroll', function () {
    var scroll = wstick.scrollTop();
    if (scroll < 150) {
        $(".box-nav-all").removeClass("sticky");
    } else {
        $(".box-nav-all").addClass("sticky");
    }
});

// -------------------------------------------
// maunn
let maunn = document.querySelector('.maunn');
maunn.addEventListener('click', function () {
    this.classList.toggle('is-active');
})

$(document).ready(function () {
    $('.mun-align').click(function () {
        $('.box-cilsh-nav').toggleClass('active')
        // $(window.alert('lskclfsjk'))
    })
})
// ===========================================================================================================================

// ===========================================================================================================================
// typed
var typed = new Typed('.typeAbout', {
    strings: [
        'web developer', 'web design', 'back-end developer', 'front end developer', 'flutter developer', 'graphic designer', 'react developer', 'mobile developer', 'logo',
    ],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
});
// ===========================================================================================================================


// ===========================================================================================================================
// active

$(function () {
    $(".item-nav").click(function () {
        $(".item-nav").removeClass("active-nav");
        $(this).addClass("active-nav");
    });
});


// pagination active

$(function () {
    $(".page-item").click(function () {
        $(".page-item").removeClass("active");
        $(this).addClass("active");
    });
});

// active footer



$(function () {
    $(".link-footer").click(function () {
        $(".link-footer").removeClass("active-footer");
        $(this).addClass("active-footer");
    });
});
// ===========================================================================================================================

// ===========================================================================================================================
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function () {
    console.log('callback - particles.js config loaded');
});
// ===========================================================================================================================

// ===========================================================================================================================
// box-color

let colorBoxWidth = $("#colorBox").outerWidth();

$("#sideBar").animate({ right: `-${colorBoxWidth}` }, 0);

$("#sideBarToggle").click(function () {


    if ($('#sideBar').css("right") == "0px")//البوكس كده بره
    {
        $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 2000);
    }
    else {
        $('#sideBar').animate({ right: `0px` }, 2000);
    }

})


function test(e) {
    //console.log(e.target)
    if ($('#sideBar').css("right") == "0px") {
        $("#sideBar").animate({ right: `-${colorBoxWidth}` }, 2000);
    }
}
for (let i = 0; i < $(".color-item").length; i++) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    $(".color-item").eq(i).css("backgroundColor", `rgb(${red} ,${green} ,${blue} )`);
}

//بيغير بقي الالون اللي انت عايزه boxلم اضغط علي لون من الالون في ال
$(".color-item").click(function () {
    let bkgColor = $(this).css("backgroundColor");
    $(".color-css-js ,svg.radial-progress text").css("color", bkgColor)
    $("svg.radial-progress text").css("fill", bkgColor)
})


// ===========================================================================================================================
// Skills
// circular-progress

$(function () {

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function (index, value) {
        $(this).find($('circle.complete')).removeAttr('style');
    });

    // Activate progress animation on scroll
    $(window).scroll(function () {
        $('svg.radial-progress').each(function (index, value) {
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if (
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({ 'stroke-dashoffset': strokeDashOffset }, 1250);

            }
        });
    }).trigger('scroll');

});

// ------

// ===========================================================================================================================

// ===========================================================================================================================
// Scroll Top
const calcScrollValue = () => {
    const btn = document.querySelector("#ScrollToTop");

    const position = document.documentElement.scrollTop;
    const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrollValue = Math.round(Math.floor(position * 100) / calcHeight);

    position > 100 ? (btn.style.display = "grid") : (btn.style.display = "none");

    btn.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });

    btn.style.background = `conic-gradient(#ad8e6d ${scrollValue}%, transparent ${scrollValue}%)`;
};

window.addEventListener("scroll", calcScrollValue);
// ===========================================================================================================================
// ===========================================================================================================================
// active Profile
let section = document.querySelectorAll('.section1');
let navLink = document.querySelectorAll('.box-cilsh-nav-Profile a');

window.onscroll = () => {
    section.forEach(
        sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 300;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLink.forEach(links => {
                    links.classList.remove('active-nav-Profile');
                    document.querySelector('.box-cilsh-nav-Profile a[href*=' + id + ']').classList.add
                        ('active-nav-Profile');
                })
            }
        }
    )
}

// ===========================================================================================================================
// active-Profil


$(function () {
    $(".item-Profile").click(function () {
        $(".item-Profile").removeClass("active-Profil");
        $(this).addClass("active-Profil");
    });
});

// $(function () {
//     $(".item-Profile").mouseenter(function () {
//         $(".item-Profile").removeClass("active-Profil");
//         $(this).addClass("active-Profil");
//     });
// });

// ===========================================================================================================================

// ===========================================================================================================================
// Copy to Clipboard
$(document).ready(function () {
    $('.copy-button').click(function () {
        $('.copy-input').select();
        document.execCommand('copy')
    })
})

// ===========================================================================================================================

// Skills


// $('.progress-fill span').each(function () {

//     var percent = $(this).html();
//     $(this).parent().css('width', percent);
// });

// ------------------------
$('.progress-fill span').each(function () {

    var percent = $(this).html();

    if (percent == "10%") {
        $(this).parent().css('width', percent);
        // $(this).parent().css('width', '0%');
    }
    else if(percent == "20%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "30%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "40%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "50%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "60%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "70%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "80%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "90%"){
        $(this).parent().css('width', percent);
    }
    else if(percent == "100%"){
        $(this).parent().css('width', percent);
    }
    else if (percent > "100%"){
        $(this).parent().css('width', '0%');

    }
});

