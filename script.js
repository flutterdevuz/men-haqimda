// Default Projects Database with GitHub Repositories & Working Icons
const CURRENT_DB_VERSION = "mk_v2_2026";

const DEFAULT_PROJECTS = [
    {
        id: "proj_1",
        title: "Sehat",
        category: "mobile",
        badge: "Flutter Mobile App",
        badgeType: "Mobile",
        description: "Aholi salomatligini kuzatish, shifokorlar bilan onlayn konsultatsiya va tibbiy eslatmalar uchun mo'ljallangan qulay mobil ilova.",
        techStack: "Flutter • Dart • Firebase",
        icon: "heart-pulse",
        theme: "purple",
        github: "https://github.com/flutterdevuz/sehat_mobile_app",
        link: "https://t.me/flutterdevuz_m"
    },
    {
        id: "proj_2",
        title: "Sehat Clinic",
        category: "web",
        badge: "CRM & Management System",
        badgeType: "Veb & Backend",
        description: "Tibbiyot klinikalari, bemorlar navbati, shifokorlar jadvali va to'lovlar hisob-kitobini avtomatlashtiruvchi kompleks boshqaruv tizimi (CRM).",
        techStack: "Backend API • Database • Dashboard",
        icon: "building-2",
        theme: "pink",
        github: "https://github.com/flutterdevuz/sehat_clinic_crm",
        link: "https://t.me/flutterdevuz_m"
    },
    {
        id: "proj_3",
        title: "Agrorent",
        category: "mobile",
        badge: "Agro-Tech Platform",
        badgeType: "Mobile & Veb",
        description: "Qishloq xo'jaligi texnikalarini qidirish, ijaraga berish va xizmat ko'rsatishni osonlashtiruvchi zamonaviy agro-bozor platformasi.",
        techStack: "Flutter • Geolocation • REST API",
        icon: "tractor",
        theme: "emerald",
        github: "https://github.com/flutterdevuz/agrorent_app",
        link: "https://t.me/flutterdevuz_m"
    },
    {
        id: "proj_4",
        title: "Sahhof",
        category: "web",
        badge: "E-Commerce Store",
        badgeType: "E-Commerce",
        description: "Kitob do'konlari va noshirlar uchun elektron savdo platformasi: qulay to'lov, yetkazib berish va kitoblar katalogi.",
        techStack: "Veb • To'lov tizimlari • Cart",
        icon: "shopping-bag",
        theme: "amber",
        github: "https://github.com/flutterdevuz/sahhof_store",
        link: "https://t.me/flutterdevuz_m"
    },
    {
        id: "proj_5",
        title: "E-Book",
        category: "mobile",
        badge: "Reader & Audio App",
        badgeType: "Mobile App",
        description: "Elektron kitoblarni qulay shrift va tungi rejimda o'qish, audio kitoblarni tinglash va shaxsiy kutubxona boshqarish ilovasi.",
        techStack: "Flutter • Audio Player • PDF Reader",
        icon: "book-open",
        theme: "blue",
        github: "https://github.com/flutterdevuz/ebook_reader_app",
        link: "https://t.me/flutterdevuz_m"
    },
    {
        id: "proj_6",
        title: "UI/UX & Brending",
        category: "design",
        badge: "Design Systems & UI",
        badgeType: "Dizayn",
        description: "Startaplar va bizneslar uchun zamonaviy mobil interfeyslar, logotip konsepsiyalari va to'liq brending vizual identikasi.",
        techStack: "Figma • Photoshop • Identity",
        icon: "figma",
        theme: "violet",
        github: "https://github.com/flutterdevuz/design-systems-ui",
        link: "https://t.me/flutterdevuz_m"
    }
];

// Load projects from localStorage or set defaults with version check
function getProjects() {
    const savedVersion = localStorage.getItem('mk_portfolio_version');
    const saved = localStorage.getItem('mk_portfolio_projects');
    
    if (saved && savedVersion === CURRENT_DB_VERSION) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Error parsing projects from localStorage", e);
        }
    }

    // Initialize or migrate to fresh defaults with GitHub repos
    localStorage.setItem('mk_portfolio_projects', JSON.stringify(DEFAULT_PROJECTS));
    localStorage.setItem('mk_portfolio_version', CURRENT_DB_VERSION);
    return DEFAULT_PROJECTS;
}

