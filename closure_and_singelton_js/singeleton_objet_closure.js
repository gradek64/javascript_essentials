//**********************************Object Singelton with Closure*************************

				/***   Singeleton ***/
								//it is an Object that returns object in self executing function it doent not requre new Object contructor;

				/**** Closure ****/

						//What this means is that an inner function always has access to the vars and parameters of its outer function;
					

				console.log('********************** Object Singelton with Closure **********************');
				
				//this is simple object with property and method;
				var checker = { 

					checker:function(checker){ //to access this methods you need to call object checker first;

						//in here you can create new method and properties that going to be on the same level as extra_prperty;
						this.check = checker;
						this.newProperty = "new property";

							return this;
					},

					//this will add extra property to the above;
					extra_property:"this is an extra property"
				};

				//checker = {method:function( arg ){ this.cretesEnviroment}, property: 'this.can_not_be_assigned_here' };



				console.log(checker.checker('set_me_please'));
				console.log('checker.check()');


				//Object can be also assigned in self_executing funciton;
				var argObject = {};







					/**** Closure ****/



				//redefined checker in self executing function; (and CLOSURE at the same time)
				var checker = (function() { 


					//extra property that doesnt belong to the checker;
					this.not_connected_to_checker_but_window = "not_connected_to_checker2";
					argObject.property = 'attached to argObject';
					//this value can not be accessed anywhere outside;
					var closure_prop = 'this is inside self-executing closure'; //throws error if console.log(closure_prop); or undifined if console.log(this.closure_prop);


					return {
							checker:function(checker){ //to access this methods you need to call object checker first;

								//in here you can create new method and properties that going to be on the same level as extra_prperty;
								this.check = checker;
								this.newProperty = "new property2";

								return this;
							},

							//this will add extra property to the above;
							extra_property:"this is an extra property2",
							redefined_property:"object property added"
					}
				})();

				console.log(checker.checker('set_me_please2'));
				console.log(not_connected_to_checker_but_window);//connceted to window;
				console.log(argObject.property);
				console.log('checker.check()');



			   //2 **********************************  Object Singelton as Class with Closure    *************************


								var instance = (function(){


									/*
												ASSIGNING PRIVATE METHODS AND PROPERTIES IN CONSTRUCTOR;
									*/

									//it is possible to create 'private' method and properties inside insctrutor , they not really private in old javascript (before ES6)
									//simply the way around it;
									var private_property= "is private";
									
									//inside 'private' function this loses its scope it has been fixed in ES6;
									var that = this;

									





									// Class constructor; (in the scope of instance);

									function Card(set){ //this belongs to the Card Class scope;


											this.prop = "this from instance:  :"+set;
											this.notPrivate = 'this is not private',
											this.method = function(){
												return this.prop;	
											},
											this.checkProperty = function(){
												return privileged_method();
											}

										}


										//attach to top Constructor only allowed
										Card.prototype.callMe = function(){ //prototype is allways attached to the CLASS not and instance of the Class

											this.classProperty = "this is Class prototype property";
														

											return this; //even in 
										}


										/*
													
													A privileged method;
											
										*/

										//A privileged method is able to access the private variables and methods, 
										//and is itself accessible to the public methods and the outside.
										function privileged_method(){
											var result;
												return set == 1 ? result = private_property : result = that.notPrivate;
										
										}


					/*****************************/


								//This is only what object instance returns back;
										return {

											//expose createNew method that creates a new class;
				        					createNew: function(set) { //you can pass agrument and will be attached to class;
				            				return new Card(set);
				        				}

				    /*****************************/    					


				    			};


								})();

								console.log('......................instance...........................');

													var instance1 = instance.createNew(1);
													var instance2 = instance.createNew(2);

												
													console.log("Singeleton as new Class");
													console.log(instance1.method());
													console.log(instance1);
													console.log(instance2.method());
													console.log('prototype method on instance2 ');
													console.log(instance2.callMe());
													console.log("this.checkProperty if private or public");
													console.log(instance1.checkProperty());
													console.log(instance2.checkProperty());




								console.log('......................instance ...........................');






