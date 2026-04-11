# Mohammed Ismail Basha - Developer Portfolio

A professional, high-performance portfolio website for a Flutter & Android Developer.

## 🚀 Built With
- **Frontend**: React.js, Tailwind CSS, Framer Motion, Lucide React
- **Backend**: Nodemailer, CORS
- **Design**: Premium glassmorphism dark mode, mobile-first responsive design

## 📁 Project Structure
- `/client`: React Vite application
- `/server`: Express API for contact form handling

## 🛠️ Getting Started

### 1. Start the Backend
```bash
cd server
npm install
npm run dev
```
The server will run on `http://localhost:5000`.

### 2. Start the Frontend
```bash
cd client
npm install
npm run dev
```
The app will be available on `http://localhost:5173`.

## ⚙️ Configuration (Backend)
To enable real email sending with Nodemailer, create a `.env` file in the `/server` directory:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=your-personal-email@gmail.com
```

## 🎯 Features
- **Dynamic Hero Section**: High-impact introduction with background visual.
- **Project Grid**: Showcases real-world mobile apps (National Invest, Onojo, etc.) with role and impact details.
- **Categorized Skills**: Mobile (Flutter/Kotlin), Architecture (MVVM/Clean), and Tools.
- **Interactive Contact Form**: State-aware form with loading, success, and error handling.
- **Animations**: Subtle, premium transitions using Framer Motion.
- **Responsive Layout**: Seamless experience across mobile, tablet, and desktop.
