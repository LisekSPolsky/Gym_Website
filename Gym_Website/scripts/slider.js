// jquery

function sec1() {
    $('body, html').animate({
        scrollTop: $('.s1').offset().top
    }, 1000) 
}

function sec2() {
    $('body, html').animate({
        scrollTop: $('.s2').offset().top
    }, 1000) 
}

function sec3() {
    $('body, html').animate({
        scrollTop: $('.s3').offset().top
    }, 1000) 
}

function sec4() {
    $('body, html').animate({
        scrollTop: $('.s4').offset().top
    }, 1000) 
}

function sec5() {
    $('body, html').animate({
        scrollTop: $('.s5').offset().top
    }, 1000) 
}



$(".section1").on('click',sec1)

$(".section2").on('click',sec2)

$(".section3").on('click',sec3)

$(".section4").on('click',sec4)

$(".section5").on('click',sec5)



// $('nav ul li a').on('click',function(){
//     const goToSection = "#" + ($(this).attr('class'));

// }
// )