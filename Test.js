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
	document.getElementById("fileContents").innerHTML = "File Loaded"
	fileContents = reader.result 
	return fileContents, filename
  };
}

function logFile(fileContents,filename,convert){
  console.log("Filename",filename)
  console.log(fileContents)
  convert(fileContents)
}
let dataList;
function convert(fileContents){
	dataList = fileContents.split(",")
	console.log(dataList[0])
}
var points = "No file loaded yet.";
var items = "No Items Generated"
var cicles = []
function parseCSV(fileContents,dataList,mymap){
	//console.log(typeof fileContents)
	points = fileContents.split("\n")
	//console.log(points)
	//console.log(typeof points)
	points.forEach((element,i) => {
		points[i] = element.split(",");
		//console.log(element);
		if (element.length===0){
			console.log("Empty")
			points.pop()
		}
	})
	points.forEach((element,i) => {
		element.splice(1,1)
		element.splice(3,4)
		if (!(i===0)){
		L.circle([element[1], element[2]], {radius: 0.5,
							  color: 'red',
							  fillColor: 'red',
    						  fillOpacity: 1}).addTo(mymap);
		}
	});
	console.log(points)
}
var mymap="";
function recentreMap(points,mymap,sum){
	var sumLat = sum(points[0])
	console.log(sumLat)
	}

}

function sum(data){
	for(i;i<data.length,i++){
		console.log(i)
	}
}

function loadMap(){
	mymap = L.map('mapid').setView([51.505, -0.09], 13);
	L.tileLayer('https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.thunderforest.com/">ThunderForest</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mobile-atlas',
		accessToken: '63b250b2a28a4eb7aec69f27039c14aa'
		}).addTo(mymap);
}