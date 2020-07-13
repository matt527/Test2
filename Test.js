function start() {
	document.getElementById("date").innerHTML = Date()
}
function hide(){
	document.getElementById("date").innerHTML = ""
}

var filename = ""
var fileContents = ""

function fileAdded(){
  var file = document.getElementById("fileInput").files[0];
  filename = file.name
  var reader = new FileReader();
  reader.readAsText(file)
  reader.onload = function(){
	document.getElementById("filename").innerHTMl = filename  
  	document.getElementById("fileContents").innerHTML = reader.result
  	fileContents = reader.result 
  return fileContents, filename
  };
}

function logFile(fileContents,filename,convert){
	console.log("Filename",filename)
	console.log(fileContents)
	convert(fileContents)
}

function convert(fileContents){
	let dataList = fileContents.split(",")
	console.log(dataList[0])
}

function parseGPX(fileContents){
	console.log(typeof fileContents)
}

function loadMap(){
	var mymap = L.map('mapid').setView([51.505, -0.09], 13);
	L.tileLayer('https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.thunderforest.com/">ThunderForest</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mobile-atlas',
		accessToken: '63b250b2a28a4eb7aec69f27039c14aa'
		}).addTo(mymap);
}