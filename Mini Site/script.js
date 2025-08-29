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
    const dataInicial = new Date("2024-11-30T00:00:00"); // Definindo a data de início



    function atualizarContador() {
        const agora = new Date();
        
        const diferencaMs = agora - dataInicial;

        let anos = agora.getFullYear() - dataInicial.getFullYear();

        if (agora.getMonth() < dataInicial.getMonth() || 
           (agora.getMonth() === dataInicial.getMonth() && agora.getDate() < dataInicial.getDate())) {
            anos--;
        }

        let meses = agora.getMonth() - dataInicial.getMonth();
        if (meses < 0) {
            meses += 12;
        }

        let dias = agora.getDate() - dataInicial.getDate();

        // Ajusta anos e meses se necessário
        if (dias < 0) {
            // Vai para o mês anterior
            meses--;
            const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
            dias += mesAnterior.getDate(); // Corrige os dias com base no mês anterior
        }
        

        // Horas
        const horas = Math.floor((diferencaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        // Minutos
        const minutos = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));

        // Segundos
        const segundos = Math.floor((diferencaMs % (1000 * 60)) / 1000);

        // Atualiza o conteúdo da página
        contadorElemento.textContent = 
            `${anos}a ${meses}m ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    // Atualiza a cada segundo
    setInterval(atualizarContador, 1000);
    atualizarContador(); // Atualiza imediatamente
}

// Inicia o contador automaticamente assim que a página carregar
window.onload = iniciarContadorDeData;
