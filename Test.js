function start() {
	document.getElementById("Date").innerHTML = Date()
}
function hide(){
	document.getElementById("Date").innerHTML = ""
}

function showFile(selectedFile){
	var selectedFile = document.getElementById('fileInput').files;
	document.getElementById("demo").innerHTML = selectedFile[0].name;
	console.log(selectedFile);
}
console.log(selectedFile);