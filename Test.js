function start() {
	document.getElementById("Date").innerHTML = Date()
}
function hide(){
	document.getElementById("Date").innerHTML = ""
}

function showFile(){
	var selectedFile = document.getElementById('fileInput').files;
	document.getElementById("demo").innerHTML = selectedFile[0].name;
	console.log(selectedFile);
	console.log(selectedFile[0].name)
	const reader = new FileReader()
	reader.readAsText(selectedFile[0]);
	setTimeout(function(){console.log(reader.result)
						 document.getElementById("fileContents").innerHTML = reader.result
						 }, 1000);
}

function fileAdded(){
  var file = document.getElementById("fileInput").files[0];
  var filename = file.name
  var reader = new FileReader();
  reader.readAsText(filename)
  reader.onload = function(){
  document.getElementById("demo").innerHTML = reader.result
  var fileContents = reader.result 
  return fileContents, filename
  };
}

function logFile(fileContents,filename){
	console.log("Filename",filename)
	console.log(fileContents)
}