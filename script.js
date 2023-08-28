document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcularButton");
    const horasInput = document.getElementById("horas");
    const pagoInput = document.getElementById("pago");
    const resultadoScript = document.getElementById("resultadoscript");
    const nombreEmpleadoInput = document.getElementById("nombre");
    const cargoInput = document.getElementById("cargo");
    const nombreEmpleadoSpan = document.getElementById("nombreEmpleadoSpan");
    const cargoSpan = document.getElementById("cargoSpan");
    const resultadoISSSSpan = document.getElementById("resultadoISSS");
    const salarioNETOSpan = document.getElementById("salarioNETO");

    calcularButton.addEventListener("click", function() {
        const horasTrabajadas = parseFloat(horasInput.value);
        const pagoPorHora = parseFloat(pagoInput.value);
        const salario = horasTrabajadas * pagoPorHora;

        if (!isNaN(horasTrabajadas) && !isNaN(pagoPorHora)) {
            const resultado = salario * (7.25 / 100);
            resultadoScript.textContent = `AFP: $ ${resultado}`;

            const resultadoISSSValue = salario * (3 / 100);
            resultadoISSSSpan.textContent = `ISSS: $ ${resultadoISSSValue}`;

            const salarioNETOValue = salario - (resultadoISSSValue + resultado);
            salarioNETOSpan.textContent = `Salario Neto: $ ${salarioNETOValue}`;

            nombreEmpleadoSpan.textContent = `Nombre del Empleado: ${nombreEmpleadoInput.value}`;
            cargoSpan.textContent = `Cargo que ejerce: ${cargoInput.value}`;
        } else {
            resultadoScript.textContent = "Ingrese valores válidos para las horas y el pago por hora.";
            resultadoISSSSpan.textContent = "";
            salarioNETOSpan.textContent = "";
        }
    });
});

