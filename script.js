// ========================================
// Gallery Data
// ========================================
const artworks = [
    {
        id: 1,
        title: "Golden Horizons",
        description: "An exploration of warmth and light across desert landscapes, capturing the eternal dance between earth and sky.",
        year: 2024,
        category: "paintings",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=750&fit=crop)"
    },
    {
        id: 2,
        title: "Silent Contemplation",
        description: "A charcoal study of human introspection, revealing the quiet depths of solitary thought.",
        year: 2023,
        category: "sketch",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&h=750&fit=crop)"
    },
    {
        id: 3,
        title: "Digital Dreams",
        description: "Where technology meets imagination, creating new realms of visual possibility.",
        year: 2024,
        category: "digital",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=750&fit=crop)"
    },
    {
        id: 4,
        title: "Monsoon Memories",
        description: "The first rains of summer, captured in flowing oils that mirror the rhythm of falling water.",
        year: 2023,
        category: "paintings",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&h=750&fit=crop)"
    },
    {
        id: 5,
        title: "Portrait Study VII",
        description: "An intimate graphite exploration of expression and emotion in the human face.",
        year: 2022,
        category: "sketch",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=750&fit=crop)"
    },
    {
        id: 6,
        title: "Neon Nostalgia",
        description: "A digital tribute to the electric nights of urban landscapes, glowing with memory.",
        year: 2024,
        category: "digital",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?w=600&h=750&fit=crop)"
    },
    {
        id: 7,
        title: "Jaipur Evenings",
        description: "The pink city bathed in twilight gold, a celebration of architectural heritage.",
        year: 2023,
        category: "paintings",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=600&h=750&fit=crop)"
    },
    {
        id: 8,
        title: "Hands of Time",
        description: "Detailed pencil work capturing the stories written in weathered hands.",
        year: 2021,
        category: "sketch",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=600&h=750&fit=crop)"
    },
    {
        id: 9,
        title: "Abstract Dimensions",
        description: "Digital manipulation creates impossible geometries that challenge perception.",
        year: 2024,
        category: "digital",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1634017839464-5c339ez94b4f?w=600&h=750&fit=crop)"
    },
    {
        id: 10,
        title: "Autumn Reflections",
        description: "Oil on canvas depicting the mirror-still waters of a forest lake in fall.",
        year: 2022,
        category: "paintings",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1578926288207-32356a4e23ff?w=600&h=750&fit=crop)"
    },
    {
        id: 11,
        title: "Motion Study",
        description: "Capturing movement through rapid charcoal strokes that freeze time.",
        year: 2023,
        category: "sketch",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=600&h=750&fit=crop)"
    },
    {
        id: 12,
        title: "Cyber Flora",
        description: "Organic forms reimagined through digital evolution, nature meets algorithm.",
        year: 2024,
        category: "digital",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&h=750&fit=crop)"
    },
    {
        id: 13,
        title: "Village Morning",
        description: "The gentle awakening of rural India, painted in soft morning light.",
        year: 2021,
        category: "paintings",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=600&h=750&fit=crop)"
    },
    {
        id: 14,
        title: "Architectural Lines",
        description: "Precision sketching of traditional Rajasthani architecture.",
        year: 2022,
        category: "sketch",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1582201957428-5e86e61a5d51?w=600&h=750&fit=crop)"
    },
    {
        id: 15,
        title: "Chromatic Dreams",
        description: "Pure color exploration in digital space, an emotional spectrum.",
        year: 2023,
        category: "digital",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&h=750&fit=crop)"
    },
    {
        id: 16,
        title: "Desert Caravan",
        description: "A timeless scene of traders crossing the Thar, rendered in rich earth tones.",
        year: 2020,
        category: "paintings",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&h=750&fit=crop)"
    },
    {
        id: 17,
        title: "Floral Studies",
        description: "Detailed botanical illustrations celebrating native Indian flora.",
        year: 2023,
        category: "sketch",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=600&h=750&fit=crop)"
    },
    {
        id: 18,
        title: "Pixel Poetry",
        description: "Where data becomes art, structured randomness creating beauty.",
        year: 2024,
        category: "digital",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=750&fit=crop)"
    },
    {
        id: 19,
        title: "Temple at Dawn",
        description: "Sacred architecture captured in the first light, spiritual serenity in oils.",
        year: 2021,
        category: "paintings",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=750&fit=crop)"
    },
    {
        id: 20,
        title: "Urban Rhythm",
        description: "Quick gestural sketches of city life, energy captured in spontaneous lines.",
        year: 2024,
        category: "sketch",
        image: "[images.unsplash.com](https://images.unsplash.com/photo-1584448141569-69f342da535c?w=600&h=750&fit=crop)"
    }
];

// ========================================
// DOM Elements
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('themeToggle');
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxYear = document.getElementById('lightboxYear');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredArtworks = [...artworks];

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderGallery();
    initScrollAnimations();
    initTiltEffect();
});

// ========================================
// Theme Toggle
// ========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ========================================
// Mobile Navigation
// ========================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Scroll Events
// ========================================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Navbar background
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Reveal animations
    revealOnScroll();
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// Scroll Reveal Animations
// ========================================
function initScrollAnimations() {
    revealOnScroll();
}

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
    
    galleryItems.forEach((item, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index % 4 * 100);
        }
    });
}

// ========================================
// Gallery
// ========================================
function renderGallery() {
    galleryGrid.innerHTML = '';
    
    filteredArtworks.forEach((artwork, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.category = artwork.category;
        item.dataset.index = index;
        
        item.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
            <div class="gallery-overlay">
                <h3>${artwork.title}</h3>
                <p>${artwork.year} • ${capitalizeFirst(artwork.category)}</p>
            </div>
        `;
        
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
    
    // Re-init animations after render
    setTimeout(revealOnScroll, 100);
    initTiltEffect();
}

function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ========================================
// Filter
// ========================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        currentFilter = button.dataset.filter;
        
        if (currentFilter === 'all') {
            filteredArtworks = [...artworks];
        } else {
            filteredArtworks = artworks.filter(a => a.category === currentFilter);
        }
        
        renderGallery();
    });
});

// ========================================
// Lightbox
// ========================================
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const artwork = filteredArtworks[currentLightboxIndex];
    lightboxImage.src = artwork.image;
    lightboxImage.alt = artwork.title;
    lightboxTitle.textContent = artwork.title;
    lightboxDescription.textContent = artwork.description;
    lightboxYear.textContent = `${artwork.year} • ${capitalizeFirst(artwork.category)}`;
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredArtworks.length;
    updateLightboxContent();
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    updateLightboxContent();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextLightbox);
lightboxPrev.addEventListener('click', prevLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
});

// ========================================
// 3D Tilt Effect
// ========================================
function initTiltEffect() {
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = '';
        });
    });
}

// ========================================
// Contact Form
// ========================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<span>Message Sent!</span>';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// ========================================
// Smooth Scroll for Nav Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Lazy Loading Images
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.01
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}
