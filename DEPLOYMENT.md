# Visual Directory Vercel Deployment

The AI Agent Library includes a static Visual Directory that provides a clean, searchable interface for all agent specs. It is designed to be deployed directly to Vercel with zero build configuration.

## Deployment Instructions

### Method 1: GitHub Integration (Recommended)

1. Push this repository to your GitHub account.
2. Log in to [Vercel](https://vercel.com).
3. Click **Add New...** -> **Project**.
4. Import the `ai-agent-library` repository from your GitHub account.
5. In the **Configure Project** settings:
   - Leave **Framework Preset** as `Other`.
   - Leave the **Build Command** blank (it's a static site).
   - Leave the **Output Directory** blank.
6. Click **Deploy**.

Vercel will automatically detect the `index.html` at the root and deploy the static site. The `vercel.json` file ensures clean URLs.

### Method 2: Vercel CLI

If you have the [Vercel CLI](https://vercel.com/docs/cli) installed, you can deploy the directory from your terminal:

1. Open your terminal in the root of the repository.
2. Run the deployment command:

```bash
vercel deploy --prod
```

3. Follow the prompts to link the project to your Vercel account.

## Local Preview

To preview the directory locally before deploying:

1. Open a terminal in the repository root.
2. Run a simple static server. For example, with Python:

```bash
python3 -m http.server 8000
```

3. Open `http://localhost:8000` in your web browser.
