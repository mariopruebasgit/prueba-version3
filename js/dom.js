// let nombre;
// let apellidos;

function visualizar() {
	
	// alert("Todo bien!");
	let nombre = document.getElementById("nombre").value;
	let apellidos = document.querySelector("#apellidos").value;
	console.log(`Este nombre tiene valor : ${nombre}`);
	console.log(`Este apellido tiene valor : ${apellidos}`);

	document.querySelector("#contenedor-resultado").innerHTML = `${nombre} ${apellidos}`;

}
