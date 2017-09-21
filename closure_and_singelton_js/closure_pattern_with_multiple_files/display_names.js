

	var display_names = (function(){


		//cache Dom 
		var show_names_$el = $('#showNames');
		var _names;


		function _render(){
			//empty it first just in case;
			show_names_$el.html(' ');
			//update with actual content;
			show_names_$el.html(_names);

		}
		//no need to render cause stats depends on main_add_people.js file
		//_render();



		function showNames(names){


			_names = names.join(" and ");
			
			/* score.map(function(item,key) {
			 	score =+ item 
			 })	*/		
			_render();
		}	


		//expose sendStands method to outside World only;
		/*return {
			sendStats:sendStats
		}*/

			//no need for API couse we will use dispatch_event object instead;

			dispatch_event.on('peopleChanged',showNames);

	})();