// Default Projects Database
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
        link: "https://t.me/flutterdevuz_m"
    }
];

// Load projects from localStorage or set defaults
function getProjects() {
    const saved = localStorage.getItem('mk_portfolio_projects');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Error parsing projects from localStorage", e);
        }
    }
    localStorage.setItem('mk_portfolio_projects', JSON.stringify(DEFAULT_PROJECTS));
    return DEFAULT_PROJECTS;
}

// Color Theme mapping
const THEME_STYLES = {
    purple: {
        gradient: "from-purple-900/60 via-violet-950/80 to-slate-900",
        overlay: "bg-purple-500/10",
        iconBox: "bg-purple-500/20 border-purple-500/30 text-purple-300",
        badge: "text-purple-300 bg-purple-950/80 border-purple-500/20",
        cardBorder: "hover:border-purple-500/50 hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)]",
        titleHover: "group-hover:text-purple-300",
        tag: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        linkHover: "text-purple-400"
    },
    pink: {
        gradient: "from-pink-950/60 via-purple-950/80 to-slate-900",
        overlay: "bg-pink-500/10",
        iconBox: "bg-pink-500/20 border-pink-500/30 text-pink-300",
        badge: "text-pink-300 bg-pink-950/80 border-pink-500/20",
        cardBorder: "hover:border-pink-500/50 hover:shadow-[0_20px_50px_rgba(236,72,153,0.2)]",
        titleHover: "group-hover:text-pink-300",
        tag: "text-pink-400 bg-pink-500/10 border-pink-500/20",
        linkHover: "text-pink-400"
    },
    emerald: {
        gradient: "from-emerald-950/60 via-teal-950/80 to-slate-900",
        overlay: "bg-emerald-500/10",
        iconBox: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
        badge: "text-emerald-300 bg-emerald-950/80 border-emerald-500/20",
        cardBorder: "hover:border-emerald-500/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]",
        titleHover: "group-hover:text-emerald-300",
        tag: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        linkHover: "text-emerald-400"
    },
    amber: {
        gradient: "from-amber-950/60 via-orange-950/80 to-slate-900",
        overlay: "bg-amber-500/10",
        iconBox: "bg-amber-500/20 border-amber-500/30 text-amber-300",
        badge: "text-amber-300 bg-amber-950/80 border-amber-500/20",
        cardBorder: "hover:border-amber-500/50 hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)]",
        titleHover: "group-hover:text-amber-300",
        tag: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        linkHover: "text-amber-400"
    },
    blue: {
        gradient: "from-blue-950/60 via-indigo-950/80 to-slate-900",
        overlay: "bg-blue-500/10",
        iconBox: "bg-blue-500/20 border-blue-500/30 text-blue-300",
        badge: "text-blue-300 bg-blue-950/80 border-blue-500/20",
        cardBorder: "hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]",
        titleHover: "group-hover:text-blue-300",
        tag: "text-blue-400 bg-blue-500/10 border-blue-500/20",
        linkHover: "text-blue-400"
    },
    violet: {
        gradient: "from-violet-950/60 via-fuchsia-950/80 to-slate-900",
        overlay: "bg-violet-500/10",
        iconBox: "bg-violet-500/20 border-violet-500/30 text-violet-300",
        badge: "text-violet-300 bg-violet-950/80 border-violet-500/20",
        cardBorder: "hover:border-violet-500/50 hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)]",
        titleHover: "group-hover:text-violet-300",
        tag: "text-violet-400 bg-violet-500/10 border-violet-500/20",
        linkHover: "text-violet-400"
    }
};

// Render Projects dynamically
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
        const iconName = project.icon || 'folder';
        const targetLink = project.link || 'https://t.me/flutterdevuz_m';

        const card = document.createElement('div');
        card.className = `project-card group rounded-3xl border border-white/10 bg-[#101015] overflow-hidden transition-all duration-500 ${theme.cardBorder} hover:-translate-y-2 flex flex-col`;
        card.setAttribute('data-category', project.category);
        card.setAttribute('data-id', project.id);

        card.innerHTML = `
            <div class="relative h-56 sm:h-64 bg-gradient-to-tr ${theme.gradient} flex items-center justify-center p-6 overflow-hidden">
                <div class="absolute inset-0 ${theme.overlay} group-hover:scale-110 transition-transform duration-700"></div>
                <div class="relative z-10 text-center">
                    <div class="w-16 h-16 rounded-2xl ${theme.iconBox} border flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                        <i data-lucide="${iconName}" class="w-8 h-8"></i>
                    </div>
                    <span class="text-xs font-bold uppercase tracking-widest ${theme.badge} px-3.5 py-1.5 rounded-full border shadow-sm">${project.badge}</span>
                </div>
            </div>
            <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2.5">
                        <h3 class="text-2xl font-bold text-white ${theme.titleHover} transition-colors">${project.title}</h3>
                        <span class="text-xs font-medium ${theme.tag} px-2.5 py-1 rounded-lg border">${project.badgeType || project.category}</span>
                    </div>
                    <p class="text-sm text-gray-400 leading-relaxed">${project.description}</p>
                </div>
                <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                    <span class="font-medium text-gray-300 truncate max-w-[200px]">${project.techStack}</span>
                    <a href="${targetLink}" target="_blank" rel="noopener noreferrer" 
                       class="${theme.linkHover} font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
                        Ko'rish <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </a>
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

// Dynamic Experience & Year calculation (auto-increments every year on January 1st)
function updateDynamicExperience() {
    const currentYear = new Date().getFullYear();
    const startYear = 2024; // Started in 2024 -> In 2026 = 2+ years, In 2027 (from Jan 1) = 3+ years
    const experienceYears = Math.max(2, currentYear - startYear);
    
    // Update experience stat counter
    const expEl = document.getElementById('stat-experience');
    if (expEl) {
        expEl.textContent = `${experienceYears}+`;
    }

    // Update footer copyright year
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = currentYear;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    updateDynamicExperience();
    renderProjects();

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

// Contact Form Submit Handler
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('sender-name').value.trim();
    const contact = document.getElementById('sender-contact').value.trim();
    const msg = document.getElementById('sender-msg').value.trim();

    if (!name || !contact || !msg) {
        alert("Iltimos, barcha maydonlarni to'ldiring.");
        return;
    }

    const fullMessage = `Assalomu alaykum Muhammadsodiq!\n\nIsmim: ${name}\nAloqa: ${contact}\nLoyiha haqida: ${msg}`;
    const encodedMsg = encodeURIComponent(fullMessage);
    const telegramUrl = `https://t.me/flutterdevuz_m?text=${encodedMsg}`;

    window.open(telegramUrl, '_blank');
}
