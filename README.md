# virtual-cv
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virtual Resume</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;600&family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Terminal Loader -->
    <div class="terminal-loader">
        <div class="terminal-header">
            <div class="terminal-title">boot_sequence.exe</div>
            <div class="terminal-controls">
                <span class="control close"></span>
                <span class="control minimize"></span>
                <span class="control maximize"></span>
            </div>
        </div>
        <div class="terminal-body">
            <p class="terminal-text"> Initializing security protocols...</p>
            <p class="terminal-text"> Loading portfolio interface...</p>
            <p class="terminal-text"> Establishing secure connection...</p>
            <div class="progress-bar"></div>
        </div>
    </div>

    <!-- Main Interface -->
    <div class="cyber-container">
        <!-- Left Sidebar - Hacker Terminal -->
        <aside class="cyber-sidebar">
            <div class="terminal-window">
                <div class="terminal-header">
                    <div class="terminal-title">Porfolio Land</div>
                </div>
                <div class="terminal-body" id="interactive-terminal">
                    <div class="terminal-output">
                        <p> Welcome to my security portfolio.</p>
                        <p> Type 'portfolio' to access projects.</p>
                    </div>
                    <div class="terminal-input">
                        <span class="prompt">abigail.</span>
                        <input type="text" id="terminal-command" autocomplete="off" spellcheck="true">
                    </div>
                </div>
            </div>
        </aside>
        <section id="links-section" class="content-section" style="display:none;">
            <h2 class="section-title">Important Links</h2>
            <div class="link-content">
              <a href="https://github.com/yourusername" target="_blank" class="cyber-link">GitHub</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" class="cyber-link">LinkedIn</a>
              <a href="your-resume.pdf" download class="cyber-link">Download Resume</a>
            </div>
          </section>
        </div>

        <!-- Main Content Area -->
        <main class="cyber-main">
            <!-- Navigation -->
            <nav class="cyber-nav">
                <ul>
                    <li><a href="#about" class="nav-link active" data-section="about">[about_me]</a></li>
                    <li><a href="#skills" class="nav-link active" data-section="skills">[skills]</a></li>
                    <li><a href="#experience" class="nav-link active" data-section="experience">[experience]</a></li>
                    <li><a href="#links" class="nav-link active" data-section="links">[links]</a></li>
                </ul>
                <div class="nav-indicator"></div>
            </nav>

            <!-- Content Sections -->
            <section id="about" class="content-section active-section">
                <h2 class="section-title"> About_me</h2>
                <div class="hexagon-profile">
                    <div class="hexagon-inner">
                        <img src="Picture1.jpg" alt="Security Professional">
                    </div>
                </div>
                <div class="about-content">
                    <p class="typewriter">Hello, I'm <span class="highlight">Abigail Tshiamo Rebaone Kgosiemang</span></p>
                    <p> A cybersecurity enthusiast; learning penetration testing, network security, and threat analysis.</p>
                    <div class="about-details">
                        <div class="detail-item">
                            <span class="detail-label"> CURRENT_ROLE:</span>
                            <span class="detail-value">Student at the North West University</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label"> CERTIFICATIONS:</span>
                            <span class="detail-value">FortiNet, Simplilearn, CYBRARY,TryHackMe: [Beginner to SOC Pathway]</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label"> SPECIALTIES:</span>
                            <span class="detail-value">Threat monitoring • Log Analysis • Threat intelligence</span>
                        </div>
                        <div class="professional-summary">
                        <div class="professional-summary-item">
                            <span class="detail-label"> Professional Summary</span>
                            <span class="detail-value">Motivated IT graduate with no professional experience. Adept at identifying and responding to technical issues with a stron passion for security operationa and a career goal of becoming a SOC Analyst. Eager to apply technical knowledge and problem solving skills in a fast-paced environment </span>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="skills" class="content-section">
                <h2 class="section-title">Technical Skills</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>IT & Technical Skills</h3>
                        <ul class="skill-list">
                            <li>
                                <span class="skill-name">Helpdesk/IT Support</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 90%"></div>
                                </div>
                            </li>
                            <li>
                                <span class="skill-name">Windows & Linux OS</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 55%"></div>
                                </div>
                            </li>
                            <li>
                                <span class="skill-name">Network Monitoring and Troubleshooting</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 60%"></div>
                                </div>
                            </li>
                            <li>
                                <span class="skill-name">Python</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 68%"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <h2 class="section-title" style="margin-top: 40px;">Soft Skills</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Interpersonal Skills</h3>
                        <ul class="skill-list">
                            <li>
                                <span class="skill-name">Problem Solving</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 90%"></div>
                                </div>
                            </li>
                            <li>
                                <span class="skill-name">Communication Skills</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 85%"></div>
                                </div>
                            </li>
                            <li>
                                <span class="skill-name">Teamwork and Collaboration</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 60%"></div>
                                </div>
                            </li>
                            <li>
                                <span class="skill-name">Adaptability</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 68%"></div>
                                </div>
                            </li>
                            <li>
                                <span class="skill-name">Time Management</span>
                                <div class="skill-meter">
                                    <div class="skill-level" style="width: 55%"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        
            <section id="experience" class="content-section">
                <h2 class="section-title"> Experience</h2>
                <div class="experience-content">
                    <p class="typewriter">I have none. Hoping to gain more by working with  <span class="highlight"> YOU </span> </p>   
                </div>
                    
                
            </section>
            
            <section id="links" class="content-section">
                <h2 class="section-title"> Links</h2>
                <div class="link-content">
                    <ul>
                        <li>
                            <a href="https://github.com/rebArt05" target="_blank" class="cyber-link">GitHub</a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/abigail-kgosiemang-6735a2320" target="_blank" class="cyber-link">LinkedIn</a>
                        </li>
                        <li>
                            <a href="CURRICULUM%20VITAE.pdf" download class="cyber-link">Download CV</a>
                
                        </li>
                    </ul>
                        
                </div>
                    
                
            </section>
             
            <!-- system status block -->
        </main>
    
        <aside class="cyber-sidebar">
            <div class="security-status">
                <h3>SYSTEM STATUS</h3>
                <div class="status-item">
                    <span class="status-label">Firewall:</span>
                    <span class="status-value active">ACTIVE</span>
                    <div class="status-visual">
                        <div class="active-bar" style="width: 100%"></div>
                    </div>
                </div>
                <div class="status-item">
                    <span class="status-label">Encryption:</span>
                    <span class="status-value active">AES-256</span>
                    <div class="status-visual">
                        <div class="active-bar" style="width: 100%"></div>
                    </div>
                </div>
                <div class="status-item">
                    <span class="status-label">Threat Detection:</span>
                    <span class="status-value active">ONLINE</span>
                    <div class="status-visual">
                        <div class="active-bar" style="width: 100%"></div>
                    </div>
                </div>
            </div>
            </aside>
    <!-- Connection Status Indicator -->
    <div class="connection-status">
        <span class="status-dot"></span>
        <span class="status-text">SECURE CONNECTION ESTABLISHED</span>
    </div>
    
    
    <script src="script.js"></script>
</body>
</html>
