// PÁGINA 1 — FORÇA
const radiosForca = document.querySelectorAll('input[name="forca"]');

radiosForca.forEach(radio => {

    radio.addEventListener("change", () => {

        localStorage.setItem("forca", radio.value);

    });

});


// PÁGINA 2 — ESTILO
const estilos = [
    "agressivo",
    "defensivo",
    "posicional",
    "tatico"
];

estilos.forEach(estilo => {

    const elemento = document.getElementById(estilo);

    if (elemento) {

        elemento.addEventListener("change", () => {

            localStorage.setItem(estilo, elemento.checked);

        });

    }

});


// PÁGINA 3 — MEMÓRIA E TEMPO
const memoria = document.getElementById("memoria");
const tempo = document.getElementById("tempo");

if (memoria) {

    memoria.addEventListener("change", () => {

        localStorage.setItem("memoria", memoria.value);

    });

}

if (tempo) {

    tempo.addEventListener("change", () => {

        localStorage.setItem("tempo", tempo.value);

    });

}


// PÁGINA 4 — PREFERÊNCIA
const preferencias = document.querySelectorAll('input[name="preferencia"]');

preferencias.forEach(preferencia => {

    preferencia.addEventListener("change", () => {

        localStorage.setItem("preferencia", preferencia.value);

    });

});


// PÁGINA 4 — MODALIDADE
const modalidades = document.querySelectorAll('input[name="modalidade"]');

modalidades.forEach(modalidade => {

    modalidade.addEventListener("change", () => {

        localStorage.setItem("modalidade", modalidade.value);

    });

});


// BOTÃO ENVIAR
const botaoEnviar = document.getElementById("enviar");

if (botaoEnviar) {

    botaoEnviar.addEventListener("click", () => {

        const dados = {

            forca: localStorage.getItem("forca"),

            agressivo: localStorage.getItem("agressivo") === "true",
            defensivo: localStorage.getItem("defensivo") === "true",
            posicional: localStorage.getItem("posicional") === "true",
            tatico: localStorage.getItem("tatico") === "true",

            memoria: Number(localStorage.getItem("memoria")),
            tempo: Number(localStorage.getItem("tempo")),

            preferencia: localStorage.getItem("preferencia"),

            modalidade: localStorage.getItem("modalidade")

        };

        fetch("/Teste", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(dados)

        })
            .then(response => response.text())
            .then(resultado => {

                console.log(resultado);

            });

    });

}