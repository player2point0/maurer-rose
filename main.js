function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    translate(window.innerWidth/2, window.innerHeight/2);
    clear();
    background(25);
    noFill();
    stroke(255, 255, 255);
    
    //drawRose(10,300);
    
    drawMaurerRose(ran(10000),ran(1000),300);
}

function ran(n)
{
    return Math.ceil(Math.random()*n);
}

function drawRose(_n,_scl)
{
    beginShape();

    for(var t = 0;t<TWO_PI;t+=0.01)
    {
        var r = Math.sin(_n * t);
        var x = _scl * r * Math.sin(t);
        var y = _scl * r * Math.cos(t);

        //stroke(map(r,-1,1,0,255), map(x,-500,500,0,255), map(y,-500,500,0,255));

        vertex(x, y);
    }

    endShape(CLOSE);
}

function drawMaurerRose(_n,_d,_scl)
{
    var theta = 0;
    var r;
    var t;
    var newX
    var newY;
    var oldX = 0;
    var oldY = 0;
    
    beginShape();

    do
    {
        theta += _d;

        if(theta >= 360) theta = theta % 360;
        
        x = radians((_n * theta) % 360);

        r = Math.sin(x);
        t = radians(theta);

        newX = r * Math.sin(t);
        newY = r * Math.cos(t);

        vertex(_scl * oldX,_scl * oldY);
        vertex(_scl * newX,_scl * newY);

        oldX = newX;
        oldY = newY;
    }
    while(theta != 0);

    endShape(CLOSE);
}
