# ⚡ QUICK START: Figma Make → Custom Domain
## The Drop Haus - 15 Minute Deployment Guide

**© 2026 The Drop Haus. All Rights Reserved.**

---

## 🎯 What We're Doing

Moving your site from:
- ❌ `your-project.figma.site` (Figma's domain)
- ✅ `thedrophaus.com` (YOUR custom domain)

---

## 🚀 The 5-Step Process

### **Step 1: Export from Figma Make** (2 minutes)

In Figma Make editor:
1. Look for **download icon** or **three dots menu (⋯)**
2. Click **"Download code"** or **"Export"**
3. Save ZIP file
4. Extract to a folder on your computer

---

### **Step 2: Push to GitHub** (5 minutes)

```bash
# Open Terminal/Command Prompt
# Navigate to your extracted folder
cd /path/to/thedrophaus

# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository:
# → Go to https://github.com/new
# → Name it: thedrophaus-website
# → Keep PRIVATE
# → Create repository

# Connect and push (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/thedrophaus-website.git
git branch -M main
git push -u origin main
```

---

### **Step 3: Deploy to Cloudflare Pages** (3 minutes)

1. **Sign up for Cloudflare** (free): [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)

2. **Connect GitHub**:
   - Click **"Workers & Pages"** → **"Create application"** → **"Pages"**
   - Click **"Connect to Git"** → Authorize GitHub
   - Select repository: `thedrophaus-website`

3. **Configure Build**:
   ```
   Framework: Vite
   Build command: npm run build
   Output directory: dist
   ```
   - Click **"Save and Deploy"**

4. **Wait 2-3 minutes** → ✅ Live at `https://thedrophaus.pages.dev`

---

### **Step 4: Connect Your Domain** (3 minutes)

1. **Buy domain** (if you haven't):
   - Namecheap, GoDaddy, or Cloudflare Registrar (~$12/year)

2. **Add to Cloudflare**:
   - **"Websites"** → **"Add a site"** → Enter your domain
   - Free plan → Continue
   - Copy the 2 nameservers shown

3. **Update nameservers at your domain registrar**:
   - Go to your domain settings
   - Replace nameservers with Cloudflare's
   - Save

4. **Wait 1-24 hours** for DNS propagation (usually ~1 hour)

---

### **Step 5: Link Domain to Pages** (2 minutes)

Once domain is **"Active"** in Cloudflare:

1. **Go to Workers & Pages** → Click your project
2. **"Custom domains"** → **"Set up a custom domain"**
3. Enter: `thedrophaus.com` → Continue
4. Add `www.thedrophaus.com` too
5. Wait 5-15 minutes for SSL certificate

---

## ✅ Done!

Visit: **`https://thedrophaus.com`** 🎉

---

## 🔄 Future Updates

Edit in Figma Make → Download → Extract → Push to GitHub:

```bash
git add .
git commit -m "Updated hero section"
git push origin main
```

Cloudflare auto-deploys in ~2 minutes! ✅

---

## 📖 Need More Details?

- **Full guide:** Read `EXPORT_FROM_FIGMA.md`
- **Troubleshooting:** Check `CLOUDFLARE_DEPLOYMENT.md`
- **Legal protection:** See `README.md`

---

## 💰 Total Cost

- Domain: **$12/year**
- Hosting: **FREE**
- Bandwidth: **FREE**
- SSL: **FREE**

**Total: ~$1/month** 🔥

---

**© 2026 The Drop Haus. All Rights Reserved.**
