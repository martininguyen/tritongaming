var source = $("#officer").html();
var template = Handlebars.compile(source);

var data = {
    officers: [ {
	          imgsrc: {"img/team/KevinHe.jpg"} ,
			  name: "Kevin He" ,
			  position: "Chief Executive Officer" 	  
	          },
	
	]
};

$('body').append(template(data));