// // var container = document.querySelector("#container");
// // container.addEventListener("click",function(){
// // container.classList.toggle("flipme");
// // });
// var containers = document.getElementsByClassName("container");
// var i = 2;
// document.addEventListener('keyup', function (e) { 	
// if (e.key == "ArrowRight")
// 	{
// containers[i].classList.toggle("moveme");
// i--;
// 	}
// 		if (e.key == "ArrowLeft")
// 		{
// 			i++;
// containers[i].classList.toggle("moveme");

// 	}
// })
// var the_learning_screen = document.getElementsByClassName("the_learning_screen");
// // for (var j = 0; j < containers.length; j++) {
// the_learning_screen[0].addEventListener("click",function(){
// this.classList.toggle("flipme");
// });

// // }
var containers = document.getElementsByClassName("container");

for (var j = 0; j < containers.length; j++) {
containers[j].style.display = "none";
containers[j].addEventListener("click",function(){
this.classList.toggle("flipme");
});
}
containers[4].style.display = "inline";
var i = 4;
document.addEventListener('keyup', function (e) { 	
if (e.key == "ArrowUp")
{
	containers[i].classList.toggle("flipme");
}

	});


document.addEventListener('keyup', function (e) { 	
if (e.key == "ArrowRight")
	{
if (i == 0)
{
    
}
else if (i > 0)
{ 
	containers[i].classList.toggle("moveme");
	containers[i-1].style.display = "inline";
    i--;

}
	}
		if (e.key == "ArrowLeft")
		{
			if (i < 0)
			{
				containers[0].classList.toggle("moveme");
				i = 0;
			}
			else if (i == 0)
			{
				
               containers[1].classList.toggle("moveme");
               containers[0].style.display = "none";
               i = 1;
			}
			else if (i == 4)
			{

			}
			else{
			   
               containers[i+1].classList.toggle("moveme");
               containers[i].style.display = "none";
               i++;
            }
}


	
});