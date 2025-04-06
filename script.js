
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

checkFade();
window.addEventListener('scroll', checkFade);


const contributionGraph = document.getElementById('contributionGraph');

for (let i = 0; i < 364; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    
    const dayOfWeek = i % 7;
    const randomFactor = Math.random();
    
    if (randomFactor > 0.7 && (dayOfWeek < 5)) {
        const level = Math.floor(randomFactor * 5) + 1;
        if (level > 0) {
            day.classList.add(`level-${level}`);
        }
    } else if (randomFactor > 0.85) {
        const level = Math.floor(randomFactor * 3) + 1;
        if (level > 0) {
            day.classList.add(`level-${level}`);
        }
    }
    
    contributionGraph.appendChild(day);
}


const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});