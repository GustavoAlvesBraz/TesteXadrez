// ======================================================
// Teste de personalidade: Abertura de xadrez
// Este script é usado nas 4 páginas. Cada bloco só age
// se os elementos dele existirem na página atual.
// ======================================================

// ---------- Funções auxiliares ----------

function salvar(chave, valor) {
    localStorage.setItem(chave, valor);
}

function ler(chave) {
    return localStorage.getItem(chave);
}


// ---------- PÁGINA 1: FORÇA ----------

const radiosForca = document.querySelectorAll('input[name="forca"]');

radiosForca.forEach(radio => {
    // Restaura a escolha anterior (se o usuário voltar à página)
    if (ler("forca") === radio.value) {
        radio.checked = true;
    }

    radio.addEventListener("change", () => {
        salvar("forca", radio.value);
    });
});


// ---------- PÁGINA 2: ESTILO (máximo de 2 opções) ----------

const estilos = ["agressivo", "defensivo", "posicional", "tatico"];
const MAX_ESTILOS = 2;

const checkboxesEstilo = estilos
    .map(id => document.getElementById(id))
    .filter(elemento => elemento !== null);

checkboxesEstilo.forEach(checkbox => {
    // Restaura a escolha anterior
    checkbox.checked = ler(checkbox.id) === "true";

    checkbox.addEventListener("change", () => {
        const marcados = checkboxesEstilo.filter(c => c.checked);

        // Impede marcar mais de 2
        if (marcados.length > MAX_ESTILOS) {
            checkbox.checked = false;
            alert("Marque no máximo " + MAX_ESTILOS + " opções.");
            return;
        }

        salvar(checkbox.id, checkbox.checked);
    });
});


// ---------- PÁGINA 3: MEMÓRIA E TEMPO (1 a 5) ----------

function configurarCampoNumerico(id) {
    const campo = document.getElementById(id);
    if (!campo) return;

    // Restaura o valor anterior
    const salvo = ler(id);
    if (salvo !== null && salvo !== "0") {
        campo.value = salvo;
    }

    campo.addEventListener("change", () => {
        let valor = Number(campo.value);

        // Mantém o valor entre 1 e 5
        if (valor < 1) valor = 1;
        if (valor > 5) valor = 5;

        campo.value = valor;
        salvar(id, valor);
    });
}

configurarCampoNumerico("memoria");
configurarCampoNumerico("tempo");


// ---------- PÁGINA 4: PREFERÊNCIA E MODALIDADE ----------

function configurarRadios(nome) {
    const radios = document.querySelectorAll('input[name="' + nome + '"]');

    radios.forEach(radio => {
        // Restaura a escolha anterior
        if (ler(nome) === radio.value) {
            radio.checked = true;
        }

        radio.addEventListener("change", () => {
            salvar(nome, radio.value);
        });
    });
}

configurarRadios("preferencia");
configurarRadios("modalidade");


// ---------- BOTÃO ENVIAR ----------

const botaoEnviar = document.getElementById("enviar");

if (botaoEnviar) {

    botaoEnviar.addEventListener("click", () => {

        // Validação: todos os campos obrigatórios precisam estar preenchidos
        const obrigatorios = {
            forca: "sua força (página 1)",
            memoria: "sua memória (página 3)",
            tempo: "seu tempo (página 3)",
            preferencia: "sua preferência de posição (página 4)",
            modalidade: "sua modalidade (página 4)"
        };

        for (const chave in obrigatorios) {
            const valor = ler(chave);
            if (valor === null || valor === "" || valor === "0") {
                alert("Faltou responder: " + obrigatorios[chave] + ".");
                return;
            }
        }

        const dados = {
            forca: ler("forca"),

            agressivo: ler("agressivo") === "true",
            defensivo: ler("defensivo") === "true",
            posicional: ler("posicional") === "true",
            tatico: ler("tatico") === "true",

            memoria: Number(ler("memoria")),
            tempo: Number(ler("tempo")),

            preferencia: ler("preferencia"),
            modalidade: ler("modalidade")
        };

        botaoEnviar.disabled = true;

        fetch("/Teste", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro do servidor: " + response.status);
                }
                return response.json();
            })
            .then(resposta => {
                const mensagem = "Abertura recomendada: " + resposta.resultado;

                // Se existir <p id="resultado"> na página, mostra lá; senão usa alert
                const areaResultado = document.getElementById("resultado");
                if (areaResultado) {
                    areaResultado.textContent = mensagem;
                } else {
                    alert(mensagem);
                }

                // Limpa as respostas para o próximo teste começar do zero
                localStorage.clear();
            })
            .catch(erro => {
                console.error(erro);
                alert("Não foi possível enviar o teste. Tente novamente.");
            })
            .finally(() => {
                botaoEnviar.disabled = false;
            });
    });
}