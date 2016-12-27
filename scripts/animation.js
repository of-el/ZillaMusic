function move() {
 	var elem = document.getElementById("logo");   
  var posx = -200;
  var posy = 0;
  var degrees = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (posx > 525) {
      if (posy == 2000) { 
    	 posx = 200;
    	 posy = 0;
        clearInterval(id);
        elem.remove(0);
      } else {
    		  posy+=10; 
      	  elem.style.top = posy + 'px';
      	  degrees++;
      	  if (degrees == 360) {
      		  degrees = 1;
      	  }
      	  elem.style.transform = "rotate("+degrees+"deg)";
      	  elem.width = (elem.width - posy) + "px";
    	  }
    } else {
        posx++; 
        elem.style.left = posx + 'px'; 
        degrees++;
        if (degrees == 360) {
      	  degrees = 1;
        }
        elem.style.transform = "rotate("+degrees+"deg)";
    }
  };
}