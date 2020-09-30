
var cardcontainers = document.getElementsByClassName("cardcontainer");
console.log (cardcontainers.length);
   for (var kk = 0 ;kk < cardcontainers.length;kk++)
    {
    	console.log ("in");
     cardcontainers[kk].addEventListener("click",function(){
     this.classList.toggle("flipme");
    });
 }

