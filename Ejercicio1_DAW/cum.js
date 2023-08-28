let notas = [];
let cum;

while (true) {
    var nombreMateria = prompt('Introduzca el nombre de la materia:','');
    var notaFinal = prompt('Introduzca la nota final de esta materia: ','');
    var UV = prompt('Introduzca las unidades valorativas (UV): ','');


    notas.push({nombreMateria, notaFinal : parseFloat(notaFinal), UV: parseFloat(UV)});

    const tableBody = document.querySelector("#Tabla tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML =  '<td>'+nombreMateria+'</td>'+
                        '<td>'+notaFinal+'</td>'+
                        '<td>'+UV+'</td>';

    tableBody.appendChild(newRow);

    const continuar = confirm("Desea agregar otra materia?");
    if (!continuar) {
        break;
    }
}

cum = calcularCum(notas);
var resultadoNota = document.getElementById('nota');
resultadoNota.innerHTML = '<h2>Notas: '+ cum.toFixed(2) +'</h2>';

function calcularCum(notas) {
    let suma = 0;
    let uvsuma = 0;
    for (const elemento of notas) {
        suma += elemento.notaFinal * elemento.UV;
        uvsuma += elemento.UV;
    }
    return suma / uvsuma;
}



