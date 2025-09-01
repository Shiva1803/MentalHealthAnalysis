# AI-Powered Mental Health Landing Page

A modern, responsive landing page featuring glassmorphism design elements and interactive components for an AI-powered mental health solution.

## ✨ Features

### 🎨 Design Elements
- **Glassmorphism Effects**: Beautiful translucent UI elements with backdrop blur
- **Abstract Head Graphic**: Central visual element with colorful gradient animation
- **Floating Cards**: Interactive UI components with smooth animations
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

### 🧭 Navigation & Header
- **Fixed Navigation Bar**: With glassmorphism effect and smooth scrolling
- **Logo**: Blue circular logo with moon icon
- **Navigation Links**: Home, About us, Platform, Pricing, Resources, Web3.0
- **Login Button**: Glass effect button at top right

### 📱 Main Content
- **Social Proof Section**: "We're trusted by millions of users" with profile icons
- **Headline**: "Technically driven Mental Health Solution with AI"
- **Call-to-Action**: Schedule Demo button and Play button with glass effects

### 🎯 Interactive Components

#### 1. Affirmation Card
- Profile picture with user
- Daily affirmation text
- Background inspirational quotes
- Floating animation

#### 2. Feeling Tracker
- "How Are You Feeling Today" interface
- 5 emotion emojis (Sad, Laugh, Happy, Angry, Nauseated)
- Interactive slider for mood selection
- Click emojis or use slider to track feelings

#### 3. Calendar & Tasks
- Monthly calendar view with current week highlighted
- Task list with thumbnails
- Meditation, breathing, and grounding exercises
- Current date highlighting

## 🚀 Getting Started

### Prerequisites
- Modern web browser with CSS backdrop-filter support
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🛠️ Customization

### Colors & Theme
The main color scheme uses:
- **Primary Blue**: `#667eea`
- **Secondary Purple**: `#764ba2`
- **Background**: Light gradient from `#f5f7fa` to `#c3cfe2`

To change colors, edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --background-start: #f5f7fa;
    --background-end: #c3cfe2;
}
```

### Content Updates
- **Headline**: Edit the text in `index.html` within the `.headline` section
- **Navigation**: Update links in the `.nav-links` section
- **Tasks**: Modify the task list in the `.tasks-section`
- **Affirmations**: Change daily affirmations in the `.affirmation-card`

### Images & Assets
- **Profile Pictures**: Replace Unsplash URLs with your own images
- **Task Thumbnails**: Update the background images in CSS for meditation, breathing, and grounding
- **Logo**: Replace the moon icon with your own logo

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🎭 Animations & Interactions

### CSS Animations
- **Floating Cards**: Subtle up/down movement
- **Glow Effect**: Pulsing animation on the central graphic
- **Hover Effects**: Scale and shadow changes on interactive elements

### JavaScript Interactions
- **Feeling Tracker**: Emoji selection and slider synchronization
- **Button Animations**: Click and hover effects
- **Parallax Scrolling**: Cards move at different speeds
- **Smooth Navigation**: Active link highlighting and smooth scrolling

## 🔧 Browser Support

- **Chrome**: 76+ (Full support)
- **Firefox**: 70+ (Full support)
- **Safari**: 13.1+ (Full support)
- **Edge**: 79+ (Full support)

## 📁 Project Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Design Principles

### Glassmorphism
- **Background**: Semi-transparent white (`rgba(255, 255, 255, 0.25)`)
- **Backdrop Filter**: 10px blur effect
- **Border**: Subtle white border with low opacity
- **Shadow**: Soft shadow with blue tint

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Hierarchy**: Clear contrast between headings and body text

### Spacing
- **Consistent Margins**: 1rem, 1.5rem, 2rem, 3rem
- **Card Padding**: 1.5rem for comfortable content spacing
- **Component Gaps**: 1rem, 2rem, 4rem for visual breathing room

## 🚀 Deployment

### Static Hosting
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a repository and enable Pages
- **AWS S3**: Upload files and configure static website hosting

### Custom Domain
1. Purchase a domain name
2. Configure DNS settings
3. Update your hosting provider's domain settings

## 🔮 Future Enhancements

- **Dark Mode Toggle**: Add theme switching functionality
- **User Authentication**: Integrate login/signup systems
- **Data Persistence**: Save user preferences and mood tracking
- **API Integration**: Connect to mental health APIs
- **Multi-language Support**: Internationalization features
- **Accessibility**: Enhanced screen reader support and keyboard navigation

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them back with the community!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you need help customizing this landing page or have questions about the implementation, feel free to reach out!

---

**Built with ❤️ for mental health awareness and modern web design** 