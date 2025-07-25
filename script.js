document.addEventListener('DOMContentLoaded', function() {
    // Simulate system boot
    setTimeout(function() {
        document.querySelector('.terminal-loader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.terminal-loader').style.display = 'none';
            document.querySelector('.cyber-container').style.opacity = '1';
        }, 1000);
    }, 3500);

    // Terminal functionality
    const terminalInput = document.getElementById('terminal-command');
    const terminalOutput = document.querySelector('.terminal-output');
    const terminalWindow = document.querySelector('.terminal-window');
    const linksSection = document.getElementById('links-section');
    
    // Combined commands object
    const commands = {
        help: 'Available commands: about, skills, projects, portfolio, experience, contact, reference, clear',
        about: 'Displaying about section...',
        skills: 'Displaying skills section...',
        projects: 'Displaying projects section...',
        portfolio: function() {
        terminalOutput.innerHTML += '<p>> Accessing portfolio links...</p>';
        setTimeout(() => {
        // Hide terminal window
            if (terminalWindow) terminalWindow.style.display = 'none';

            // Show links section in the main content area
            if (linksSection) {
                // Move links section to main content area if needed
                const mainContent = document.querySelector('.cyber-main');
                if (linksSection.parentNode !== mainContent) {
                    mainContent.appendChild(linksSection);
                }

                linksSection.style.display = 'block';
                linksSection.style.animation = 'fadeIn 1s ease-in';

                // Activate the links section in navigation
                activateSection('links');
            }
        }, 300); // Reduced delay for better UX
    return '';
},
        experience: 'Displaying experience section...',
        contact: 'Displaying contact section...',
        reference: 'Displaying reference section...',
        clear: function() {
            terminalOutput.innerHTML = '<p>> Welcome to my security portfolio.</p><p>> Type \'help\' for available commands.</p>';
            return '';
        }
    };

    terminalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            let output = `<p>> ${command}</p>`;
            
            if (commands[command]) {
                if (typeof commands[command] === 'function') {
                    output += commands[command]();
                } else {
                    output += `<p>> ${commands[command]}</p>`;
                    
                    // Navigate to section if it exists
                    if (['about', 'skills', 'projects', 'portfolio', 'experience', 'contact', 'reference'].includes(command)) {
                        const targetLink = document.querySelector(`.nav-link[data-section="${command}"]`);
                        if (targetLink) {
                            targetLink.click();
                        }
                    }
                }
            } else {
                output += `<p>> Command not found. Type 'help' for available commands.</p>`;
            }
            
            terminalOutput.innerHTML += output;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            this.value = '';
        }
    });

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const navIndicator = document.querySelector('.nav-indicator');
    
    // Function to activate a section
    function activateSection(sectionId) {
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === sectionId);
        });
        
        // Update active section
        sections.forEach(section => {
            section.classList.toggle('active-section', section.id === sectionId);
        });
        
        // Update indicator position
        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
        if (activeLink && navIndicator) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = document.querySelector('.cyber-nav').getBoundingClientRect();
            navIndicator.style.width = `${linkRect.width}px`;
            navIndicator.style.left = `${linkRect.left - navRect.left}px`;
        }
        
        // Update URL without reload
        history.pushState(null, null, `#${sectionId}`);
    }
    
    // Click event for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.dataset.section;
            activateSection(targetSection);
            
            // Scroll to section
            const sectionElement = document.getElementById(targetSection);
            if (sectionElement) {
                window.scrollTo({
                    top: sectionElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            activateSection(hash);
            const sectionElement = document.getElementById(hash);
            if (sectionElement) {
                window.scrollTo({
                    top: sectionElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });

    // Scroll event to update active section (debounced)
    let isScrolling;
    window.addEventListener('scroll', function() {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    activateSection(section.id);
                }
            });
        }, 100);
    }, false);
    
    // Initialize
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        activateSection(hash);
    } else if (sections.length > 0) {
        activateSection(sections[0].id);
    }

    // Random security status updates
    function updateSecurityStatus() {
        const statusValues = document.querySelectorAll('.status-value');
        const statusBars = document.querySelectorAll('.active-bar');
        
        statusValues.forEach(value => {
            if (Math.random() > 0.9) {
                value.classList.toggle('active');
                value.textContent = value.classList.contains('active') ? 
                    ['ACTIVE', 'SECURE', 'ONLINE', 'ENABLED'][Math.floor(Math.random() * 4)] : 
                    ['INACTIVE', 'COMPROMISED', 'OFFLINE', 'DISABLED'][Math.floor(Math.random() * 4)];
            }
        });
        
        statusBars.forEach(bar => {
            if (Math.random() > 0.9) {
                const parentStatus = bar.closest('.status-item').querySelector('.status-value');
                if (parentStatus.classList.contains('active')) {
                    bar.style.width = '100%';
                    bar.style.backgroundColor = 'var(--primary)';
                } else {
                    bar.style.width = `${Math.random() * 30}%`;
                    bar.style.backgroundColor = '#ff3333';
                }
            }
        });
    }
    setInterval(updateSecurityStatus, 3000);
});
