function dodawanie() 
{
	var xa = parseFloat(document.getElementById("dodawanie_xa").value);
	var ya = parseFloat(document.getElementById("dodawanie_ya").value);
	var xb = parseFloat(document.getElementById("dodawanie_xb").value);
	var yb = parseFloat(document.getElementById("dodawanie_yb").value);
	
	var x = xa + xb;
	var y = ya + yb;
	
	document.getElementById("dodawanie_x").innerHTML = "x: "+x;
	document.getElementById("dodawanie_y").innerHTML = "y: "+y;
}

function odejmowanie() 
{
	var xa = parseFloat(document.getElementById("odejmowanie_xa").value);
	var ya = parseFloat(document.getElementById("odejmowanie_ya").value);
	var xb = parseFloat(document.getElementById("odejmowanie_xb").value);
	var yb = parseFloat(document.getElementById("odejmowanie_yb").value);
	
	var x = xa - xb;
	var y = ya - yb;
	
	document.getElementById("odejmowanie_x").innerHTML = "x: "+x;
	document.getElementById("odejmowanie_y").innerHTML = "y: "+y;
}

function mnozenie() 
{
	var k = parseFloat(document.getElementById("czynnik").value);
	var x = parseFloat(document.getElementById("mnozenie_x").value);
	var y = parseFloat(document.getElementById("mnozenie_y").value);

	var kx = k*x;
	var ky = k*y;
	
	document.getElementById("kx").innerHTML = "x: "+kx;
	document.getElementById("ky").innerHTML = "y: "+ky;
}

function iloczyn() 
{
	var xa = parseFloat(document.getElementById("iloczyn_xa").value);
	var ya = parseFloat(document.getElementById("iloczyn_ya").value);
	var xb = parseFloat(document.getElementById("iloczyn_xb").value);
	var yb = parseFloat(document.getElementById("iloczyn_yb").value);
	
	var iloczyn = (xa*xb)+(ya*yb);
	
	document.getElementById("iloczyn").innerHTML = iloczyn;
}

function dlugosc() 
{
	var x = parseFloat(document.getElementById("dlugosc_x").value);
	var y = parseFloat(document.getElementById("dlugosc_y").value);
	
	var dlugosc = Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2));
	
	document.getElementById("dlugosc").innerHTML = dlugosc;
}

function ab() 
{
	var xa = parseFloat(document.getElementById("dlugosc_xa").value);
	var ya = parseFloat(document.getElementById("dlugosc_ya").value);
	var xb = parseFloat(document.getElementById("dlugosc_xb").value);
	var yb = parseFloat(document.getElementById("dlugosc_yb").value);
	
	var ab = Math.sqrt(Math.pow((xa-xb),2)+Math.pow((ya-yb),2));
	
	document.getElementById("ab").innerHTML = ab;
}