let map;

function carregarPlanta(planta) {
  document.getElementById('informacao').innerHTML = `<h2>${planta}</h2>`;

  // Remove o mapa existente, se houver
  if (map) {
    map.remove();
    map = null;
  }

  // Inicializa o mapa corretamente com Leaflet
  map = L.map('map').setView([-22.003, -47.898], 18);

  // Define os limites (bounds) de cada planta
  let bounds;
  let imagem;

  if (planta === 'Piso Superior') {
    bounds = [
      [-22.004, -47.899],
      [-22.002, -47.897],
    ];
    imagem = 'imagens/area1superior.png';
  } else if (planta === 'Piso Inferior') {
    bounds = [
      [-22.002, -47.899],
      [-22.0, -47.897],
    ];
    imagem = 'imagens/area1inferior.png';
  } else if (planta === 'Bloco Geral') {
    bounds = [
      [-22.003, -47.896],
      [-22.001, -47.894],
    ];
    imagem = 'imagens/blocoB.png';
  }

  // Se houver uma imagem definida, adiciona ao mapa
  if (imagem) {
    L.imageOverlay(imagem, bounds).addTo(map);
  }

  // Adiciona controles de zoom corretamente
  L.control.zoom({ position: 'topright' }).addTo(map);

  // Desabilita zoom com scroll (opcional)
  map.scrollWheelZoom.disable();
}

function toggleAccordion(element) {
  let content = element.nextElementSibling;
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
