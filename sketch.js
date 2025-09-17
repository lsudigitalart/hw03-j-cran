function setup(){
createCanvas(windowWidth, windowHeight);
    noCursor();
}

function draw(){
    background(20,20,50);
    let redColour=color('rgba(107, 46, 46, 1)');
    let whiteColour=color('rgb(255,255,255');
    let randomRotation=random();
    //Cursor
    fill(whiteColour);
    ellipse(mouseX,mouseY,20);

    //Fish + When clicked
    for(let RepeatX=50; RepeatX<=10000; RepeatX=RepeatX+100){
        for(let RepeatY=30; RepeatY<=10000; RepeatY=RepeatY+90){
            if(mouseIsPressed === true){
                rotate(randomRotation);
            }
            fill(redColour);
            ellipse(RepeatX,RepeatY,60,30);
            triangle(30+RepeatX,RepeatY,40+RepeatX,20+RepeatY,40+RepeatX,RepeatY-20);
            fill(whiteColour);
            ellipse(RepeatX-10,RepeatY-3,10);
        }
    }


    // IN CLASS STUFF
    // for(let ellipseX; ellipseX<100; ellipseX=ellipseX+100){
    //     ellipse(ellipseX,ellipseX,50);
    // }

    // if(ellipseX>-1){
    //     ellipseX=ellipseX+1
    //     ellipse(ellipseX,ellipseX,50);
    // }


    // for(let n=0; n<1000; n=n+10){
    //     console.log(n);
    //     ellipse(n,height/2,mouseX);
    // } allowing interaction !!!!!
}