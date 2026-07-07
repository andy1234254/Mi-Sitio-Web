const skills = [
  { name: 'Python', icon: 'python.svg', level: 85 },
  { name: 'C#', icon: 'csharp.svg', level: 80 },
  { name: 'Java', icon: 'java.svg', level: 83 },
  { name: 'JavaScript', icon: 'javascript.svg', level: 66 },
  { name: 'HTML', icon: 'html.svg', level: 78 },
  { name: 'CSS', icon: 'css.svg', level: 70 },
  { name: 'XAML', icon: 'xaml.svg', level: 80 },
  { name: 'PHP', icon: 'php.svg', level: 68 },
  { name: 'MySQL', icon: 'mysql.svg', level: 83 },
  { name: 'Firebase', icon: 'firebase.svg', level: 79 },
  { name: 'Redis', icon: 'redis.svg', level: 30 },
  { name: 'Django', icon: 'django.svg', level: 73 },
  { name: '.NET Framework', icon: 'netframework.svg', level: 82 },
  { name: 'Node.js', icon: 'nodejs.svg', level: 60 },
  { name: 'Laravel', icon: 'laravel.svg', level: 20 },
  { name: 'Git', icon: 'git.svg', level: 78 },
  { name: 'Postman', icon: 'postman.svg', level: 40 },
  { name: 'Visual Studio Code', icon: 'visualcode.svg', level: 85 },
  { name: 'Visual Studio', icon: 'visualstudio.svg', level: 87 },
  { name: 'NetBeans', icon: 'netbeans.svg', level: 80 },
  { name: 'Android Studio', icon: 'androidstudio.svg', level: 40 },
  { name: 'Windows', icon: 'windows.svg', level: 90 },
  { name: 'Ubuntu', icon: 'ubuntu.svg', level: 70 },
  { name: 'Android', icon: 'android.svg', level: 83 },
  { name: 'VirtualBox', icon: 'virtualbox.svg', level: 72 },
  { name: 'Web Development', icon: 'webdev.svg', level: 76 },
  { name: 'Gemini', icon: 'gemini.svg', level: 93 },
  { name: 'GitHub Copilot', icon: 'copilot.svg', level: 90 },
  { name: 'Frontend', icon: 'fronted.svg', level: 86 },
  { name: 'Backend', icon: 'backend.svg', level: 70 },
  { name: 'Español', icon: 'ecuador.svg', level: 100 },
  { name: 'Ingles', icon: 'usa.svg', level: 50 }
];

const projects = [
  {
    title: 'GYM SECRET MOBILE',
    description: 'Dashboard interactivo para seguimiento de métricas en tiempo real.',
    tags: ['.NET MAUI 10', 'C#', 'XAML', 'SQLite', 'FIREBASE']
  },
  {
    title: 'CAVAMYM SYSTEM',
    description: 'Experiencia de compra con diseño premium y flujo optimizado.',
    tags: ['Java', 'JavaSwing', 'MySQL']
  },
  {
    title: 'ACADEMIC SYSTEM',
    description: 'Herramienta para automatizar procesos y responder consultas de negocio.',
    tags: ['Django', 'Vue.js', 'MySQL', 'HTML', 'JavaScript', 'Python']
  },
  {
    title: 'PROYECTOS PERSONALES',
    description: 'Sistema modular para controlar equipos, tareas y reportes operativos.',
    tags: ['Mediapipe', 'Laravel', 'PHP', 'IA', 'TailwindCSS']
  }
];

const profile = {
  name: 'Andy Sangoquiza',
  title: '“Cualquier tecnología suficientemente avanzada es indistinguible de la magia”',
  author: 'Arthur C. Clarke',
  about: 'Soy un desarrollador con experiencia en interfaces modernas, arquitectura de software y soluciones orientadas al usuario. Me enfoco en crear productos que sean rápidos, visualmente sólidos y fáciles de escalar. Tengo experiencia programando en empresas, negocios y proyectos personales, entre los que incluye apps mobiles, de escritorio y web. Veo los retos y problemas como oportunidades para aprender, mejorar y optimizar experiencias digitales. Me agrada trabajar en un ambiente de confianza y respeto con el cliente y compañeros',
  contact: 'Estoy listo para colaborar en startups, equipos de producto o proyectos freelance. Escribeme y hablemos de tu próxima idea.'
};

const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const nameEl = document.getElementById('hero-name');
const descriptionEl = document.getElementById('hero-description');
const aboutCopy = document.getElementById('about-copy');
const contactCopy = document.getElementById('contact-copy');
const contactLinks = document.getElementById('contact-links');

nameEl.textContent = profile.name;
descriptionEl.innerHTML = `<em>${profile.title}</em><br><span class="quote-author">${profile.author}</span>`;
aboutCopy.textContent = profile.about;
contactCopy.textContent = profile.contact;

skills.forEach((skill) => {
  const card = document.createElement('article');
  card.className = 'card skill-card';
  card.innerHTML = `
    <div class="skill-header">
      <img src="images/skills/${skill.icon}" alt="${skill.name}" class="skill-icon" />
      <div class="skill-meta">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-level">${skill.level}%</span>
      </div>
    </div>
    <div class="bar"><span style="width:${skill.level}%;"></span></div>
  `;
  skillsGrid.appendChild(card);
});

projects.forEach((project) => {
  const card = document.createElement('article');
  card.className = 'card project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tags">
      ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
    </div>
  `;
  projectsGrid.appendChild(card);
});

const links = [
  { label: 'Email', href: 'mailto:andy2005sangoquiza@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sangoquiza-caiza-andy-jahir-059130418' },
  { label: 'GitHub', href: 'https://github.com/andy1234254'}
];

links.forEach((link) => {
  const anchor = document.createElement('a');
  anchor.href = link.href;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer';
  anchor.textContent = link.label;
  contactLinks.appendChild(anchor);
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => observer.observe(item));

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
