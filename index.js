var num_of_drum= document.querySelectorAll(".drum").length;

for(var i=0; i<num_of_drum; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  // {alert("I got clicked"); }
  // {  this.style.color="white";}
    var buttonClicked = this.innerHTML ;
// alert(buttonClicked);
  makesound(buttonClicked);
  butttonAnimation(buttonClicked);
  } );
}
 document.addEventListener("keypress", function(event){
  // var button_pressed= event.key;
  // makesound(button_pressed);
  makesound(event.key);
  butttonAnimation(event.key);
  });



function makesound(key)
{
  switch (key) {
  case "w":
    var crash= new Audio("sounds/crash.mp3");
    crash.play();
      break;

    case "a":
      var kick= new Audio("sounds/kick-bass.mp3");
      kick.play();
        break;

    case "s":
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
          break;

    case "d":
        var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;

      case "j":
          var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;


      case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

      case "l":
              var tom4= new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;

    default: console.log(buttonClicked);
  }
}

function butttonAnimation(curr_key){
 var activeButton= document.querySelector("." + curr_key);
 activeButton.classList.add("pressed");

 setTimeout(function(){
   activeButton.classList.remove("pressed");
 })
}
