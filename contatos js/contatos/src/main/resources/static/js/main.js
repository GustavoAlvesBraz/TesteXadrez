// 1. URL da sua API do Spring Boot
const urlAPI = "http://localhost:8080/api/contatos";

// 2. FUNÇÃO PARA BUSCAR E LISTAR OS CONTATOS (GET)
async function listarContatos() {
    try {
        const resposta = await fetch(urlAPI);

        if (!resposta.ok) {
            throw new Error(`Erro no servidor: ${resposta.status}`);
        }

        const contatos = await resposta.json();

        const tabela = document.getElementById("tabelaContatos");
        tabela.innerHTML = ""; // Limpa a tabela antes de redesenhar

        // Percorre a lista de contatos vinda do Java
        for (const contato of contatos) {
            // Usamos || "" para garantir que se o valor vier nulo do banco, a tela não quebre
            const id = contato.id || "";
            const nome = contato.nome || "";
            const numero = contato.numero || "";

            tabela.innerHTML += `
                <tr>
                    <td>${id}</td>
                    <td>${nome}</td>
                    <td>${numero}</td>
                    <td>
                        <button onclick="deletarContato(${id})">Excluir</button>
                    </td>
                </tr>
            `;
        }
    } catch (error) {
        console.error("Erro ao buscar contatos da API:", error);
    }
}

// 3. EVENTO DO BOTÃO SALVAR CONTATO (POST)
const form = document.getElementById("formContato");
form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede a página de recarregar

    const nomeDigitado = document.getElementById("nome").value;
    const numeroDigitado = document.getElementById("numero").value;

    // Monta o objeto JSON batendo exatamente com as variáveis do seu Contato.java (nome e numero)
    const novoContato = {
        nome: nomeDigitado,
        numero: numeroDigitado
    };

    try {
        const resposta = await fetch(urlAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Obriga o Spring a ler como JSON
            },
            body: JSON.stringify(novoContato) // Transforma o objeto em texto puro para envio
        });

        if (resposta.ok) {
            form.reset();       // Limpa os campos do formulário
            listarContatos();   // Atualiza a tabela com o novo contato cadastrado
        } else {
            const erroTexto = await resposta.text();
            console.error("Detalhes do erro do servidor:", erroTexto);
            alert(`Erro 400: O Spring rejeitou os dados. Verifique o console do IntelliJ.`);
        }

    } catch (error) {
        console.error("Erro na requisição de cadastro:", error);
    }
});

// 4. FUNÇÃO PARA DELETAR UM CONTATO (DELETE)
async function deletarContato(id) {
    if (confirm("Tem certeza que deseja excluir este contato?")) {
        try {
            await fetch(`${urlAPI}/${id}`, {
                method: "DELETE"
            });
            listarContatos(); // Atualiza a tabela após deletar
        } catch (error) {
            console.error("Erro ao deletar contato:", error);
        }
    }
}

// 5. INICIALIZAÇÃO AUTOMÁTICA
// Executa a busca assim que a página é carregada pela primeira vez
listarContatos();
