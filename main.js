var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height= 30;
player_x=10;
player_y=10;
player_object="";
block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
    canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.FromURL(get_image,function(img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", mykeydown);

 function mykeydown(e){

    KeyPressed = e.KeyCode;
    console.log("KeyPressed");
     if (e.shiftKey ==true && KeyPressed =='80'){
 console.log("p and shift pressed together")
 block_image_width = block_image_width + 10;
 block_image_height=block_image_height + 10;
 document.getElementById("width").innerHTML = block_image_width;
 document.getElementById("height").innerHTML = block_image_height;
     }
     if (e.shiftKey ==true && KeyPressed =='77'){
        console.log("m and shift pressed together")
        block_image_width = block_image_width - 10;
        block_image_height=block_image_height - 10;
        document.getElementById("width").innerHTML = block_image_width;
        document.getElementById("height").innerHTML = block_image_height;
            }
            if(KeyPressed=='38'){
                Up();
console.log("up");
            }
            if(KeyPressed=='40'){
                Down();
console.log("Down");
 }

if(KeyPressed=='37'){
    Left();
console.log("Left");

 }

 if(KeyPressed=='39'){
    Right();
console.log("Right");

 }
 if(KeyPressed=='87'){
    new_image('wall.jpg');
console.log("w");
  }
  if(KeyPressed=='71'){
    new_image('ground.png');
console.log("71");
 }
 if(KeyPressed=='76'){
    new_image('light_green.png');
console.log("l");
 }
 if(KeyPressed=='84'){
    new_image('trunk.jpg');
console.log("t");
 }
   }