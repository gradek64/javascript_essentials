

// Object institination and inheritance with below patterns 


/*   Classical inheritance */

	//class_ = Musician 
	//super_class = Person 
	function inherits(class_, super_class){
		class_.super_ = super_class;
		class_.prototype = Object.create(super_class.prototype,{
			constructor:{
				value:class_,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	};

	var Person = function(name){
		//this = john ,bobby linked to object created;
		this.name = name;

	};

	Person.prototype.sayName = function(){
		console.log(this.name); //this reffers to Person Class;
	};

	Person.prototype.shoutName = function(){
		console.log(this.name); //this reffers to Person Class;
	};

	var john = new Person("john");
	var bobby= new Person("bobby");
		
	john.sayName();	 //john
	bobby.sayName(); //bobby;
	bobby.shoutName(); //bobby;



	//Musician Module( constructor ); that inherits from Parent Musician;

	var Musician = function(name,instrument){

		//call super class;
		Musician.super_.call(this,name); 
		//property name is inherited from Person , which is parent Class so super Class;
		this.instrument = instrument;
		//instrument belongs to Musician Class;

	};
	
	//Musician inherits from Person;
	inherits(Musician,Person);

	Musician.prototype.getInstrument = function(){
		console.log(this.name + " is playing "+this.instrument);
	};
	Musician.prototype.sayNickName = function(){
		console.log("I am Musician and my nickname is "+this.name); //this reffers to Person Class;
	};

	//override the shoutName method from Person;
	Musician.prototype.shoutName = function(){
		console.log("Musician says , yo my name is "+this.name); //this reffers to Person Class;
	};





	//initiate Musician class 
	var julia = new Musician('julia','guitar');
	julia.sayName(); //call method from Person Class
	julia.getInstrument();	//call its own method from Musician;
	julia.shoutName();	//call its own method from Musician so first looks in
	//his/hers method and then go up to the chain if it doesnt find;


	//delete Musician method that overrieds Person method, so only 
	//Person is going to be used for both classes due to inheritance;
	delete Musician.prototype.shoutName;
	julia.shoutName();	//call its own method from Musician so first looks in
	//his/hers method and then go up to the chain if it doesnt find;










/*   

			prototypal inheritance Object.create(object_to_inherit_from)

*/




	//simply create object 
	var human = {
		species:"human",
		//method for creating objects that is nested in root object that everyone else inherits from;
		createHuman:function(values){
						//create object and inherit from human which is root object;
			var instance = Object.create(this);
				Object.keys(values); //that will give U array of 
				//all properties and methods from values method;
				Object.keys(values).forEach(function(keys){
					instance[keys]= values[keys];
				});

			return instance;
		},
		saySpecies: function(){
			console.log(this.species);
		}

	}

	//Object create will create new Object and will inherits all methods
	//and properties from human in prototype object;
	var musician = human.createHuman({
		playInstruments:function(){
			console.log('Prototypal: musician says today I am playing'+this.equipment);
		}
	});
	
	//new object will inherit from musician and human; (chaining);
	//var will = Object.create(musician);
	var will = musician.createHuman({
		name:"Will",
		equipment:"Drums",
		coolMe:function(){
			console.log("Musicians are cool , especially "+ this.name);
		}
	});




	/**********/
		console.log("......prototypal Inheritance......Object.create(object_to_inherit_from)");

		//call human method from will
		will.saySpecies();
		//call musican method from will
		will.playInstruments();
		//call will method it is own method
		will.coolMe();

		console.log("objects");

		console.log(human);
		console.log(musician);
		console.log(will);


		console.log("......prototypal Inheritance......Object.create(object_to_inherit_from)");





	/****/


