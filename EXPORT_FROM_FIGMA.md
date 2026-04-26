# 📥 Export from Figma Make & Deploy to Custom Domain
## The Drop Haus - GitHub + Cloudflare Deployment

**© 2026 The Drop Haus. All Rights Reserved.**

---

## 🎯 Goal

Move your site from `figma.site` → Your custom domain (`thedrophaus.com`) using GitHub + Cloudflare Pages.

---

## 📦 Step 1: Export Code from Figma Make

### **Option A: Download as ZIP (Easiest)**

1. **In Figma Make Editor**:
   - Look for the **download/export icon** (usually top-right corner)
   - Or click the **three dots menu (⋯)** → **"Download code"** or **"Export"**
   - Select **"Download ZIP"**

2. **Extract ZIP File**:
   - Download will be named something like `thedrophaus.zip`
   - Extract to a folder on your computer
   - Folder structure should look like:
     ```
     thedrophaus/
     ├── src/
     ├── public/
     ├── package.json
     ├── index.html
     ├── vite.config.ts
     └── ...
     ```

### **Option B: Copy Files Manually**

If download isn't available:
1. In Figma Make, select all files in the file tree
2. Copy the code from each file
3. Recreate the folder structure locally
4. Paste code into corresponding files

---

## 🔧 Step 2: Set Up Locally

Open **Terminal** (Mac) or **Command Prompt** (Windows):

```bash
# Navigate to your extracted folder
cd /path/to/thedrophaus

# Install dependencies
npm install

# Test locally (optional)
npm run dev
# Opens at http://localhost:5173
# Press Ctrl+C to stop
```

---

## 🌐 Step 3: Push to GitHub

### **First Time Setup:**

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - The Drop Haus website"

# Create repository on GitHub:
# 1. Go to https://github.com/new
# 2. Repository name: thedrophaus-website
# 3. Keep it PRIVATE (your code is proprietary!)
# 4. DO NOT initialize with README
# 5. Click "Create repository"

# Connect local code to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/thedrophaus-website.git

# Push code
git branch -M main
git push -u origin main
```

✅ **Your code is now on GitHub!**

---

## 🚀 Step 4: Deploy to Cloudflare Pages

### **4.1: Create Cloudflare Account**
- Go to [dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
- Sign up for **FREE** account

### **4.2: Connect GitHub to Cloudflare**

1. **Login to Cloudflare Dashboard**

2. **Navigate to Pages**:
   - Click **"Workers & Pages"** in left sidebar
   - Click **"Create application"**
   - Select **"Pages"** tab
   - Click **"Connect to Git"**

3. **Authorize GitHub**:
   - Click **"Connect GitHub"**
   - Authorize Cloudflare to access your GitHub
   - Select repository: `thedrophaus-website`
   - Click **"Begin setup"**

4. **Configure Build Settings**:
   ```
   Project name: thedrophaus
   Production branch: main
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   ```
   - Click **"Save and Deploy"**

5. **Wait for Build**:
   - First build takes 2-5 minutes
   - You'll get a temporary URL: `https://thedrophaus.pages.dev`
   - ✅ **Your site is live!** (but not on custom domain yet)

---

## 🌍 Step 5: Connect Your Custom Domain

### **5.1: Purchase Domain**

Buy your domain from:
- **Namecheap** (recommended, ~$12/year)
- **GoDaddy** (~$15/year)
- **Google Domains** (~$12/year)
- **Cloudflare Registrar** (~$9/year, cheapest)

Example domain: `thedrophaus.com`

---

### **5.2: Add Domain to Cloudflare**

1. **In Cloudflare Dashboard**:
   - Click **"Websites"** in left sidebar
   - Click **"Add a site"**
   - Enter your domain: `thedrophaus.com`
   - Select **Free** plan
   - Click **"Continue"**

2. **Cloudflare Scans DNS**:
   - It will import existing DNS records (if any)
   - Click **"Continue"**

