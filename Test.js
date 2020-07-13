function start() {
	document.getElementById("Date").innerHTML = Date()
}
function hide(){
	document.getElementById("Date").innerHTML = ""
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

var mymap = L.map('mapid').setView([51.505, -0.09], 13);