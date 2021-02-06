var randomNumber1 = Math.floor(Math.random()*6);
var imgArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector("img.img1").setAttribute("src",imgArray[randomNumber1]);
var randomNumber2 = Math.floor(Math.random()*6);
document.querySelector("img.img2").setAttribute("src",imgArray[randomNumber2]);
var greater=0;
if(randomNumber1>randomNumber2)
{
    greater=1;
}
else if(randomNumber2>randomNumber1)
{
    greater=2;
}
if(greater!=0)
{
    var winner = "Player "+ greater +" wins!";
    document.querySelector("h1").textContent = winner;
}
else{
    document.querySelector("h1").textContent="It's a Tie!"
}