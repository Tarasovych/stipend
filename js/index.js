function GetValue()
{
    var myarray = new Array("Так","Ні","Можливо","ахахах","З твоїми мізками? Пфф","Наївний(-а)","Іди на роботу","Не заслужив(-ла)","А чому ви питаєте?");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("message").innerHTML=random;
};
//rand array element

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
  printMessage(document.getElementById("message").innerHTML,clicks);
};
//count clicks

function printMessage(random, clicks) {
  if (random === "Так") {
    document.getElementById("alert").innerHTML =
    "Серйозно? Аж з " + clicks + " разу!";
  }
}
//display "you get word1 after _ clicks"

function myFunction() {
    location.reload();
}
//reload