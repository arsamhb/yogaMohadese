var screenWidth = $(window).width();
var leftForBall = (screenWidth/2)-220

$(".ball").css("right",leftForBall )

/*    MENU */
var btn = $('.btn');
var isMenuOpen = false;

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  isMenuOpen? isMenuOpen = false : isMenuOpen = true;

  $(btn).toggleClass('active not-active');
  
  $(".nav-links").fadeOut(300)

  $("#img-link").css("backgroundColor","#ecece0") 
  //$("#img-link").css("boxShadow","") 
  //$("#img-link").css("border","1px solid rgb(146, 221, 75)") 
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
  isMenuOpen? isMenuOpen = false : isMenuOpen = true;
  
  $(btn).toggleClass('active not-active');

  setTimeout(()=>{$(".nav-links").fadeIn(500)}, 1200) 
  
  $("#img-link").css("backgroundColor","#616e45") 
  //$("#img-link").css("boxShadow","0 0 1px 2px #ecece0") 
  //$("#img-link").css("border","1px solid #616e45") 
}

function handleMenu() {
  if(isMenuOpen){
    closeNav()
  } else {
    openNav()
  }
}

/*    LOADING */
$("#loading").fadeIn(2000)//2000
$(".rotate-photo").animate(
    {deg : 60},
    {
      duration: 2000, 
      step: function(now){
        $(this).css({transform: 'rotate('+ now + 'deg'})
      }
    }
  )

setTimeout(runAfterLoading, 3000)//3000

//      MOUSE MOVE EFFECT ON ALIVE BALL
function runAfterLoading() {
  
  $("#load").fadeOut(500)//500
  $("#main").fadeIn(3000)//3000

  document.addEventListener('mousemove', handleMouseMove);

  const colorDiv = document.getElementsByClassName('ball');
  
  let originalColor = 'rgb(173, 192, 128)';
  let isMouseMoving = false;
  let timeoutId;
  
  document.addEventListener('mousemove', handleMouseMove);
  
  setTimeout(()=>{
    $(".centerBtn").fadeIn(1500)
    $("#yogaWithM").fadeIn(1500)
  },1500)
  
  function handleMouseMove() {
    isMouseMoving = true;
  
    clearTimeout(timeoutId);
  
    colorDiv[0].style.backgroundColor = "hsl(78, 54%, 63%)";
        
    timeoutId = setTimeout(() => {
      isMouseMoving = false;
      colorDiv[0].style.backgroundColor = originalColor;
    }, 500);
  }    
}

/*    MAKING NAVBAR RESPOND TO CHAKRA COLORS */
$(".nav-links:nth-child(1)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(299, 15%, 51%)")
  console.log("entered");
})
$(".nav-links:nth-child(2)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(230, 15%, 47%)")
  console.log("entered");
})
$(".nav-links:nth-child(3)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(209, 15%, 60%)")
  console.log("entered");
})
$(".nav-links:nth-child(4)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(153, 15%, 43%)")
  console.log("entered");
})
$(".nav-links:nth-child(5)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(48, 15%, 53%)")
  console.log("entered");
})
$(".nav-links:nth-child(6)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(31, 15%, 56%)")
  console.log("entered");
})
$(".nav-links:nth-child(7)").on("mouseenter", () => {
  $(".sidenav").css("backgroundColor", "hsl(354, 15%, 50%)")
  console.log("entered");
})

$(".nav-links").on("mouseleave", () => {
  $(".sidenav").css("backgroundColor", "#111")
})
