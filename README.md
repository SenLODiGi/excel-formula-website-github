# Excel Formula Ebook for Marketers - Complete Website

A comprehensive, interactive website featuring 47+ Excel formulas specifically designed for marketing professionals. Created by **Senith Samaranayake**.

## 🌐 Live Demo
Visit the live website: [Excel Formula Ebook](https://reeetglc.manus.space)

## 📊 Features

### Complete Formula Coverage
- **47+ Excel Formulas** organized in 8 categories
- **Mathematical Functions**: SUM, AVERAGE, COUNT, MAX, MIN, MEDIAN, ROUND, POWER
- **Logical Functions**: IF, AND, OR, NOT, IFERROR
- **Lookup & Reference**: VLOOKUP, HLOOKUP, INDEX, MATCH, CHOOSE
- **Text Functions**: CONCATENATE, LEFT, RIGHT, MID, LEN, UPPER, LOWER, TRIM
- **Date & Time Functions**: TODAY, NOW, DATEDIF, WEEKDAY, MONTH, YEAR
- **Conditional Functions**: COUNTIF, COUNTIFS, SUMIF, SUMIFS, AVERAGEIF, AVERAGEIFS
- **Financial Functions**: NPV, IRR, PMT, PV, FV
- **Advanced Functions**: RANK, PERCENTILE, INDIRECT, OFFSET

### Interactive Features
- 🔍 **Real-time Search** - Find formulas instantly
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Professional UI** - Modern, clean interface
- 📂 **Category Filtering** - Browse by function type
- 💡 **Syntax Highlighting** - Color-coded formula syntax

### Each Formula Includes
- **Purpose**: Clear explanation of functionality
- **Syntax**: Exact formula structure with parameters
- **Example**: Real marketing data examples
- **Use Case**: Specific marketing applications

## 🛠️ Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **shadcn/ui** - UI components

## 📁 Project Structure

```
excel-formula-website-complete/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── senith_portrait.png
│   │   ├── senith_samaranayake.png (QR Code)
│   │   └── react.svg
│   ├── components/
│   │   └── ui/
│   │       └── button.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/excel-formula-website.git
   cd excel-formula-website
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Start development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the website

### Build for Production

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm run build
```

The built files will be in the `dist/` directory.

## 📤 GitHub Upload Guide

### Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - Repository name: `excel-formula-website`
   - Description: `Interactive Excel Formula Ebook for Marketers by Senith Samaranayake`
   - Set to **Public** (recommended for Vercel deployment)
   - ✅ Check "Add a README file"
   - Choose a license (optional)
5. **Click "Create repository"**

### Step 2: Upload Files to GitHub

#### Method A: Using GitHub Web Interface (Recommended for beginners)

1. **Download and extract** this zip file to your computer
2. **Go to your new GitHub repository**
3. **Click "uploading an existing file"** link
4. **Drag and drop** all files from the extracted folder (except the zip file itself)
5. **Write a commit message**: "Initial commit: Excel Formula Website"
6. **Click "Commit changes"**

#### Method B: Using Git Command Line

1. **Extract the zip file** to your desired location
2. **Open terminal/command prompt** in the extracted folder
3. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Excel Formula Website"
   ```
4. **Connect to GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/excel-formula-website.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Vercel Deployment Guide

### Step 1: Create Vercel Account

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up** using your GitHub account (recommended)
3. **Authorize Vercel** to access your GitHub repositories

### Step 2: Deploy to Vercel

#### Method A: Import from GitHub (Recommended)

1. **Click "New Project"** on Vercel dashboard
2. **Import your GitHub repository:**
   - Find `excel-formula-website` in the list
   - Click "Import"
3. **Configure project settings:**
   - Project Name: `excel-formula-website`
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
4. **Click "Deploy"**
5. **Wait for deployment** (usually 1-2 minutes)
6. **Your website is live!** Vercel will provide a URL like `https://excel-formula-website.vercel.app`

#### Method B: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel:**
   ```bash
   vercel login
   ```
3. **Deploy from project directory:**
   ```bash
   vercel
   ```
4. **Follow the prompts** and your site will be deployed

### Step 3: Custom Domain (Optional)

1. **Go to your project** on Vercel dashboard
2. **Click "Settings"** tab
3. **Click "Domains"** in sidebar
4. **Add your custom domain** and follow DNS configuration instructions

## 🔧 Configuration

### Environment Variables
No environment variables are required for this project.

### Customization

#### Update Author Information
Edit the author section in `src/App.jsx`:
```jsx
// Update author details
<h4 className="text-xl text-blue-600 font-semibold mb-3">Your Name</h4>
<div className="flex items-center space-x-2 text-gray-600">
  <Globe className="h-4 w-4" />
  <span>your-website.com</span>
</div>
```

#### Add More Formulas
Add new formulas to the `formulaData` object in `src/App.jsx`:
```jsx
const formulaData = {
  mathematical: [
    {
      name: 'NEW_FORMULA',
      purpose: 'Description of what it does',
      syntax: '=NEW_FORMULA(parameters)',
      example: '=NEW_FORMULA(A1:A10)',
      useCase: 'Marketing use case description'
    },
    // ... existing formulas
  ]
}
```

#### Update Styling
Modify `src/App.css` and Tailwind classes in `src/App.jsx` to customize the appearance.

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Common Issues

**Build fails with "Module not found" error:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Images not loading in production:**
- Ensure all images are in `src/assets/` directory
- Use relative imports: `import image from './assets/image.png'`

**Vercel deployment fails:**
- Check that `package.json` has correct build script
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Getting Help

1. **Check the [Issues](https://github.com/YOUR_USERNAME/excel-formula-website/issues)** section
2. **Create a new issue** with detailed description
3. **Contact the author** via the contact information on the website

## 📄 License

© 2024 Senith Samaranayake. All rights reserved.

This project is created for educational and professional purposes. Please respect the author's intellectual property.

## 👨‍💼 About the Author

**Senith Samaranayake**
- Marketing Analytics Expert
- Excel Automation Specialist
- Entrepreneur passionate about data-driven marketing

**Contact Information:**
- 🌐 Website: [www.startupduo.org](https://www.startupduo.org)
- 📧 Email: senith@startupduo.org
- 📱 Phone: 071 0 120 130
- 📍 Location: Sri Lanka

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Support

If this project helped you, please consider:
- ⭐ **Starring the repository**
- 🐛 **Reporting bugs**
- 💡 **Suggesting new features**
- 📢 **Sharing with others**

---

**Made with ❤️ by Senith Samaranayake**

*Empowering marketers with data-driven insights through Excel mastery.*

