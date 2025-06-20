// Main application JavaScript
class EventMateApp {
  constructor() {
    this.eventType = '';
    this.location = '';
    this.budget = '';
    this.recommendations = [];
    this.planningSteps = [];
    
    this.initializeEventListeners();
    this.initializeLucideIcons();
  }
  
  initializeLucideIcons() {
    // Initialize Lucide icons when DOM is loaded
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
  
  initializeEventListeners() {
    // Form elements
    const eventTypeSelect = document.getElementById('event-type');
    const locationSelect = document.getElementById('location');
    const budgetInput = document.getElementById('budget');
    const getRecommendationsBtn = document.getElementById('get-recommendations');
    const budgetBadges = document.querySelectorAll('.badge');
    
    // Event listeners
    eventTypeSelect.addEventListener('change', (e) => {
      this.eventType = e.target.value;
      this.validateForm();
    });
    
    locationSelect.addEventListener('change', (e) => {
      this.location = e.target.value;
      this.validateForm();
    });
    
    budgetInput.addEventListener('input', (e) => {
      this.budget = e.target.value;
      this.updateBudgetBadges();
      this.validateForm();
    });
    
    budgetBadges.forEach(badge => {
      badge.addEventListener('click', (e) => {
        const budgetValue = e.target.getAttribute('data-budget');
        budgetInput.value = budgetValue;
        this.budget = budgetValue;
        this.updateBudgetBadges();
        this.validateForm();
      });
    });
    
    getRecommendationsBtn.addEventListener('click', () => {
      this.handleGetRecommendations();
    });
  }
  
  validateForm() {
    const getRecommendationsBtn = document.getElementById('get-recommendations');
    const isValid = this.eventType && this.location && this.budget;
    
    getRecommendationsBtn.disabled = !isValid;
  }
  
  updateBudgetBadges() {
    const budgetBadges = document.querySelectorAll('.badge');
    budgetBadges.forEach(badge => {
      const badgeValue = badge.getAttribute('data-budget');
      if (badgeValue === this.budget) {
        badge.classList.add('active');
      } else {
        badge.classList.remove('active');
      }
    });
  }
  
  async handleGetRecommendations() {
    if (!this.eventType || !this.location || !this.budget) return;
    
    const getRecommendationsBtn = document.getElementById('get-recommendations');
    const btnText = getRecommendationsBtn.querySelector('.btn-text');
    const loadingSpinner = getRecommendationsBtn.querySelector('.loading-spinner');
    
    // Show loading state
    btnText.style.display = 'none';
    loadingSpinner.style.display = 'flex';
    getRecommendationsBtn.disabled = true;
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Get recommendations and planning steps
      this.recommendations = getRecommendations(this.eventType, parseInt(this.budget), this.location);
      this.planningSteps = getPlanningSteps(this.eventType, parseInt(this.budget));
      
      // Display results
      this.displayResults();
      
    } catch (error) {
      console.error('Error getting recommendations:', error);
      this.showError('Failed to get recommendations. Please try again.');
    } finally {
      // Reset button state
      btnText.style.display = 'block';
      loadingSpinner.style.display = 'none';
      getRecommendationsBtn.disabled = false;
    }
  }
  
  displayResults() {
    const resultsSection = document.getElementById('results');
    
    // Show results section with animation
    resultsSection.style.display = 'block';
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Display vendors
    this.displayVendors();
    
    // Display planning timeline
    this.displayPlanningTimeline();
    
    // Reinitialize icons for new content
    setTimeout(() => {
      this.initializeLucideIcons();
    }, 100);
  }
  
  displayVendors() {
    const vendorsGrid = document.getElementById('vendors-grid');
    
    if (this.recommendations.length === 0) {
      vendorsGrid.innerHTML = `
        <div class="col-span-full text-center py-8">
          <div class="no-vendors-message">
            <i data-lucide="search-x" class="no-vendors-icon"></i>
            <h3>No vendors found in ${this.location}</h3>
            <p class="text-gray-500">We don't have vendors for ${this.eventType} events in ${this.location} yet. Try selecting a different location or contact us to add vendors in your area.</p>
          </div>
        </div>
      `;
      // Reinitialize icons for the new content
      setTimeout(() => {
        this.initializeLucideIcons();
      }, 100);
      return;
    }
    
    vendorsGrid.innerHTML = this.recommendations.map(vendor => `
      <div class="vendor-card">
        <div class="vendor-image">
          <i data-lucide="${this.getVendorIcon(vendor.type)}"></i>
        </div>
        <div class="vendor-info">
          <h3 class="vendor-name">${vendor.name}</h3>
          <span class="vendor-type">${vendor.type}</span>
          <div class="vendor-location">
            <i data-lucide="map-pin"></i>
            <span>${vendor.location}</span>
          </div>
          <div class="vendor-rating">
            <i data-lucide="star"></i>
            <span>${vendor.rating}</span>
          </div>
          <div class="vendor-price">${vendor.priceRange}</div>
          <p class="vendor-description">${vendor.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  displayPlanningTimeline() {
    const timelineContainer = document.getElementById('planning-timeline');
    
    timelineContainer.innerHTML = this.planningSteps.map(step => `
      <div class="timeline-item">
        <div class="timeline-step">${step.step}</div>
        <h3 class="timeline-title">${step.title}</h3>
        <p class="timeline-description">${step.description}</p>
        <span class="timeline-timeframe">${step.timeframe}</span>
      </div>
    `).join('');
  }
  
  getVendorIcon(vendorType) {
    const iconMap = {
      'Wedding Planner': 'heart',
      'Decorator': 'palette',
      'Music & Entertainment': 'music',
      'Catering': 'utensils',
      'Photography': 'camera',
      'Venue': 'building',
      'Event Management': 'calendar',
      'Audio Visual': 'monitor-speaker',
      'Party Planner': 'party-popper',
      'Cake & Desserts': 'cake',
      'Entertainment': 'gamepad-2',
      'Event Planner': 'calendar-heart'
    };
    
    return iconMap[vendorType] || 'star';
  }
  
  showError(message) {
    // Simple error display - you could enhance this with a proper toast/modal
    alert(message);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new EventMateApp();
});

// Handle any lucide icon initialization issues
document.addEventListener('DOMContentLoaded', () => {
  // Fallback icon initialization
  setTimeout(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 500);
});