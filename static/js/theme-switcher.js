// theme-switcher.js

document.addEventListener('DOMContentLoaded', function() {
  var themeSwitcher = document.getElementById('theme-switcher');

  themeSwitcher.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
  });
});