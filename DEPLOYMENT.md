# Deployment Guide - TEDxNorthSouthUniversity Website

## Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Updated all speaker information
- [ ] Replaced placeholder images with actual photos
- [ ] Updated team member details
- [ ] Added sponsor logos
- [ ] Verified event schedule
- [ ] Updated social media links
- [ ] Tested registration button functionality
- [ ] Checked Google Maps embed
- [ ] Updated FAQ content
- [ ] Tested on mobile, tablet, and desktop

## Option 1: Deploy to Vercel (Recommended)

### Steps:

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - TEDxNSU website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect SvelteKit
   - Click "Deploy"

3. **Custom Domain** (Optional):
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., tedxnsu.com)
   - Follow Vercel's DNS instructions

### Automatic Deployments:
Every push to `main` branch will automatically redeploy!

---

## Option 2: Deploy to Netlify

### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect your GitHub repo for automatic deployments

3. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `build`

---

## Option 3: Static Hosting (GitHub Pages, etc.)

### Install Static Adapter:

```bash
npm install -D @sveltejs/adapter-static
```

### Update `svelte.config.js`:

```javascript
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};

export default config;
```

### Create `src/routes/+layout.ts`:

```typescript
export const prerender = true;
```

### Build and Deploy:

```bash
npm run build
# Upload the 'build' folder to your static host
```

---

## Option 4: Custom Server (VPS, Cloud)

### Requirements:
- Node.js 18+ installed
- PM2 for process management (recommended)

### Steps:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Install PM2**:
   ```bash
   npm install -g pm2
   ```

3. **Start the application**:
   ```bash
   pm2 start npm --name "tedxnsu" -- run preview
   ```

4. **Configure reverse proxy** (Nginx example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:4173;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Setup SSL** with Let's Encrypt:
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Environment Variables

If you add any API keys or secrets, create `.env` file:

```env
PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
PUBLIC_REGISTRATION_FORM_URL=https://...
```

**Important**: Add `.env` to `.gitignore`!

---

## Post-Deployment

### 1. Test the Live Site
- [ ] Check all sections load correctly
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Test registration button
- [ ] Check map embed works
- [ ] Test FAQ accordion
- [ ] Verify social media links

### 2. Performance Optimization
- [ ] Enable Vercel/Netlify CDN
- [ ] Compress images (use WebP format)
- [ ] Enable Gzip compression
- [ ] Check Lighthouse score

### 3. SEO Setup
- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Submit sitemap to Google
- [ ] Add Google Analytics (optional)

### 4. Monitor
- [ ] Set up uptime monitoring
- [ ] Check analytics
- [ ] Monitor error logs

---

## Updating Content After Deployment

### For Vercel/Netlify (Git-based):

1. Make changes locally
2. Test locally: `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update speaker lineup"
   git push
   ```
4. Site auto-deploys in ~2 minutes

### For Custom Server:

1. Make changes locally
2. Build: `npm run build`
3. Upload `build` folder to server
4. Restart: `pm2 restart tedxnsu`

---

## Domain Setup

### DNS Configuration:

**For Vercel:**
- Type: A → Value: `76.76.21.21`
- Type: CNAME → Value: `cname.vercel-dns.com`

**For Netlify:**
- Type: A → Value: `75.2.60.5`
- Type: CNAME → Value: `yoursitename.netlify.app`

**For Custom Server:**
- Type: A → Value: `<your-server-ip>`

---

## Troubleshooting

### Build Errors:
```bash
# Clear cache and rebuild
rm -rf node_modules .svelte-kit
npm install
npm run build
```

### Port Already in Use:
```bash
# Kill process on port 4173
npx kill-port 4173
```

### Tailwind Styles Not Loading:
- Ensure `src/app.css` is imported in `+layout.svelte`
- Check Tailwind classes are valid
- Rebuild: `npm run build`

---

## Need Help?

- [SvelteKit Docs](https://kit.svelte.dev/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---

**Happy Deploying! 🚀**
