let btnTraslate = document.getElementById("btnTraslate");

//Hace la validación de los datos inrgesados por el usuario.
function traducir() {
	let binario = document.getElementById("inp-bin").value;
	let inpBin = document.getElementById("inp-dec");
	let cadenaBinaria = binario.split("");
	let decimal = parseInt(binario, 2); //let decimal = binario ** 2;

	//Para vaciar el campo por si hubo una traducción antes y quedó algun valor en el campo.
	if (binario === "") {
		inpBin.value = "";
		return alert("[Error] Ingrese números");
	}

	//Recorro el array, extraigo los valores que contenga y les aplico la validación correspondiente.
	for (let num of cadenaBinaria) {
		if (num != "0" && num != "1") {
			binario = "";
			inpBin.value = "";
			return alert("[Error] Ingrese sólo ceros y unos");
		}
	}
	
	inpBin.value = decimal;
}

btnTraslate.addEventListener("click", traducir);