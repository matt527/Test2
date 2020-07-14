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
	  //console.log(index)
	  readers[index] = new FileReader()
	  //console.log("File Reader Made: "+ index)
	  readers[index].readAsText(files[index])
	//  console.log(readers[index].readyState)
	  readers[index].onload = function(){
		  document.getElementById("filename").innerHTMl = filename  
		  document.getElementById("fileContents").innerHTML = `File ${index+1} of ${files.length}`
	  	  tracks[index] = readers[index].result 
	  }	 
  }
};

var points = "No file loaded yet.";
var items = "No Items Generated"
var cicles = []
var points =[];
function parseCSV(tracks,mymap,files){
	var trackpoint = [];
	var guideline = [];
	var singleLine=[];
	var polyline=[];
	var outputLine=[];
	for(let track=0;track<tracks.length;track++){
		tracks[track] = tracks[track].split("\n")
		singleLine=[]
		for(let point=0;point<tracks[track].length;point++){
			tracks[track][point] = tracks[track][point].split(",")
			if(tracks[track][point][0]===""){
				tracks[track].pop()
			}
			if(point!=tracks[track].length){
			tracks[track][point].splice(1,1)
			tracks[track][point].splice(3,4)
			}
		if(point!=tracks[track].length&&point!=0){
			trackpoint = [tracks[track][point][1],tracks[track][point][2]]
		//	console.log(trackpoint)
		}
		singleLine.push(trackpoint)
		points.push(trackpoint)
		}
		singleLine.splice(0,1)
		guideline.push(singleLine)
		outputLine[track]= new L.polyline(guideline[track])
		outputLine[track].addTo(mymap)
		//console.log(singleLine)
		//console.log(singleLine.length)
		//console.log(guideline)
		//console.log(guideline[track])
		//console.log(files[track].name)
		//console.log(track)
		document.getElementById("csvLoaded").innerHTML = files[track].name
		document.getElementById("parseProgress").innerHTML = `File ${track+1} of ${files.length}`
		/*tracks[track].forEach((element,i) => {
		if (!(i===0)){
		L.circle([element[1], element[2]], {radius: 0.1,
							  color: 'red',
							  fillColor: 'red',
    						  fillOpacity: 1}).addTo(mymap);
		points.push(element)
		}
		});*/
		
	}
}

var mymap="";
function recentreMap(points,mymap,sum){
	var sumLat = sum(points, 0)
	//console.log("Sum Latitude: "+sumLat)
	var aveLat = sumLat/(points.length-1)
	var sumLon = sum(points, 1)
	var aveLon = sumLon/(points.length-1)
	//console.log(aveLat)
	//console.log(aveLon)
	mymap.setView([aveLat,aveLon],10);
	}

function sum(data,pos){
	var sum = 0
	for(let i=1;i<data.length;i++){
		//console.log("Length " + data.length)
		//console.log("i: " + i)
		//console.log(data[i][pos])
		sum += +(data[i][pos])
	}
	return sum
}

function loadMap(){
	mymap = L.map('mapid').setView([51.505, -0.09], 5);
	L.tileLayer('https://tile.thunderforest.com/{id}/{z}/{x}/{y}.png?apikey={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.thunderforest.com/">ThunderForest</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mobile-atlas',
		accessToken: '63b250b2a28a4eb7aec69f27039c14aa'
		}).addTo(mymap);
}

function screenshot(){
	html2canvas(document.getElementById("mapid")).then(function(canvas) {
    let screencontent = canvas.toDataURL('image/jpeg', 1.0);
	var w = window.open("");
    w.document.write(screencontent.outerHTML);
   });
};