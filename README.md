# Elite Engineering & Construction Website

A modern, professional one-page website for a construction and engineering company built with pure HTML, CSS, and JavaScript - no frameworks required.

## Features

### Design
- **Modern Corporate Style**: Dark blue, gray, white color scheme with gold accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **Professional Look**: Trust-focused design suitable for B2B and enterprise clients
- **SEO Optimized**: Proper meta tags and semantic HTML structure

### Sections
1. **Hero Section**: Eye-catching header with call-to-action buttons
2. **About Section**: Company overview with animated statistics
3. **Services Section**: 6 service cards with icons and hover effects
4. **Projects Section**: Portfolio grid with image overlays
5. **Why Choose Us**: Key advantages with icon features
6. **Clients Section**: Client logo showcase area
7. **Contact Section**: Contact form and company information
8. **Footer**: Comprehensive footer with newsletter signup

### Interactive Features
- Smooth scrolling navigation
- Fixed header with scroll effect
- Mobile hamburger menu
- Animated counters for statistics
- Fade-in animations on scroll
- Interactive cards with hover effects
- Form validation and submission handling
- Active navigation highlighting

## File Structure

```
engineering-company-html/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## How to Use

### Option 1: Open Directly in Browser
1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser

### Option 2: Use a Local Server (Recommended)
For better performance and to avoid CORS issues:

**Using Python:**
```bash
cd /home/ahmed/engineering-company-html
python -m http.server 8000
# Visit http://localhost:8000
```

**Using PHP:**
```bash
cd /home/ahmed/engineering-company-html
php -S localhost:8000
# Visit http://localhost:8000
```

**Using Node.js (with npx):**
```bash
cd /home/ahmed/engineering-company-html
npx http-server -p 8000
# Visit http://localhost:8000
```

## Customization Guide

### 1. Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-dark-blue: #0a2540;
    --accent-gold: #d4af37;
    /* etc. */
}
```

### 2. Update Content
Edit `index.html` to change:
- Company name and logo
- Service descriptions
- Project information
- Contact details
- Footer links

### 3. Replace Images
Current images are from Unsplash. Replace the image URLs in `index.html`:
```html
<img src="YOUR_IMAGE_URL" alt="Description">
```

### 4. Add Client Logos
Replace the placeholder divs in the Clients section:
```html
<div class="client-logo">
    <img src="path/to/logo.png" alt="Client Name">
</div>
```

### 5. Connect Forms
Update form submission in `script.js` to connect to your backend:
```javascript
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

## Services Offered

The website showcases these services:
- General Contracting
- Public Supplies
- Finishing Works
- Decorations
- Engineering Consultations
- Project Management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fast loading with optimized CSS
- Lazy loading ready (commented in JS)
- Minimal dependencies (only Font Awesome and Google Fonts)
- Smooth animations using CSS transforms

## SEO Features

- Semantic HTML5 elements
- Meta description and keywords
- Proper heading hierarchy
- Alt text for images
- Fast page load speed

## Dependencies

### External Resources (loaded via CDN):
- Google Fonts (Montserrat, Open Sans)
- Font Awesome Icons

No JavaScript frameworks or libraries required!

## Future Enhancements

Consider adding:
- Image gallery/lightbox for projects
- Testimonials slider
- Blog section
- Multi-language support
- Contact form backend integration
- Analytics integration (Google Analytics)
- Live chat widget

## License

Free to use and modify for your projects.

## Support

For customization help or questions, refer to the inline comments in the code files.

---

Built with ❤️ for Elite Engineering & Construction
