
		//Types checks;

			/*
					check if it is a strings 

			*/

			console.log('......::........::.........::........::...... types checks ......::........::.........::........::');

			var typesChecks = {
					setValue:function(value){
						this.value = value || "string value";

						//do checks 
						console.log( '\n'+'\n'+'...... check strings .......' );
						this.strings.typeof_var();
						this.strings.isNaN();
						console.log( '...... check strings .......' );

						console.log( '\n'+'\n'+'...... check numbers .......' );
						this.integers.typeof_var();
						this.integers.isInteger();
						console.log('...... check numbers .......');

						console.log( '\n'+'\n'+'...... check boolean .......' );
						this.booleanValue.typeof_var_true();
						this.booleanValue.typeof_var_false();
						this.booleanValue.if_defined();
						console.log('...... check boolean .......');

						console.log( '\n'+'\n'+'...... check array .......' );

						this.array.isArray();
						this.array.variable_constructor();
						this.array.instanceof_Array();
						

						console.log('...... check array .......');




					},
					strings: {
						typeof_var:function(){
							if(typeof typesChecks.value === 'string') {
								console.log('typeof value === "string" '+' for '+ typesChecks.value + ' is: ' + (typeof typesChecks.value === 'string').toString());
							}
						},
						isNaN:function(){
							if( isNaN(typesChecks.value) ) {
								console.log('isNaN(value) '+' for '+ typesChecks.value + ' is: ' + isNaN(typesChecks.value).toString() );
							}
						}

					},
					integers:{
						typeof_var:function(){
							// typesChecks.value === 'number'
								console.log('typeof value === "number" '+' for '+ typesChecks.value + ' is: ' + (typeof typesChecks.value === 'number').toString());
							
						},
						isInteger:function(){

							// Number.isInteger(typesChecks.value)

									console.log('Number.isInteger(typesChecks.value) '+' for '+ typesChecks.value + ' is: ' + Number.isInteger(typesChecks.value).toString() );
								
						}
					},
					booleanValue:{
						typeof_var_true:function(){
							// typesChecks.value === 'number'
								console.log('typeof value === "boolean" '+' for '+ typesChecks.value + ' is: ' + (typeof typesChecks.value === 'boolean').toString());
							
						},
						typeof_var_false:function(){
							// typesChecks.value === 'number'
								console.log('typeof value === "boolean" '+' for '+ typesChecks.value + ' is: ' + (typeof typesChecks.value === 'boolean').toString());
							
						},
						if_defined:function(){

							// Number.isInteger(typesChecks.value)
							if(typesChecks.value===true){
									console.log(' if(typesChecks.value===true) '+' for '+ typesChecks.value + ' is: true'  );
							}else {
									console.log(' if(!typesChecks.value) '+' for '+ typesChecks.value + ' is: false'  );
							}

								
						}
					},
					array:{
						isArray:function(){
							// Array.isArray(obj)
								console.log('Array.isArray(obj)" '+' for '+ typesChecks.value + ' is: ' + (Array.isArray(typesChecks.value)).toString());
							
						},
						variable_constructor:function(){

							// variable.constructor == Array

									console.log('variable.constructor === Array '+' for '+ typesChecks.value + ' is: ' + (typesChecks.value.constructor === Array).toString() );
								
						},
						instanceof_Array:function(){

							// variable.constructor == Array

									console.log('variable instanceof Array '+' for '+ typesChecks.value + ' is: ' + (typesChecks.value instanceof Array).toString() );
								
						}
					},
			};

			//execute checks 

			typesChecks.setValue();
		   console.log('......::........::.........::........::...... types checks ......::........::.........::........::');