// Color Theme mapping with smooth ambient glow diffusion
const THEME_STYLES = {
    purple: {
        glow: "bg-purple-600/30",
        iconBox: "bg-purple-500/15 border-purple-500/30 text-purple-300",
        badge: "text-purple-300 bg-purple-950/80 border-purple-500/30",
        cardBorder: "hover:border-purple-500/50 hover:shadow-[0_15px_45px_rgba(168,85,247,0.25)]",
        titleHover: "group-hover:text-purple-300",
        tag: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        linkHover: "text-purple-400 hover:text-purple-300"
    },
    pink: {
        glow: "bg-pink-600/30",
        iconBox: "bg-pink-500/15 border-pink-500/30 text-pink-300",
        badge: "text-pink-300 bg-pink-950/80 border-pink-500/30",
        cardBorder: "hover:border-pink-500/50 hover:shadow-[0_15px_45px_rgba(236,72,153,0.25)]",
        titleHover: "group-hover:text-pink-300",
        tag: "text-pink-400 bg-pink-500/10 border-pink-500/20",
        linkHover: "text-pink-400 hover:text-pink-300"
    },
    emerald: {
        glow: "bg-emerald-600/30",
        iconBox: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
        badge: "text-emerald-300 bg-emerald-950/80 border-emerald-500/30",
        cardBorder: "hover:border-emerald-500/50 hover:shadow-[0_15px_45px_rgba(16,185,129,0.25)]",
        titleHover: "group-hover:text-emerald-300",
        tag: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        linkHover: "text-emerald-400 hover:text-emerald-300"
    },
    amber: {
        glow: "bg-amber-600/30",
        iconBox: "bg-amber-500/15 border-amber-500/30 text-amber-300",
        badge: "text-amber-300 bg-amber-950/80 border-amber-500/30",
        cardBorder: "hover:border-amber-500/50 hover:shadow-[0_15px_45px_rgba(245,158,11,0.25)]",
        titleHover: "group-hover:text-amber-300",
        tag: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        linkHover: "text-amber-400 hover:text-amber-300"
    },
    blue: {
        glow: "bg-blue-600/30",
        iconBox: "bg-blue-500/15 border-blue-500/30 text-blue-300",
        badge: "text-blue-300 bg-blue-950/80 border-blue-500/30",
        cardBorder: "hover:border-blue-500/50 hover:shadow-[0_15px_45px_rgba(59,130,246,0.25)]",
        titleHover: "group-hover:text-blue-300",
        tag: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        linkHover: "text-blue-400 hover:text-blue-300"
    },
    violet: {
        glow: "bg-violet-600/30",
        iconBox: "bg-violet-500/15 border-violet-500/30 text-violet-300",
        badge: "text-violet-300 bg-violet-950/80 border-violet-500/30",
        cardBorder: "hover:border-violet-500/50 hover:shadow-[0_15px_45px_rgba(139,92,246,0.25)]",
        titleHover: "group-hover:text-violet-300",
        tag: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        linkHover: "text-violet-400 hover:text-violet-300"
    }
};

// Custom SVG and Safe Icon rendering function (Ensures no card is ever empty)
function renderProjectIcon(iconName) {
    if (iconName === 'figma') {
        return `
        <svg class="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
        </svg>`;
    }
    const safeIcon = iconName || 'folder-git-2';
    return `<i data-lucide="${safeIcon}" class="w-8 h-8 transition-transform group-hover:scale-110"></i>`;
}

