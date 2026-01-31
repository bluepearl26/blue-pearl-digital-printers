# Blue Pearl Digital Printers - Business Website

A complete, professional, mobile-responsive website for Blue Pearl Digital Printers - a local digital printing company.

## 🎯 Project Overview

This is a fast, modern business website built to drive phone calls and inquiries for a local printing business. The site showcases services, company information, and provides easy contact options for potential customers.

## ✨ Features

### Pages
- **Home** - Hero section with CTA buttons, services overview, why choose us section, and quick contact strip
- **About** - Company introduction, mission & values, experience highlights
- **Services** - Detailed service offerings with images and descriptions
- **Contact** - Contact form, phone/email/address info, WhatsApp integration, map placeholder

### Key Features
- ✅ Fully responsive mobile-first design
- ✅ Sticky navigation with mobile menu
- ✅ Click-to-call functionality
- ✅ WhatsApp integration
- ✅ Contact form (frontend validation)
- ✅ Professional branding with custom colors
- ✅ Fast loading and optimized images
- ✅ Clean, modern UI with Tailwind CSS

## 🎨 Branding

### Colors
- **Primary Color**: #0B3C5D (Deep Blue)
- **Secondary Color**: #E6F0FA (Light Blue)
- **Accent Color**: #F5A623 (Orange)
- **Text Color**: #1A1A1A (Dark Gray)
- **Background**: #FFFFFF (White)

### Images
All images are properly optimized and loaded from `/public` directory:
- `logo.png` - Company logo
- `hero.jpg` - Homepage hero section
- `service-business-cards.jpg` - Business cards service
- `service-banners.jpg` - Banners & flex printing
- `service-posters.jpg` - Posters & signage
- `shop.jpg` - About page shop image

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: JavaScript (JSX)
- **Backend**: None (static frontend only)
- **Database**: None
- **Authentication**: None

## 📁 Project Structure

```
/app
├── app/
│   ├── layout.js           # Root layout with Navbar and Footer
│   ├── page.js             # Homepage
│   ├── about/
│   │   └── page.js         # About page
│   ├── services/
│   │   └── page.js         # Services page
│   ├── contact/
│   │   └── page.js         # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.js           # Navigation component
│   └── Footer.js           # Footer component
├── public/
│   ├── logo.png
│   ├── hero.jpg
│   ├── service-business-cards.jpg
│   ├── service-banners.jpg
│   ├── service-posters.jpg
│   └── shop.jpg
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Yarn package manager

### Installation

1. Install dependencies:
```bash
yarn install
```

2. Run the development server:
```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
yarn build
yarn start
```

## 📱 Services Offered

1. **Business Cards** - Premium quality business cards in various finishes
2. **Brochures & Flyers** - Marketing materials for campaigns and events
3. **Banners & Flex Printing** - Large format outdoor advertising
4. **Posters & Signage** - High-quality indoor and outdoor signage
5. **Custom Print Solutions** - Tailored printing services for unique needs

## 🎯 Call-to-Actions

The website includes multiple CTAs to drive conversions:
- "Call Now" buttons (click-to-call: tel:+1234567890)
- "Request a Quote" buttons (leads to contact page)
- "Get Quote" buttons on service cards
- WhatsApp button (links to WhatsApp chat)

## 📞 Contact Information

**Note**: Update these placeholders with actual business information:
- Phone: +1 (234) 567-890
- Email: info@bluepearlprinters.com
- Address: 123 Business Street, City, State 12345
- WhatsApp: https://wa.me/1234567890

## 🎨 Design Features

### Desktop
- Hero section with full-width images
- Three-column service grid
- Icon-based feature highlights
- Professional typography and spacing

### Mobile
- Hamburger menu navigation
- Single-column responsive layouts
- Touch-friendly buttons
- Optimized image sizes

## 📝 Customization Guide

### Update Contact Information
Edit the following files:
- `/app/components/Navbar.js` - Phone number in CTA button
- `/app/components/Footer.js` - Phone, email, address
- `/app/app/contact/page.js` - All contact details and WhatsApp link

### Update Brand Colors
Edit `/app/tailwind.config.js`:
```javascript
colors: {
  primary: '#0B3C5D',    // Your primary color
  secondary: '#E6F0FA',  // Your secondary color
  accent: '#F5A623',     // Your accent color
  text: '#1A1A1A',       // Your text color
}
```

### Add/Remove Services
Edit `/app/app/services/page.js` and update the `services` array.

### Change Images
Replace images in `/app/public/` directory with your own (keep the same filenames).

## ✅ Testing

The website has been tested for:
- ✅ All pages load correctly
- ✅ Navigation works on desktop and mobile
- ✅ Forms validate input
- ✅ Responsive design across screen sizes
- ✅ Click-to-call functionality
- ✅ Image optimization and loading

## 🌐 Deployment

This is a standard Next.js application and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## 📄 License

This project is built for Blue Pearl Digital Printers.

## 👨‍💻 Development Notes

- No backend or database required
- Contact form is frontend-only (shows success message)
- All CTAs use placeholder phone numbers and emails
- Google Maps section is a placeholder (add actual embed code)
- WhatsApp link needs actual business phone number

## 🔧 Future Enhancements (Optional)

- Add actual backend for contact form submission
- Integrate Google Maps with real location
- Add image gallery for portfolio
- Implement testimonials section
- Add blog functionality
- Connect to email service (SendGrid, Mailgun)
- Add analytics (Google Analytics, Plausible)

---

**Built with ❤️ for Blue Pearl Digital Printers**
