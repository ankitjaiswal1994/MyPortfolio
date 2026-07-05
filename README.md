# Ankit Jaiswal — Portfolio

Personal portfolio site for [ankitjaiswal1994.github.io/MyPortfolio](https://ankitjaiswal1994.github.io/MyPortfolio/).

## About

Staff Mobile Engineer portfolio highlighting React Native platform architecture, CI/CD, and enterprise white-label mobile work at Punchh Inc. (PAR Technology).

## Local preview

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Resume

Download the latest PDF from the site header/footer, or directly:

- [Ankit_Jaiswal_Staff_Mobile_Engineer.pdf](assets/resume/Ankit_Jaiswal_Staff_Mobile_Engineer.pdf)
- [Markdown source](assets/resume/Ankit_Jaiswal_Staff_Mobile_Engineer.md)

To regenerate the PDF after editing the markdown:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=assets/resume/Ankit_Jaiswal_Staff_Mobile_Engineer.pdf \
  "file://$(pwd)/assets/resume/Ankit_Jaiswal_Staff_Mobile_Engineer.html"
```

Update the HTML resume source first if content changes materially.

## Deploy

This site is deployed via GitHub Pages from the `main` branch.

```bash
git add index.html README.md
git commit -m "Update portfolio for Staff Mobile Engineer role"
git push origin main
```

Changes typically appear at the live URL within a few minutes.

## Stack

- Custom modern portfolio UI (`assets/css/portfolio.css`)
- Vanilla JS for navigation and scroll animations (`assets/js/portfolio.js`)
- Font Awesome icons + Google Fonts (Inter, Space Grotesk)
- GitHub Pages
