# Build Instructions - TEDxNorthSouthUniversity

## 📦 How to Build Your Static Website

Your website now uses **@sveltejs/adapter-static** which generates a complete static build that can be deployed to any web server or hosting platform.

---

## ✅ Build Process

### 1. Build the Website
Run the build command to generate production files:

```bash
npm run build
```

**What happens**:
- SvelteKit compiles all Svelte components
- Tailwind CSS processes and optimizes styles
- JavaScript is bundled and minified
- Images and assets are optimized
- Static HTML files are generated
- Output is placed in the `build/` folder

### 2. Build Output

After running `npm run build`, you'll have a `build` folder containing:

```
build/
├── index.html              # Main page (all sections)
├── register.html           # Registration page
├── robots.txt             # SEO configuration
└── _app/                  # Assets folder
    ├── immutable/         # Cached assets (JS, CSS)
    │   ├── assets/        # Stylesheets
    │   ├── chunks/        # JavaScript chunks
    │   ├── entries/       # Entry points
    │   └── nodes/         # Page components
    └── version.json       # Build version
```

### 3. Test Build Locally

Preview your production build before deploying:

```bash
npm run preview
```

This starts a local server at `http://localhost:4173/` serving your built files.

---

## 🚀 What to Deploy

**Deploy the entire `build` folder** to your web server or hosting platform.

### Key Files:
- ✅ `index.html` - Your main homepage with all sections
- ✅ `register.html` - Registration form page
- ✅ `_app/` folder - All JavaScript and CSS assets
- ✅ `robots.txt` - SEO configuration

---

## 📤 Deployment Methods

### Method 1: Manual Upload (FTP/SFTP)

1. Build the site: `npm run build`
2. Upload the entire `build` folder to your web server
3. Point your domain to the `build` folder

**Example directory structure on server**:
```
public_html/
└── (contents of build folder)
    ├── index.html
    ├── register.html
    ├── robots.txt
    └── _app/
```

### Method 2: Vercel (Easiest)

1. Push code to GitHub
2. Import to Vercel
3. Vercel auto-detects settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Deploy!

### Method 3: Netlify

1. Connect GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Deploy!

### Method 4: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add script to `package.json`:
   ```json
   "deploy": "npm run build && npx gh-pages -d build"
   ```
3. Run: `npm run deploy`

### Method 5: Any Static Host

Upload the `build` folder to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Cloudflare Pages
- DigitalOcean
- cPanel hosting
- Any web server

---

## ⚙️ Configuration Files

### svelte.config.js
```javascript
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',      // Output directory
      assets: 'build',     // Assets directory
      fallback: undefined, // No SPA fallback
      precompress: false,  // No pre-compression
      strict: true         // Strict mode
    })
  }
};

export default config;
```

### src/routes/+layout.js
```javascript
// Enable prerendering for all pages
export const prerender = true;
export const ssr = true;
```

This configuration ensures:
- ✅ All pages are pre-rendered as static HTML
- ✅ No server required to run the website
- ✅ Optimal performance and SEO
- ✅ Can be hosted anywhere

---

## 🔍 Build Verification

### Check Build Success

After `npm run build`, you should see:
```
✓ built in X.XXs
> Using @sveltejs/adapter-static
  Wrote site to "build"
  ✔ done
```

### Verify Files

Check that these files exist:
```bash
# Windows PowerShell
dir build
dir build\_app

# Mac/Linux
ls -la build
ls -la build/_app
```

You should see:
- ✅ `index.html` (main page)
- ✅ `register.html` (registration page)
- ✅ `_app` folder with assets
- ✅ `robots.txt`

### Test Build

```bash
npm run preview
```

Visit http://localhost:4173/ and test:
- ✅ Main page loads
- ✅ Navigation works
- ✅ All sections visible
- ✅ Registration page accessible (`/register`)
- ✅ All images load
- ✅ Mobile responsiveness
- ✅ Dark mode styling

---

## 🐛 Troubleshooting

### Build Fails

**Issue**: Build command fails with errors

**Solutions**:
1. Clear cache: `rm -rf .svelte-kit node_modules`
2. Reinstall: `npm install`
3. Check for syntax errors: `npm run check`
4. Try again: `npm run build`

### Missing Files

**Issue**: Build folder doesn't have all files

**Solution**: Ensure `src/routes/+layout.js` has:
```javascript
export const prerender = true;
```

### Build Folder Not Created

**Issue**: No `build` folder after running `npm run build`

**Solution**: Check `svelte.config.js` uses `adapter-static`:
```javascript
import adapter from '@sveltejs/adapter-static';
```

### Pages Not Loading

**Issue**: Built site shows 404 errors

**Solution**: Ensure your web server is configured to:
- Serve `index.html` as the default file
- Route `/register` to `register.html`

---

## 📊 Build Optimization

### Current Optimizations

✅ **Automatic**:
- Code splitting
- CSS minification
- JavaScript minification
- Tree shaking (unused code removal)
- Asset hashing for caching

### Optional Optimizations

**Pre-compress files** (gzip/brotli):
```javascript
// svelte.config.js
adapter: adapter({
  pages: 'build',
  assets: 'build',
  fallback: undefined,
  precompress: true  // Enable compression
})
```

**Image optimization**:
- Use WebP format
- Compress with TinyPNG/Squoosh
- Use appropriate sizes
- Implement lazy loading

---

## 📈 Performance Targets

After building and deploying, your site should achieve:

- ✅ **Load Time**: < 3 seconds
- ✅ **Lighthouse Performance**: > 90
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Time to Interactive**: < 3s
- ✅ **Total Bundle Size**: < 500KB

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

**Vercel/Netlify**:
- Every push to `main` → auto-deploy
- Pull requests → preview deployments
- No manual builds needed!

**GitHub Actions** (for other hosts):
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - run: # Upload build folder to your host
```

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check all pages load
- [ ] Verify navigation works
- [ ] Test registration form
- [ ] Check mobile responsiveness
- [ ] Verify images load
- [ ] Test on multiple browsers
- [ ] Update content (speakers, schedule, etc.)
- [ ] Replace placeholder images
- [ ] Update social media links
- [ ] Configure custom domain (if applicable)

---

## 📞 Need Help?

See full deployment guides:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Platform-specific guides
- [QUICK_START.md](./QUICK_START.md) - Getting started
- [TESTING.md](./TESTING.md) - Testing checklist

**Your `build` folder is ready to deploy to any static hosting platform!** 🚀
