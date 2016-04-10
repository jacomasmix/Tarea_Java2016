/*var estudiates { 
	[ nombre: "Marco", " Masculino", " 31", " Sobresaliente", " La Libertad" , " Html", " SI"];
	[ nombre: "Andres", " Masculino", " 35", " Bueno", " Playas" , " C++", " SI"];
	[ nombre: "Carlos", " Masculino", " 40", " Muy Bueno", " Palmar" , " Java", " SI"];
	[ nombre: "Diana", " Femenino", " 25", " Regular", " Santa Elena" , " Visual Fox", " SI"];
	[ nombre: "Erika", " Femenino", " 22", " Sobresaliente", " Salinas" , " Visual Punto net", " SI"];
				}*/

function limpiar()
{
   document.getElementById("limpiar").innerHTML="";
}

var estudiantes = ["Marco", "Andres", "Carlos", "Diana", "Ericka"];
var genero = ["Masculino", " Masculino", "Masculino", "Femenino", "Femenino"];
var edad = ["31", "35", " 40", " 25", "22"];
var arreglodenotas = ["La Libertad", "Valdivia", "Playas", "Palmar", "Santa Elena"];
var ciudad = ["Sobresaliente", "Bueno", "Muy Bueno", "Regular", "Sobresaliente"];
var lenguajefavorito = ["Sobresaliente", "Bueno", "Muy Bueno", "Regular", "Sobresaliente"];
var estatrabajando = ["Si", "No", "Si", "No", "Si"];

var buscar;

while (true) 
{
	var buscar = prompt("QUE ESTUDIANTE DESEA BUSCAR: ");
	
	if (buscar === "q" )
	{
		alert("GRACIAS POR UTILIZAR MI SOFTWARE");
		
		break;
	}
	else if(buscar ==="lista")
	{
		for (var i=0;i<5;i+=1)
						 {
		    document.write("<br>")
			document.write("Nombre: " + estudiantes[i])
			document.write("<br>")
			document.write("Genero: " + genero[i])
			document.write("<br>")
			document.write("Edad: " + edad[i])
			document.write("<br>")
			document.write("Notas: " + arreglodenotas[i])
			document.write("<br>")
			document.write("Ciudad: " + ciudad[i])
			document.write("<br>")
			document.write("Lenguaje Favorito: " + lenguajefavorito[i])
			document.write("<br>")
			document.write("Esta Trabajando: " + estatrabajando[i])
			document.write("<br>")
		 				  }
	}
	else 
	{
		var estudencontrado = estudiantes.indexOf(buscar);
		if (estudencontrado >= 0)
		{
			 
			document.write("<br>")
			document.write("<br>")
			document.write("Nombre: " + estudiantes[estudencontrado])
			document.write("<br>")
			document.write("Genero: " + genero[estudencontrado])
			document.write("<br>")
			document.write("Edad: " + edad[estudencontrado])
			document.write("<br>")
			document.write("Notas: " + arreglodenotas[estudencontrado])
			document.write("<br>")
			document.write("Ciudad: " + ciudad[estudencontrado])
			document.write("<br>")
			document.write("Lenguaje Favorito: " + lenguajefavorito[estudencontrado])
			document.write("<br>")
			document.write("Esta Trabajando: " + estatrabajando[estudencontrado])
			document.write("<br>")
			console.log("SI TENEMOS AL ESTUDIANTE");


		}
		else
		{
			alert("NO TENEMOS AL ESTUDIANTE");
		}
	}

}

