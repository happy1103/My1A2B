
var numbers = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero", "question-mark"];
var firstclicked = 0;
var secondclicked = 0;
var thirdclicked = 0;
var forthclicked = 0;//forth

$( document ).ready(function() {
	//console.log( "ready!" );
	$( "#first" ).on( "click", function() {
		//console.log( "first click" );
		var $offsetTop = document.getElementById("first").offsetTop;
		var $offsetLeft = document.getElementById("first").offsetLeft;
		document.getElementById("disfirst").style.top= $offsetTop + 60 +'px';
		document.getElementById("disfirst").style.left= $offsetLeft - 8 + 'px';
		
		$("#disfirst").toggle();
		$("#dissecond").attr("style","display: none");
		$("#disthird").attr("style","display: none");
		$("#disforth").attr("style","display: none");
		
		if(firstclicked == 0)
		{
			firstclicked = 1;
			for(var i=0;i<numbers.length;i++)
			{
				$("#disfirst").append('<img id = "disfirstnumber'+ numbers[i] +'" src = "img/' + numbers[i] + '.png" width="50px" height="50px"><br>');
				$("#disfirst").append('<p> </p>');
			}
		}
		
	});
});

$( document ).ready(function() {
	//console.log( "ready!" );
	$( "#second" ).on( "click", function() {
		//console.log( "second click" );
		var $offsetTop = document.getElementById("second").offsetTop;
		var $offsetLeft = document.getElementById("second").offsetLeft;
		document.getElementById("dissecond").style.top= $offsetTop + 60 +'px';
		document.getElementById("dissecond").style.left= $offsetLeft - 8 + 'px';
		
		$("#dissecond").toggle();
		$("#disfirst").attr("style","display: none");
		$("#disthird").attr("style","display: none");
		$("#disforth").attr("style","display: none");
		
		if(secondclicked == 0)
		{
			secondclicked = 1;
			for(var i=0;i<numbers.length;i++)
			{
				$("#dissecond").append('<img id = "dissecondnumber'+ numbers[i] +'" src = "img/' + numbers[i] + '.png" width="50px" height="50px"><br>');
				$("#dissecond").append('<p> </p>');
			}
		}
		
	});
});

$( document ).ready(function() {
	//console.log( "ready!" );
	$( "#third" ).on( "click", function() {
		//console.log( "second click" );
		var $offsetTop = document.getElementById("third").offsetTop;
		var $offsetLeft = document.getElementById("third").offsetLeft;
		document.getElementById("disthird").style.top= $offsetTop + 60 +'px';
		document.getElementById("disthird").style.left= $offsetLeft - 8 + 'px';
		
		$("#disthird").toggle();
		$("#disfirst").attr("style","display: none");
		$("#dissecond").attr("style","display: none");
		$("#disforth").attr("style","display: none");
		
		if(thirdclicked == 0)
		{
			thirdclicked = 1;
			for(var i=0;i<numbers.length;i++)
			{
				$("#disthird").append('<img id = "disthirdnumber'+ numbers[i] +'" src = "img/' + numbers[i] + '.png" width="50px" height="50px"><br>');
				$("#disthird").append('<p> </p>');
			}
		}
		
	});
});

$( document ).ready(function() {
	//console.log( "ready!" );
	$( "#forth" ).on( "click", function() {
		//console.log( "first click" );
		var $offsetTop = document.getElementById("forth").offsetTop;
		var $offsetLeft = document.getElementById("forth").offsetLeft;
		document.getElementById("disforth").style.top= $offsetTop + 60 +'px';
		document.getElementById("disforth").style.left= $offsetLeft - 8 + 'px';
		
		$("#disforth").toggle();
		$("#dissecond").attr("style","display: none");
		$("#disthird").attr("style","display: none");
		$("#disfirst").attr("style","display: none");
		
		if(forthclicked == 0)
		{
			forthclicked = 1;
			for(var i=0;i<numbers.length;i++)
			{
				$("#disforth").append('<img id = "disforthnumber'+ numbers[i] +'" src = "img/' + numbers[i] + '.png" width="50px" height="50px"><br>');
				$("#disforth").append('<p> </p>');
			}
		}
		
	});
});


$(document).on('click', 'img', function(){
	
	//console.log("number");
	var id = $(this).attr("id");
	var imgsrc = $(this).attr("src");
	//console.log( id.search("first") );
	
	if(id.search("firstnumber") != -1 )
	{
		//console.log( "changefirst" );
		document.getElementById("first").setAttribute("src", imgsrc);
		$("#disfirst").attr("style","display: none");
	}
	if(id.search("secondnumber") != -1 )
	{
		//console.log( "changefirst" );
		document.getElementById("second").setAttribute("src", imgsrc);
		$("#dissecond").attr("style","display: none");
	}
	if(id.search("thirdnumber") != -1 )
	{
		//console.log( "changefirst" );
		document.getElementById("third").setAttribute("src", imgsrc);
		$("#disthird").attr("style","display: none");
	}
	if(id.search("forthnumber") != -1 )
	{
		//console.log( "changefirst" );
		document.getElementById("forth").setAttribute("src", imgsrc);
		$("#disforth").attr("style","display: none");
	}
});

/*
$( document ).ready(function() {
	//console.log( "ready!" );
	$( "#GO" ).on( "click", function() {
		clearInterval(myVar);
		
	});
});
*/
