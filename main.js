$(document).ready(function(){


    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('.header').css({'background':'#6C5CE7','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        
      }else{
        $('.header').css({'background':'none','box-shadow':'none'});
      }
    });
  
  
    $('.accordion-header').click(function(){
      $('.accordion .accordion-body').slideUp();
      $(this).next('.accordion-body').slideDown();
      $('.accordion .accordion-header span').text('+');
      $(this).children('span').text('-');
    });
  
  
  
  });
  
  var loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  
  })
  
  // popUp
  const main = document.querySelector('.main');
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.close');
  const click = document.querySelector('.click');
  window.onload = function(){
    setTimeout(() => {
      popup.style.display= "block"
      main.style.filter = "blur(2px)";
    }, 2000);
  }
  
  close.addEventListener('click',() =>{
    popup.style.display="none";
    main.style.filter = "blur(0px)";
  
  })
  
  click.addEventListener('click',() =>{
    popup.style.display="none";
    main.style.filter = "blur(0px)";
  })
  
  
  
  
  
  
  
  
  // window.onscroll = () => {
  //   let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  //   let percentage = ((window.scrollY) / maxHeight) * 100;
  //   document.querySelector('#scroll-indicator').style.width = percentage + '%';
    
  // }
  
  
  var form = document.getElementById('form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
  
  alert("Your Form have been submitted sucessfully");
  location.reload(true);
  
  })
  
  const to_top= document.querySelector(".to-top");
  window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
      to_top.classList.add("active");
    }
    else{
      to_top.classList.remove("active");
    }
  })
  
  
   