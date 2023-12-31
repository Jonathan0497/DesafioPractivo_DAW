document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.getElementById("calcularButton");
    const horasInput = document.getElementById("horas");
    const pagoInput = document.getElementById("pago");
    const resultadoScript = document.getElementById("resultadoscript");
    const nombreEmpleadoInput = document.getElementById("nombre");
    const cargoInput = document.getElementById("cargo");
    const nombreEmpleadoSpan = document.getElementById("nombreEmpleadoSpan");
    const cargoSpan = document.getElementById("cargoSpan");
    const resultadoISSSSpan = document.getElementById("resultadoISSS");
    const resultadoRentaspan = document.getElementById("resultadoRenta");
    const salarioNETOSpan = document.getElementById("salarioNETO");

    calcularButton.addEventListener("click", () => {
        const horasTrabajadas = parseFloat(horasInput.value);
        const pagoPorHora = parseFloat(pagoInput.value);
        const salario = horasTrabajadas * pagoPorHora;
        let descuentoRenta = 0;

        if (salario >= 472.01 && salario <= 895.24) {
            descuentoRenta = (salario * (10 / 100)) + 17.67;
        } 

        if (salario >= 895.25 && salario <= 2038.10) {
            descuentoRenta = (salario * (20 / 100)) + 60.00;
        }  
        
        if (salario >= 2038.11) {
            descuentoRenta = (salario * (30 / 100)) + 288.57;
        }

        if (!isNaN(horasTrabajadas) && !isNaN(pagoPorHora)) {
            const resultadoAFP = salario * (7.25 / 100);
            resultadoScript.textContent = `AFP: $ ${resultadoAFP}`;

            let resultadoISSSValue = salario * (3 / 100);
            if (resultadoISSSValue > 30) {
                resultadoISSSValue = 30;
            }
            resultadoISSSSpan.textContent = `ISSS: $ ${resultadoISSSValue.toFixed(2)}`;
            resultadoRentaspan.textContent = `Renta: $ ${descuentoRenta.toFixed(2)}`;

            const salarioNETOValue = salario - (resultadoISSSValue + resultadoAFP + descuentoRenta);
            salarioNETOSpan.textContent = `Salario Neto: $ ${salarioNETOValue.toFixed(2)}`;

            nombreEmpleadoSpan.textContent = `Nombre del Empleado: ${nombreEmpleadoInput.value}`;
            cargoSpan.textContent = `Cargo que ejerce: ${cargoInput.value}`;
        } else {
            resultadoScript.textContent = "Ingrese valores validos para las horas y el pago por hora.";
            resultadoISSSSpan.textContent = "";
            salarioNETOSpan.textContent = "";
        }
    });
});

