function preload()
{}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 222, 134, 163, 207);

    fill(255, 204, 0);
    ellipse(210, 120, 40, 60);
     ellipse(400, 120, 40, 60);
     ellipse(210, 340, 40, 60);
     ellipse(400, 340, 40, 60);
   fill(255, 0, 0)
     rect(227, 105, 155, 30);
     rect(227, 325, 155, 30);
     rect(195, 143, 30, 175);
     rect(385, 143, 30, 175);
   fill(255, 204, 0);
     circle(210, 226, 45);
     circle(400, 226, 45);
     circle(307, 117, 45);
     circle(307, 339, 45);
}

function save_picture()
{
    save('framed photo.png');
}