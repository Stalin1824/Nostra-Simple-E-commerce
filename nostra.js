// Navbar Section
var order=document.querySelector(".order-1")
var order1=document.getElementById("order-2")
order1.addEventListener("click",function(){
     order.style.display="none"

})

var sideNavMenu=document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

// Slider Image

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

var leftbutton=document.getElementById("left")
var rightbutton=document.getElementById("right")
var sliderimage=document.querySelector(".sliderimages")
var slidermargin=0
rightbutton.addEventListener("click",()=>{
  slidermargin=slidermargin+100
 if(slidermargin>200){
    slidermargin=0
    sliderimage.style.marginLeft=0
}
else{
  sliderimage.style.marginLeft="-"+slidermargin+"vw"
 }


})
leftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)
