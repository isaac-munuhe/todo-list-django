document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
   
    themeSwitcher.addEventListener('change', function() {
       if (this.checked) {
         body.classList.add('dark-mode');
       } else {
         body.classList.remove('dark-mode');
       }
    });
   
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
       body.classList.add(savedTheme);
       themeSwitcher.checked = savedTheme === 'dark-mode';
    }
   });