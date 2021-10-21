function validar() {
    const rut = document.getElementById('rut');
    const contrasena = document.getElementById('contrasena');

    send(rut, contrasena);
    
}
function send(rutForm, contrasenaForm){
	var data = {
		rut: rutForm,
		contrasena: contrasenaForm
	
	}
    xhr = new XMLHttpRequest();
	
	var json = JSON.stringify(data);
	//si url existiera
	alert("Se ingreso Correctamente");
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && http.status == 200) {
			alert(xhr.responseText);
		}
	}
	xhr.open("POST", "FORM.PHP");
	xhr.setRequestHeader("Content-type","Application/json");
	xhr.send(json);
}