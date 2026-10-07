const urlAPI = "http://localhost:8080/api/contatos";

// Função para buscar os contatos do Spring Boot
async function listarContatos() {
    try {
        // Faz a requisição GET para o seu Controller
        const resposta = await fetch(urlAPI);

        // Transforma a van de retorno (JSON) em uma lista de objetos JS
        const contatos = await resposta.json();

        const tabela = document.getElementById("tabelaContatos");
        tabela.innerHTML = ""; // Limpa a tabela antes de desenhar

        // Percorre a lista usando o "for...of" que a gente revisou!
        for (const contato of contatos) {
            tabela.innerHTML += `
                <tr>
                    <td>${contato.id}</td>
                    <td>${contato.nome}</td>
                    <td>${contato.numero}</td>
                    <td>
                        <button onclick="deletarContato(${contato.id})">Excluir</button>
                    </td>
                </tr>
            `;
        }
    } catch (error) {
        console.error("Erro ao buscar contatos da API:", error);
    }
}

// Executa a função assim que a página abre
listarContatos();
