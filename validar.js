function validar() {

	var nombre, apellido, correo, usuario, clave, telefono, expresion;
	nombre=document.getElementByid("nombre");
	apellido=document.getElementByid("apellido");
	correo=document.getElementByid("correo");
	usuario=document.getElementByid("usuario");
	clave=document.getElementByid("clave");
	telefono=document.getElementByid("telefono");

	expresion = /\w+@\w+\.+[a-z]/;

	if (nombre==="" || apellido=== "" correo==="" || usuario==="" || clave==="" || telefono==="") {

		alert("Te repito amiguito que si quieres ingresar  a la página, rellena los campos correctamente :(");
		return false;
	}
	else if (nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}
	else if (apellido.length>70){
		alert("El apellido es muy largo");
		return false;
	}
	else if (correo.length>100){
		alert("El correo es muy largo");
		return false;
	}
	else if (!expresion.test(correo)) {

	}
	else if (usuario.length>25 || clave.length>25){
		alert("El nombre de usuario y la contraseña deben tener 20 caracteres como maximo :(");
		return false;
	}
	else if (telefono.length>10){
		alert("El numero de telefono es muy largo");
		return false;
	}
	else if (isNaN(telefono)){
		alert("El telefono ingresado contiene caracteres no numericos");
		return false;
	}
}