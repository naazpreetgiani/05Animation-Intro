//Animation Intro

//Setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

//Gloabal Variables
let rectX = 300;
let rectSize = 80;
let rectBlue = 255;
let rectRed = 0;

let animate = false;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  //Update Variables

  if (animate) {
    rectX += 1;
    rectSize += Math.random() * 2 - 1; // -1 to 1
    rectRed++;
  }

  //Draw a background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a Square
  ctx.fillStyle = "rgb(" + rectRed + ",0," + rectBlue + ")";
  ctx.fillRect(rectX, 150, rectSize, rectSize);

  requestAnimationFrame(loop);
}

//Event Stuff
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);
  if (event.code == "Space") {
    animate = !animate;
  }
}
