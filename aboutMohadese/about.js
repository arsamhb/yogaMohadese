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


/* CLASS TOGGLER */
function toggleContent(index) {
  const buttons = $(".class-buttons");
  const contents = $(".class-contents");

  // Hide all contents and remove active class from buttons
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
    buttons[i].classList.remove("active");
  }

  // Show the selected content and add active class to the corresponding button
  contents[index].classList.add("active");
  buttons[index].classList.add("active");
}
// Set the first button and content as active by default
toggleContent(0);

/* LIGHT CHANGER */
let isLightToggled = false;

function toggleLight() {
  /* $("body").css("background","radial-gradient(farthest-corner at 0px 0px,#d7ff881e 0%,#d7ff88 100%)") */
  $(document).ready(function() {
    const bodyElement = $('body');
    const newBackground = "radial-gradient(farthest-corner at 40px 40px,#d7ff881e 0%,#d7ff88 100%)";
    
    bodyElement.fadeOut(500, function() {
      $("#img2").remove();
      $("#classBtn").remove();
      bodyElement.css('background', newBackground).fadeIn(1000);
    });
  });

  $("body").css("color","#000") 
  $(".vertical-line").css("display","none")
  if (!isLightToggled) {    
    console.log('Light toggled');
    isLightToggled = true;
  }
}

function handleScroll() {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const scrollCenter = scrollPosition + windowHeight / 2;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  if (scrollCenter >= (documentHeight * 0.5) && !isLightToggled) {
    //toggleLight();
  }
}

window.addEventListener('scroll', handleScroll);
