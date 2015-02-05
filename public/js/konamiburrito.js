$(document).ready(function() {

			Array.prototype.equals = function (array) {
			    // if the other array is a false value, return
			    if (!array)
			        return false;

			    // compare lengths - can save a lot of time 
			    if (this.length != array.length)
			        return false;

			    for (var i = 0, l=this.length; i < l; i++) {
			        // Check if we have nested arrays
			        if (this[i] instanceof Array && array[i] instanceof Array) {
			            // recurse into the nested arrays
			            if (!this[i].equals(array[i]))
			                return false;       
			        }           
			        else if (this[i] != array[i]) { 
			            // Warning - two different object instances will never be equal: {x:20} != {x:20}
			            return false;   
			        }           
			    }       
			    return true;
			}   

			function burritoInit() {
				//do stuff here
				//
				$('img').each(function() {
					$(this).attr('src', '/img/team/JamesLee.jpg');
				});
			}

			var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
			var yourInput = [];

			$(document).on('keydown', function(event) {
				yourInput.push(event.keyCode);
				if(yourInput.length > 11) {
					yourInput.shift();
				}
				console.log(yourInput);

				if(konamiCode.equals(yourInput)) {
					burritoInit();
				}
			});
		});