// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Feeling Tracker Functionality
    const feelingRange = document.getElementById('feeling-range');
    const emojis = document.querySelectorAll('.emoji');
    const emotionLabels = ['Sad', 'Laugh', 'Happy', 'Angry', 'Nauseated'];
    
    // Update emoji selection based on slider
    feelingRange.addEventListener('input', function() {
        const value = parseInt(this.value);
        updateEmojiSelection(value - 1);
    });
    
    // Update emoji selection when clicking on emojis
    emojis.forEach((emoji, index) => {
        emoji.addEventListener('click', function() {
            feelingRange.value = index + 1;
            updateEmojiSelection(index);
        });
    });
    
    function updateEmojiSelection(activeIndex) {
        emojis.forEach((emoji, index) => {
            if (index === activeIndex) {
                emoji.classList.add('active');
            } else {
                emoji.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section (if implemented)
            const targetId = this.getAttribute('href').substring(1);
            if (targetId && targetId !== '#') {
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.schedule-demo-btn, .play-btn, .login-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('play-btn') ? 'scale(1.1)' : 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'none';
        });
    });
    
    // Play button functionality
    const playBtn = document.querySelector('.play-btn');
    playBtn.addEventListener('click', function() {
        // Add a subtle animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.1)';
        }, 150);
        
        // You can add video modal or other functionality here
        console.log('Play button clicked - Add your video functionality here');
    });
    
    // Schedule Demo button functionality
    const scheduleDemoBtn = document.querySelector('.schedule-demo-btn');
    scheduleDemoBtn.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 150);
        
        // You can add form modal or redirect functionality here
        console.log('Schedule Demo clicked - Add your form functionality here');
    });
    
    // Login button functionality
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 150);
        
        // You can add login modal or redirect functionality here
        console.log('Login clicked - Add your authentication functionality here');
    });
    
    // Add parallax effect to floating cards
    let ticking = false;
    
    function updateCardPositions() {
        const cards = document.querySelectorAll('.card');
        const scrolled = window.pageYOffset;
        
        cards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            card.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateCardPositions);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Add subtle hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 12px 40px 0 rgba(31, 38, 135, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
        });
    });
    
    // Add typing effect to headline (optional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment the lines below if you want a typing effect
    // const headline = document.querySelector('.headline');
    // const headlineText = headline.textContent;
    // typeWriter(headline, headlineText, 50);
    
    // Add smooth reveal animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for reveal animation
    const revealElements = document.querySelectorAll('.content-left > *, .card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Interactive Calendar Functionality
    let currentCalendarDate = new Date();
    let selectedDate = new Date();
    let isCalendarExpanded = false;
    
    function generateCalendar(date, showFullMonth = false) {
        const year = date.getFullYear();
        const month = date.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        // Update header
        document.getElementById('currentMonth').textContent = monthNames[month];
        document.getElementById('currentYear').textContent = year;
        
        // Generate calendar dates
        const calendarDates = document.getElementById('calendarDates');
        calendarDates.innerHTML = '';
        
        const today = new Date();
        const isToday = (date) => {
            return date.getDate() === today.getDate() && 
                   date.getMonth() === today.getMonth() && 
                   date.getFullYear() === today.getFullYear();
        };
        
        const isSelected = (date) => {
            return date.getDate() === selectedDate.getDate() && 
                   date.getMonth() === selectedDate.getMonth() && 
                   date.getFullYear() === selectedDate.getFullYear();
        };
        
        // Determine how many dates to show
        const totalDates = showFullMonth ? 42 : 7;
        const startIndex = showFullMonth ? 0 : Math.floor((today.getDate() + startDate.getDay() - 1) / 7) * 7;
        
        for (let i = startIndex; i < startIndex + totalDates; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            
            const dateElement = document.createElement('span');
            dateElement.className = 'date';
            dateElement.textContent = currentDate.getDate();
            
            // Add appropriate classes
            if (currentDate.getMonth() !== month) {
                dateElement.classList.add('prev-month');
            } else {
                dateElement.classList.add('current-month');
            }
            
            if (isToday(currentDate)) {
                dateElement.classList.add('today');
            }
            
            if (isSelected(currentDate)) {
                dateElement.classList.add('selected');
            }
            
            // Add click event
            dateElement.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentDate.getMonth() === month) {
                    selectedDate = new Date(currentDate);
                    generateCalendar(currentCalendarDate, isCalendarExpanded);
                }
            });
            
            calendarDates.appendChild(dateElement);
        }
    }
    
    // Calendar expand/collapse functionality
    const calendarCard = document.querySelector('.calendar-tasks-card');
    const calendarGrid = document.querySelector('.calendar-grid');
    
    function expandCalendar() {
        isCalendarExpanded = true;
        calendarCard.classList.add('expanded');
        calendarGrid.classList.remove('collapsed');
        generateCalendar(currentCalendarDate, true);
    }
    
    function collapseCalendar() {
        isCalendarExpanded = false;
        calendarCard.classList.remove('expanded');
        calendarGrid.classList.add('collapsed');
        generateCalendar(currentCalendarDate, false);
    }
    
    // Click on calendar card to expand
    calendarCard.addEventListener('click', (e) => {
        if (!isCalendarExpanded) {
            expandCalendar();
        }
    });
    
    // Click outside to collapse
    document.addEventListener('click', (e) => {
        if (isCalendarExpanded && !calendarCard.contains(e.target)) {
            collapseCalendar();
        }
    });
    
    // Navigation buttons
    document.getElementById('prevMonth').addEventListener('click', (e) => {
        e.stopPropagation();
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        generateCalendar(currentCalendarDate, isCalendarExpanded);
    });
    
    document.getElementById('nextMonth').addEventListener('click', (e) => {
        e.stopPropagation();
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        generateCalendar(currentCalendarDate, isCalendarExpanded);
    });
    
    // Initialize calendar (collapsed by default)
    collapseCalendar();
    
    // Add some interactive micro-animations
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.card');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        cards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const deltaX = (e.clientX - cardCenterX) * 0.01;
            const deltaY = (e.clientY - cardCenterY) * 0.01;
            
            card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
    });
    
    // Reset card positions when mouse leaves
    document.addEventListener('mouseleave', function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.transform = 'none';
        });
    });
}); 
