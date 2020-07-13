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
  document.getElementById("demo").innerHTML = reader.result
  fileContents = reader.result 
  return fileContents, filename
  };
}

function logFile(fileContents,filename){
	console.log("Filename",filename)
	console.log(fileContents)
}