3. **Update Nameservers**:
   - Cloudflare shows you 2 nameservers, like:
     ```
     carter.ns.cloudflare.com
     roxy.ns.cloudflare.com
     ```
   - **COPY THESE!** You'll need them next.

---

### **5.3: Update Nameservers at Your Registrar**

#### **If you bought from Namecheap:**
1. Login to [Namecheap.com](https://www.namecheap.com)
2. Click **"Domain List"**
3. Click **"Manage"** next to your domain
4. Find **"Nameservers"** section
5. Select **"Custom DNS"**
6. Paste Cloudflare's 2 nameservers:
   ```
   carter.ns.cloudflare.com
   roxy.ns.cloudflare.com
   ```
7. Click **Save** ✅

#### **If you bought from GoDaddy:**
1. Login to [GoDaddy.com](https://www.godaddy.com)
2. Go to **"My Products"** → **"Domains"**
3. Click your domain → **"Manage DNS"**
4. Scroll to **"Nameservers"**
5. Click **"Change"** → **"Custom"**
6. Enter Cloudflare's nameservers
7. Click **"Save"** ✅

#### **If you bought from Google Domains:**
1. Login to [domains.google.com](https://domains.google.com)
2. Click your domain
3. Go to **"DNS"** tab
4. Scroll to **"Name servers"**
5. Click **"Use custom name servers"**
6. Enter Cloudflare's nameservers
7. Click **"Save"** ✅

**⏰ IMPORTANT:** DNS propagation takes **2-24 hours** (usually ~1 hour)

---

### **5.4: Verify Nameservers Are Active**

1. **In Cloudflare Dashboard**:
   - Go to your site → **"Overview"** tab
   - Look for status banner
   - When it says **"Active"** with green checkmark ✅, you're ready!

2. **Or check manually**:
   - Visit [whatsmydns.net](https://www.whatsmydns.net)
   - Enter your domain
   - Select **"NS"** record type
   - Should show Cloudflare nameservers globally

---

### **5.5: Connect Domain to Cloudflare Pages**

1. **Go to Workers & Pages**:
   - Click **"Workers & Pages"** in left sidebar
   - Click your project: `thedrophaus`

2. **Add Custom Domain**:
   - Go to **"Custom domains"** tab
   - Click **"Set up a custom domain"**
   - Enter: `thedrophaus.com`
   - Click **"Continue"**
   - Cloudflare automatically creates DNS records ✅

3. **Add WWW Subdomain** (recommended):
   - Click **"Set up a custom domain"** again
   - Enter: `www.thedrophaus.com`
   - Click **"Continue"**
   - ✅ Both domains now work!

4. **Wait for SSL Certificate** (~5-15 minutes):
   - Cloudflare automatically provisions free SSL
   - When status shows **"Active"**, you're live!

---

## 🔒 Step 6: Enable HTTPS & Optimize

### **6.1: Force HTTPS**

1. **Go to SSL/TLS** tab (in Cloudflare):
   - Set encryption mode: **"Full (strict)"**
   - Go to **"Edge Certificates"**
   - Enable **"Always Use HTTPS"** ✅
   - Enable **"Automatic HTTPS Rewrites"** ✅

### **6.2: Optimize Performance**

1. **Go to Speed** → **Optimization**:
   - ✅ Auto Minify: Check **HTML**, **CSS**, **JavaScript**
   - ✅ Brotli
   - ✅ Early Hints

2. **Go to Caching** → **Configuration**:
   - Caching Level: **Standard**
   - Browser Cache TTL: **Respect Existing Headers**

---

## ✅ Step 7: Test Your Live Site

Visit your domain: **`https://thedrophaus.com`**

**Test checklist:**
- [ ] Home page loads
- [ ] Navigation works (Work, Services, About, Contact)
- [ ] "Let's Talk" button opens intake modal
- [ ] Images load correctly
- [ ] Animations work
- [ ] Mobile responsive
- [ ] SSL certificate shows (green padlock 🔒)
- [ ] Both `thedrophaus.com` and `www.thedrophaus.com` work

---

## 🔄 Step 8: Making Updates (Future)

When you want to update your website:

### **Option A: Edit in Figma Make, then Re-export**
1. Make changes in Figma Make
2. Download updated ZIP
3. Extract and replace local files
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Updated homepage hero section"
   git push origin main
   ```
5. Cloudflare auto-deploys in ~2 minutes ✅

### **Option B: Edit Code Locally**
1. Open project in **VS Code** or any code editor
2. Make changes to files
3. Test locally: `npm run dev`
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Fixed mobile navigation bug"
   git push origin main
   ```
5. Cloudflare auto-deploys automatically ✅

---

## 🛠️ Troubleshooting

### **Problem: "npm: command not found"**
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org) (download LTS version)

### **Problem: Domain not loading**
**Solution:** 
- Wait 24 hours for DNS propagation
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito mode
- Check nameservers at registrar match Cloudflare's

### **Problem: 404 on page routes (e.g., /work)**
**Solution:**
- Ensure `_redirects` file exists in root folder
- Re-deploy to Cloudflare Pages
- Cloudflare Pages handles this automatically

### **Problem: SSL certificate error**
**Solution:**
- Wait 15 minutes after adding custom domain
- Check SSL/TLS mode is "Full (strict)"
- Purge Cloudflare cache: **Caching** → **"Purge Everything"**

### **Problem: Old version showing after push**
**Solution:**
- Check build succeeded in Cloudflare Pages dashboard
- Purge Cloudflare cache
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

---

## 📊 Monitoring Your Site

### **Cloudflare Analytics (Free)**
1. Go to **Analytics & Logs** in Cloudflare
2. See:
   - Page views
   - Unique visitors
   - Bandwidth usage
   - Threats blocked
   - Performance metrics

### **Build Logs**
1. Go to **Workers & Pages** → your project
2. Click **"View build"** to see deployment logs
3. Check for errors if builds fail

---

## 💰 Cost Summary

| Item | Cost | Frequency |
|------|------|-----------|
| Domain (`.com`) | $10-15 | /year |
| Cloudflare Pages | **FREE** | Forever |
| Bandwidth | **FREE** | Unlimited |
| SSL Certificate | **FREE** | Auto-renews |
| GitHub (Private Repo) | **FREE** | Forever |
| **TOTAL** | **~$12/year** | Domain only |

**That's it!** Your entire hosting costs ~$1/month. 🎉

---

## 🎉 Success Checklist

- [ ] Code exported from Figma Make
- [ ] GitHub repository created (private)
- [ ] Code pushed to GitHub
- [ ] Cloudflare Pages deployed
- [ ] Domain purchased
- [ ] Nameservers updated
- [ ] Custom domain connected
- [ ] SSL/TLS enabled (HTTPS working)
- [ ] Site tested and live
- [ ] Auto-deploy working (test with a small change)

---

## 🔐 Security Reminder

**Your code is proprietary!**
- ✅ Keep GitHub repository **PRIVATE**
- ✅ Never share code publicly
- ✅ Refer to `README.md` for copyright notice
- ✅ All design, code, and content is legally protected

---

## 📞 Need Help?

**Technical Support:**  
tech@thedrophaus.com

**Legal/Licensing:**  
legal@thedrophaus.com

---

## 🚀 You're Live!

**Congratulations!** Your site is now:
- ⚡ Live at `https://thedrophaus.com`
- 🌍 Globally distributed via Cloudflare CDN
- 🔒 Secured with SSL/TLS
- 🔄 Auto-deploying from GitHub
- 💰 Costing only ~$12/year

**Welcome to production, Drop Haus!** 🎊

---

**© 2026 The Drop Haus. All Rights Reserved.**  
**Last Updated:** March 6, 2026
