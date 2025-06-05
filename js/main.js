/**
 * Excel Formula Website - Enhanced JavaScript
 * Author: Senith Samaranayake
 * Description: JavaScript functionality for the Excel Formula Website for Marketers
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables
    const searchInput = document.getElementById('searchInput');
    const categoryFilters = document.getElementById('categoryFilters');
    const formulaContainer = document.getElementById('formulaContainer');
    const resultsHeading = document.getElementById('resultsHeading');
    const searchResults = document.getElementById('searchResults');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const formulaCardTemplate = document.getElementById('formulaCardTemplate');
    
    let currentCategory = 'all';
    let searchQuery = '';
    
    // Category display names
    const categoryNames = {
        'mathematical': 'Mathematical',
        'logical': 'Logical',
        'lookup': 'Lookup & Reference',
        'text': 'Text',
        'dateTime': 'Date & Time',
        'conditional': 'Conditional',
        'financial': 'Financial',
        'advanced': 'Advanced'
    };
    
    // Initialize AOS (Animate on Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Initialize the page
    init();
    
    /**
     * Initialize the page
     */
    function init() {
        // Add event listeners
        searchInput.addEventListener('input', handleSearch);
        categoryFilters.addEventListener('click', handleCategoryFilter);
        window.addEventListener('scroll', handleScroll);
        
        // Add floating animation to some elements
        addFloatingAnimation();
        
        // Display all formulas initially
        displayFormulas();
        
        // Add scroll reveal animations
        initScrollReveal();
    }
    
    /**
     * Handle search input
     */
    function handleSearch() {
        searchQuery = searchInput.value.trim().toLowerCase();
        
        // Add animation to search results
        formulaContainer.classList.add('animate__animated', 'animate__fadeOut');
        
        setTimeout(() => {
            displayFormulas();
            formulaContainer.classList.remove('animate__animated', 'animate__fadeOut');
            formulaContainer.classList.add('animate__animated', 'animate__fadeIn');
            
            setTimeout(() => {
                formulaContainer.classList.remove('animate__animated', 'animate__fadeIn');
            }, 500);
        }, 300);
    }
    
    /**
     * Handle category filter clicks
     */
    function handleCategoryFilter(event) {
        if (event.target.tagName === 'BUTTON') {
            // Remove active class from all buttons
            const buttons = categoryFilters.querySelectorAll('button');
            buttons.forEach(button => button.classList.remove('active'));
            buttons.forEach(button => button.classList.add('btn-outline-primary'));
            buttons.forEach(button => button.classList.remove('btn-gradient'));
            
            // Add active class to clicked button
            event.target.classList.add('active');
            event.target.classList.add('btn-gradient');
            event.target.classList.remove('btn-outline-primary');
            
            // Update current category
            currentCategory = event.target.getAttribute('data-category');
            
            // Add animation to formula container
            formulaContainer.classList.add('animate__animated', 'animate__fadeOut');
            
            setTimeout(() => {
                // Display filtered formulas
                displayFormulas();
                formulaContainer.classList.remove('animate__animated', 'animate__fadeOut');
                formulaContainer.classList.add('animate__animated', 'animate__fadeIn');
                
                setTimeout(() => {
                    formulaContainer.classList.remove('animate__animated', 'animate__fadeIn');
                }, 500);
            }, 300);
        }
    }
    
    /**
     * Handle scroll events
     */
    function handleScroll() {
        const scrollPosition = window.scrollY;
        
        // Parallax effect for header
        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
        
        // Reveal elements on scroll
        revealOnScroll();
    }
    
    /**
     * Add floating animation to elements
     */
    function addFloatingAnimation() {
        const elements = document.querySelectorAll('.floating');
        
        elements.forEach((el, index) => {
            // Add different animation delays
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }
    
    /**
     * Initialize scroll reveal animations
     */
    function initScrollReveal() {
        const formulaCards = document.querySelectorAll('.formula-card');
        
        formulaCards.forEach((card, index) => {
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', `${index * 100}`);
        });
    }
    
    /**
     * Reveal elements on scroll
     */
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.reveal');
        
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    /**
     * Display formulas based on current filters
     */
    function displayFormulas() {
        // Show loading indicator
        loadingIndicator.style.display = 'block';
        
        // Clear previous results
        formulaContainer.innerHTML = '';
        
        // Get all formulas that match the current filters
        const filteredFormulas = getFilteredFormulas();
        
        // Update results heading
        updateResultsHeading(filteredFormulas.length);
        
        // Display search results summary if there's a search query
        displaySearchSummary(filteredFormulas.length);
        
        // If no formulas match, show a message
        if (filteredFormulas.length === 0) {
            const noResults = document.createElement('div');
            noResults.id = 'noResults';
            noResults.className = 'col-12 text-center py-5 animate__animated animate__fadeIn';
            noResults.innerHTML = `
                <i class="bi bi-search display-1"></i>
                <h3 class="mt-3">No formulas found</h3>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            `;
            formulaContainer.appendChild(noResults);
        } else {
            // Display each formula with staggered animation
            filteredFormulas.forEach((formula, index) => {
                setTimeout(() => {
                    const formulaCard = createFormulaCard(formula);
                    formulaContainer.appendChild(formulaCard);
                    
                    // Add animation to the card
                    const card = formulaContainer.lastElementChild;
                    card.classList.add('animate__animated', 'animate__fadeInUp');
                    card.style.animationDelay = `${index * 0.05}s`;
                    
                    // Remove animation class after animation completes
                    setTimeout(() => {
                        card.classList.remove('animate__animated', 'animate__fadeInUp');
                    }, 1000);
                }, index * 50);
            });
        }
        
        // Hide loading indicator after a short delay
        setTimeout(() => {
            loadingIndicator.style.display = 'none';
        }, filteredFormulas.length > 0 ? 500 : 0);
    }
    
    /**
     * Get formulas filtered by current category and search query
     */
    function getFilteredFormulas() {
        let allFormulas = [];
        
        // Get formulas from the selected category or all categories
        if (currentCategory === 'all') {
            // Get formulas from all categories
            Object.keys(formulaData).forEach(category => {
                formulaData[category].forEach(formula => {
                    // Add category to formula object
                    formula.category = category;
                    allFormulas.push(formula);
                });
            });
        } else {
            // Get formulas from the selected category
            formulaData[currentCategory].forEach(formula => {
                // Add category to formula object
                formula.category = currentCategory;
                allFormulas.push(formula);
            });
        }
        
        // Filter by search query if there is one
        if (searchQuery) {
            allFormulas = allFormulas.filter(formula => {
                return (
                    formula.name.toLowerCase().includes(searchQuery) ||
                    formula.purpose.toLowerCase().includes(searchQuery) ||
                    formula.syntax.toLowerCase().includes(searchQuery) ||
                    formula.example.toLowerCase().includes(searchQuery) ||
                    formula.useCase.toLowerCase().includes(searchQuery)
                );
            });
        }
        
        return allFormulas;
    }
    
    /**
     * Create a formula card element
     */
    function createFormulaCard(formula) {
        // Clone the template
        const card = formulaCardTemplate.content.cloneNode(true);
        
        // Fill in the formula data
        card.querySelector('.formula-name').textContent = formula.name;
        card.querySelector('.formula-purpose').textContent = formula.purpose;
        card.querySelector('.formula-syntax').textContent = formula.syntax;
        card.querySelector('.formula-example').textContent = formula.example;
        card.querySelector('.formula-usecase').textContent = formula.useCase;
        
        // Set category badge
        const categoryBadge = card.querySelector('.formula-category');
        categoryBadge.textContent = categoryNames[formula.category];
        setCategoryBadgeColor(categoryBadge, formula.category);
        
        // Highlight search terms if there is a search query
        if (searchQuery) {
            highlightSearchTerms(card, searchQuery);
        }
        
        // Add click event to card for flip effect
        const cardElement = card.querySelector('.formula-card-inner');
        if (cardElement) {
            cardElement.addEventListener('click', function() {
                this.classList.toggle('card-flipped');
            });
        }
        
        return card;
    }
    
    /**
     * Update the results heading
     */
    function updateResultsHeading(count) {
        if (currentCategory === 'all') {
            if (searchQuery) {
                resultsHeading.textContent = `Search Results (${count})`;
            } else {
                resultsHeading.textContent = `All Excel Formulas (${count})`;
            }
        } else {
            if (searchQuery) {
                resultsHeading.textContent = `${categoryNames[currentCategory]} Formulas - Search Results (${count})`;
            } else {
                resultsHeading.textContent = `${categoryNames[currentCategory]} Formulas (${count})`;
            }
        }
        
        // Add animation to the heading
        resultsHeading.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
            resultsHeading.classList.remove('animate__animated', 'animate__fadeIn');
        }, 1000);
    }
    
    /**
     * Display search summary
     */
    function displaySearchSummary(count) {
        if (searchQuery) {
            searchResults.innerHTML = `
                <div class="alert alert-info animate__animated animate__fadeIn">
                    <i class="bi bi-info-circle-fill me-2"></i>
                    Found <strong>${count}</strong> formula${count !== 1 ? 's' : ''} matching "<strong>${searchQuery}</strong>"
                    ${currentCategory !== 'all' ? ` in <strong>${categoryNames[currentCategory]}</strong> category` : ''}
                </div>
            `;
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }
    
    /**
     * Highlight search terms in the formula card
     */
    function highlightSearchTerms(card, query) {
        const textElements = [
            card.querySelector('.formula-purpose'),
            card.querySelector('.formula-usecase')
        ];
        
        textElements.forEach(element => {
            if (!element) return;
            
            const text = element.textContent;
            const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
            element.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
        });
    }
    
    /**
     * Escape special characters in a string for use in a regular expression
     */
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    /**
     * Set the color of the category badge
     */
    function setCategoryBadgeColor(badge, category) {
        // Remove any existing bg-* classes
        badge.className = badge.className.replace(/bg-\w+/g, '');
        
        // Add the appropriate color class
        switch (category) {
            case 'mathematical':
                badge.classList.add('bg-primary');
                break;
            case 'logical':
                badge.classList.add('bg-success');
                break;
            case 'lookup':
                badge.classList.add('bg-info');
                break;
            case 'text':
                badge.classList.add('bg-warning');
                break;
            case 'dateTime':
                badge.classList.add('bg-danger');
                break;
            case 'conditional':
                badge.classList.add('bg-dark');
                break;
            case 'financial':
                badge.classList.add('bg-secondary');
                break;
            case 'advanced':
                badge.classList.add('bg-purple');
                break;
            default:
                badge.classList.add('bg-secondary');
        }
    }
    
    // Add mousemove effect to cards
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.formula-card-inner');
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                const xRotation = ((y - rect.height / 2) / rect.height) * 10;
                const yRotation = ((rect.width / 2 - x) / rect.width) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
            } else {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            }
        });
    });
    
    // Reset card transform on mouse leave
    document.addEventListener('mouseleave', function() {
        const cards = document.querySelectorAll('.formula-card-inner');
        
        cards.forEach(card => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});

