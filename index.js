const YearEl = document.getElementById('Footer-Year')

function yearFooter() {
const dateSnapshot = new Date()

YearEl.innerHTML += `Copyright ${dateSnapshot.getFullYear().toString()}`

}

yearFooter()