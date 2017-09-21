

/*
		this file is for registering events so other modules can listen for it

		register event
					//frist module
 					disdispatch_event.on("peopleChanged",eventHandler);
 					//second module 
 					disdispatch_event.on("peopleChanged",eventOtherHandler);

 */

 var dispatch_event = {
 		events:{

 			//this event object is going to be filled with array that contains events
 			//eg.
 			/*
 				poeplechange['eventHandler','eventOtherHandler'] //that would fill this array;

 			*/
 		},
 		on:function (eventType,callback) {
 			//eg: dispatch_event.on('peoppleChanged',eventHandler);
 			this.events[eventType] = this.events[eventType] || []; //no events by default so regiester empty array at the beggining;
 			//eg fill object : dispatch_event.peopleChanged = eventHandler;
 			this.events[eventType].push(callback);
 		},
 		off:function (eventType,callback) {
 			if(this.events[eventType]){
 				 for(var i=0;i<this.events[eventType].lenght;i++){

		 				if(this.events[eventType][i]==callback){
				 			this.events[eventType].splice(i,1);
				 			break;
		 					
		 				}
 				 }
 				
 			}
 		},
 			/*
				someone has to emit event with some data;

				events.emit('peopleChanged',3)
 			*/

 		emit:function (eventType,data) {
 			if(this.events[eventType]){ //event has to be regisered first;
 				//loop through event registerd for this array EventType;
 				this.events[eventType].forEach(function(event){

 							/*
								data = 3 
								['eventHandler','eventOtherHandler'];  data passed to evert element of array so every event registered for eventType;
								eventHanddler(3), eventOtherHandler(3);

 							*/
 						event(data);
 				});
 			}
 		}
 };