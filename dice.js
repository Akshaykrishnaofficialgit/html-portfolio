var random_number1=(Math.floor(Math.random()*6))+1;
var randomDiceImage="dice"+random_number1+".png";
var randomDicepath="./images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDicepath);

var randomnumber2=(Math.floor(Math.random()*6))+1;
var dice_png_namer="dice"+randomnumber2+".png";
var dice_path_renamer="./images/"+dice_png_namer;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",dice_path_renamer);

var winner=document.querySelector("h1");
if(random_number1>randomnumber2){
   
    winner.innerHTML="Player1 wins";
}
else if(random_number1==randomnumber2){
    
    winner.innerHTML="it's a draw!";
}
else{
    
    winner.innerHTML="Player2 wins";
}

