const campoBusca = document.getElementById("campoBusca");
const botaoPesquisar = document.getElementById("botaoPesquisar");
const resultadosBusca = document.getElementById("resultadosBusca")

const servicos = [
    {
        nome: "Segunda via do CPF",
        categoria: "Documentos",
        descricao: "Consulte informações sobre a segunda via do CPF",
        link: "servico.html?servico=cpf"
    },
    {
        nome: "Carteira de trabalho",
        categoria: "Trabalho",
        descricao: "Consulte informações sobre a Carteira de Trabalho.",
        link: "servico.html?servico=trabalho"
    },
    {
        nome: "Consulta do Bolsa Familia",
        categoria: "Beneficios",
        descricao: "Consulte informações sobre o Bolsa Familia",
        link: "servico.html?servico=bolsa"
    },
    {
        nome: "Agendamento de atendimento",
        categoria: "Atendimento",
        descricao: "Agende um atendimento em um serviço público.",
        link: "servico.html?servico=atendimento"
    },
    {
        nome: "Carteira de motorista",
        categoria: "Transporte",
        descricao: "Consulte informações sobre sua carteira de motorista.",
        link: "servico.html?servico=habilitacao"
    }
];

console.log(campoBusca);
console.log(botaoPesquisar);

function normalizarTexto(texto) {
    return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function pesquisarServicos() {
    const texto = normalizarTexto(campoBusca.value);

    const resultado = servicos.filter(function(servico) {

        const nome = normalizarTexto(servico.nome);  
        const categoria = normalizarTexto(servico.categoria);

        return nome.includes(texto) || categoria.includes(texto)
    });
    if (resultado.length > 0){

        let html = "";
        
        for (let i = 0; i < resultado.length ;i++){
            html = html + ` 
            <div class="card-servico">
                <h3>${resultado[i].nome}</h3>
                <p>${resultado[i].descricao}</p>
                <p>Categoria: ${resultado[i].categoria}</p>
                <a href="${resultado[i].link}" class="botao-servico"> 
                Ver serviço
                </a>
            </div>
            `;
        }
        resultadosBusca.innerHTML = html;

    }
    else{
        resultadosBusca.innerHTML = "<p>nenhum serviço encontrado.</p>";

    }

    console.log(resultado);

}
botaoPesquisar.addEventListener("click", pesquisarServicos);

campoBusca.addEventListener("keydown", function(evento){
    if (evento.key === "Enter") {
        pesquisarServicos();
    }
});