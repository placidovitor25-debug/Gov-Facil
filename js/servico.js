const parametros =  new URLSearchParams(window.location.search);

const servico = parametros.get("servico");

console.log(servico);

if (servico === "cpf") {
    document.getElementById("tituloServico").textContent = "Segunda via do CPF";
    
    document.getElementById("descricaoServico").textContent = "Consulte informações sobre como solicitar a segunda via do CPF.";
} else if (servico === "trabalho") {
    document.getElementById("tituloServico").textContent = "Carteira de Trabalho";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre a carteira de trabalho.";
} else if (servico === "bolsa") {
    document.getElementById("tituloServico").textContent = "Bolsa Familia";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre o bolsa familia.";
} else if (servico === "atendimento") {
    document.getElementById("tituloServico").textContent = "Agendamento de Atendimento";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre como agendar um atendimento.";
} else if (servico === "habilitacao") {
    document.getElementById("tituloServico").textContent = "Carteira de motorista";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre a carteira de motorista.";
}

