let map;

// Função para mostrar o submenu do mapa
function mostrarSubmenu(tipo) {
    if (tipo === 'mapa') {
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
    mostrarSubmenu(tipo);
    setTimeout(function() {
        let conteudo = '';
        if (tipo === 'regras') {
            conteudo = `
                <h2>Regras Básicas</h2>
                <ul>
                    <li><img src="imagens/relogio.png" style="width: 20px; height: 20px; margin-right: 10px;">Respeitar os horários.</li>
                    <p>Aqui no SENAI, chegar e sair nos horários combinados é extremamente importante!</p>
                    <p>Além de te valorizar como aluno, demonstra respeito ao docente.</p>
                    <li><img src="imagens/logo.png" style="width: 20px; height: 20px; margin-right: 10px;">Utilizar uniforme e crachá todos os dias.</li>
                    <p>O uso do uniforme e crachá, em lugar visível, faz parte das regras indiscutíveis do SENAI.</p>
                </ul>
            `;
        } else if (tipo === 'contatos') {
            conteudo = `
                <div id='contatos'>
                <h1>Contatos do SENAI</h1>
                <h3>Dona Carla (ou Carlinha) - Setor de Apoio</h3>
                <p>+55 16 2106-8723</p>

                <h3>Marília - Setor de Apoio</h3>
                <p>+55 16 98159-0197</p>
                </div>
            `;
        } else if (tipo === 'duvidas') {
            conteudo = `
            <div id='duvidas' style="background-color: #f5f5f5; padding: 2rem; border-radius: 10px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); max-width: 800px; margin: 0 auto;">
                <h1 style="color: #d41508; font-size: 2.5rem; margin-bottom: 1rem; text-align: center;">Dúvidas Frequentes</h1>
                
                <div style="background-color: white; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                        <i class="fas fa-question-circle" style="color: #d41508; font-size: 1.8rem;"></i>
                        <h3 style="color: #333; font-size: 1.6rem; font-weight: 600; margin: 0;">1. O que é setor de apoio?</h3>
                    </div>
                    <p style="color: #555; line-height: 1.6; font-size: 1rem; margin-top: 0.5rem;">O setor de apoio é, literalmente, um local de apoio e acolhimento ao aluno. Você pode e deve procurá-lo sempre que tiver dúvidas sobre o funcionamento da escola. Além disso, em caso de problemas, sempre notifique o setor de apoio. Lá, você receberá orientações sobre o que fazer.</p>
                    <p style="color: #555; line-height: 1.6; font-size: 1rem; margin-top: 0.5rem;">Resumidamente, é um local onde você poderá ir sem medo de julgamentos. O acolhimento é certo!</p>
                </div>
        
                <div style="background-color: white; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                        <i class="fas fa-question-circle" style="color: #d41508; font-size: 1.8rem;"></i>
                        <h3 style="color: #333; font-size: 1.6rem; font-weight: 600; margin: 0;">2. Posso usar o celular no intervalo?</h3>
                    </div>
                    <p style="color: #555; line-height: 1.6; font-size: 1rem; margin-top: 0.5rem;">Não. Devido a preocupação dos docentes da escola com seus alunos, é permitido usar o celular na estrada e saída. Porém, o uso em sala de aula ou intervalos é, e continua sendo, extritamente proibido!</p>
                </div>
        
                <div style="background-color: white; border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                        <i class="fas fa-question-circle" style="color: #d41508; font-size: 1.8rem;"></i>
                        <h3 style="color: #333; font-size: 1.6rem; font-weight: 600; margin: 0;">3. Quantas faltas são permitidas?</h3>
                    </div>
                    <p style="color: #555; line-height: 1.6; font-size: 1rem; margin-top: 0.5rem;">É permitido faltar 25% de horas-aula. Porém, não é recomendado faltar com frequência. Não administre faltas, apenas deixe de vir se for necessário.</p>
                </div>
            </div>
            `;            
        
        } else if (tipo === 'apoio') {
            conteudo = "<div id='apoio'><h2>Contato de Apoio</h2><p>Para qualquer ajuda, entre em contato pelo e-mail <a href='mailto:support@senai.com.br'>support@senai.com.br</a></p></div>";
        }


        document.getElementById("informacao").innerHTML = conteudo;
        mostrarLoading(false);
    }, 1000); // Simula um carregamento de 1 segundo
}
//Function para o carrosel
/*
window.onload = function() {
    const images = document.querySelectorAll('.carrossel-img');
    let currentIndex = 0;
    
    images[currentIndex].classList.add('active');
    
    setInterval(function() {
        images[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % images.length;
        
        images[currentIndex].classList.add('active');
    }, 6000); // 6000 = 6 seg
};
*/