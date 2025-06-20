// Enhanced mock data for vendors with location-specific entries
const mockVendors = {
  wedding: [
    // Delhi vendors
    {
      id: 1,
      name: "Royal Wedding Planners",
      type: "Wedding Planner",
      location: "Delhi",
      rating: 4.8,
      priceRange: "₹50K - ₹2L",
      description: "Premium wedding planning services with 10+ years experience in Delhi NCR"
    },
    {
      id: 2,
      name: "Delhi Palace Decorators",
      type: "Decorator",
      location: "Delhi",
      rating: 4.7,
      priceRange: "₹40K - ₹1.8L",
      description: "Exquisite wedding decorations specializing in traditional and modern themes"
    },
    {
      id: 3,
      name: "Capital Catering Services",
      type: "Catering",
      location: "Delhi",
      rating: 4.9,
      priceRange: "₹1200 - ₹2500 per plate",
      description: "Multi-cuisine wedding catering with authentic North Indian specialties"
    },
    {
      id: 4,
      name: "Delhi Wedding Photography",
      type: "Photography",
      location: "Delhi",
      rating: 4.8,
      priceRange: "₹60K - ₹1.5L",
      description: "Candid wedding photography capturing your special moments"
    },
    {
      id: 5,
      name: "Connaught Place Venues",
      type: "Venue",
      location: "Delhi",
      rating: 4.6,
      priceRange: "₹2L - ₹8L",
      description: "Premium wedding venues in the heart of Delhi"
    },
    
    // Mumbai vendors
    {
      id: 6,
      name: "Mumbai Dream Weddings",
      type: "Wedding Planner",
      location: "Mumbai",
      rating: 4.7,
      priceRange: "₹60K - ₹2.5L",
      description: "Bollywood-style wedding planning with glamorous setups"
    },
    {
      id: 7,
      name: "Marine Drive Decorators",
      type: "Decorator",
      location: "Mumbai",
      rating: 4.6,
      priceRange: "₹45K - ₹2L",
      description: "Stunning wedding decorations with sea-facing venue expertise"
    },
    {
      id: 8,
      name: "Mumbai Maharaja Catering",
      type: "Catering",
      location: "Mumbai",
      rating: 4.8,
      priceRange: "₹1000 - ₹2200 per plate",
      description: "Authentic Maharashtrian and multi-cuisine wedding catering"
    },
    {
      id: 9,
      name: "Bollywood Wedding Shoots",
      type: "Photography",
      location: "Mumbai",
      rating: 4.9,
      priceRange: "₹70K - ₹2L",
      description: "Cinematic wedding photography with Bollywood flair"
    },
    {
      id: 10,
      name: "Gateway Wedding Venues",
      type: "Venue",
      location: "Mumbai",
      rating: 4.5,
      priceRange: "₹3L - ₹12L",
      description: "Luxury wedding venues with stunning city and sea views"
    },
    
    // Bangalore vendors
    {
      id: 11,
      name: "Garden City Weddings",
      type: "Wedding Planner",
      location: "Bangalore",
      rating: 4.8,
      priceRange: "₹45K - ₹1.8L",
      description: "Tech-savvy wedding planning with modern digital solutions"
    },
    {
      id: 12,
      name: "Bangalore Bloom Decorators",
      type: "Decorator",
      location: "Bangalore",
      rating: 4.7,
      priceRange: "₹35K - ₹1.5L",
      description: "Garden-themed wedding decorations with fresh floral arrangements"
    },
    {
      id: 13,
      name: "Silicon Valley Catering",
      type: "Catering",
      location: "Bangalore",
      rating: 4.6,
      priceRange: "₹900 - ₹2000 per plate",
      description: "South Indian and continental fusion wedding catering"
    },
    {
      id: 14,
      name: "Nandi Hills Photography",
      type: "Photography",
      location: "Bangalore",
      rating: 4.8,
      priceRange: "₹50K - ₹1.3L",
      description: "Destination wedding photography with scenic backdrops"
    },
    {
      id: 15,
      name: "Palace Grounds Venues",
      type: "Venue",
      location: "Bangalore",
      rating: 4.4,
      priceRange: "₹1.5L - ₹6L",
      description: "Spacious wedding venues with modern amenities"
    },
    
    // Chennai vendors
    {
      id: 16,
      name: "Chennai Traditional Weddings",
      type: "Wedding Planner",
      location: "Chennai",
      rating: 4.9,
      priceRange: "₹40K - ₹1.6L",
      description: "Authentic Tamil wedding planning with cultural expertise"
    },
    {
      id: 17,
      name: "Marina Beach Decorators",
      type: "Decorator",
      location: "Chennai",
      rating: 4.5,
      priceRange: "₹30K - ₹1.2L",
      description: "Traditional South Indian wedding decorations with modern touches"
    },
    {
      id: 18,
      name: "Chennai Spice Catering",
      type: "Catering",
      location: "Chennai",
      rating: 4.8,
      priceRange: "₹800 - ₹1800 per plate",
      description: "Authentic Tamil cuisine and multi-regional South Indian dishes"
    },
    {
      id: 19,
      name: "Temple City Photography",
      type: "Photography",
      location: "Chennai",
      rating: 4.7,
      priceRange: "₹45K - ₹1.1L",
      description: "Traditional and contemporary wedding photography"
    },
    {
      id: 20,
      name: "Chennai Grand Venues",
      type: "Venue",
      location: "Chennai",
      rating: 4.6,
      priceRange: "₹1.2L - ₹5L",
      description: "Traditional wedding halls with modern facilities"
    },
    
    // Hyderabad vendors
    {
      id: 21,
      name: "Nizami Wedding Planners",
      type: "Wedding Planner",
      location: "Hyderabad",
      rating: 4.7,
      priceRange: "₹50K - ₹2.2L",
      description: "Royal Hyderabadi wedding planning with Nizami traditions"
    },
    {
      id: 22,
      name: "Charminar Decorators",
      type: "Decorator",
      location: "Hyderabad",
      rating: 4.6,
      priceRange: "₹38K - ₹1.6L",
      description: "Mughal-inspired wedding decorations with royal elegance"
    },
    {
      id: 23,
      name: "Hyderabadi Biryani Catering",
      type: "Catering",
      location: "Hyderabad",
      rating: 4.9,
      priceRange: "₹1100 - ₹2300 per plate",
      description: "Authentic Hyderabadi cuisine with famous biryani specialties"
    },
    {
      id: 24,
      name: "Pearl City Photography",
      type: "Photography",
      location: "Hyderabad",
      rating: 4.8,
      priceRange: "₹55K - ₹1.4L",
      description: "Royal wedding photography with heritage backdrops"
    },
    {
      id: 25,
      name: "Golconda Wedding Venues",
      type: "Venue",
      location: "Hyderabad",
      rating: 4.5,
      priceRange: "₹2L - ₹7L",
      description: "Heritage wedding venues with royal architecture"
    },
    
    // Pune vendors
    {
      id: 26,
      name: "Pune Perfect Weddings",
      type: "Wedding Planner",
      location: "Pune",
      rating: 4.6,
      priceRange: "₹42K - ₹1.7L",
      description: "Modern wedding planning with Maharashtrian cultural elements"
    },
    {
      id: 27,
      name: "Shivaji Park Decorators",
      type: "Decorator",
      location: "Pune",
      rating: 4.4,
      priceRange: "₹32K - ₹1.3L",
      description: "Traditional Marathi wedding decorations with contemporary style"
    },
    {
      id: 28,
      name: "Pune Delicacies Catering",
      type: "Catering",
      location: "Pune",
      rating: 4.7,
      priceRange: "₹850 - ₹1900 per plate",
      description: "Maharashtrian specialties and North Indian wedding cuisine"
    },
    {
      id: 29,
      name: "Sahyadri Photography",
      type: "Photography",
      location: "Pune",
      rating: 4.6,
      priceRange: "₹48K - ₹1.2L",
      description: "Wedding photography with scenic hill station backdrops"
    },
    {
      id: 30,
      name: "Pune Heritage Venues",
      type: "Venue",
      location: "Pune",
      rating: 4.3,
      priceRange: "₹1.3L - ₹5.5L",
      description: "Historic and modern wedding venues in the cultural capital"
    }
  ],
  
  corporate: [
    // Delhi corporate vendors
    {
      id: 31,
      name: "Delhi Corporate Events Pro",
      type: "Event Management",
      location: "Delhi",
      rating: 4.8,
      priceRange: "₹2L - ₹15L",
      description: "Premium corporate event management in Delhi NCR"
    },
    {
      id: 32,
      name: "Capital Business Catering",
      type: "Catering",
      location: "Delhi",
      rating: 4.7,
      priceRange: "₹800 - ₹2000 per person",
      description: "Professional corporate catering for conferences and meetings"
    },
    {
      id: 33,
      name: "Delhi Tech AV Solutions",
      type: "Audio Visual",
      location: "Delhi",
      rating: 4.9,
      priceRange: "₹50K - ₹3L",
      description: "State-of-the-art AV equipment for corporate events"
    },
    
    // Mumbai corporate vendors
    {
      id: 34,
      name: "Mumbai Business Events",
      type: "Event Management",
      location: "Mumbai",
      rating: 4.6,
      priceRange: "₹2.5L - ₹18L",
      description: "Corporate event management with Bollywood entertainment options"
    },
    {
      id: 35,
      name: "Financial District Catering",
      type: "Catering",
      location: "Mumbai",
      rating: 4.5,
      priceRange: "₹900 - ₹2200 per person",
      description: "High-end corporate catering for business events"
    },
    {
      id: 36,
      name: "Mumbai Media Solutions",
      type: "Audio Visual",
      location: "Mumbai",
      rating: 4.7,
      priceRange: "₹60K - ₹3.5L",
      description: "Professional AV services with live streaming capabilities"
    },
    
    // Bangalore corporate vendors
    {
      id: 37,
      name: "Silicon Valley Events",
      type: "Event Management",
      location: "Bangalore",
      rating: 4.8,
      priceRange: "₹1.8L - ₹12L",
      description: "Tech-focused corporate event management and conferences"
    },
    {
      id: 38,
      name: "Bangalore Tech Catering",
      type: "Catering",
      location: "Bangalore",
      rating: 4.6,
      priceRange: "₹700 - ₹1800 per person",
      description: "Modern corporate catering with healthy and international options"
    },
    {
      id: 39,
      name: "IT Park AV Systems",
      type: "Audio Visual",
      location: "Bangalore",
      rating: 4.8,
      priceRange: "₹45K - ₹2.8L",
      description: "Advanced AV solutions for tech conferences and product launches"
    }
  ],
  
  birthday: [
    // Delhi birthday vendors
    {
      id: 40,
      name: "Delhi Party Perfect",
      type: "Party Planner",
      location: "Delhi",
      rating: 4.5,
      priceRange: "₹20K - ₹1L",
      description: "Creative birthday party planning for all ages in Delhi"
    },
    {
      id: 41,
      name: "Capital Sweet Celebrations",
      type: "Cake & Desserts",
      location: "Delhi",
      rating: 4.7,
      priceRange: "₹3K - ₹20K",
      description: "Custom birthday cakes and dessert tables with Delhi delivery"
    },
    {
      id: 42,
      name: "Delhi Fun Time Entertainment",
      type: "Entertainment",
      location: "Delhi",
      rating: 4.6,
      priceRange: "₹12K - ₹35K",
      description: "Kids entertainers, magicians, and party games in Delhi NCR"
    },
    
    // Mumbai birthday vendors
    {
      id: 43,
      name: "Mumbai Party Magic",
      type: "Party Planner",
      location: "Mumbai",
      rating: 4.6,
      priceRange: "₹25K - ₹1.2L",
      description: "Bollywood-themed birthday parties and celebrations"
    },
    {
      id: 44,
      name: "Marine Drive Cakes",
      type: "Cake & Desserts",
      location: "Mumbai",
      rating: 4.8,
      priceRange: "₹3.5K - ₹25K",
      description: "Premium birthday cakes with Mumbai's finest ingredients"
    },
    {
      id: 45,
      name: "Mumbai Kids Entertainment",
      type: "Entertainment",
      location: "Mumbai",
      rating: 4.5,
      priceRange: "₹15K - ₹40K",
      description: "Professional entertainers and themed party experiences"
    },
    
    // Bangalore birthday vendors
    {
      id: 46,
      name: "Garden City Parties",
      type: "Party Planner",
      location: "Bangalore",
      rating: 4.4,
      priceRange: "₹18K - ₹90K",
      description: "Outdoor and indoor birthday party planning in Bangalore"
    },
    {
      id: 47,
      name: "Bangalore Cake Studio",
      type: "Cake & Desserts",
      location: "Bangalore",
      rating: 4.6,
      priceRange: "₹2.5K - ₹18K",
      description: "Artisanal birthday cakes and custom dessert creations"
    },
    {
      id: 48,
      name: "Tech City Entertainment",
      type: "Entertainment",
      location: "Bangalore",
      rating: 4.7,
      priceRange: "₹10K - ₹30K",
      description: "Modern entertainment solutions for birthday celebrations"
    }
  ],
  
  anniversary: [
    // Delhi anniversary vendors
    {
      id: 49,
      name: "Delhi Romance Planners",
      type: "Event Planner",
      location: "Delhi",
      rating: 4.8,
      priceRange: "₹15K - ₹80K",
      description: "Romantic anniversary celebrations and intimate gatherings"
    },
    {
      id: 50,
      name: "Capital Romantic Dining",
      type: "Catering",
      location: "Delhi",
      rating: 4.7,
      priceRange: "₹2K - ₹8K per couple",
      description: "Intimate dining experiences for anniversary celebrations"
    },
    
    // Mumbai anniversary vendors
    {
      id: 51,
      name: "Mumbai Love Stories",
      type: "Event Planner",
      location: "Mumbai",
      rating: 4.6,
      priceRange: "₹18K - ₹95K",
      description: "Cinematic anniversary celebrations with sea-view venues"
    },
    {
      id: 52,
      name: "Sunset Dining Mumbai",
      type: "Catering",
      location: "Mumbai",
      rating: 4.8,
      priceRange: "₹2.5K - ₹10K per couple",
      description: "Romantic dining with stunning Mumbai skyline views"
    }
  ],
  
  graduation: [
    // Delhi graduation vendors
    {
      id: 53,
      name: "Delhi Academic Celebrations",
      type: "Event Planner",
      location: "Delhi",
      rating: 4.5,
      priceRange: "₹25K - ₹1.2L",
      description: "Graduation party planning with academic themes"
    },
    {
      id: 54,
      name: "University Catering Delhi",
      type: "Catering",
      location: "Delhi",
      rating: 4.4,
      priceRange: "₹600 - ₹1500 per person",
      description: "Graduation party catering with student-friendly options"
    },
    
    // Bangalore graduation vendors
    {
      id: 55,
      name: "Bangalore Grad Parties",
      type: "Event Planner",
      location: "Bangalore",
      rating: 4.6,
      priceRange: "₹22K - ₹1L",
      description: "Tech-themed graduation celebrations for engineering students"
    },
    {
      id: 56,
      name: "Campus Catering Bangalore",
      type: "Catering",
      location: "Bangalore",
      rating: 4.5,
      priceRange: "₹550 - ₹1300 per person",
      description: "Modern graduation party catering with international cuisine"
    }
  ],
  
  "baby-shower": [
    // Delhi baby shower vendors
    {
      id: 57,
      name: "Delhi Baby Bliss",
      type: "Event Planner",
      location: "Delhi",
      rating: 4.7,
      priceRange: "₹12K - ₹60K",
      description: "Adorable baby shower planning with custom themes"
    },
    {
      id: 58,
      name: "Little Angels Catering Delhi",
      type: "Catering",
      location: "Delhi",
      rating: 4.6,
      priceRange: "₹800 - ₹2000 per person",
      description: "Healthy and delicious catering for expecting mothers"
    },
    
    // Mumbai baby shower vendors
    {
      id: 59,
      name: "Mumbai Baby Celebrations",
      type: "Event Planner",
      location: "Mumbai",
      rating: 4.8,
      priceRange: "₹15K - ₹75K",
      description: "Elegant baby shower planning with Bollywood themes"
    },
    {
      id: 60,
      name: "Precious Moments Catering",
      type: "Catering",
      location: "Mumbai",
      rating: 4.7,
      priceRange: "₹900 - ₹2200 per person",
      description: "Nutritious and beautiful catering for baby shower celebrations"
    }
  ]
};

