# Personal Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Responsive design
- Smooth scrolling navigation
- Interactive project showcases
- Contact form with Discord webhook integration
- Custom scrollbar styling

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file (optional, for contact form):
```
NEXT_PUBLIC_DISCORD_WEBHOOK_URL=your_webhook_url_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment using GitHub Actions.

### Setup Instructions:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Configure basePath (if needed):**
   - If your repository name is NOT `username.github.io`, you need to set the basePath
   - Open `next.config.js`
   - Uncomment and update the `basePath` line:
     ```js
     basePath: '/your-repo-name',
     ```
   - Replace `your-repo-name` with your actual repository name

4. **Push to trigger deployment:**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Check the **Actions** tab in your repository to see the deployment progress
   - Your site will be available at: `https://username.github.io/repo-name`

### Important Notes:

- The contact form requires a Discord webhook URL. For GitHub Pages, you'll need to set this as a repository secret:
  - Go to **Settings** → **Secrets and variables** → **Actions**
  - Add a new secret: `NEXT_PUBLIC_DISCORD_WEBHOOK_URL`
  - Update the workflow file to use this secret if needed

- Static export: The site is configured for static export, so all pages are pre-rendered at build time.

## Build

To build the static site locally:

```bash
npm run build
```

The static files will be in the `out` directory.
