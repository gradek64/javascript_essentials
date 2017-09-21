			




				/*---------------    LOOPS ------------------*/





						/* content */



						/*
								FOR

							1. FOR loop  Diffrent types of for loop (multiply vars inside);
							2. FOR loop randomized array content; 	


								WHILE


									3 WHILE loop with break 
									4 WHILE loop with return in function;
									5 WHILE loop assigments;
									6 populate array with while loop
									7 concept of bolean check in a loop;

						*/




			/***

						multiple variables in for loop 

						those could be usefull for accessing deep into objects 


						YOU CAN SPECIFY MORE THAN one VAR in a FOR loop

				***/
					var i = 0, 
					    j = 1,
					    n = 4; 
					for (i,j,n; i < 50, n < 50; i = i + 3, j = j + 3, n = n + 3){
					  //console.log("variable i........: " + i);
					  //console.log("variable j.....: " + j);
					  //console.log("variable n..: " + n);
					  
					}

					//interaction down 
					// for(  var i = 10;  i>5 ; i--    ){}  prints numbers 10,9,8,7,6,
					// for(  var i = 10;  i ; i--    ){}  prints numbers 10,9,8,7,6,5,4,3,2,1 when you specify i then it knows that i reaches from 10 to the end (1);

					/*for(  var i = 10;  i ; i--    ){} this technique could be used in radomizding array data as below*/
					var cards = ["greg","mike","phila","patrick","nuno"];
					for(  var j, x, i = cards.length;      i  ;      j = parseInt(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x, n=j /*additional cause you can*/    ){
							//explanation 
							//   j = parseInt(Math.random() * i)  first find random number for every i interaction;  j = parseInt(Math.random() * 5) it will find from 0 to 4;
							//   x = cards[i--]  assign x to current interaction value (from 1 to 10);
							//   assign current interaction cards[i] = cards[j]      change current value to random value
							//   									cards[j] = x     change random to previous current;
							console.log("..........greg mike phila patrick nuno..............");
							console.log(cards[i]);
							console.log(x);
							console.log(cards[j]);
							console.log(cards);
					};








					 /*

						3.	while loop 

							is quite simple 
							set startting point 
							1. var = 0;
							2. while(any condition )
							3 interaction while(any condition ) { i++} or 
							4 interaction while(any condition i++ ){}

						*/



						/*
								any loop can be beak in any point by 'break' keyword;

						*/


						console.log("breaking loop at second item if(i==2) break;.............");
						var len = 5;
						while(len--){
							if(len==2) break;
							console.log(len);
						}
						console.log("breaking loop at second item if(i==2) break;.............");


						/*
								any loop that is within function body once return is TERMINATING loop;

						*/


						console.log("\n\n\n\n\n............returning loop at second item if(i==2) return;.............");
						var len = 5;
						var breakMe = function(){

							while(len--){
								if(len==2) return len;
								console.log(len);
							}
						}();
						console.log(breakMe);
						console.log(".............returning loop at second item if(i==2) return;.............\n\n\n\n\n")




					var i=0, item, items = ['one','two','three'];



							/*
									5 while loop assigment;

							*/
										 /*even item = "one" so it string but it is correct ! so javascript assumes is true , only when it gets to 
										item = items[3] so item = undefined then it says is wrong so sets it to false,
										bizzare but it is been commonly used
																								;*/
					while( item = items[i++]  ){         
						console.log('..........item.......');
					    console.log(items[i]);
					};

							/*
								 5a	while loop assigment;

							*/

					var items = ['one','two','three'], i = items.length;
					while(i--){
					    console.log(items[i]);
					}


					/*
							populate array till 5 
							
					*/

					var j=0,arrayP = [];

					while (arrayP.length<5){ //it is true before it gets to 5;
						arrayP.push(j++);

						console.log('arrayP');
						console.log(arrayP);
					}

					/*
						while with break;

					*/

					while (true){
    						console.log('Bye');
    						break;
					}

					var i = 0;

					do{
					   
					     console.log(i);
					    i++;

					} while(i < 5);
					

					//or while(item = items[i++]){ console.log(item) }; the same as above;


					//check if fhe value is defined,null, 0  it could be converted to false as boolean


					/*
							6. Everything in javascript that is undefined, null, "", empty string could be check against boolean true of false;
					*/

					//array of diffrent types;
					var difTypesArray = [1,0,"greg","mike",null,""];

						console.log('array ......[1,0,"greg","mike",null,""] is conveterd to bolean based of the find defined or undefined' );
					difTypesArray.map(function(item){
						//convert to boolean 
						console.log(item +"   opposite in boolean is: "+!item);
					})
						console.log('array ......[1,0,"greg","mike",null,""] is conveterd to bolean based of the find defined or undefined' );





						console.log('.^^^^^^^^^^^^^^^^^^^^^^^');
					var arr = [3, 5, 7];
					arr.foo = 'hello';

					for (var i in arr) {
					   console.log(i); // logs "0", "1", "2", "foo"
					}

					for (var i of arr) {
					   console.log(i); // logs 3, 5, 7
					}

					console.log('.^^^^^^^^^^^^^^^^^^^^^^^');

					




