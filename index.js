const yearEl = document.getElementById('Footer-Year')

const currentYear = new Date().getFullYear()

yearEl.textContent = `Copyright © ${currentYear}`

const viewMore = document.getElementById('view-more')

const hiddenPost = document.getElementsByClassName('hidden-post')


viewMore.addEventListener('click', function() {
    hiddenPost.classList.remove('hidden')
})

console.log(hiddenPost)