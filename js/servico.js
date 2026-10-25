const parametros =  new URLSearchParams(window.location.search);

const servico = parametros.get("servico");

console.log(servico);

if (servico === "cpf") {
    document.getElementById("tituloServico").textContent = "Segunda via do CPF";
    
    document.getElementById("descricaoServico").textContent = "Consulte informações sobre como solicitar a segunda via do CPF.";
    document.getElementById("comoSolicitar").textContent = "Abra o serviço oficial da Receita Federal e informe os dados solicitados para consultar a situação cadastral do CPF. Você poderá emitir o comprovante de situação cadastral. Se precisar de outro tipo de comprovante, consulte as opções disponibilizadas pela Receita Federal.";
    document.getElementById("documentosNecessarios").textContent = "Número de cpf e data de nascimento.";
    document.getElementById("linkOficial").href = "https://www.gov.br/pt-br/servicos/consultar-cadastro-de-pessoas-fisicas";
    document.getElementById("linkOficial").textContent = "Quero consultar meu CPF";

} else if (servico === "trabalho") {
    document.getElementById("tituloServico").textContent = "Carteira de Trabalho";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre a carteira de trabalho.";
    document.getElementById("comoSolicitar").textContent = "Acesse o serviço oficial do Governo Federal e selecione a opção para obter a Carteira de Trabalho Digital. Entre com sua conta gov.br e siga as instruções apresentadas. O acesso é digital e não exige comparecimento presencial na situação comum.";
    document.getElementById("documentosNecessarios").textContent = "CPF e conta gov.br autenticada.";
    document.getElementById("linkOficial").href = "https://www.gov.br/pt-br/servicos/obter-a-carteira-de-trabalho";
    document.getElementById("linkOficial").textContent = "Quero solicitar minha carteira de trabalho";

} else if (servico === "bolsa") {
    document.getElementById("tituloServico").textContent = "Bolsa Familia";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre o bolsa familia.";
    document.getElementById("comoSolicitar").textContent = "Procure o CRAS ou o posto do Cadastro Único do município onde você mora para realizar a inscrição ou atualizar seus dados. Depois, aguarde a análise do Governo Federal. A inscrição no Cadastro Único não garante a entrada automática no Bolsa Família.";
    document.getElementById("documentosNecessarios").textContent = "CPF do responsável familiar. Documento de identificação com foto do responsável familiar. CPF dos integrantes da família. Documentos dos demais integrantes da família. Comprovante de residência, se houver.";
    document.getElementById("linkOficial").href = "https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia";
    document.getElementById("linkOficial").textContent = "Quero consultar meu bolsa familia";

} else if (servico === "atendimento") {
    document.getElementById("tituloServico").textContent = "Agendamento de Atendimento";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre como agendar um atendimento.";
    document.getElementById("comoSolicitar").textContent = "Acesse o portal ou aplicativo Meu INSS e procure o serviço desejado. Verifique as opções de atendimento disponíveis e siga as instruções para solicitar o agendamento, quando aplicável. Você também pode consultar a Central 135 para obter orientações.";
    document.getElementById("documentosNecessarios").textContent = "CPF. Documento de identificação com foto.Conta gov.br, quando exigida pelo serviço. Documentos específicos relacionados ao atendimento solicitado.";
    document.getElementById("linkOficial").href = "https://www.gov.br/inss/pt-br/canais_atendimento/servicos-por-canal-de-atendimento";
    document.getElementById("linkOficial").textContent = "Quero agendar atendimento";

} else if (servico === "habilitacao") {
    document.getElementById("tituloServico").textContent = "Carteira de motorista";

    document.getElementById("descricaoServico").textContent = "Consulte informações sobre a carteira de motorista.";
    document.getElementById("comoSolicitar").textContent = "Acesse o portal oficial da CNH do Brasil e consulte os requisitos para obter a primeira habilitação. Siga as orientações para iniciar o processo e verifique as etapas necessárias para a categoria desejada.";
    document.getElementById("documentosNecessarios").textContent = "CPF. Documento de identificação.Comprovante de residência, quando solicitado. Outros documentos ou informações exigidos durante o processo de habilitação.";
    document.getElementById("linkOficial").href = "https://www.gov.br/transportes/pt-br/cnh-do-brasil";
    document.getElementById("linkOficial").textContent = "Quero solicitar minha carteria de motorista";

} else {
    document.getElementById("tituloServico").textContent = "Serviço não encontrado";

    document.getElementById("descricaoServico").textContent = "Serviço solicitado não existe ou não esta disponivel";
}

