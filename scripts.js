function calcularPesoLiquido(formId) {
    const cercado = document.getElementById(`cercado${formId}`).value;
    const amostra = document.getElementById(`amostra${formId}`).value;
    const tara = parseFloat(document.getElementById(`tara${formId}`).value);
    const pesoInicial = parseFloat(document.getElementById(`peso_inicial${formId}`).value);
    const pesoFinal = parseFloat(document.getElementById(`peso_final${formId}`).value);

    const pesoLiquidoInicial = pesoInicial - tara;
    const pesoLiquidoFinal = pesoFinal - tara;
    const percentualCapimSeco = (pesoLiquidoInicial > 0) ? ((pesoLiquidoFinal / pesoLiquidoInicial) * 100).toFixed(2) : 0;

    const resultadoDiv = document.getElementById(`resultado${formId}`);
    resultadoDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Cercado:</strong> ${cercado}</p>
        <p><strong>Amostra:</strong> ${amostra}</p>
        <p><strong>Peso Líquido Inicial:</strong> ${pesoLiquidoInicial.toFixed(2)} g</p>
        <p><strong>Peso Líquido Final:</strong> ${pesoLiquidoFinal.toFixed(2)} g</p>
        <p><strong>Percentual do Capim Seco:</strong> ${percentualCapimSeco}%</p>
    `;
    function calcularPesoLiquido(id) {
        let tara = parseFloat(document.getElementById(`tara${id}`).value);
        let pesoInicial = parseFloat(document.getElementById(`peso_inicial${id}`).value);
        let pesoFinal = parseFloat(document.getElementById(`peso_final${id}`).value);
        let resultadoDiv = document.getElementById(`resultado${id}`);
    
        // Exibir o spinner
        resultadoDiv.innerHTML = '<div class="loader"></div>';
        document.querySelector(`#resultado${id} .loader`).style.display = "block";
    
        // Simular um carregamento (exemplo: 2 segundos)
        setTimeout(() => {
            document.querySelector(`#resultado${id} .loader`).style.display = "none";
    
            // Calcular peso líquido
            let pesoLiquido = pesoFinal - pesoInicial - tara;
            resultadoDiv.innerHTML = `<p>Peso Líquido: <strong>${pesoLiquido.toFixed(2)} g</strong></p>`;
        }, 2000); // Tempo de carregamento simulado (2 segundos)
    }
}
