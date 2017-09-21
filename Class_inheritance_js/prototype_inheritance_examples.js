/*var myObject = function(name){


	var myObject_insider = function(name_inside){
		this.name = name_inside;
		console.log(this);
	};
	myObject_insider();
    this.name = name;
    return this;
};
 
console.log(typeof myObject.prototype); // object
 
myObject.prototype.getName = function(){
    return this.name;
};

console.log(myObject());
console.log(myObject() === window); // true



console.log(typeof myObject); // function


console.log(myObject instanceof Function); // true
console.log(myObject === Function); // false


var myInstance = new myObject('foo');
console.log(myInstance.__proto__ === myObject.prototype); // true


*/


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.fillStyle = "#FF0000";




var myCanvasWidth=300;
var myCanvasHeight = 300;
// define the GameObject constructor function
var GameObject = function(width, height) {
    this.x = Math.floor((Math.random() * myCanvasWidth) + 1);
    this.y = Math.floor((Math.random() * myCanvasHeight) + 1);
    this.width = width;
    this.height = height;
    return this;
};


// (re)define the GameObject prototype object
GameObject.prototype = {
    x: 0,
    y: 0,
    width: 5,
    height: 5,
    draw: function() {
    	
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

//you can update prototype as well; that means if you need to shape(draw) your object diffrently build star not dragon just update clever!
GameObject.prototype.draw = function() {
     ctx.beginPath();
     ctx.arc(this.x, this.y, this.width, 0, Math.PI*2, true);
	 ctx.stroke();
}


var x = 100,
arrayOfGameObjects = [];




//run GameLoop afer do while loop when you can costuct new GameObject();
 var GameLoop = function() {
    for(gameObject in arrayOfGameObjects) {
    	//console.log(arrayOfGameObjects);
       arrayOfGameObjects[gameObject].draw();
    }
};


do {
	var rangeSize = (Math.random()*10)+5 //between 5 and 15;
    arrayOfGameObjects.push(new GameObject(rangeSize, rangeSize));
    if(x==0)GameLoop(); //when you finish createing Game object draw them in GameLoop 
} while(x--);









