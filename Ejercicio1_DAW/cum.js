let notas = [];
let cum;

while (true) {
    let nombreMateria = prompt('Introduzca el nombre de la materia:', '');
    let notaFinal = parseFloat(prompt('Introduzca la nota final de esta materia:', ''));
    let UV = parseFloat(prompt('Introduzca las unidades valorativas (UV):', ''));

    // Validación de entradas
    if (isNaN(notaFinal) || isNaN(UV) || notaFinal < 0 || notaFinal > 10 || UV <= 0) {
        alert("Por favor, introduzca valores válidos.");
        continue;
    }

    notas.push({ nombreMateria, notaFinal, UV });

    const tableBody = document.querySelector("#Tabla tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = '<td>'+ nombreMateria +'</td>'+
                        '<td>' + notaFinal + '</td>' +
                        '<td>'+UV+'</td>';

    tableBody.appendChild(newRow);

    const continuar = confirm("Desea agregar otra materia?");
    if (!continuar) {
        break;
    }
}

cum = calcularCum(notas);
const resultadoNota = document.getElementById('nota');
resultadoNota.innerHTML = `<h2>Notas: ${cum.toFixed(2)}</h2>`;

function calcularCum(notas) {
    let suma = 0;
    let uvsuma = 0;
    for (const elemento of notas) {
        suma += elemento.notaFinal * elemento.UV;
        uvsuma += elemento.UV;
    }
    return suma / uvsuma;
}
