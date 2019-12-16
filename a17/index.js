var myWindow;
var myWindow2;
var myWindow3;
var myWindow4;
var myWindow5;
var myWindow6;
var x1=Math.random()*1000;
var x2=Math.random()*1000;

function openWin() {
  myWindow = window.open("https://www.google.com/", "myWindow","height=100, width=100,top=0,left=0");
  myWindow2 = window.open("https://www.google.com/", "myWindow2","height=100, width=100,top=1000px,left=0");
  myWindow3 = window.open("https://www.google.com/", "myWindow3","height=100, width=100,top=0,left=1000px");
  myWindow4 = window.open("https://www.google.com/", "myWindow4","height=100, width=100,top=300px,left=500px");
  myWindow5 = window.open("https://www.google.com/", "myWindow5","height=100, width=100,top=1000px,left=1000px");
  myWindow6 = window.open("https://www.google.com/", "myWindow6","height=100, width=100,top=x1px,left=x2px");
}

function closeWin() {
  myWindow.close();
}