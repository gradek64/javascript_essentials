

	var stats = (function(){


		//cache Dom 
		var show_stats_$el = $('#show_stats');
		var _score;


		function _render(){
			show_stats_$el.html(_score);
			console.log(_score);
		}
		//no need to render cause stats depends on main_add_people.js file
		//_render();



		function sendStats(score){
					//array is being sent but in for the stats module you need array.length;
			_score = score.length;
			_render();
		}	


		//expose sendStands method to outside World only;
		/*return {
			sendStats:sendStats
		}*/

			//no need for API couse we will use dispatch_event object instead;

			dispatch_event.on('peopleChanged',sendStats);

	})();