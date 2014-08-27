$(document).ready(readyCallback);

function readyCallback()
{
	$("#beautify").click(
	  function()
	  {
	     var inputvalue = $("#inputtext").val();
	     if( !(typeof inputvalue === 'undefined' || inputvalue==="" || inputvalue === null) )
	     {
		    console.log(inputvalue);
	        var beautify = new BeautifyJSON(inputvalue);
			var beautifiedString = beautify.getBeautify();
			console.log(beautifiedString);
	        $("#outputtext").val(beautifiedString);
	     }
	  }
	);
}