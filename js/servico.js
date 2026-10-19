const parametros =  new URLSearchParams(window.location.search);

const servico = parametros.get("servico");

console.log(servico);
