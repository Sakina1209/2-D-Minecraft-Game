var can_object = new fabric.Canvas('myCanvas') ;

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png" , function(Img) {
        player_object = Img; 
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(135);
        player_object.set({
            top: player_y , 
            left: player_x 
        });
        can_object.add(player_object);
    }) ;

    
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image , function(Img) {
        block_img_object = Img; 
        block_img_object.scaleToWidth(block_width);
        block_img_object.scaleToHeight(block_height);
        block_img_object.set({
            top: player_y , 
            left: player_x 
        });
        can_object.add(block_img_object);
    }) ;

    
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){ 

    var keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == 80) {

        console.log("p and shift key pressed together");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && keypressed == '77'){

        console.log("m and shift key pressed together");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;

    }

    if (keypressed == '32'){
        can_object.remove(block_img_object);
        console.log("space is pressed");
    }

    if (keypressed == '38'){

        up();
        console.log("up is pressed"); 
    }

    if (keypressed == '40'){

        down();
        console.log("down is pressed");
    }

    if (keypressed == '37'){

        left();
        console.log("left is pressed");
    }

    if (keypressed == '39'){

        right();
        console.log("right is pressed");
    }

    if(keypressed == '67'){
        new_image ("cloud.jpg");
        console.log("c is pressed");
    }
    
    if(keypressed == '68'){
        new_image  ("dark_green.png");
        console.log("d is pressed");
    }

    if(keypressed == '71'){
        new_image ("ground.png");
        console.log("g is pressed");
    }

    if(keypressed == '76'){
        new_image ("light_green.png");
        console.log("l is pressed");
    }

    if(keypressed == '82'){
        new_image ("roof.jpg");
        console.log("r is pressed");
    }

    if(keypressed == '84'){
        new_image ("trunk.jpg");
        console.log("t is pressed");
    }

    if(keypressed == '85'){
        new_image ("unique.png");
        console.log("u is pressed");
    }

    if(keypressed == '87'){
        new_image ("wall.jpg");
        console.log("w is pressed");
    }

    if(keypressed == '89'){
        new_image  ("yellow_wall.png");
        console.log("y is pressed");
    }
    
}

function up() {
    if (player_y >= 0){

    player_y = player_y - block_height;
    console.log("block_height = " + block_height);
    console.log("When up arrow key is pressed  x =" + player_x  + "y = " + player_y)
    can_object.remove(player_object);
    player_update();
    }
}

function down(){

    if(player_y <= 500){
        player_y = player_y + block_height;
        console.log("block_height = " + block_height);
        console.log("When up arrow key is pressed  x =" + player_x  + "y = " + player_y)
        can_object.remove(player_object);
        player_update();
    }
}

function left(){

    if(player_x >= 0){
        player_x = player_x - block_width;
        console.log("block_width = " + block_width);
        console.log("When up arrow key is pressed  x =" + player_x  + "y = " + player_y)
        can_object.remove(player_object);
        player_update();
    }
}

function right(){

    if(player_x <= 850){
        player_x = player_x + block_width;
        console.log("block_width = " + block_width);
        console.log("When up arrow key is pressed  x =" + player_x  + "y = " + player_y)
        can_object.remove(player_object);
        player_update();
    }
}