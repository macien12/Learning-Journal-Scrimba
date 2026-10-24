const yearEl = document.getElementById('Footer-Year')

const currentYear = new Date().getFullYear()

yearEl.textContent = `Copyright © ${currentYear}`

const viewMore = document.getElementById('view-more')

const hiddenPosts = document.querySelectorAll('.hidden-post')


viewMore.addEventListener('click', function(e) {

    e.preventDefault()

    hiddenPosts.forEach(function(post) {
        post.classList.remove('hidden')
    })
    viewMore.classList.add('hidden')
})

console.log(hiddenPosts)