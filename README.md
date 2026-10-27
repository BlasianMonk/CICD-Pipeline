# GitHub Actions CI/CD Portfolio Project

A small, dependency-free JavaScript web app demonstrating automated validation and deployment. The dashboard displays **sample test data**, not live GitHub Actions metrics.

## Pipeline

```text
Pull request -> syntax checks -> unit tests -> npm audit -> production build
main push    -> CI checks pass -> CD workflow -> GitHub Pages
```

- **CI** runs on pull requests and pushes to `main`.
- **CD** runs after a successful CI workflow on `main`, then deploys to GitHub Pages.
- No deployment occurs if CI fails. Manual deployment is also available using `workflow_dispatch`.
- Uses GitHub's built-in `GITHUB_TOKEN` and minimal job permissions; no personal access token is needed.

## Run locally

Requires Node.js 22+ and npm.

```bash
npm ci
npm run lint
npm test
npm run build
```

Open `dist/index.html` with a local HTTP server, e.g. `npx serve dist` (this optional command downloads a tool), or `python -m http.server 8000 --directory dist` and visit `http://localhost:8000`.

## Publish

1. Create a new public GitHub repository (for example `github-actions-cicd-demo`).
2. Upload/push the project contents, **including the hidden `.github` directory**, to the `main` branch.
3. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
4. In the **Actions** tab, verify **Continuous Integration** passes. **Deploy to GitHub Pages** should then run.
5. Your site will appear at `https://YOUR_USERNAME.github.io/github-actions-cicd-demo/` (replace username and repository name if different).
6. Open a pull request with a change to `src/logic.js` or tests to demonstrate CI checks before merging.

If GitHub Actions are restricted by repository/organization policy, enable them in Settings → Actions. GitHub Pages deployment permissions may also need approval for the `github-pages` environment.

## Resume-ready description

**GitHub Actions CI/CD Pipeline | JavaScript, Node.js, GitHub Pages**
- Built automated GitHub Actions workflows to run JavaScript syntax checks, unit tests, dependency auditing, and production builds on pull requests and main-branch pushes.
- Configured GitHub Pages deployment to run only after successful CI validation, using scoped workflow permissions and an auditable deployment history.

## Ideas to extend

- Add Playwright browser tests.
- Add a real build tool (Vite) and test coverage reports.
- Add Dependabot and branch protection requiring the CI check.
- Add a status badge to this README after the repository is created.
