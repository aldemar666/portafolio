// Theme switcher functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    setTheme(savedTheme);
} else {
    // If no saved preference, use system preference
    if (prefersDarkScheme.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
    
    // Add transition animation to body
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
});

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
});