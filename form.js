class Form{
    constructor(){

    }
    display(){
     var title = createElement("h2");
     title.html("Car Racing Game");
     title.position(130,0);
     var input = createInput("name");
     input.position(150,200);
     var button = createButton("play");
     button.position(250,250);
     var greeting = createElement("h3");
     button.mousePressed(function (){
         input.hide();
         button.hide();
         var name = input.value();
         playerCount = playerCount + 1;
         player.update(name);
         player.updateCount(playerCount);
         greeting.html("Hello, this a good game so get ready to play" + name);
         greeting.position(200,200);
     })
    }
}
