function mouseover1(){
    document.getElementById("image1").src="4.png";
}
function mouseout1(){
    document.getElementById("image1").src="1.png";
}

function mouseover2(){
    document.getElementById("image2").src="5.png";
}
function mouseout2(){
    document.getElementById("image2").src="2.png";
}

function mouseover3(){
    document.getElementById("image3").src="6.png";
}
function mouseout3(){
    document.getElementById("image3").src="3.png";
}

function mouseover4(){
    mouseover1();
    mouseover2();
    mouseover3();
}

function mouseout4(){
    mouseout1();
    mouseout2();
    mouseout3();
}