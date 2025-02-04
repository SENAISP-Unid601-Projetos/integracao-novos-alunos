 // Carrossel
 class Carousel {
    constructor(container) {
        this.container = container;
        this.items = container.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.container.querySelector('.prev').addEventListener('click', () => this.prev());
        this.container.querySelector('.next').addEventListener('click', () => this.next());
        this.update();
    }

    update() {
        this.items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });
        this.container.querySelector('.carousel-inner').style.transform = 
            `translateX(-${this.currentIndex * 100}%)`;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.update();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.update();
    }
}

// Menu Mobile
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    new Carousel(document.querySelector('.carousel'));
    
    // Adicione aqui a inicialização do mapa Leaflet
    // Exemplo básico:
    const map = L.map('map').setView([-22.0089, -47.8902], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
});