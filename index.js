
// Project data
const projectsData = {
    lottery: {
        title: 'Transactional SaaS Platform for Lottery Operations with Risk Engine',
        subtitle: 'Proyecto Profesional | Backend Engineer',

        summary: 'Plataforma SaaS multi-tenant desarrollada para la operación de bancas de lotería en República Dominicana, enfocada en procesamiento transaccional de alto volumen, control financiero y gestión de riesgo en tiempo real. El sistema integra ventas, caja, turnos y validaciones críticas, garantizando consistencia, idempotencia y trazabilidad completa.',
        architecture: [
            'Arquitectura multi-tenant con aislamiento por consorcio y sucursal',
            'Sistema transaccional para ventas, pagos y movimientos de caja',
            'Motor de riesgo en tiempo real con cálculo incremental de exposición',
            'API REST con Django REST Framework y validaciones a nivel de dominio',
            'Modelo de caja continua con periodos contables y conciliación automática',
            'Uso de Redis para caching y control de operaciones concurrentes'
        ],

        challenges: [
            'Manejo de concurrencia en ventas simultáneas evitando duplicados e inconsistencias',
            'Implementación de idempotencia en creación de tickets y pagos',
            'Cálculo del peor escenario financiero (worst-case) en tiempo real',
            'Diseño de un sistema de caja con conciliación obligatoria y trazabilidad completa',
            'Procesamiento de alto volumen sin degradar el rendimiento del sistema'
        ],

        technologies: ['Django', 'PostgreSQL', 'Redis', 'JavaScript', 'HTML', 'CSS'],

        results: [
            { value: '300–800', label: 'Tickets/min por servidor' },
            { value: '100%', label: 'Trazabilidad de operaciones' },
            { value: '0', label: 'Duplicados en operaciones críticas' }
        ]
    }
};

// Navigation scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
}

// Project filter
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.dataset.type === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Project modal
const projectModal = document.getElementById('projectModal');

function openProjectModal(projectId) {
    event.preventDefault();
    const project = projectsData[projectId];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalSubtitle').textContent = project.subtitle;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-section">
          <h4 class="modal-section-title">Resumen</h4>
          <p class="modal-section-content">${project.summary}</p>
        </div>
        <div class="modal-section">
          <h4 class="modal-section-title">Arquitectura</h4>
          <div class="modal-section-content">
            <ul>
              ${project.architecture.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="modal-section">
          <h4 class="modal-section-title">Retos Técnicos</h4>
          <div class="modal-section-content">
            <ul>
              ${project.challenges.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="modal-section">
          <h4 class="modal-section-title">Tecnologías</h4>
          <div class="modal-tech-stack">
            ${project.technologies.map(tech => `<span class="stack-tag">${tech}</span>`).join('')}
          </div>
        </div>
        <div class="modal-section">
          <h4 class="modal-section-title">Resultados</h4>
          <div class="modal-results">
            ${project.results.map(result => `
              <div class="result-card">
                <div class="result-value">${result.value}</div>
                <div class="result-label">${result.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Contact form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Te contactaré pronto.');
    contactForm.reset();
});