const planningSteps = {
  wedding: [
    {
      step: "Step 1",
      title: "Set Budget & Guest List",
      description: "Determine your overall budget and create a preliminary guest list to guide all other decisions.",
      timeframe: "8-12 months before"
    },
    {
      step: "Step 2",
      title: "Book Venue & Date",
      description: "Secure your wedding venue and finalize the date. Popular venues book up quickly.",
      timeframe: "6-10 months before"
    },
    {
      step: "Step 3",
      title: "Hire Key Vendors",
      description: "Book photographer, caterer, decorator, and other essential services.",
      timeframe: "4-8 months before"
    },
    {
      step: "Step 4",
      title: "Final Details & Coordination",
      description: "Finalize menu, decorations, timeline, and coordinate with all vendors.",
      timeframe: "1-2 months before"
    }
  ],
  corporate: [
    {
      step: "Step 1",
      title: "Define Objectives & Budget",
      description: "Clearly outline event goals, target audience, and allocate budget across different categories.",
      timeframe: "2-3 months before"
    },
    {
      step: "Step 2",
      title: "Venue Selection & Booking",
      description: "Choose and book appropriate venue based on event size, location preferences, and technical requirements.",
      timeframe: "6-8 weeks before"
    },
    {
      step: "Step 3",
      title: "Content & Speaker Coordination",
      description: "Finalize agenda, confirm speakers, and prepare all presentation materials.",
      timeframe: "3-4 weeks before"
    },
    {
      step: "Step 4",
      title: "Logistics & Execution",
      description: "Coordinate catering, AV setup, registration process, and day-of event management.",
      timeframe: "1-2 weeks before"
    }
  ],
  birthday: [
    {
      step: "Step 1",
      title: "Theme & Guest Planning",
      description: "Choose party theme, create guest list, and determine party size and style.",
      timeframe: "3-4 weeks before"
    },
    {
      step: "Step 2",
      title: "Venue & Entertainment",
      description: "Book venue (if needed) and arrange entertainment suitable for the age group.",
      timeframe: "2-3 weeks before"
    },
    {
      step: "Step 3",
      title: "Food & Decorations",
      description: "Order custom cake, plan menu, and arrange decorations matching the theme.",
      timeframe: "1-2 weeks before"
    },
    {
      step: "Step 4",
      title: "Final Preparations",
      description: "Confirm all arrangements, prepare party favors, and set up timeline for the day.",
      timeframe: "2-3 days before"
    }
  ],
  anniversary: [
    {
      step: "Step 1",
      title: "Choose Celebration Style",
      description: "Decide between intimate dinner, party with friends, or romantic getaway.",
      timeframe: "4-6 weeks before"
    },
    {
      step: "Step 2",
      title: "Book Venue & Services",
      description: "Reserve restaurant, venue, or plan home celebration with necessary services.",
      timeframe: "2-3 weeks before"
    },
    {
      step: "Step 3",
      title: "Personal Touches",
      description: "Arrange flowers, music, photography, and personalized elements.",
      timeframe: "1-2 weeks before"
    },
    {
      step: "Step 4",
      title: "Final Arrangements",
      description: "Confirm all bookings, prepare surprises, and coordinate timing.",
      timeframe: "2-3 days before"
    }
  ],
  graduation: [
    {
      step: "Step 1",
      title: "Guest List & Venue",
      description: "Create guest list and choose between home celebration or external venue.",
      timeframe: "4-5 weeks before"
    },
    {
      step: "Step 2",
      title: "Theme & Decorations",
      description: "Select graduation theme, school colors, and arrange decorations.",
      timeframe: "2-3 weeks before"
    },
    {
      step: "Step 3",
      title: "Food & Entertainment",
      description: "Plan menu, order graduation cake, and arrange entertainment or activities.",
      timeframe: "1-2 weeks before"
    },
    {
      step: "Step 4",
      title: "Final Setup",
      description: "Prepare photo displays, set up decorations, and coordinate day-of logistics.",
      timeframe: "1-2 days before"
    }
  ],
  "baby-shower": [
    {
      step: "Step 1",
      title: "Theme & Guest Planning",
      description: "Choose baby shower theme, create guest list, and set date and time.",
      timeframe: "4-6 weeks before"
    },
    {
      step: "Step 2",
      title: "Venue & Invitations",
      description: "Book venue or plan home setup, send invitations, and arrange seating.",
      timeframe: "3-4 weeks before"
    },
    {
      step: "Step 3",
      title: "Games & Activities",
      description: "Plan baby shower games, activities, and arrange prizes and favors.",
      timeframe: "2-3 weeks before"
    },
    {
      step: "Step 4",
      title: "Food & Final Setup",
      description: "Finalize menu, order cake, set up decorations, and prepare gift area.",
      timeframe: "1 week before"
    }
  ]
};

