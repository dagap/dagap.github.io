# dagap.github.io

My personal portfolio, served at **https://dagap.github.io**.

Plain HTML/CSS/JS — no build step, no dependencies. Edit and push; GitHub
Pages serves `index.html` from the `main` branch automatically.

## Structure

```
index.html   → the page (hero, projects, about, contact)
style.css    → styling (dark by default, light via toggle)
main.js      → theme toggle + footer year
```

## Adding a project

Duplicate a `<article class="card">…</article>` block in `index.html` and
edit the title, description, tech stack, and links.

## Before going public

Search `index.html` for `TODO` and fill in:
- contact email (use a personal address, not an employer one)
- LinkedIn URL
