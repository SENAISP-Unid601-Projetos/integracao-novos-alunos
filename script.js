let map;

// Função para mostrar o submenu do mapa
function mostrarSubmenu(tipo) {
    if (tipo === 'mapa') {

        document.getElementById("links-importantes").innerHTML = "";
        document.getElementById("submenu-mapa").style.display = "block";
        document.getElementById("informacao").innerHTML = "";
        document.getElementById("map").style.display = "block"; // Mudança aqui
    } else {
        document.getElementById("submenu-mapa").style.display = "none";
        document.getElementById("map").style.display = "none";
    }
}

function carregarPlanta(planta) {
    mostrarLoading(true);
    document.getElementById("informacao").innerHTML = `<h2>Mapa do SENAI - ${planta}</h2>`;

    // Remove o mapa existente, se houver
    if (map) {
        map.remove();
        map = null;
    }

    // Inicializa o mapa
    map = L.map('map').setView([-22.003, -47.898], 18);

    // Define os limites (bounds) de cada planta
    let bounds;
    if (planta === 'pisoSuperior') {
        bounds = [[-22.004, -47.899], [-22.002, -47.897]]; // Ajuste conforme a planta
        L.imageOverlay('imagens/area1superior.png', bounds).addTo(map);
    } else if (planta === 'pisoInferior') {
        bounds = [[-22.002, -47.899], [-22.000, -47.897]]; // Ajuste conforme a planta
        L.imageOverlay('imagens/area1inferior.png', bounds).addTo(map);
    } else if (planta === 'blocoGeral') {
        bounds = [[-22.003, -47.896], [-22.001, -47.894]]; // Ajuste conforme a planta
        L.imageOverlay('imagens/blocoB.png', bounds).addTo(map);
    }

    // Adiciona controles de zoom
    map.addControl(L.control.zoom({ position: 'topright' }));

    // Desabilita zoom com scroll (opcional)
    map.scrollWheelZoom.disable();

    mostrarLoading(false);
}


// Função para exibir ou ocultar o carregamento
function mostrarLoading(show) {
    if (show) {
        document.getElementById("loading").style.display = "block";
    } else {
        document.getElementById("loading").style.display = "none";
    }
}

// Função para mostrar outras informações (regras, contatos, etc.)
function mostrarInformacoes(tipo) {
    mostrarLoading(true);
    setTimeout(function () {
        let conteudo = '';
        if (tipo === 'regras') {
            conteudo = `
                    <p style='border: dashed 2px red; padding: 15px; font-size:15px; color: #333'> No SENAI, temos muitas regras e todas elas são importantes. Mas fizemos aqui um resumo bem básico pra pra vocês se sentirem confiantes no início da sua jornada.<p>

                    <h2>Regras Básicas</h2>
                    
                    <img src="imagens/relogio.png" style="width: 20px; height: 20px; margin-right: 10px;">Respeitar os horários.
                    Aqui no SENAI, chegar e sair nos horários combinados é extremamente importante! Além de te valorizar como aluno, demonstra respeito ao docente.</p>

                    
                    <p>
                    <img src="imagens/logo.png" style="width: 20px; height: 20px; margin-right: 10px;">Utilizar uniforme e crachá todos os dias.

                    </p>

                    <p>O uso do uniforme e crachá, em lugar visível, faz parte das regras indiscutíveis do SENAI.</p>
        
            `;
        } else if (tipo === 'contatos') {
            conteudo = `
                <div id='contatos'>
                <h1>Contatos do SENAI</h1>
                <h3>Dona Carla (ou Carlinha) - Setor de Apoio</h3>
                <p>+55 16 2106-8723</p>

                <div class="alinhamentoCard">
                <div class="contato"><a class="numeroTelefone" href="https://wa.me/551621068723">
                <img class="imagemCard" src="imagens/carla.jpg">
                <h3>Carla (ou Carlinha)<br>Setor de Apoio</h3>
                <div class="iconeTelefone">
                <i class="fa fa-whatsapp" style="margin-right: 5px;"></i>
                <p class="corTexto">+55 16 2106-8723</p>
                </div>
            `;
        } else if (tipo === 'duvidas') {
            conteudo = `
            <h1>Dúvidas Frequentes</h1>
            <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion(this)">1. O que é setor de apoio?</div>
                <div class="accordion-content">
                    O setor de apoio é, literalmente, um local de apoio e acolhimento ao aluno. Você pode e deve procurá-lo sempre que tiver dúvidas sobre o funcionamento da escola. Além disso, em caso de problemas, sempre notifique o setor de apoio. Lá, você receberá orientações sobre o que fazer.
                    <br><br>
                    Resumidamente, é um local onde você poderá ir sem medo de julgamentos. O acolhimento é certo!
                </div>
            </div>
            <div class="accordion-item">
                <div class="accordion-header" onclick="toggleAccordion(this)">2. Posso usar o celular fora do horário de aula?</div>
                <div class="accordion-content">
                    Não. Devido à preocupação dos docentes da escola com seus alunos, é permitido usar o celular na entrada e saída. Porém, o uso em sala de aula ou intervalos é, e continua sendo, estritamente proibido!
                </div>
            </div>
        </div>
        `

        } else if (tipo === 'apoio') {
            conteudo = "<div id='apoio'><h2>Contato de Apoio</h2><p>Para qualquer ajuda, entre em contato pelo e-mail <a href='mailto:support@senai.com.br'>support@senai.com.br</a></p></div>";
        }

        document.getElementById("submenu-mapa").innerHTML = "";
        document.getElementById("map").style.display = "none";
        document.getElementById("links-importantes").innerHTML = "";
        document.getElementById("informacao").innerHTML = "";
        document.getElementById("informacao").innerHTML = conteudo;
        mostrarLoading(false);
    }, 1000); // Simula um carregamento de 1 segundo
}

function toggleAccordion(element) {
    let content = element.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