// Default steps for other event types
const defaultPlanningSteps = [
  {
    step: "Step 1",
    title: "Planning & Budget",
    description: "Define your event goals, budget, and basic requirements.",
    timeframe: "4-6 weeks before"
  },
  {
    step: "Step 2",
    title: "Venue & Vendors",
    description: "Book your venue and hire necessary service providers.",
    timeframe: "2-4 weeks before"
  },
  {
    step: "Step 3",
    title: "Details & Coordination",
    description: "Finalize all details and coordinate with vendors.",
    timeframe: "1-2 weeks before"
  },
  {
    step: "Step 4",
    title: "Final Execution",
    description: "Handle last-minute preparations and execute your event.",
    timeframe: "Day of event"
  }
];

// Enhanced function to get vendor recommendations based on event type, budget, and location
function getRecommendations(eventType, budget, location) {
  const eventVendors = mockVendors[eventType] || [];
  
  // Filter vendors by exact location match first
  const locationVendors = eventVendors.filter(vendor => vendor.location === location);
  
  // If no vendors found for the specific location, return empty array
  if (locationVendors.length === 0) {
    return [];
  }
  
  // Filter and sort vendors based on budget
  return locationVendors
    .filter(vendor => {
      // Enhanced budget filtering logic
      const vendorPrice = vendor.priceRange.toLowerCase();
      if (budget < 50000) {
        return vendorPrice.includes('12k') || vendorPrice.includes('15k') || 
               vendorPrice.includes('18k') || vendorPrice.includes('20k') || 
               vendorPrice.includes('25k') || vendorPrice.includes('30k') ||
               vendorPrice.includes('32k') || vendorPrice.includes('35k') ||
               vendorPrice.includes('38k') || vendorPrice.includes('40k') ||
               vendorPrice.includes('42k') || vendorPrice.includes('45k') ||
               vendorPrice.includes('48k');
      } else if (budget < 100000) {
        return vendorPrice.includes('50k') || vendorPrice.includes('55k') ||
               vendorPrice.includes('60k') || vendorPrice.includes('70k') ||
               vendorPrice.includes('80k') || vendorPrice.includes('90k');
      } else if (budget < 200000) {
        return vendorPrice.includes('1l') || vendorPrice.includes('1.1l') ||
               vendorPrice.includes('1.2l') || vendorPrice.includes('1.3l') ||
               vendorPrice.includes('1.4l') || vendorPrice.includes('1.5l') ||
               vendorPrice.includes('1.6l') || vendorPrice.includes('1.7l') ||
               vendorPrice.includes('1.8l');
      } else if (budget < 500000) {
        return vendorPrice.includes('2l') || vendorPrice.includes('2.2l') ||
               vendorPrice.includes('2.5l') || vendorPrice.includes('3l') ||
               vendorPrice.includes('3.5l') || vendorPrice.includes('4l') ||
               vendorPrice.includes('4.5l');
      }
      return true; // Show all for higher budgets
    })
    .sort((a, b) => {
      // Sort by rating (highest first)
      return b.rating - a.rating;
    })
    .slice(0, 6); // Limit to 6 recommendations
}

// Function to get planning steps based on event type and budget
function getPlanningSteps(eventType, budget) {
  const steps = planningSteps[eventType] || defaultPlanningSteps;
  
  // For higher budgets, we might suggest more detailed planning
  if (budget > 500000) {
    return steps.map(step => ({
      ...step,
      description: step.description + " Consider premium options for enhanced experience."
    }));
  }
  
  return steps;
}

// Make functions available globally
window.mockVendors = mockVendors;
window.getRecommendations = getRecommendations;
window.getPlanningSteps = getPlanningSteps;