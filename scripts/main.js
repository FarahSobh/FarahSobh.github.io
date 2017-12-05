 /* var xx= "ahmed"
 var myHeading = document.querySelector('h1');
myHeading.textContent = xx+'Hello world!';  */

/* var MyHtml = document.querySelector("html");
MyHtml.onclick = function popup1() {alert("ouch, stop poking me!");}  */

var MyButton = document.querySelector("button");
var MyHeading = document.querySelector('h1');

	if(!localStorage.getItem('name'))
	{setUserName();}
	else 
	{ var StoredName= localStorage.getItem('name');
        MyHeading.textContent= StoredName + "'s profile" ;
		
	}
	 

MyButton.onclick = function() 
{setUserName() ;}

 function setUserName()
{
	
	var MyName = prompt("please enter your name");
     localStorage.setItem('name', MyName);
     MyHeading.textContent= MyName + "'s profile" ;
	
}

var MyImage = document.querySelector("img");
MyImage.onclick = function replaceImage() {
	var Mysrc = MyImage.getAttribute("src");
	if(Mysrc ==="images/emp.jpg" )
	{MyImage.setAttribute("src","images/empmonth.jpg") ;}
	else
	{MyImage.setAttribute("src","images/emp.jpg"); }
}

