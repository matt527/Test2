function start() {
	document.getElementById("Date").innerHTML = Date()
}
function hide(){
	document.getElementById("Date").innerHTML = ""
}

function showFile(selectedFile){
	var selectedFile = document.getElementById('fileInput').files[0];
	document.getElementById("demo").innerHTML = selectedFile.name;	
}
console.log(selectedFile);