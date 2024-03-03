// REFERÊNCIAS DOM
const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem-text');
const btnCopiar = document.querySelector('#btnCopiar');
const semMsg = document.querySelector('.sem-mensagem');
const btnEncriptador = document.querySelector('.btn-encriptar');
const btnDescriptador = document.querySelector('.btn-descriptar');

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// edição text-area da mensagem encriptada desativado
mensagem.disabled = true;

// FUNÇÕES
function btnEncriptar() {

    if (textArea.value === "") {
        message('Digite algum texto no campo!', 'warning')
        btnCopiar.classList.add('hidden');
        mensagem.classList.add('hidden');
        semMsg.classList.remove('hidden');
        textArea.focus();
    } else {
        const textoEncriptado = encriptar(textArea.value);

        mensagem.textContent = textoEncriptado;
        textArea.value = "";

        btnCopiar.classList.remove('hidden');
        mensagem.classList.remove('hidden');
        semMsg.classList.add('hidden');
    }
}
function btnDesencriptar() {

    if (textArea.value === "") {
        message('Digite algum texto no campo!', 'warning')
        btnCopiar.classList.add('hidden');
        mensagem.classList.add('hidden');
        semMsg.classList.remove('hidden');
        textArea.focus();
    } else {
        const textoEncriptado = desencriptar(textArea.value);

        mensagem.textContent = textoEncriptado;
        textArea.value = "";

        btnCopiar.classList.remove('hidden');
        mensagem.classList.remove('hidden');
        semMsg.classList.add('hidden');
    }
}

function btnClipboard() {
    const mensagem = document.querySelector('#mensagem').textContent;

    navigator.clipboard.writeText(mensagem)
        .then(() => {
            message('Texto copiado com sucesso!', 'success');
            textArea.focus();
        })
        .catch((error) => {
            console.error('Erro ao copiar texto: ', error);
            message('Erro ao copiar texto', 'error');
        });
}

function encriptar(string) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    string = string.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (string.includes(matrizCodigo[i][0])) {
            string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return string;
}

function desencriptar(string) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    string = string.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (string.includes(matrizCodigo[i][1])) {
            string = string.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return string;
}

function message(text, status) {
    Toastify({
        text: text,
        duration: 2000,
        style: {
            background: status === 'success' ? '#84cc16' : '#dc2626',
            boxShadow: 'none'
        }
    }).showToast()
}



// EVENTOS
btnEncriptador.addEventListener('click', btnEncriptar);
btnDescriptador.addEventListener('click', btnDesencriptar);

btnCopiar.addEventListener('click', btnClipboard);


