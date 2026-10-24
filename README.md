# My Learning Journal

A Scrimba solo project where I practised responsive design by building a learning journal with HTML, CSS, and JavaScript. The site includes a blog listing, a full article page, and an About Me page.

## What I learnt

- **Mobile-first CSS:** Start with a single-column layout, then use a `min-width: 48rem` media query to show three columns on wider screens.
- **CSS Grid:** Use `repeat(3, minmax(0, 1fr))` for equal-width blog cards and `grid-column: 1 / -1` to make the View more link span the whole grid.
- **Flexbox:** Align the logo and navigation, position the hero content, and arrange article content with consistent gaps.
- **Flexible widths:** Combine percentage widths, `min()`, and `max-width` to let content fit smaller screens while limiting its width on larger ones. Use `margin-inline: auto` to centre content.
- **Fluid typography and spacing:** Use `clamp()` with `rem` and `vw` values so headings and hero padding scale between minimum and maximum sizes.
- **Responsive images:** Use `width: 100%` and `height: auto` to preserve image proportions. Use `aspect-ratio: 16 / 9` with `object-fit: cover` for consistent blog thumbnails.
- **Background images:** Use `background-size: cover` and `background-position: center` for the hero, with a gradient overlay to help the text stand out.
- **Relative units and box sizing:** Use `rem`, `em`, percentages, and `border-box` to make sizing and spacing easier to manage.
- **Viewport settings:** Add the viewport meta tag so the layout uses the device width on mobile screens.

This project helped me practise combining flexible sizing with media queries instead of relying on fixed widths for every screen size.

## Other things I practised

- Structuring pages with semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`.
- Adding hover and keyboard focus styles to links.
- Using JavaScript to reveal more posts and display the current year in the footer.

## Built with

- HTML5
- CSS3
- JavaScript
- Vite

## Run locally

Install the dependencies and start the development server:

```bash
npm install
npm start
```

Open the local URL shown in the terminal.

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Pages

- `index.html` — blog listing with a hero section and View more interaction.
- `home.html` — full article with recent posts.
- `about.html` — introduction and recent posts.

## Credits

Built as part of my learning on [Scrimba](https://scrimba.com/).
