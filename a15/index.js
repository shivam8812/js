var x=0;


function increment(){
    x++;


switch(x){
    
    case 0:
    document.getElementById("image1").src="1.png";
    break;

    case 1:
    document.getElementById("image1").src="2.png";
    break;

    case 2:
    document.getElementById("image1").src="3.png";
    break;

    case 3:
    document.getElementById("image1").src="4.png";
    break;

    case 4:
        x=3;
        break;
}
}

function decrement(){
    x--;


switch(x){
    
    case -1:
        x=0;
        break;
    
    case 0:
    document.getElementById("image1").src="1.png";
    break;

    case 1:
    document.getElementById("image1").src="2.png";
    break;

    case 2:
    document.getElementById("image1").src="3.png";
    break;

    case 3:
    document.getElementById("image1").src="4.png";
    break;
}
}

