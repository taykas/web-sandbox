let changeColorL = () => {
    let view_text_l = document.getElementById("view-text-box-left");
    
    if (view_text_l.classList.contains("hidden")) {
        view_text_l.classList.remove("hidden")
        view_text_l.classList.add("text-left")
    } else {
        view_text_l.classList.remove("text-left")
        view_text_l.classList.add("hidden")
    }
    
}

let changeColorR = () => {
    let view_text = document.getElementById("view-text-box-right");
    
    if (view_text.classList.contains("hidden")) {
        view_text.classList.remove("hidden")
        view_text.classList.add("text-right")
    } else {
        view_text.classList.remove("text-right")
        view_text.classList.add("hidden")
    }
    
}

// contador.js
// contador.js

function iniciarContadorDeData() {
    const contadorElemento = document.getElementById('contador');
    if (!contadorElemento) {
        console.error('Elemento com id="contador" não encontrado.');
        return;
    }

    // Data de início
    const dataInicial = new Date("2024-11-30T00:00:00");

    function atualizarContador() {
        const agora = new Date();

        // Se a data inicial ainda não chegou
        if (agora < dataInicial) {
            contadorElemento.textContent = "Aguardando data inicial...";
            return;
        }

        // Diferença em milissegundos
        const diferencaMs = agora - dataInicial;

        // Calcular anos, meses e dias
        let anos = agora.getFullYear() - dataInicial.getFullYear();
        let meses = agora.getMonth() - dataInicial.getMonth();
        let dias = agora.getDate() - dataInicial.getDate();

        // Ajustar dias e meses quando negativo
        if (dias < 0) {
            meses--;
            const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
            dias += mesAnterior.getDate();
        }

        if (meses < 0) {
            anos--;
            meses += 12;
        }

        // Calcular horas, minutos e segundos
        const horas = Math.floor((diferencaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);

        // Função para sempre mostrar 2 dígitos
        const pad = n => String(n).padStart(2, '0');

        // Atualiza o texto
        contadorElemento.textContent =
            `${anos}a ${meses}m ${dias}d ${pad(horas)}h ${pad(minutos)}m ${pad(segundos)}s`;
    }

    // Atualiza a cada segundo
    atualizarContador();
    setInterval(atualizarContador, 1000);
}

// Garante que só inicie depois que a página carregar
document.addEventListener("DOMContentLoaded", iniciarContadorDeData);
