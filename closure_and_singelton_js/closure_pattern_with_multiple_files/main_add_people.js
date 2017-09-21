/*

  			The idea is to expose only those methods and properties 
  			that are needed for outside 
  			World in htis case we need to expose only 

  						addPerson 
  						deletePerson


  			the rest should be hidden */

  				//start enclosed object that you would call outside;
  				var people = (function(){

  						//private method;
  		 				var people = ['Greg','Sarah'];

  		 				console.log(this);
				
				  		//cacheDom() 
				  		$el = $('#peopleModule-object')
				  		$button= $el.find('button');
				  		$input = $el.find('input');
				  		$ul = $el.find('ul');
				  		//set template here as well;
				  		template = $el.find('#people-template-object').html()

			  			//bind event to button 
			  			$button.on("click", addPerson );
			  			$ul.delegate("i.del","click", deletePerson );
			  			//events create is own scope so this will reffer to the element clicked
			  			//if you want to keep  poeple object scope you need to bind it first;

					  	function render(){
					  		//data object for mustache template;
					  		var data = {
					  			people:people,
					  		}
				  			$ul.html(Mustache.render(template,data));

				  			 		//send data to stats.js once add person 
				  					//stats.sendStats(people.length);

				  						//emit event instead (it has been registered alredy in diffent module);
				  						//it is better to send data as object and get listners to get from it what you need;
				  						dispatch_event.emit('peopleChanged',people);
				  						//both stats.js and display_names.js are listening for that event;


				  		};
				  		render();


				  		function addPerson(newPerson){
					  		//update template;
					  		var newPerson = (typeof newPerson!=="string") ? $input.val() : newPerson;
					  		people.push( newPerson );
					  		//rerender 
					  		render();
					  		//clear input field;
					  		$input.val('');



						};
						function deletePerson(event){

					  		var $remove = $(event.target).closest('li');
					  		var i = $ul.find('li').index($remove);

					  		people.splice(i,1);
					  		//rerender 
					  		render();

						}


					//only exposed method that you need to expose not everything, easy to hack ;
				  	return 	{
									addPerson:addPerson,
									deletePerson:deletePerson

							};

  					
  				})();