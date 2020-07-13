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

function fileAdded(event) {
  var file = event.target.files[0];
  var filename = file.name
  var reader = new FileReader();
  reader.onload = function(e) {
    console.log("File Loaded")
  };

  reader.readAsText(file);
}