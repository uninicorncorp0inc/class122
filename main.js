x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
var radius;


//1. Set the speech to text API by adding a variable named SpeechRecognition:
var SpeechRecognition = window.webkitSpeechRecognition;


var recognition = new SpeechRecognition();


function start()
{
   document.getElementById("status").innerHTML = "System is listening please speak";
   recognition.start();
}
//2. Set the function that will display the result on the HTML page:
 recognition.onresult = function(event)      {


console.log(event);


//3. Declare the content varible to set the result of the transcript:
 var content = event.results[0][0].transcript;


 console.log(content);




  document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    
     //4. Set a condition if the content is Circle
     if( content == "Circle"  )
     {
       //5. Set a random number for the x and y coordinate to place the circle to be drawn:
       x = Math.floor(Math.random() * 800 );
       y = Math.floor(Math.random() * 600 );
       radius = Math.floor(Math.random() * 300 );
      

       //6. Set "Started drawing circle" as the text for the "status" label:
      
       document.getElementById("status").innerHTML = "Starting to draw a circle";


       draw_circle = "set"; 
       draw();
     }


     //7. Set the condition for the rectangle:
     if(  content == "rectangle"  )
     {
       x = Math.floor(Math.random() * 900);
       y = Math.floor(Math.random() * 600);
       document.getElementById("status").innerHTML = "Started drawing rectangle ";
       draw_rect = "set";
     }
}


//8. Declare the function setup to create a canvas of 900 px width and 600 px height:
  
function setup(){
 canvas = createCanvas(900,600);
}




function draw() {


 if(draw_circle == "set")
 {
   //9. Declare the radius variable to set the size of the circle to be drawn:
    radius = Math.floor(Math.random()* 200) ;


   //10. Use the circle method to place the circle on the canvas
    circle(x,y,radius);


   //11. Set "Circle is drawn." as the text for the "status" label:
   document.getElementById("status").innerHTML = "Circle is drawn";
  
   draw_circle = "";
 }


 if(draw_rect == "set")
 {
   //12. Use the rect method to place the rectangle on the canvas
   rect(x,y,radius,100);
  


   //13. Set "Rectangle is drawn." as the text for the "status" label:
   document.getElementById("status").innerHTML = "Rectangle is drawn";
  
   draw_rect = "";
 }


}


