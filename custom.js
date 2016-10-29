var up = true;
var size = 0;

function setSize(x)
{
 	document.getElementById("inner").style["box-shadow"] =  = "0 0 " + x + "px gray";   
}

function test() {
  setSize(size);
  if (size >= 100) up = false;
  if (size <= 0) up = true;
  if (up) size++;
  else size--;
  setTimeout(test, 5);
}

test();