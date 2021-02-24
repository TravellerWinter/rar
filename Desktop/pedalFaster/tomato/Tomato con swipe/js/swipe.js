// codice per swipe

if (window.safari) {
	history.pushState(null, null, location.href);
	window.onpopstate = function (event) {
		history.go(1);
	};
}

var index = 0; 
var prova = document.getElementsByClassName("prova");
var myDiv = prova[0];
var myDivW = myDiv.offsetWidth;
var myDivH = myDiv.offsetHeight;
var bodyWidth = $(window).width() / 2;
var bodyHeight = $(window).height() / 2;
var touchStart = 0;
var touchEnd = 0;
var predecessor;
var post;
var provaL = prova.length; 
var provaLAttuale = provaL - 1;   // Lunghezza reale partendo da 0
var NumberNV;
var innerHeight1 = (innerHeight / 2) + 100;
var sett = innerHeight * 0.7;  // 40%: lo spazio non occupato da #content; a cui si aggiunge il 30%, cioè la meta di #content 
var ott = innerHeight * 0.6;   // grandezza elemento #content
var ittPerc = ott * 0.7;  // grandezze myDiv proporzionate a #content

// Impostazione grandezze myDiv

myDiv.style.width = ittPerc + "px";
myDiv.style.height = ittPerc + "px";

// Centramento myDiv

myDiv.style.left = bodyWidth - (ittPerc / 2) + "px";
myDiv.style.top = sett - (ittPerc / 2) + "px";

// Listener di eventi

myDiv.addEventListener("touchmove", touchMove);
myDiv.addEventListener("touchstart", touchStarted);
myDiv.addEventListener("touchend", touchEnded);

// Controllo successione elementi 

function setAttributes(u) {

	myDiv = prova[u + 1];
	var pre = prova[u];
	


	switch (u + 1) {

		case prova.length:
			myDiv = prova[0];
			myDiv.style.width = ittPerc + "px";
			myDiv.style.height = ittPerc + "px";
			myDiv.addEventListener("touchmove", touchMove);
			myDiv.addEventListener("touchstart", touchStarted);
			myDiv.addEventListener("touchend", touchEnded);
			myDiv.removeAttribute("class");
			myDiv.style.left = (innerWidth / 2) - (ittPerc / 2) + "px";
			myDiv.style.top = sett - (ittPerc / 2) + "px";
			myDiv.setAttribute("class", "prova slide-in-right");
			// pre
			pre.removeEventListener("touchmove", touchMove);
			pre.removeEventListener("touchstart", touchStarted);
			pre.removeEventListener("touchend", touchEnded);
			pre.removeAttribute("class");
			pre.setAttribute("class", "prova slide-out-left");
			break;

		default:
			myDiv.style.width = ittPerc + "px";
			myDiv.style.height = ittPerc + "px";
			myDiv.addEventListener("touchmove", touchMove);
			myDiv.addEventListener("touchstart", touchStarted);
			myDiv.addEventListener("touchend", touchEnded);
			myDiv.removeAttribute("class");
			myDiv.style.left = (innerWidth / 2) - (ittPerc / 2) + "px";
			myDiv.style.top = sett - (ittPerc / 2) + "px";
			myDiv.setAttribute("class", "prova slide-in-right");
			// pre
			pre.removeEventListener("touchmove", touchMove);
			pre.removeEventListener("touchstart", touchStarted);
			pre.removeEventListener("touchend", touchEnded);
			pre.removeAttribute("class");
			pre.setAttribute("class", "prova slide-out-left");
			break;

    }
	
}

function setAttributesRight(i) {
	
	var pre;
	
	

	switch (i - 1) {
		
		case -1:
			pre = prova[i];
			myDiv = prova[provaLAttuale];
			myDiv.style.width = ittPerc + "px";
			myDiv.style.height = ittPerc + "px";
			myDiv.addEventListener("touchmove", touchMove);
			myDiv.addEventListener("touchstart", touchStarted);
			myDiv.addEventListener("touchend", touchEnded);
			myDiv.removeAttribute("class");
			myDiv.style.left = (innerWidth / 2) - (ittPerc / 2) + "px";
			myDiv.style.top = sett - (ittPerc / 2) + "px";
			myDiv.setAttribute("class", "prova slide-in-left");
			// pre
			pre.removeEventListener("touchmove", touchMove);
			pre.removeEventListener("touchstart", touchStarted);
			pre.removeEventListener("touchend", touchEnded);
			pre.removeAttribute("class");
			pre.setAttribute("class", "prova slide-out-right");
			break;
		case 6:
			myDiv = prova[i - 1];
			myDiv.style.width = ittPerc + "px";
			myDiv.style.height = ittPerc + "px";
			pre = prova[0];
			myDiv.addEventListener("touchmove", touchMove);
			myDiv.addEventListener("touchstart", touchStarted);
			myDiv.addEventListener("touchend", touchEnded);
			myDiv.removeAttribute("class");
			myDiv.style.left = (innerWidth / 2) - (ittPerc / 2) + "px";
			myDiv.style.top = sett - (ittPerc / 2) + "px";
			myDiv.setAttribute("class", "prova slide-in-left");
			// pre
			pre.removeEventListener("touchmove", touchMove);
			pre.removeEventListener("touchstart", touchStarted);
			pre.removeEventListener("touchend", touchEnded);
			pre.removeAttribute("class");
			pre.setAttribute("class", "prova slide-out-right");
			break;
		default:
			myDiv = prova[i - 1];
			myDiv.style.width = ittPerc + "px";
			myDiv.style.height = ittPerc + "px";
			pre = prova[i];
			myDiv.addEventListener("touchmove", touchMove);
			myDiv.addEventListener("touchstart", touchStarted);
			myDiv.addEventListener("touchend", touchEnded);
			myDiv.removeAttribute("class");
			myDiv.style.left = (innerWidth / 2) - (ittPerc / 2) + "px";
			myDiv.style.top = sett - (ittPerc / 2) + "px";
			myDiv.setAttribute("class", "prova slide-in-left");
			// pre
			pre.removeEventListener("touchmove", touchMove);
			pre.removeEventListener("touchstart", touchStarted);
			pre.removeEventListener("touchend", touchEnded);
			pre.removeAttribute("class");
			pre.setAttribute("class", "prova slide-out-right");
			break;
    }

}



// funzioni dei listener

function touchMove(event) {
	var touch;
	if (event.targetTouches.length == 1) {
		touch = event.targetTouches[0];
		var pageX = touch.pageX;
		myDiv.style.left = (pageX - ittPerc / 2) + "px";

		
	}

}

function touchStarted(e) {
	if (e.targetTouches.length == 1) {
		var target = e.targetTouches[0];
		touchStart = target.pageX;
		// console.log(touchStart + "start");
	}

}

function touchEnded(e) {
	touchEnd = myDiv.offsetLeft;
	
	if (touchEnd - touchStart < 0) {
		
		
		if (index >= prova.length) {
			index = 0;
			setAttributes(0);
			index = index + 1;
		} else {
			setAttributes(index);
			index = index + 1;
		}

		console.log(index);

	} else {
		
		
		if (index < 0) {
			index = 6;
			setAttributesRight(6);
			index = index - 1;
		} else {
			if (index === 0) {
				setAttributesRight(0);
				index = provaLAttuale;
			} else {
				
					setAttributesRight(index);
					index = index - 1;
                
                
            }
			
		}

		
	}

}




console.log(NumberNV);