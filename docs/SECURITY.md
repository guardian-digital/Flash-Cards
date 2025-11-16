## Security & Privacy Notes — Old Town Scottsdale Flashcards

### Zero Data Collection
- No forms, storage, cookies, analytics, or tracking.
- App is fully client-side and offline-capable.

### Voice Narration
- Uses local device `speechSynthesis` only.
- No audio or text is sent to any server.

### Hosting Security
- GitHub Pages HTTPS by default.
- No server logic, no attack surface.

### Code Safety
- No `eval`, no dynamic script loading.
- All logic is inline and immutable.

### Maintenance
- Update by replacing `index.html`.
- Review CSS/JS changes before pushing.

---

### Additional Guidance (App Mode and General)

#### Data Handling
- No backend. All data is static and embedded.
- If analytics are ever added, choose privacy-first platforms and anonymize IP by default.

#### Browser APIs
- Web Speech API is optional. Handle unavailability and failures gracefully.
- Do not persist sensitive data to `localStorage` or cookies.

#### Content Integrity
- Host static assets via HTTPS only.
- Use Subresource Integrity (SRI) if external resources are introduced (currently none).

#### Supply Chain
- Single-file mode has no dependencies.
- App mode (Next.js) pins versions in `package.json`. Audit with:
```bash
pnpm audit
```

#### Security Headers (App Mode)
- Consider `Content-Security-Policy` that disallows inline scripts/styles where feasible.
- Enable `X-Content-Type-Options: nosniff`, `Referrer-Policy: same-origin`, `Permissions-Policy` minimally scoped.

#### Reporting
- Create a security issue template. Classify issues by impact and likelihood.


