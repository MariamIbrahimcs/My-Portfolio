
$( window ).on( "load", function() {
  $(".home-tab").focus();
  
} );

$(document).ready(function(){
  $(this).scrollTop(0);
});

// console.log($('#home-page').position().top);
// console.log($('#about-page').position().top);
// console.log($('#skills-page').position().top);
// console.log($('#projects-page').position().top);
// console.log($('#contact-page').position().top);
// console.log($('#about-page').offset().top);
// $(window).bind('scroll', function(){
//   if (($(window).scrollTop() >= 0) && ($(window).scrollTop() < $('#about-page').offset().top)) {
//     $(".home-tab").focus();
//   }

//   else if(($(window).scrollTop() >= $('#about-page').offset().top) && ($(window).scrollTop() < $('#skills-page').offset().top)){
//     $(".about-tab").focus();
//   }

//   else if(($(window).scrollTop() >= $('#about-page').offset().top) && ($(window).scrollTop() < $('#skills-page').offset().top)){
//     $(".skills-tab").focus();
//   }

//   else if(($(window).scrollTop() >= $('#about-page').offset().top) && ($(window).scrollTop() < $('#skills-page').offset().top)){
//     $(".projects-tab").focus();
//   }

//   else if(($(window).scrollTop() >= $('#about-page').offset().top) && ($(window).scrollTop() < $('#skills-page').offset().top)){
//     $(".contact-tab").focus();
//   }

// });

// if($(window).scrollTop() == 0){
//   $(".home-tab").focus();
// }

$(window).bind('scroll', function(){
  if (($(window).scrollTop() >=0) && ($(window).scrollTop() < $('#about-page').position().top)) {
    $(".home-tab").focus();
  }
});
$(window).bind('scroll', function(){
  if (($(window).scrollTop() >= $('#about-page').position().top-300) && ($(window).scrollTop() < $('#skills-page').position().top)) {
    $(".about-tab").focus();
  }
});

$(window).bind('scroll', function(){
  if (($(window).scrollTop() >= $('#skills-page').position().top-300) && ($(window).scrollTop() <$('#projects-page').position().top )) {
    $(".skills-tab").focus();
  }
});
$(window).bind('scroll', function(){
  if (($(window).scrollTop() >=$('#projects-page').position().top-300 ) && ($(window).scrollTop() < $('#contact-page').position().top)) {
    $(".projects-tab").focus();
  }
});

$(window).bind('scroll', function(){
  if (($(window).scrollTop() >= $('#contact-page').position().top ) && ($(window).scrollTop() <document.body.scrollHeight)) {
    $(".contact-tab").focus();
  }
});

$('.contactbtn').click(function(){
  $('html, body').animate({
    scrollTop:$('#contact-page').position().top
}, 500);
})



$('.home-tab').click(function(){
  $('html, body').animate({
    scrollTop:$('#home-page').position().top
}, 500);
})

$('.about-tab').click(function(){
  $('html, body').animate({
    scrollTop:$('#about-page').position().top -100
  }, 500);

  
})

$('.skills-tab').click(function(){
  $('html, body').animate({
    scrollTop:$('#skills-page').position().top-100
}, 500);

// console.log($('#skills-page').position().top);
})

$('.projects-tab').click(function(){
  $('html, body').animate({
    scrollTop:$('#projects-page').position().top-100
}, 500);

// console.log($('#skills-page').position().top);
})

$('.contact-tab').click(function(){
  $('html, body').animate({
    scrollTop:$('#contact-page').position().top
}, 500);

// console.log($('#contact-page').position().top);
})

function auto_grow(element) {
  element.style.height = "46px";
  element.style.height = (element.scrollHeight)+"px";
}

const ContactForm = document.getElementById('contact-form'),
ContactMessage = document.getElementById('contact-message')

const SendEmail = (e) =>{
  e.preventDefault()

  emailjs.sendForm('service_i03r9wf' ,'template_txatzjj' ,'#contact-form' ,'pn8_Yoe4LcbDdjShH')
  .then(()=>{
    ContactMessage.textContent = 'Message sent successfully'

    setTimeout(() => {
      ContactMessage.textContent=''
      ContactForm.reset()
    }, 5000);
  }, () => {
    
    ContactMessage.textContent = 'Message not sent (service error)'
  }
  )
}

ContactForm.addEventListener('submit' ,SendEmail)

