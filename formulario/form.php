<?php

$conexion=mysql_connect ("localhost","root","") or die ("no se ha podido conectar a la base de datos"); 
mysql_select_db("formulario2",$conexion) or die ("No existe la base de datos");

		$Nombre=$_POST['nombre'];
		$Apellidop=$_POST['apellidop'];
		$Apellidom=$_POST['apellidom'];
		$Correo=$_POST['correo'];
		$Usuario=$_POST['usuario'];
		$Clave=$_POST['clave'];
		$Telefono=$_POST['telefono'];


mysql_query("INSERT INTO usua(nombre, apellidop, apellidom, correo, usuario, clave, telefono)values('$Nombre','$Apellidop','$Apellidom','$Correo','$Usuario','$Clave','$Telefono')",$conexion);


echo "<h1> Datos guardados correctamente </h1>";

?>
