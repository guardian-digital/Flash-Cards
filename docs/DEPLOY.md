## GitHub Pages — Single-File Deploy

This project ships a zero-dependency viewer for GitHub Pages using `docs/index.html`.

### Configure Pages
1. Open your repo Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` (or default), Folder: `/docs`
4. Save. Your site will be available at the Pages URL shown.

### Updating
- Edit `docs/index.html` (and other docs), commit, push.
- GitHub Pages will redeploy automatically.

### Notes
- No build step is required.
- Speech narration uses the local `speechSynthesis` API if available.
- Keep the file size under 200KB for instant loads.


