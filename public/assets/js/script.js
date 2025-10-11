
        // Service Data
        const services = [
            {
                icon: 'bx bx-laptop',
                title: 'Manutenção de Computadores',
                description: 'Formatação, limpeza interna, troca de peças e otimização do seu PC ou notebook.',
                features: ['Formatação', 'Limpeza', 'Upgrade', 'Otimização']
            },
            {
                icon: 'bx bx-mobile-alt',
                title: 'Reparo de Celulares',
                description: 'Troca de telas, baterias, conector de carga e conserto de placas para todos os modelos.',
                features: ['Troca de Tela', 'Baterias', 'Conector', 'Placas']
            },
            {
                icon: 'bx bx-wifi',
                title: 'Redes e Wi-Fi',
                description: 'Instalação e configuração de redes, roteadores, repetidores e solução de problemas de conexão.',
                features: ['Instalação', 'Configuração', 'Repetidores', 'Solução']
            },
            {
                icon: 'bx bx-hdd',
                title: 'Recuperação de Dados',
                description: 'Recuperamos seus arquivos importantes de HDs, SSDs, pen drives e cartões de memória.',
                features: ['HD/SSD', 'Pen Drive', 'Cartão', 'Backup']
            },
            {
                icon: 'bx bx-printer',
                title: 'Impressoras',
                description: 'Manutenção, limpeza, troca de cartuchos e configuração de impressoras de todos os modelos.',
                features: ['Manutenção', 'Limpeza', 'Cartuchos', 'Configuração']
            },
            {
                icon: 'bx bx-game',
                title: 'Consoles e Games',
                description: 'Reparo de PlayStation, Xbox, Nintendo Switch e outros consoles de videogame.',
                features: ['PlayStation', 'Xbox', 'Nintendo', 'Acessórios']
            }
        ];

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            setupBannerLED();
            loadServices();
            setupAppointmentForm();
            setupNavbarScroll();
            setupAnimations();
        });

        // Banner LED Effect
        function setupBannerLED() {
            const banner = document.querySelector('.floating-banner');
            const ledFollower = document.getElementById('led-follower');
            
            banner.addEventListener('mousemove', function(e) {
                const rect = banner.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Atualiza a posição do LED follower
                ledFollower.style.left = `${x}px`;
                ledFollower.style.top = `${y}px`;
            });
            
            banner.addEventListener('mouseleave', function() {
                ledFollower.style.opacity = '0';
            });

            banner.addEventListener('mouseenter', function() {
                ledFollower.style.opacity = '0.6';
            });
        }

        // Navbar Scroll Effect
        function setupNavbarScroll() {
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }

        // Load services dynamically
        function loadServices() {
            const servicesContainer = document.getElementById('services-container');
            
            services.forEach((service, index) => {
                const serviceCard = document.createElement('div');
                serviceCard.className = `service-card animate-slide-up`;
                serviceCard.style.animationDelay = `${0.1 + (index * 0.1)}s`;
                
                serviceCard.innerHTML = `
                    <div class="service-icon">
                        <i class="${service.icon}"></i>
                    </div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                    <div class="service-features">
                        ${service.features.map(feature => 
                            `<span class="feature-tag">${feature}</span>`
                        ).join('')}
                    </div>
                    <button class="btn btn-primary">
                        <i class='bx bx-info-circle'></i>
                        Solicitar Serviço
                    </button>
                `;
                
                servicesContainer.appendChild(serviceCard);
            });
        }

        // script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO MENU DE PERFIL ---
    const profilePic = document.getElementById('profile-pic');
    const profilePopup = document.getElementById('profile-popup');

    // Verifica se os elementos existem na página antes de adicionar os eventos
    if (profilePic && profilePopup) {
        
        // Abre/Fecha o pop-up quando o ícone do perfil é clicado
        profilePic.addEventListener('click', function(event) {
            // Impede que o clique se propague para outros elementos (como a 'window')
            event.stopPropagation(); 
            profilePopup.classList.toggle('active');
        });

        // Fecha o pop-up se o usuário clicar em qualquer outro lugar da página
        window.addEventListener('click', function(event) {
            if (profilePopup.classList.contains('active')) {
                profilePopup.classList.remove('active');
            }
        });
    }


    /* ===================================================================
      SEU OUTRO CÓDIGO JAVASCRIPT PODE CONTINUAR ABAIXO DESTA LINHA
    ===================================================================
    */

});

        // Setup appointment form
        function setupAppointmentForm() {
            const appointmentForm = document.getElementById('appointment-form');
            
            appointmentForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                const submitBtn = appointmentForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = 'Enviando...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="bx bx-check"></i> Agendamento Enviado!';
                    submitBtn.disabled = false;
                    
                    // Reset form after 3 seconds
                    setTimeout(() => {
                        appointmentForm.reset();
                        submitBtn.innerHTML = originalText;
                    }, 3000);
                }, 2000);
            });
        }

        // Setup scroll animations
        function setupAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe all animated elements
            document.querySelectorAll('.animate-slide-up, .animate-fade-in').forEach(el => {
                if (el.classList.contains('animate-slide-up')) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                } else if (el.classList.contains('animate-fade-in')) {
                    el.style.opacity = '0';
                }
                observer.observe(el);
            });
        }