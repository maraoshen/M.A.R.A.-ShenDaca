$(document).ready(function(){
	$.getJSON('data.json', function(data) {
        var output="";
        for (var i in data.stores) {
            output+="<li>" + data.stores[i].Category + " " + data.stores[i].name + "--" + data.stores[i].id+"</li>";
        }
        document.getElementById("list").innerHTML=output;
        alert("huhu");
  });
});