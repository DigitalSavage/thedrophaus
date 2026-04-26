# 🚀 Cloudflare Pages Deployment Guide
## The Drop Haus - Custom Domain Setup

**© 2026 The Drop Haus. All Rights Reserved.**

---

## 🎯 RECOMMENDED: Cloudflare Pages (Easiest Method)

Cloudflare Pages is **FREE**, includes CDN, SSL, and unlimited bandwidth. This is simpler than AWS S3.

---

## 📋 Prerequisites

- ✅ Cloudflare account ([Sign up free](https://dash.cloudflare.com/sign-up))
- ✅ Custom domain purchased (GoDaddy, Namecheap, etc.)
- ✅ GitHub account (for deployment)
- ✅ Your website code downloaded

---

## 🔥 OPTION 1: Cloudflare Pages (RECOMMENDED)

### **Step 1: Prepare Your Code**

```bash
# Navigate to your project folder
cd thedrophaus-website

# Install dependencies
npm install

# Test locally (optional)
npm run dev
```

### **Step 2: Push to GitHub**

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Drop Haus website"

# Create repository on GitHub.com (name it: thedrophaus-website)

# Link and push
git remote add origin https://github.com/YOUR-USERNAME/thedrophaus-website.git
git branch -M main
git push -u origin main
```

### **Step 3: Deploy to Cloudflare Pages**

1. **Login to Cloudflare**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)

2. **Create New Pages Project**
   - Click **"Workers & Pages"** in left sidebar
   - Click **"Create application"**
   - Select **"Pages"** tab
   - Click **"Connect to Git"**

3. **Connect GitHub Repository**
   - Click **"Connect GitHub"**
   - Authorize Cloudflare
   - Select repository: `thedrophaus-website`
   - Click **"Begin setup"**

4. **Configure Build Settings**
   - **Project name**: `thedrophaus` (this becomes your subdomain)
   - **Production branch**: `main`
   - **Framework preset**: Select **"Vite"**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - Click **"Save and Deploy"**

5. **Wait for Deployment**
   - First build takes 2-5 minutes
   - You'll get a URL like: `https://thedrophaus.pages.dev`
   - ✅ Your site is now live!

---

### **Step 4: Add Your Custom Domain**

1. **Add Domain to Cloudflare (if not already added)**
   - Click **"Websites"** in left sidebar
   - Click **"Add a site"**
   - Enter your domain: `thedrophaus.com`
   - Select **Free** plan
   - Click **Continue**

2. **Update Nameservers at Domain Registrar**
   - Cloudflare shows you 2 nameservers (e.g., `carter.ns.cloudflare.com`)
   - Login to your domain registrar (GoDaddy, Namecheap, etc.)
   - Find **DNS Settings** or **Nameservers**
   - Replace existing nameservers with Cloudflare's
   - Save changes
   - **Wait 2-24 hours** for DNS propagation

3. **Connect Custom Domain to Pages**
   - Go back to **Workers & Pages**
   - Click your project: `thedrophaus`
   - Go to **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter: `thedrophaus.com`
   - Click **"Continue"**
   - Cloudflare automatically configures DNS
   - Also add `www.thedrophaus.com` (repeat process)

4. **Verify Setup**
   - Wait 5-10 minutes
   - Visit `https://thedrophaus.com`
   - ✅ SSL automatically enabled
   - ✅ Site is live on your custom domain!

---

### **Step 5: Optimize Cloudflare Settings**

1. **SSL/TLS Settings**
   - Go to **SSL/TLS** tab
   - Set encryption mode: **Full (strict)**
   - Enable **Always Use HTTPS**
   - Enable **Automatic HTTPS Rewrites**

2. **Speed Optimizations**
   - Go to **Speed** → **Optimization**
   - ✅ Auto Minify: Check HTML, CSS, JavaScript
   - ✅ Brotli compression
   - ✅ Early Hints
   - ✅ Rocket Loader (optional - test if it doesn't break animations)

3. **Caching**
   - Go to **Caching** → **Configuration**
   - **Caching Level**: Standard
   - **Browser Cache TTL**: Respect Existing Headers

4. **Security (Optional)**
   - Go to **Security** → **Settings**
   - Set **Security Level**: Medium
   - Enable **Bot Fight Mode**

---

### **Step 6: Future Updates**

Every time you push to GitHub, Cloudflare Pages auto-deploys:

```bash
# Make your changes to the code

# Commit and push
git add .
git commit -m "Updated homepage design"
git push origin main

# Cloudflare automatically builds & deploys in ~2 minutes!
```

**That's it!** No manual uploads needed. 🎉

---

## ⚡ OPTION 2: AWS S3 + Cloudflare CDN (Advanced)

If you prefer S3 storage with Cloudflare CDN in front, follow the main README.md instructions.

---

## 🌐 Domain Setup Examples

### **Example 1: GoDaddy**
1. Login to GoDaddy.com
2. Go to **My Products** → **Domains**
3. Click your domain → **Manage DNS**
4. Scroll to **Nameservers**
5. Click **Change** → **Custom**
6. Enter Cloudflare's nameservers
7. Save

### **Example 2: Namecheap**
1. Login to Namecheap.com
2. Go to **Domain List**
3. Click **Manage** next to your domain
4. Find **Nameservers** section
5. Select **Custom DNS**
6. Enter Cloudflare's nameservers
7. Save

### **Example 3: Google Domains**
1. Login to domains.google.com
2. Click your domain
3. Go to **DNS** tab
4. Scroll to **Name servers**
5. Click **Use custom name servers**
6. Enter Cloudflare's nameservers
7. Save

---

## 🔍 Verify Your Domain is Active

1. **Check DNS Propagation**
   - Visit: [whatsmydns.net](https://www.whatsmydns.net)
   - Enter your domain: `thedrophaus.com`
   - Should show Cloudflare nameservers globally

2. **Check SSL Certificate**
   - Visit: `https://www.ssllabs.com/ssltest/`
   - Enter your domain
   - Should get an **A+ rating**

3. **Test Site Speed**
   - Visit: [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your domain
   - Should score 90+ on Performance

---

## 📊 Monitoring & Analytics

### **Cloudflare Analytics (Built-in)**
- Go to **Analytics & Logs** in Cloudflare
- See traffic, bandwidth, threats blocked
- All included free

### **Add Google Analytics (Optional)**
Edit `/index.html` and add before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🛠️ Troubleshooting

### **Problem: Domain not loading**
- ✅ Wait 24-48 hours for DNS propagation
- ✅ Check nameservers are updated at registrar
- ✅ Clear browser cache (Ctrl+Shift+Delete)
- ✅ Try incognito mode

### **Problem: SSL Certificate Error**
- ✅ Wait 15 minutes after domain connection
- ✅ Check SSL/TLS mode is "Full (strict)" in Cloudflare
- ✅ Disable "Always Use HTTPS" temporarily, then re-enable

### **Problem: 404 on sub-routes (e.g., /work)**
- ✅ Ensure `_redirects` file is in root of `dist/` folder
- ✅ For Cloudflare Pages, it's automatic
- ✅ For S3, check Page Rules in Cloudflare

### **Problem: Site updates not showing**
- ✅ Purge Cloudflare cache: **Caching** → **Purge Everything**
- ✅ Clear browser cache
- ✅ Check build succeeded in Cloudflare Pages dashboard

---

## 💰 Cost Breakdown

### **Cloudflare Pages (Recommended)**
- Hosting: **FREE**
- Bandwidth: **Unlimited FREE**
- Builds: **500/month FREE**
- SSL Certificate: **FREE**
- Custom domains: **FREE**
- **Total: $0/month** ✅

### **Domain Name**
- `.com` domain: **~$12-15/year**
- (One-time annual cost)

### **AWS S3 (Alternative)**
- Storage: **~$0.50-2/month**
- Requests: **~$0.10-0.50/month**
- Data transfer: **$0** (Cloudflare caches everything)
- **Total: ~$1-3/month**

---

## ✅ Quick Checklist

- [ ] Code downloaded and tested locally
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Cloudflare account created
- [ ] Domain purchased
- [ ] Domain added to Cloudflare
- [ ] Nameservers updated at registrar
- [ ] Cloudflare Pages project created
- [ ] Custom domain connected to Pages
- [ ] SSL/TLS configured
- [ ] Site tested and live
- [ ] Performance optimizations enabled

---

## 📞 Support

For deployment issues:  
**tech@thedrophaus.com**

For legal/licensing:  
**legal@thedrophaus.com**

---

## 🎉 You're Done!

Your site is now:
- ⚡ **Live** on your custom domain
- 🔒 **Secure** with SSL/TLS
- 🚀 **Fast** with global CDN
- 💰 **Free** or ultra-low cost
- 🔄 **Auto-deploying** on every push

**Welcome to production!** 🎊

---

**© 2026 The Drop Haus. All Rights Reserved.**  
**Last Updated**: March 6, 2026
