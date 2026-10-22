const yearEl = document.getElementById('Footer-Year')

const currentYear = new Date().getFullYear()

yearEl.textContent = `Copyright © ${currentYear}`