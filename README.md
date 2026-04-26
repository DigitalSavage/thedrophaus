# The Drop Haus - Official Website

**© 2026 The Drop Haus. All Rights Reserved.**

---

## ⚠️ COPYRIGHT & LEGAL NOTICE

### **PROPRIETARY AND CONFIDENTIAL**

This website, including all code, design, content, imagery, text, branding, visual elements, animations, layouts, color schemes, typography, user interface designs, and all other materials contained herein (collectively, the "Proprietary Materials") are the exclusive property of **The Drop Haus** and are protected by United States and international copyright laws, trademark laws, and other intellectual property rights.

### **STRICT PROHIBITION OF USE**

**NO LICENSE IS GRANTED.** The Proprietary Materials are provided for authorized use by The Drop Haus only. Any unauthorized use, reproduction, modification, distribution, display, copying, adaptation, derivative works, reverse engineering, or any other exploitation of the Proprietary Materials, in whole or in part, is **STRICTLY PROHIBITED** without the prior written consent of The Drop Haus.

This prohibition includes, but is not limited to:
- ❌ **Code**: React components, TypeScript files, animations, logic, configurations
- ❌ **Design**: Visual layouts, UI/UX patterns, design systems, component architecture
- ❌ **Content**: Copywriting, messaging, brand voice, slogans, marketing language
- ❌ **Images**: Photography, graphics, logos, icons, illustrations, visual assets
- ❌ **Brand Identity**: Color schemes (#000000, #DBEC62), typography, visual style
- ❌ **Concepts**: Business model, service descriptions, campaign strategies
- ❌ **Features**: Interactive elements, animations, user flows, intake forms

### **ENFORCEMENT**

Unauthorized use of the Proprietary Materials may result in:
- Civil litigation for copyright infringement
- Statutory damages up to $150,000 per work under 17 U.S.C. § 504(c)
- Criminal prosecution under applicable laws
- Injunctive relief and cease-and-desist orders
- Recovery of attorney's fees and costs

### **TRADEMARKS**

"The Drop Haus" and all associated logos, brand names, slogans including "This isn't merch. It's a drop." and "Make the moment." are trademarks or registered trademarks of The Drop Haus. Use of these trademarks without express written permission is prohibited.

### **DMCA COMPLIANCE**

The Drop Haus actively monitors for copyright infringement and will pursue all available legal remedies under the Digital Millennium Copyright Act (DMCA) and other applicable laws.

### **CONTACT FOR LICENSING INQUIRIES**

For authorized licensing, partnership, or usage inquiries, contact:  
**legal@thedrophaus.com**

---

## 📋 DEPLOYMENT INSTRUCTIONS (AUTHORIZED USE ONLY)

### **🚀 Quick Start: Cloudflare Pages (RECOMMENDED)**

**See `CLOUDFLARE_DEPLOYMENT.md` for complete step-by-step guide.**

**Why Cloudflare Pages?**
- ✅ **FREE** hosting with unlimited bandwidth
- ✅ Automatic SSL certificates
- ✅ Global CDN included
- ✅ Auto-deploy from GitHub
- ✅ Custom domain support
- ✅ Zero configuration needed

**Quick Steps:**
1. Push code to GitHub
2. Connect GitHub to Cloudflare Pages
3. Add your custom domain
4. Done! Auto-deploys on every push

---

### **Alternative: AWS S3 + Cloudflare CDN**

For advanced users who prefer S3 storage, follow the detailed instructions below.

### **Prerequisites**
- Node.js 18+ installed
- AWS Account with S3 access (for S3 method)
- Cloudflare account
- Domain name registered

---

### **Step 1: Build Production Files**

```bash
# Install dependencies
npm install

# Build optimized production bundle
npm run build
```

This creates a `dist/` folder with production-ready files.

---

### **Step 2: AWS S3 Setup**

#### **Create S3 Bucket**
1. Navigate to [AWS S3 Console](https://s3.console.aws.amazon.com)
2. Click **"Create bucket"**
3. **Bucket name**: `thedrophaus-website` (or your domain)
4. **Region**: `us-east-1` (or closest to target audience)
5. **Uncheck** "Block all public access"
6. Acknowledge the warning
7. Click **Create bucket**

#### **Enable Static Website Hosting**
1. Select your bucket
2. Go to **Properties** tab
3. Scroll to **Static website hosting**
4. Click **Edit**
5. Select **Enable**
6. **Index document**: `index.html`
7. **Error document**: `index.html` (required for React Router)
8. Click **Save changes**
9. **Note the endpoint URL** (e.g., `http://your-bucket.s3-website-us-east-1.amazonaws.com`)

#### **Set Bucket Policy (Public Read Access)**
1. Go to **Permissions** tab
2. Scroll to **Bucket policy**
3. Click **Edit**
4. Paste this policy (replace `YOUR-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

5. Click **Save changes**

#### **Upload Files to S3**

**Option A: AWS Console (GUI)**
1. Go to **Objects** tab
2. Click **Upload**
3. Drag all files from `dist/` folder (not the folder itself)
4. Click **Upload**

**Option B: AWS CLI (Recommended for Updates)**
```bash
# Install AWS CLI if needed
# Configure credentials: aws configure

# Initial upload
aws s3 sync ./dist s3://YOUR-BUCKET-NAME --delete

# For future updates
aws s3 sync ./dist s3://YOUR-BUCKET-NAME --delete --cache-control max-age=31536000
```

---

### **Step 3: Cloudflare Setup**

#### **Add Site to Cloudflare**
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **"Add a site"**
3. Enter domain: `thedrophaus.com`
4. Select **Free** plan
5. Click **Continue**
6. Cloudflare will scan existing DNS records

#### **Configure DNS Records**
1. Delete any existing `A` or `CNAME` records for `@` and `www`
2. Add **CNAME record** for root domain:
   - **Type**: `CNAME`
   - **Name**: `@`
   - **Target**: `your-bucket.s3-website-us-east-1.amazonaws.com` (your S3 endpoint)
   - **Proxy status**: ✅ **Proxied** (orange cloud icon)
   - **TTL**: Auto

3. Add **CNAME record** for www subdomain:
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Target**: `thedrophaus.com`
   - **Proxy status**: ✅ **Proxied**
   - **TTL**: Auto

4. Click **Save**

#### **Update Domain Nameservers**
1. Cloudflare will provide 2 nameservers (e.g., `carter.ns.cloudflare.com`)
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Replace existing nameservers with Cloudflare's nameservers
4. Save changes
5. Wait 24-48 hours for DNS propagation (usually faster)

#### **Configure SSL/TLS**
1. In Cloudflare, go to **SSL/TLS** tab
2. Set SSL/TLS encryption mode to **Flexible** (or **Full** if you configure S3 with SSL)
3. Enable **Always Use HTTPS** under SSL/TLS → Edge Certificates
4. Enable **Automatic HTTPS Rewrites**

#### **Optimize Performance**
1. **Speed** → **Optimization**:
   - ✅ Auto Minify: HTML, CSS, JavaScript
   - ✅ Brotli compression
   - ✅ Rocket Loader (optional)
   - ✅ Early Hints

2. **Caching** → **Configuration**:
   - **Browser Cache TTL**: 4 hours
   - **Caching Level**: Standard

3. **Page Rules** (fix React Router):
   - Create new Page Rule
   - **URL**: `*thedrophaus.com/*`
   - **Settings**: 
     - Cache Level: Cache Everything
     - Edge Cache TTL: 2 hours
   - **Order**: Move to top

---

### **Step 4: Verify Deployment**

1. Visit `https://thedrophaus.com`
2. Test all routes:
   - `/` (Home)
   - `/work` (Portfolio)
   - `/services` (Services)
   - `/about` (About)
   - `/contact` (Contact)
3. Check mobile responsiveness
4. Verify SSL certificate (green padlock)
5. Test intake modal functionality

---

### **Step 5: Future Updates**

When you need to update the website:

```bash
# 1. Make code changes
# 2. Build production files
npm run build

# 3. Upload to S3
aws s3 sync ./dist s3://YOUR-BUCKET-NAME --delete

# 4. Purge Cloudflare cache
# Go to Cloudflare Dashboard → Caching → Purge Everything
```

**Or use this one-liner:**
```bash
npm run build && aws s3 sync ./dist s3://YOUR-BUCKET-NAME --delete && echo "Deployed! Now purge Cloudflare cache."
```

---

## 🏗️ Architecture Overview

```
User Request
    ↓
Cloudflare CDN (Global Edge Network)
    ↓ (Cached & Optimized)
AWS S3 Bucket (Static Hosting)
    ↓
React SPA (Your Website)
```

**Benefits:**
- ⚡ Lightning-fast global delivery
- 🔒 Free SSL/TLS encryption
- 🛡️ DDoS protection
- 📊 Analytics & monitoring
- 💰 Cost-effective (~$1-3/month)
- ♾️ Unlimited bandwidth (Cloudflare)

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

---

## 📦 Tech Stack

- **Framework**: React 18 + TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Build Tool**: Vite
- **Hosting**: AWS S3 + Cloudflare CDN

---

## 📞 Support & Contact

For technical issues or deployment assistance:  
**tech@thedrophaus.com**

For legal or licensing inquiries:  
**legal@thedrophaus.com**

---

## 🔐 CONFIDENTIALITY REMINDER

This repository and all associated files are **CONFIDENTIAL and PROPRIETARY**. Unauthorized access, use, or distribution is strictly prohibited and subject to legal action.

**© 2026 The Drop Haus. All Rights Reserved.**

---

**Last Updated**: March 6, 2026  
**Version**: 1.0.0