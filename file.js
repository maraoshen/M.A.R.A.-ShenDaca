$(document).ready(function(){
	$("#btnAllStores").click(function(){
		  //Change to the add-notes
          $.mobile.changePage ($("#all-stores"));
		  //Empty the list first
		  $("#list-all-stores").html("");

		$.getJSON('data.json', function(data) {
        var output="";
        for (var i in data.stores) {
            output+="<li>" + data.stores[i].Category + " " + data.stores[i].name + "--" + data.stores[i].id+"</li>";
        }
        $("#list-all-stores").append(output);
    	});
  	});
});