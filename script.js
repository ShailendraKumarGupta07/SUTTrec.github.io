// 1.Javascript for Hamburger 

function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("menu").style.position="fixed";
    var y= document.getElementById("logo");
   
   var x =document.getElementById("parentB");
   if (x.style.display === "block") {
    x.style.display = "none";
    y.classList.add("adjustment");
    document.getElementById("contentA").style.display="none";
    document.getElementById("menu").style.marginLeft="40px";

  } else {
    document.getElementById("nav1").addEventListener('mouseenter', () =>{
      document.getElementById("parentB").style.display="block";
      document.getElementById("menu").classList.toggle("icon");
  })
      x.style.display = "block";
      y.classList.add("adjustment");
      document.getElementById("menu").style.marginLeft="40px";
  }
}
document.getElementById("parentB").addEventListener('mouseleave', () =>{
        setTimeout(() => {
          document.getElementById("parentB").style.display="none";
        document.getElementById("menu").classList.remove("icon");
        document.getElementById("Bar1").style.display="none";
      }, 500);
})

function onClickMenu2(){
    document.getElementById("menu").style.position="fixed";
    var y= document.getElementById("logo");
   
   var x =document.getElementById("contentA");
   if (x.style.display === "block") {
    x.style.display = "none";
    y.classList.add("adjustment");
    document.getElementById("contentA").style.display="none";

  } else {
      x.style.position="absolute";
      x.style.top="8%";
      x.style.display = "block";
      y.classList.add("adjustment");
  }
}
function onClickMenu3(){
    document.getElementById("menu").style.position="fixed";
    var y= document.getElementById("logo");
   
   var x =document.getElementById("content");
   if (x.style.display === "block") {
    x.style.display = "none";
    y.classList.add("adjustment");
    document.getElementById("content").style.display="none";

  } else {
      x.style.position="absolute";
      x.style.top="8%";
      x.style.display = "block";
      y.classList.add("adjustment");
  }
}
function onClickMenu4(){
    document.getElementById("menu").style.position="fixed";
    var y= document.getElementById("logo");
   
   var x =document.getElementById("ContentA");
   if (x.style.display === "block") {
    x.style.display = "none";
    y.classList.add("adjustment");
    document.getElementById("ContentA").style.display="none";
    document.getElementById("showbutton2").style.transform="translateY(0px)";
    document.getElementById("showbutton3").style.transform="translateY(0px)";
    document.getElementById("showbutton4").style.transform="translateY(0px)";
    document.getElementById("showbutton5").style.transform="translateY(0px)";
    document.getElementById("move1").style.transform="translateY(0px)";
    document.getElementById("move2").style.transform="translateY(0px)";
    document.getElementById("move3").style.transform="translateY(0px)";

  } else {
      x.style.position="absolute";
      x.style.top="9%";
      x.style.display = "block";
      y.classList.add("adjustment");
      document.getElementById("showbutton2").style.transform="translateY(236px)";
      document.getElementById("showbutton3").style.transform="translateY(236px)";
      document.getElementById("showbutton4").style.transform="translateY(236px)";
      document.getElementById("showbutton5").style.transform="translateY(236px)";
      document.getElementById("move1").style.transform="translateY(236px)";
      document.getElementById("move2").style.transform="translateY(236px)";
      document.getElementById("move3").style.transform="translateY(236px)";
  }
}
function onClickMenu5(){
    document.getElementById("menu").style.position="fixed";
    var y= document.getElementById("logo");
  
   
   var x =document.getElementById("Contents");
   if (x.style.display === "block") {
    x.style.display = "none";
    y.classList.add("adjustment");
    document.getElementById("ContentA").style.display="none";
    document.getElementById("showbutton5").style.transform="translateY(0px)";
    document.getElementById("move1").style.transform="translateY(0px)";
    document.getElementById("move2").style.transform="translateY(0px)";
    document.getElementById("move3").style.transform="translateY(0px)";

  } else {
      x.style.position="absolute";
      x.style.top="32 %";
      x.style.display = "block";
      y.classList.add("adjustment");
      document.getElementById("showbutton5").style.transform="translateY(166px)";
      document.getElementById("move1").style.transform="translateY(166px)";
      document.getElementById("move2").style.transform="translateY(166px)";
      document.getElementById("move3").style.transform="translateY(166px)";
  }
}

