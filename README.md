# AI-Powered Mental Health Landing Page

A modern, responsive landing page featuring glassmorphism design elements and interactive components for an AI-powered mental health solution.

# Installation
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

## Customization

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

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## Animations & Interactions

### CSS Animations
- **Floating Cards**: Subtle up/down movement
- **Glow Effect**: Pulsing animation on the central graphic
- **Hover Effects**: Scale and shadow changes on interactive elements

### JavaScript Interactions
- **Feeling Tracker**: Emoji selection and slider synchronization
- **Button Animations**: Click and hover effects
- **Parallax Scrolling**: Cards move at different speeds
- **Smooth Navigation**: Active link highlighting and smooth scrollin

## Future Enhancements

- **Data Persistence**: Save user preferences and mood tracking
- **API Integration**: Connect to mental health APIs
- **Multi-language Support**: Internationalization features
- **Accessibility**: Enhanced screen reader support and keyboard navigation

## Contribution

We are looking for active contributors fot the betterment of this project.

## License

This project is open source and available under the [MIT License](LICENSE).

##  Support

If you need help customizing this landing page or have questions about the implementation, feel free to reach out!

---

**Team LocalCoders - 2025** 
