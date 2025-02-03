// Função para exibir ou ocultar o carregamento
function mostrarLoading(show) {
    if (show) {
        document.getElementById("loading").style.display = "block";
    } else {
        document.getElementById("loading").style.display = "none";
    }
}

function mostrarInformacoes(tipo) {
    mostrarLoading(true);
    setTimeout(function() {
        let conteudo = ''; // o conteúdo será preenchido com o que for inserido no botão do HTML
        
        if (tipo === 'mapa') {
            // Aqui você pode adicionar o mapa
        } 
        else if (tipo === 'regras') {
            conteudo = `
                <h2>Regras Básicas</h2>
                
                <ul>
                    <li><img src="imagens/relogio.png" style="width: 20px; height: 20px; margin-right: 10px;">Respeitar os horários.</li>
                    <p>Aqui no SENAI, chegar e sair nos horários combinados é extremamente importante!</p>
                    <p>Além de te valorizar como aluno, demonstra respeito ao docente.</p>
                    <li><img scr="logo.png" style="width: 20px; height: 20px; margin-right: 10px;">Utilizar uniforme e crachá todos os dias.</li>
                    <p>O uso do uniforme e crachá, em lugar visível, faz parte das regras indiscutíveis do SENAI.</p>
                </ul>
            `;
        } 
        else if (tipo === 'contatos') {
            conteudo = `
                <h2>Contatos de Emergência</h2>
            
                <p>Polícia: 190</p>
                <p>Bombeiros: 193</p>
                <p>Suporte Técnico: (XX) XXXX-XXXX</p>
            `;
        } 
        else if (tipo === 'duvidas') {
            conteudo = "<h2>Dúvidas Frequentes</h2><p>1. Como faço para me matricular?</p><p>2. Onde estão as salas de aula?</p><p>3. O que fazer em caso de emergência?</p>";
        } 
        else if (tipo === 'apoio') {
            conteudo = "<h2>Contato de Apoio</h2><p>Para qualquer ajuda, entre em contato pelo e-mail <a href='mailto:support@senai.com.br'>support@senai.com.br</a></p>";
        }
        
        // Atualizando o conteúdo da página com as informações
        document.getElementById("informacao").innerHTML = conteudo;
        mostrarLoading(false);
    }, 1000); // Simula um carregamento de 1 segundo
}
