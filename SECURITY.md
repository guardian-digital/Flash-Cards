# Security Policy

## Supported Versions

We actively support security updates for the current version of Flash-Cards.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please **do not** open a public issue. Instead, please report it via one of the following methods:

1. **Email**: Contact the repository maintainers directly
2. **GitHub Security Advisory**: Use GitHub's private vulnerability reporting feature
3. **Organization Contact**: Reach out through the guardian-digital organization

### What to Include

When reporting a vulnerability, please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### Response Time

We aim to:
- Acknowledge receipt within 48 hours
- Provide an initial assessment within 7 days
- Keep you updated on progress

## Security Best Practices

### For Contributors

- Never commit secrets, API keys, or credentials
- Use environment variables for sensitive data (`.env` files are gitignored)
- Review dependencies regularly with `pnpm audit`
- Follow secure coding practices (see `CONTRIBUTING.md`)

### For Users

- Keep dependencies updated
- Review security advisories
- Use HTTPS when deploying
- Do not expose API keys or secrets in client-side code

## Automated Security Scanning

This repository uses:
- **Dependabot**: Weekly dependency updates
- **CodeQL**: Automated security analysis
- **npm audit**: Dependency vulnerability scanning
- **Gitleaks**: Secret scanning in CI/CD
- **TruffleHog**: Advanced secret detection with verification

All security checks run automatically on:
- Every push to `main`
- Every pull request
- Weekly scheduled scans

## Known Security Considerations

- **No backend**: This is a static site with no server-side code
- **Client-side only**: All processing happens in the browser
- **No data collection**: No analytics, tracking, or user data storage
- **API keys**: ElevenLabs API key is stored in `.env` (gitignored) and only used locally for audio generation

