function calcularPesoLiquido(formId) {
    // Obtém os valores dos campos de entrada
    const cercado = document.getElementById(`cercado${formId}`).value;
    const piquete = document.getElementById(`piquete${formId}`).value;
    const amostra = document.getElementById(`amostra${formId}`).value;
    const tara = parseFloat(document.getElementById(`tara${formId}`).value);
    const pesoInicial = parseFloat(document.getElementById(`peso_inicial${formId}`).value);
    const pesoFinal = parseFloat(document.getElementById(`peso_final${formId}`).value);

    // Verifica se os valores de tara, peso inicial e peso final são números válidos
    if (isNaN(tara) || isNaN(pesoInicial) || isNaN(pesoFinal)) {
        alert("Por favor, insira valores numéricos válidos para tara, peso inicial e peso final.");
        return;
    }

    // Calcula os pesos líquidos inicial e final
    const pesoLiquidoInicial = pesoInicial - tara;
    const pesoLiquidoFinal = pesoFinal - tara;

    // Calcula o percentual de capim seco
    const percentualCapimSeco = (pesoLiquidoInicial > 0) ? ((pesoLiquidoFinal / pesoLiquidoInicial) * 100).toFixed(2) : 0;

    // Obtém o elemento de resultado
    const resultadoDiv = document.getElementById(`resultado${formId}`);
    
    // Exibe os resultados
    resultadoDiv.innerHTML = `
        <h3>Resultados:</h3>
        <p><strong>Cercado:</strong> ${cercado}</p>
        <p><strong>Piquete:</strong> ${piquete}</p>
        <p><strong>Amostra:</strong> ${amostra}</p>
        <p><strong>Tara:</strong> ${tara.toFixed(2)} g</p>
        <p><strong>Peso Inicial:</strong> ${pesoInicial.toFixed(2)} g</p>
        <p><strong>Peso Final:</strong> ${pesoFinal.toFixed(2)} g</p>
        <p><strong>Peso Líquido Inicial:</strong> ${pesoLiquidoInicial.toFixed(2)} g</p>
        <p><strong>Peso Líquido Final:</strong> ${pesoLiquidoFinal.toFixed(2)} g</p>
        <p><strong>Percentual de Capim Seco:</strong> ${percentualCapimSeco}%</p>
    `;

    // Exibe a div de resultados com uma transição suave
    resultadoDiv.style.display = 'block';
}
