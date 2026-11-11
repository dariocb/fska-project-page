# FSKA project page — private draft

Static FSKA research project webpage, stored in the private repository https://github.com/dariocb/fska-project-page. GitHub Pages is disabled. The website can be previewed locally.

## Preview locally

Open `index.html` in a browser, or run this command from this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8000. The server only listens on your own computer. Stop it with Ctrl+C.

## Repository

Repository: https://github.com/dariocb/fska-project-page

The default branch is main. Poster and slides are included in assets/, and section 4 embeds the nine-page slides PDF in a bordered frame. Both resource buttons download the PDF files.

## Publish when ready

1. Verify the author names, publication details, result tables, and contact addresses.
2. Remove the `noindex, nofollow` meta tag if you want search-engine indexing. That tag is not access control; privacy comes from keeping the repository private and the site unpublished.
3. With GitHub Free, make the repository public before enabling Pages. Paid plans can support publishing from a private repository, but a published Pages site is generally public.
4. Enable Settings → Pages → Deploy from a branch → main → /(root).

The site uses relative asset links so it works under a GitHub project URL. There are no external fonts, analytics, libraries, or automatic deployment workflows.

## Contents and sources

- Research content, figures, author details, and results: user-supplied `poster.pdf`, page 1.
- Paper link: https://openreview.net/forum?id=aP71hsUN95
- `assets/poster.pdf`: original poster.
- `assets/slides.pdf`: the nine-slide presentation aligned with the shortened SlidesLive narration.
- Equations and figures: crops from the supplied poster, not recreated data.

The text is a summary of the poster, not the paper's verbatim abstract. The throughput plot is an original image because raw benchmark data were not supplied. No numerical speedup is inferred from it.

## Presentation update

The main method narrative follows the nine-slide SlidesLive deck. The MNIST ablation remains available as expandable additional results. Repository reproduction details retain the distinction between three poster runs and five default model seeds. The displayed author name is Darío Cabezas Larese. The BibTeX remains as supplied by the repository.

The final video file or SlidesLive URL has not been supplied. Add the final recording and any caption track when available. No video duration or chapter timestamps are inferred from the script.
