const skills = [
  { name: 'Python', icon: 'python.svg', level: 85 },
  { name: 'C#', icon: 'csharp.svg', level: 80 },
  { name: 'Java', icon: 'java.svg', level: 83 },
  { name: 'JavaScript', icon: 'javascript.svg', level: 66 },
  { name: 'JavaSwing', icon: 'javaswing.svg', level: 80 },
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
    description: 'Realizado para la organización y administración de un gimnasio (disponible solo para Android), incluyendo el registro de miembros, perfiles personales con fotos, credenciales y seguimiento de asistencia diaria; registro de productos; control de ingresos y gastos; tienda de productos; y cierre mensual. Admite tanto el uso sin conexión como en línea, empleando SQLite para el almacenamiento local y Firebase para el almacenamiento remoto.',
    tags: ['.NET MAUI 10', 'C#', 'XAML', 'SQLite', 'FIREBASE', 'Android'],
    image: 'images/personal/gymsecret.png',
    link: 'https://github.com/andy1234254/GYM_MOBILE'
  },
  {
    title: 'CAVAMYM SYSTEM',
    description: 'Sistema de escritorio empresarial (privado) diseñado e implementado para gestionar productos, materias primas, ingresos, egresos, proveedores, personal y diversas operaciones administrativas especficas, incorporando validaciones de datos, controles de acceso y mecanismos de cifrado.',
    tags: ['Java', 'JavaSwing', 'MySQL', 'Windows'],
    image: 'images/personal/cavamym.png',
    link: null
  },
  {
    title: 'ACADEMIC SYSTEM',
    description: 'Este proyecto consiste en un sistema basado en la web orientado a la gestión y administración académica, que implementa funcionalidades tales como registro de usuarios, inicio de sesión basado en módulos o permisos, control de asistencia, generación de horarios, notificaciones, medidas de seguridad de datos para los usuarios, envio de correos electronicos personalizados y exportaciones en .PDF',
    tags: ['Django', 'Vue.js', 'MySQL', 'HTML', 'JavaScript', 'Python', 'Pagina Web'],
    image: 'images/personal/academic.png',
    link: 'https://github.com/andy1234254/ACADEMIC_SYSTEM_WEB'
  },
  {
    title: 'PROYECTOS PERSONALES',
    description: 'Proyectos y repositorios personales interesantes, creativos y desafiantes, diseñados con el objetivo de aprender nuevas tecnologias, mejorar habilidades de programación y explorar conceptos innovadores. ',
    tags: ['Mediapipe', 'Laravel', 'PHP', 'IA', 'TailwindCSS'],
    image: 'images/personal/personales.png',
    link: 'https://github.com/andy1234254?tab=repositories'
  }
];

const profile = {
  name: 'Andy Sangoquiza',
  title: '“Cualquier tecnología suficientemente avanzada es indistinguible de la magia”',
  author: 'Arthur C. Clarke',
  about: 'Soy un desarrollador con experiencia en interfaces modernas, arquitectura de software y soluciones orientadas al usuario. Me enfoco en crear productos que sean rápidos, visualmente sólidos y fáciles de escalar. Tengo experiencia programando en empresas, negocios y proyectos personales, entre los que incluye apps mobiles, de escritorio y web. Veo los retos y problemas como oportunidades para aprender, mejorar y optimizar experiencias digitales. Me agrada trabajar en un ambiente de confianza y respeto con el cliente y compañeros'
};

const mensajes = [
  'Hola 👋, soy un programador',
  'Estoy listo para trabajar en startups🦾',
  'Tambien puedo colaborar en proyectos freelance👨‍💻',
  'Si tienes un proyecto en mente, ¡hablemos!🤙',
  'Veo los retos como oportunidades para aprender🧘‍♂️',
  '¡Contáctame cuando quieras!📨',
  '¡Vamos a construir algo increíble juntos!🚀',
];

const contactos = [
  {
    name: 'Gmail',
    icon: 'gmail.svg',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=andy2005sangoquiza@gmail.com'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin.svg',
    href: 'https://www.linkedin.com/in/sangoquiza-caiza-andy-jahir-059130418'
  },
  {
    name: 'GitHub',
    icon: 'github.svg',
    href: 'https://github.com/andy1234254'
  }
];

const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const nameEl = document.getElementById('hero-name');
const descriptionEl = document.getElementById('hero-description');
const aboutCopy = document.getElementById('about-copy');

nameEl.textContent = profile.name;
descriptionEl.innerHTML = `<em>${profile.title}</em><br><span class="quote-author">${profile.author}</span>`;
aboutCopy.textContent = profile.about;

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

  const content = `
    <div class="project-card__overlay"></div>
    <div class="project-card__content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
      </div>
    </div>
  `;

  if (project.link) {
    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.className = 'project-link';
    link.innerHTML = content;
    card.appendChild(link);
  } else {
    card.innerHTML = content;
  }

  const overlay = card.querySelector('.project-card__overlay');
  if (overlay) {
    overlay.style.backgroundImage = `url('${project.image}')`;
  }

  projectsGrid.appendChild(card);
});

const contactNotification = document.getElementById('contact-notification');
const contactMessage = document.getElementById('contact-message');
const contactActions = document.getElementById('contact-actions');

contactos.forEach((contacto) => {
  const link = document.createElement('a');
  link.href = contacto.href;
  link.target = '_blank';
  link.rel = 'noreferrer';
  link.className = 'contact-option';
  link.innerHTML = `
    <img src="images/personal/${contacto.icon}" alt="${contacto.name}" class="contact-option__icon" />
    <span class="contact-option__name">${contacto.name}</span>
  `;
  contactActions.appendChild(link);
});

let currentMessageIndex = 0;

function mostrarMensaje(index) {
  if (!contactNotification || !contactMessage || mensajes.length === 0) return;

  const mensaje = mensajes[index];
  contactNotification.classList.remove('is-exiting');
  contactNotification.classList.add('is-visible');
  contactMessage.textContent = '';

  let charIndex = 0;
  const typingInterval = window.setInterval(() => {
    if (charIndex < mensaje.length) {
      contactMessage.textContent += mensaje.charAt(charIndex);
      charIndex += 1;
    } else {
      window.clearInterval(typingInterval);
      window.setTimeout(() => {
        contactNotification.classList.remove('is-visible');
        contactNotification.classList.add('is-exiting');

        window.setTimeout(() => {
          currentMessageIndex = (index + 1) % mensajes.length;
          mostrarMensaje(currentMessageIndex);
        }, 600);
      }, 3000);
    }
  }, 45);
}

window.setTimeout(() => {
  mostrarMensaje(currentMessageIndex);
}, 400);

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