// 2.Javascript for navbar links 
document.getElementById("nav1").addEventListener('mouseenter', () =>{
    document.getElementById("parentB").style.display="block";
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("contentA").style.display="none";
    document.getElementById("Bar1").style.display="block";
    document.getElementById("Bar3").style.display="none";
    
})
document.getElementById("nav1").addEventListener('mouseleave', () =>{
    document.getElementById("Bar1").style.display="none";
})
document.getElementById("parentB").addEventListener('mouseenter', () =>{
    document.getElementById("Bar1").style.display="block";
})


document.getElementById("nav2a").addEventListener('mouseenter', () =>{
    document.getElementById("contentA").style.display="block";
    document.getElementById("parentB").style.display="none";
    document.getElementById("menu").classList.remove("icon");
    document.getElementById("content").style.display="none";
    document.getElementById("Bar2").style.display="block";
    document.getElementById("Bar3").style.display="none";
})
document.getElementById("nav2a").addEventListener('mouseleave', () =>{
    document.getElementById("Bar2").style.display="none";
})
document.getElementById("contentA").addEventListener('mouseenter', ()=>{
  document.getElementById("Bar2").style.display="block";
})

document.getElementById("contentA").addEventListener('mouseleave', () =>{
  setTimeout(() => {
    document.getElementById("contentA").style.display="none";
    document.getElementById("Bar1").style.display="none";
    document.getElementById("Bar2").style.display="none";
}, 500);
})

document.getElementById("nav5a").addEventListener('mouseenter', () =>{
  document.getElementById("contentA").style.display="none";
  document.getElementById("content").style.display="block";
  document.getElementById("parentB").style.display="none";
  document.getElementById("menu").classList.remove("icon");
  document.getElementById("Bar3").style.display="block";
})
document.getElementById("content").addEventListener('mouseleave', () =>{
  setTimeout(() => {
    document.getElementById("content").style.display="none";
    document.getElementById("Bar3").style.display="none";
}, 500);
})


// 3.javascript for keeping the navbar fixed

window.onscroll = function(){Fixed()};
var fixednav = document.getElementById("navbar");
var pos= fixednav.clientHeight;
function Fixed(){
  if (window.scrollY>pos){
    fixednav.classList.add("fixed1");
    fixednav.classList.add("Animation");
    document.getElementById("parentB").style.top="100%";
    document.getElementById("contentA").style.top="100%";
    document.getElementById("content").style.top="100%";
    document.getElementById("section1").style.marginTop="70px";
    document.getElementById("Bar3").style.right="160px";
  }
  else{
    fixednav.classList.remove("fixed1");
    fixednav.classList.remove("Animation");
    document.getElementById("parentB").style.top="9%";
    document.getElementById("contentA").style.top="9%";
    document.getElementById("content").style.top="9%";
    document.getElementById("section1").style.marginTop="0px";
    document.getElementById("Bar3").style.right="145px";
  }
}

// 4. for changing the images at bottom(since i don't know about path)
document.getElementById('e').addEventListener('mouseenter', () =>{
  document.getElementById('img1').src="images/replace1.png" ;   
})
document.getElementById('e').addEventListener('mouseleave', () =>{
  document.getElementById('img1').src="images/q.png";
})
document.getElementById('f').addEventListener('mouseenter', () =>{
  document.getElementById('img2').src="images/replace2.png" ; 
})
document.getElementById('f').addEventListener('mouseleave', () =>{
  document.getElementById('img2').src="images/web2.png" ;
})
document.getElementById('g').addEventListener('mouseenter', () =>{
  document.getElementById('img3').src="images/replacement3.png" ; 
})
document.getElementById('g').addEventListener('mouseleave', () =>{
  document.getElementById('img3').src="images/community2.png";
})

