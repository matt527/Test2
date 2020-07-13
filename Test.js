function start() {
	document.getElementById("date").innerHTML = Date()
}
function hide(){
	document.getElementById("date").innerHTML = ""
}

var files=[]
var tracks=[];
var readers=[];
function fileAdded(){
  files = document.getElementById("fileInput").files;
  let reader;
  for(let index=0; index<files.length;index++){
	  console.log(index)
	  readers[index] = new FileReader()
	  console.log("File Reader Made: "+ index)
	  readers[index].readAsText(files[index])
	//  console.log(readers[index].readyState)
	  readers[index].onload = function(){
		  document.getElementById("filename").innerHTMl = filename  
		  document.getElementById("fileContents").innerHTML = `File ${index+1} of ${files.length}`
	  	  tracks[index] = readers[index].result 
	  }	 
  }
};

function logTracks(tracks){
	console.log("::Number of Files: "+tracks.length)
}

function logFile(tracks,filename,convert){
  console.log("Filename",filename)
  console.log(fileContents)
  convert(fileContents)
}
var points = "No file loaded yet.";
var items = "No Items Generated"
var cicles = []
function parseCSV(fileContents,dataList,mymap,files){
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
		L.circle([element[1], element[2]], {radius: 0.1,
							  color: 'red',
							  fillColor: 'red',
    						  fillOpacity: 1}).addTo(mymap);
		}
	});
	console.log(points)
}
var mymap="";
function recentreMap(points,mymap,sum){
	var sumLat = sum(points, 1)
	console.log("Sum Latitude: "+sumLat)
	var aveLat = sumLat/(points.length-1)
	var sumLon = sum(points, 2)
	var aveLon = sumLon/(points.length-1)
	console.log(aveLat)
	console.log(aveLon)
	mymap.setView([aveLat,aveLon],12);
	}

function sum(data,pos){
	var sum = 0
	for(let i=1;i<data.length;i++){
		console.log("Length " + data.length)
		console.log("i: " + i)
		console.log(data[i][pos])
		sum += +(data[i][pos])
	}
	return sum
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