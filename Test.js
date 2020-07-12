function start() {
	document.getElementById("Date").innerHTML = Date()
}
function hide(){
	document.getElementById("Date").innerHTML = ""
}
const selectedFile = document.getElementById('fileInput').files[0];
function showFile(selectedFile){
	document.getElementById("demo").innerHTML = selectedFile;	
}