// Render Projects dynamically with seamless glow and direct GitHub links
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    const projects = getProjects();
    const statEl = document.getElementById('stat-projects');
    if (statEl) {
        statEl.textContent = `${projects.length}+`;
    }

    container.innerHTML = '';

    projects.forEach(project => {
        const theme = THEME_STYLES[project.theme] || THEME_STYLES.purple;
        const targetLink = project.link || 'https://t.me/flutterdevuz_m';
        const githubLink = project.github || 'https://github.com/flutterdevuz';

        const card = document.createElement('div');
        card.className = `project-card group relative rounded-3xl border border-white/10 bg-[#0e0e14]/90 backdrop-blur-2xl overflow-hidden transition-all duration-500 ${theme.cardBorder} hover:-translate-y-2 flex flex-col justify-between`;
        card.setAttribute('data-category', project.category);
        card.setAttribute('data-id', project.id);

        card.innerHTML = `
            <!-- Ambient Glow effect (Fades smoothly across card without harsh rectangular boundary) -->
            <div class="absolute -top-14 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full ${theme.glow} blur-[65px] opacity-40 group-hover:opacity-85 group-hover:scale-125 transition-all duration-700 pointer-events-none"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none"></div>

            <!-- Top Visual Area -->
            <div class="relative pt-10 pb-6 px-6 flex flex-col items-center justify-center text-center z-10">
                <div class="w-16 h-16 rounded-2xl ${theme.iconBox} border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-xl backdrop-blur-md">
                    ${renderProjectIcon(project.icon)}
                </div>
                <span class="text-[11px] font-bold uppercase tracking-wider ${theme.badge} px-4 py-1.5 rounded-full border shadow-sm backdrop-blur-md">
                    ${project.badge}
                </span>
            </div>

            <!-- Content Area -->
            <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10 border-t border-white/[0.06] bg-black/25">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2.5">
                        <h3 class="text-2xl font-bold text-white ${theme.titleHover} transition-colors">${project.title}</h3>
                        <span class="text-xs font-medium ${theme.tag} px-2.5 py-1 rounded-lg border">${project.badgeType || project.category}</span>
                    </div>
                    <p class="text-sm text-gray-400 leading-relaxed">${project.description}</p>
                </div>

                <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2 text-xs">
                    <span class="font-medium text-gray-400 truncate max-w-[130px] sm:max-w-[170px]" title="${project.techStack}">
                        ${project.techStack}
                    </span>
                    <div class="flex items-center gap-2 shrink-0">
                        ${githubLink ? `
                        <a href="${githubLink}" target="_blank" rel="noopener noreferrer" 
                           class="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 group/git" 
                           title="GitHub Repository">
                            <svg class="w-4 h-4 fill-current group-hover/git:scale-110 transition-transform" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                            </svg>
                        </a>` : ''}
                        <a href="${targetLink}" target="_blank" rel="noopener noreferrer" 
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 ${theme.linkHover} hover:border-purple-500/50 hover:bg-purple-500/20 font-semibold transition-all duration-300">
                            <span>Ko'rish</span>
                            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(card);
    });

    // Re-initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }
}

// Dynamic Experience & Year calculation
function updateDynamicExperience() {
    const currentYear = new Date().getFullYear();
    const startYear = 2024;
    const experienceYears = Math.max(2, currentYear - startYear);
    
    const expEl = document.getElementById('stat-experience');
    if (expEl) {
        expEl.textContent = `${experienceYears}+`;
    }

    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = currentYear;
    }
}

// Contact form validation helper
function validateContactValue(val) {
    const clean = val.trim();
    if (!clean) {
        return { valid: false, message: "Telefon raqam yoki Telegram username kiritish shart." };
    }

    // Telegram handle: @username (min 3 chars after @)
    if (clean.startsWith('@')) {
        const tgRegex = /^@[a-zA-Z0-9_]{3,32}$/;
        if (!tgRegex.test(clean)) {
            return { valid: false, message: "Telegram username noto'g'ri (kamida 4 ta belgi, masalan: @user_name)." };
        }
        return { valid: true };
    }

    // Phone number: allow digits, +, spaces, parentheses, dashes
    const digitsOnly = clean.replace(/[\s\-\(\)\+]/g, '');
    const isNumeric = /^\d+$/.test(digitsOnly);

    if (isNumeric && digitsOnly.length >= 9 && digitsOnly.length <= 15) {
        return { valid: true };
    }

    return { 
        valid: false, 
        message: "To'g'ri telefon raqam (+998...) yoki Telegram username (@username) kiriting." 
    };
}

// Attach live validation listeners to contact form
function setupFormValidation() {
    const nameInput = document.getElementById('sender-name');
    const contactInput = document.getElementById('sender-contact');
    const msgInput = document.getElementById('sender-msg');

    const nameError = document.getElementById('name-error');
    const contactError = document.getElementById('contact-error');
    const msgError = document.getElementById('msg-error');

    if (contactInput) {
        contactInput.addEventListener('input', () => {
            const res = validateContactValue(contactInput.value);
            if (!contactInput.value.trim()) {
                contactError.classList.add('hidden');
                contactInput.classList.remove('input-error', 'input-success');
            } else if (!res.valid) {
                contactError.textContent = res.message;
                contactError.classList.remove('hidden');
                contactInput.classList.add('input-error');
                contactInput.classList.remove('input-success');
            } else {
                contactError.classList.add('hidden');
                contactInput.classList.remove('input-error');
                contactInput.classList.add('input-success');
            }
        });
    }

    if (nameInput) {
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim().length >= 2) {
                nameError.classList.add('hidden');
                nameInput.classList.remove('input-error');
                nameInput.classList.add('input-success');
            }
        });
    }

    if (msgInput) {
        msgInput.addEventListener('input', () => {
            if (msgInput.value.trim().length >= 5) {
                msgError.classList.add('hidden');
                msgInput.classList.remove('input-error');
                msgInput.classList.add('input-success');
            }
        });
    }
}

// Contact Form Submit Handler with Validation
function handleContactSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById('sender-name');
    const contactInput = document.getElementById('sender-contact');
    const msgInput = document.getElementById('sender-msg');

    const nameError = document.getElementById('name-error');
    const contactError = document.getElementById('contact-error');
    const msgError = document.getElementById('msg-error');

    const name = nameInput.value.trim();
    const contact = contactInput.value.trim();
    const msg = msgInput.value.trim();

    let hasError = false;

    // Validate Name
    if (!name || name.length < 2) {
        nameError.textContent = "Iltimos, ismingizni kiriting (kamida 2 ta belgi).";
        nameError.classList.remove('hidden');
        nameInput.classList.add('input-error');
        hasError = true;
    } else {
        nameError.classList.add('hidden');
        nameInput.classList.remove('input-error');
    }

    // Validate Contact (Phone or Telegram)
    const contactValidation = validateContactValue(contact);
    if (!contactValidation.valid) {
        contactError.textContent = contactValidation.message;
        contactError.classList.remove('hidden');
        contactInput.classList.add('input-error');
        hasError = true;
    } else {
        contactError.classList.add('hidden');
        contactInput.classList.remove('input-error');
    }

    // Validate Message
    if (!msg || msg.length < 5) {
        msgError.textContent = "Iltimos, loyiha haqida qisqacha yozing (kamida 5 ta belgi).";
        msgError.classList.remove('hidden');
        msgInput.classList.add('input-error');
        hasError = true;
    } else {
        msgError.classList.add('hidden');
        msgInput.classList.remove('input-error');
    }

    if (hasError) return;

    // Format Message & Open Telegram
    const fullMessage = `Assalomu alaykum Muhammadsodiq!\n\nIsmim: ${name}\nAloqa: ${contact}\nLoyiha haqida: ${msg}`;
    const encodedMsg = encodeURIComponent(fullMessage);
    const telegramUrl = `https://t.me/flutterdevuz_m?text=${encodedMsg}`;

    window.open(telegramUrl, '_blank');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    updateDynamicExperience();
    renderProjects();
    setupFormValidation();

    if (window.lucide) {
        lucide.createIcons();
    }
});

// Listen for cross-tab or admin panel updates
window.addEventListener('storage', (e) => {
    if (e.key === 'mk_portfolio_projects') {
        renderProjects();
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const burgerLine1 = document.getElementById('burger-line-1');
const burgerLine2 = document.getElementById('burger-line-2');
let isMenuOpen = false;

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'scale-95', '-translate-y-3', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
            burgerLine1.style.transform = 'rotate(45deg) translateY(4px)';
            burgerLine2.style.transform = 'rotate(-45deg) translateY(-4px)';
        } else {
            mobileMenu.classList.add('opacity-0', 'scale-95', '-translate-y-3', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
            burgerLine1.style.transform = 'none';
            burgerLine2.style.transform = 'none';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('opacity-0', 'scale-95', '-translate-y-3', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
            burgerLine1.style.transform = 'none';
            burgerLine2.style.transform = 'none';
        });
    });
}

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
            b.classList.remove('active-filter');
            b.classList.add('inactive-filter');
        });
        btn.classList.add('active-filter');
        btn.classList.remove('inactive-filter');

        const filter = btn.getAttribute('data-filter');
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});
