
/*    MENU */
var btn = $('.btn');
var isMenuOpen = false;

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  isMenuOpen? isMenuOpen = false : isMenuOpen = true;

  $(btn).toggleClass('active not-active');
  
  $(".nav-links").fadeOut(300)

  $("#img-link").css("backgroundColor","#ecece000") 
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
  isMenuOpen? isMenuOpen = false : isMenuOpen = true;
  
  $(btn).toggleClass('active not-active');

  setTimeout(()=>{$(".nav-links").fadeIn(500)}, 1200) 
  
  $("#img-link").css("backgroundColor","#616e45") 
}

function handleMenu() {
  if(isMenuOpen){
    closeNav()
  } else {
    openNav()
  }
}

