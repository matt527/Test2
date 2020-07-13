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
	var textFromFile = reader.result
	console.log(textFromFile)
	console.log("File Contents")
	console.log(reader.result)
	document.getElementById("fileContents").innerHTML = textFromFile
}