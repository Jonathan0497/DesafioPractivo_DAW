let notas = [];


while (true) {
    var nombreMateria = prompt('Introduzca el nombre de la materia:','');
    var notaFinal = prompt('Introduzca la nota final de esta mteria: ','');
    var UV = prompt('Introduzca las unidades valorativas (UV): ','');

    notas.push({nombreMateria, notaFinal : parseFloat(notaFinal), UV});

    const continuar = confirm("Desea agregar otra nota?");
    if (!continuar) {
        break;
    }

}

