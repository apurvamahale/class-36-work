class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(150,20);

        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');

        input.position (170,70);
        button.position(190,90);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount + 1;


            greeting.html("Hello" + name );
            greeting.position(250,180);
            
        })


    }
}