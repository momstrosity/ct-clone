// Theme management script
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Initial theme setup
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark');
    }

    // Theme toggle functionality
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            // Save theme preference
            const isDarkMode = htmlElement.classList.contains('dark');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const prefersDarkMode = e.matches;
        
        // Update theme only if no saved preference exists
        if (!localStorage.getItem('theme')) {
            htmlElement.classList.toggle('dark', prefersDarkMode);
        }
    });
});