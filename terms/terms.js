var screenWidth = $(window).width();

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
/*    MAKING NAVBAR RESPOND TO CHAKRA COLORS */
$(".nav-links:nth-child(1)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(299, 15%, 51%)")
})
$(".nav-links:nth-child(2)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(230, 15%, 47%)")
})
$(".nav-links:nth-child(3)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(209, 15%, 60%)")
})
$(".nav-links:nth-child(4)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(153, 15%, 43%)")
})
$(".nav-links:nth-child(5)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(48, 15%, 53%)")
})
$(".nav-links:nth-child(6)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(31, 15%, 56%)")
})
$(".nav-links:nth-child(7)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(354, 15%, 50%)")
})

$(".nav-links").on("mouseleave", () => {
  $(".sidenav").css("backgroundColor", "#111")
})

