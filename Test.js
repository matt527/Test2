function start() {
	document.getElementById("Date").innerHTML = Date()
}
function hide(){
	document.getElementById("Date").innerHTML = ""
}

var filename = function showFile(selectedFile){
	var selectedFile = document.getElementById('fileInput').files;
	document.getElementById("demo").innerHTML = selectedFile[0].name;
	console.log(selectedFile);
	console.log(selectedFile[0].name)
	const reader = new FileReader()
	var textFromFile = reader.readAsText(selectedFile[0].name);
	console.log(textFromFile)
	document.getElementById("fileContents").innerHTML = textFromFile
}