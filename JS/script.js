 // Category and sub-service data
 const servicesData = {
    plumbing: [
        { name: "Leak Repairs", image: "https://media.istockphoto.com/id/1136317145/photo/plumber-fixing-sink-pipe-with-adjustable-wrench.jpg?s=1024x1024&w=is&k=20&c=Xa_HIu0pgL9rVKcVsgIyVKzkGFj0N419OnvGjP8SgaE=" },
        { name: "Blocked Drains", image: "https://www.shutterstock.com/shutterstock/photos/2554053133/display_1500/stock-photo-plumber-unclogging-blocked-shower-drain-with-hydro-jetting-at-home-bathroom-sewer-cleaning-service-2554053133.jpg" },
        { name: "Pipe Fitting", image: "https://www.shutterstock.com/image-photo/plumber-man-fix-repair-service-260nw-2304152981.jpg" },
        { name: "Faucet Installation", image: "https://images.pexels.com/photos/6195120/pexels-photo-6195120.jpeg" },
        { name: "Water Heater Repair", image: "https://www.shutterstock.com/shutterstock/photos/1829425892/display_1500/stock-photo-a-man-repairing-a-boiler-in-a-medical-mask-1829425892.jpg" }
    ],
    electrical: [
        { name: "Wiring", image: "https://images.pexels.com/photos/1435187/pexels-photo-1435187.jpeg" },
        { name: "Outlet Repair", image: "https://images.pexels.com/photos/1435186/pexels-photo-1435186.jpeg" },
        { name: "Light Installation", image: "https://images.pexels.com/photos/1435188/pexels-photo-1435188.jpeg" },
        { name: "Circuit Breaker", image: "https://images.pexels.com/photos/1435214/pexels-photo-1435214.jpeg" },
        { name: "Generator Setup", image: "https://images.pexels.com/photos/4254163/pexels-photo-4254163.jpeg" }
    ],
    cleaning: [
        { name: "Deep Cleaning", image: "https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg" },
        { name: "Carpet Cleaning", image: "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg" },
        { name: "Window Cleaning", image: "https://images.pexels.com/photos/1339191/pexels-photo-1339191.jpeg" },
        { name: "Post-Construction", image: "https://images.pexels.com/photos/3616736/pexels-photo-3616736.jpeg" },
        { name: "Office Cleaning", image: "https://images.pexels.com/photos/2092717/pexels-photo-2092717.jpeg" }
    ],
    appliance: [
        { name: "Refrigerator", image: "https://images.pexels.com/photos/3735208/pexels-photo-3735208.jpeg" },
        { name: "Washing Machine", image: "https://images.pexels.com/photos/3963086/pexels-photo-3963086.jpeg" },
        { name: "Oven", image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg" },
        { name: "Dishwasher", image: "https://images.pexels.com/photos/6195029/pexels-photo-6195029.jpeg" },
        { name: "Microwave", image: "https://images.pexels.com/photos/2083546/pexels-photo-2083546.jpeg" }
    ],
    carpentry: [
        { name: "Furniture Repair", image: "https://images.pexels.com/photos/1571177/pexels-photo-1571177.jpeg" },
        { name: "Shelving", image: "https://images.pexels.com/photos/415314/pexels-photo-415314.jpeg" },
        { name: "Door Installation", image: "https://images.pexels.com/photos/1769243/pexels-photo-1769243.jpeg" },
        { name: "Deck Building", image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg" },
        { name: "Trim Work", image: "https://images.pexels.com/photos/2252400/pexels-photo-2252400.jpeg" }
    ],
    pest: [
        { name: "Ant Control", image: "https://images.pexels.com/photos/4021423/pexels-photo-4021423.jpeg" },
        { name: "Termite", image: "https://cdn.pixabay.com/photo/2017/07/24/22/19/insect-2532847_1280.jpg" },
        { name: "Rodent", image: "https://cdn.pixabay.com/photo/2016/03/31/19/14/mouse-1294013_1280.jpg" },
        { name: "Mosquito", image: "https://cdn.pixabay.com/photo/2017/07/31/14/39/mosquito-2557306_1280.jpg" },
        { name: "Bed Bugs", image: "https://cdn.pixabay.com/photo/2016/07/20/19/50/bed-bug-1535988_1280.jpg" }
    ],
    painting: [
        { name: "Interior", image: "https://images.pexels.com/photos/1573827/pexels-photo-1573827.jpeg" },
        { name: "Exterior", image: "https://images.pexels.com/photos/2106209/pexels-photo-2106209.jpeg" },
        { name: "Wallpaper", image: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg" },
        { name: "Cabinet", image: "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg" },
        { name: "Texture", image: "https://images.pexels.com/photos/4622357/pexels-photo-4622357.jpeg" }
    ],
    hvac: [
        { name: "AC Repair", image: "https://images.pexels.com/photos/3768917/pexels-photo-3768917.jpeg" },
        { name: "Heating", image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg" },
        { name: "Ventilation", image: "https://images.pexels.com/photos/4792482/pexels-photo-4792482.jpeg" },
        { name: "Duct Cleaning", image: "https://images.pexels.com/photos/1615870/pexels-photo-1615870.jpeg" },
        { name: "Thermostat", image: "https://images.pexels.com/photos/1048808/pexels-photo-1048808.jpeg" }
    ],
    lawn: [
        { name: "Mowing", image: "https://images.pexels.com/photos/58921/pexels-photo-58921.jpeg" },
        { name: "Landscaping", image: "https://images.pexels.com/photos/1029647/pexels-photo-1029647.jpeg" },
        { name: "Tree Trimming", image: "https://images.pexels.com/photos/3609896/pexels-photo-3609896.jpeg" },
        { name: "Fertilization", image: "https://cdn.pixabay.com/photo/2016/02/19/10/54/fertilizer-1207758_1280.jpg" },
        { name: "Sprinklers", image: "https://images.pexels.com/photos/2962305/pexels-photo-2962305.jpeg" }
    ],
    roofing: [
        { name: "Shingle Repair", image: "https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg" },
        { name: "Leak Repair", image: "https://images.pexels.com/photos/68415/pexels-photo-68415.jpeg" },
        { name: "Gutter Cleaning", image: "https://images.pexels.com/photos/3528424/pexels-photo-3528424.jpeg" },
        { name: "Skylight", image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg" },
        { name: "Flat Roof", image: "https://images.pexels.com/photos/3641338/pexels-photo-3641338.jpeg" }
    ],
    windows: [
        { name: "Glass Repair", image: "https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg" },
        { name: "Installation", image: "https://images.pexels.com/photos/425213/pexels-photo-425213.jpeg" },
        { name: "Screen Repair", image: "https://images.pexels.com/photos/1339191/pexels-photo-1339191.jpeg" },
        { name: "Sealing", image: "https://images.pexels.com/photos/618773/pexels-photo-618773.jpeg" },
        { name: "Blinds", image: "https://images.pexels.com/photos/534187/pexels-photo-534187.jpeg" }
    ],
    security: [
        { name: "Camera Install", image: "https://images.pexels.com/photos/508256/pexels-photo-508256.jpeg" },
        { name: "Alarm System", image: "https://images.pexels.com/photos/1828876/pexels-photo-1828876.jpeg" },
        { name: "Smart Locks", image: "https://images.pexels.com/photos/1562205/pexels-photo-1562205.jpeg" },
        { name: "Motion Sensors", image: "https://images.pexels.com/photos/235654/pexels-photo-235654.jpeg" },
        { name: "Intercom", image: "https://images.pexels.com/photos/836951/pexels-photo-836951.jpeg" }
    ],
    sanitization: [
        { name: "Disinfection", image: "https://images.pexels.com/photos/4099462/pexels-photo-4099462.jpeg" },
        { name: "Mold Removal", image: "https://images.pexels.com/photos/4682324/pexels-photo-4682324.jpeg" },
        { name: "Odor Removal", image: "https://images.pexels.com/photos/5162786/pexels-photo-5162786.jpeg" },
        { name: "UV Treatment", image: "https://images.pexels.com/photos/410058/pexels-photo-410058.jpeg" },
        { name: "Air Purification", image: "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg" }
    ],
    moving: [
        { name: "Local Moving", image: "https://images.pexels.com/photos/7464647/pexels-photo-7464647.jpeg" },
        { name: "Packing", image: "https://images.pexels.com/photos/424049/pexels-photo-424049.jpeg" },
        { name: "Furniture Assembly", image: "https://images.pexels.com/photos/1669794/pexels-photo-1669794.jpeg" },
        { name: "Storage", image: "https://images.pexels.com/photos/448132/pexels-photo-448132.jpeg" },
        { name: "Long Distance", image: "https://images.pexels.com/photos/7464647/pexels-photo-7464647.jpeg" }
    ],
    junk: [
        { name: "Furniture Removal", image: "https://images.pexels.com/photos/87678/pexels-photo-87678.jpeg" },
        { name: "Yard Waste", image: "https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg" },
        { name: "Electronics", image: "https://images.pexels.com/photos/159220/pexels-photo-159220.jpeg" },
        { name: "Construction Debris", image: "https://images.pexels.com/photos/209347/pexels-photo-209347.jpeg" },
        { name: "Appliance", image: "https://images.pexels.com/photos/717800/pexels-photo-717800.jpeg" }
    ]
};


document.addEventListener('DOMContentLoaded', function () {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const subServicesContainer = document.getElementById('subServices');
    const subServicesList = subServicesContainer.querySelector('.flex');
    const serviceCardsContainer = document.getElementById('serviceCards');
    const serviceCardsGrid = serviceCardsContainer.querySelector('.grid');
    const subServiceTemplate = document.getElementById('subServiceTemplate');
    const serviceCardTemplate = document.getElementById('serviceCardTemplate');

    // Set first tab as active by default
    if (categoryTabs.length > 0) {
        categoryTabs[0].classList.add('active');
        showSubServices(categoryTabs[0].dataset.category);
        showServiceCards(categoryTabs[0].dataset.category);
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Show relevant sub-services and cards
            showSubServices(this.dataset.category);
            showServiceCards(this.dataset.category);
        });
    });

    function showSubServices(category) {
        // Clear existing sub-services
        subServicesList.innerHTML = '';

        // Get services for selected category
        const services = servicesData[category] || [];

        // Create buttons for each sub-service
        services.forEach(service => {
            const clone = subServiceTemplate.content.cloneNode(true);
            const button = clone.querySelector('button');
            button.textContent = service.name;
            button.dataset.serviceName = service.name.toLowerCase().replace(/[-\s]/g, '');
            button.addEventListener('click', () => {
                filterServiceCards(service.name);
            });

            subServicesList.appendChild(clone);
        });

        // Show the container
        subServicesContainer.classList.remove('hidden');
    }

    function showServiceCards(category) {
        // Clear existing cards
        serviceCardsGrid.innerHTML = '';

        // Get services for selected category
        const services = servicesData[category] || [];

        // Create cards for each service
        services.forEach(service => {
            const clone = serviceCardTemplate.content.cloneNode(true);
            const card = clone.querySelector('.service-card');
            const img = clone.querySelector('img');
            const title = clone.querySelector('h4');

            // Set service-specific image and title
            // New: use image URL from service object
            img.src = service.image;
            img.alt = `${service.name} service`;
            title.textContent = service.name;


            // Add click handler to add service to cart
            card.addEventListener('click', function() {
                addToCart(service.name, service.image);
                // Highlight briefly to show it was added
                card.classList.add('ring-2', 'ring-indigo-500');
                setTimeout(() => {
                    card.classList.remove('ring-2', 'ring-indigo-500');
                }, 500);
            });

            serviceCardsGrid.appendChild(clone);
        });

        // Show the container
        serviceCardsContainer.classList.remove('hidden');
    }

    function filterServiceCards(serviceName) {
        const cards = serviceCardsGrid.querySelectorAll('.service-card');
        cards.forEach(card => {
            const title = card.querySelector('h4').textContent;
            if (title === serviceName) {
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                card.classList.add('ring-2', 'ring-indigo-500');
                setTimeout(() => {
                    card.classList.remove('ring-2', 'ring-indigo-500');
                }, 2000);
            }
        });
    }
});
// Cart functionality
const cartButton = document.getElementById('cartButton');
const cartPopup = document.getElementById('cartPopup');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const exploreServicesBtn = document.getElementById('exploreServicesBtn');
const cartCount = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const emptyCartState = document.getElementById('emptyCartState');
const cartActions = document.getElementById('cartActions');
const searchProvidersBtn = document.getElementById('searchProvidersBtn');
const cartItemTemplate = document.getElementById('cartItemTemplate');

let cartItems = [];

cartButton.addEventListener('click', function () {
    cartPopup.classList.remove('hidden');
    cartOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

function closeCartPopup() {
    cartPopup.classList.add('hidden');
    cartOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

closeCart.addEventListener('click', closeCartPopup);
cartOverlay.addEventListener('click', closeCartPopup);

exploreServicesBtn.addEventListener('click', function () {
    closeCartPopup();
    document.getElementById('services-section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Add service to cart
function addToCart(serviceName, serviceImage) {
    // Check if already in cart
    if (cartItems.some(item => item.name === serviceName)) {
        return;
    }

    cartItems.push({
        name: serviceName,
        image: serviceImage
    });

    updateCartUI();
}

// Remove service from cart
function removeFromCart(serviceName) {
    cartItems = cartItems.filter(item => item.name !== serviceName);
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    cartCount.textContent = cartItems.length;
    if (cartItems.length > 0) {
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }

    // Update cart items list
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.appendChild(emptyCartState);
        cartActions.classList.add('hidden');
    } else {
        cartItems.forEach(item => {
            const clone = cartItemTemplate.content.cloneNode(true);
            const cartItem = clone.querySelector('.cart-item');
            const img = clone.querySelector('img');
            const span = clone.querySelector('span');
            const removeBtn = clone.querySelector('.remove-item');

            cartItem.dataset.serviceName = item.name.toLowerCase().replace(/[-\s]/g, '');
            img.src = item.image;
            img.alt = item.name;
            span.textContent = item.name;

            removeBtn.addEventListener('click', () => {
                removeFromCart(item.name);
            });

            cartItemsContainer.appendChild(clone);
        });

        cartActions.classList.remove('hidden');
    }
}

// Search providers button click handler
searchProvidersBtn.addEventListener('click', function() {
    closeCartPopup();
    // In a real app, this would redirect to a providers search page
    alert('Searching providers for: ' + cartItems.map(item => item.name).join(', '));
});

// Location popup logic
const locationButton = document.getElementById('locationButton');
const locationPopup = document.getElementById('locationPopup');
const locationOverlay = document.getElementById('locationOverlay');
const closeLocation = document.getElementById('closeLocation');
const useCurrentLocation = document.getElementById('useCurrentLocation');

// Show popup
locationButton.addEventListener('click', function () {
    locationPopup.classList.remove('hidden');
    locationOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling of background
});

// Hide popup (via X or overlay)
function closeLocModal() {
    locationPopup.classList.add('hidden');
    locationOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}
closeLocation.addEventListener('click', closeLocModal);
locationOverlay.addEventListener('click', closeLocModal);

// Use current location example (you can adjust this logic as needed)
useCurrentLocation.addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                alert(`Location set to: Latitude ${position.coords.latitude}, Longitude ${position.coords.longitude}`);
                closeLocModal();
            },
            function (error) {
                alert("Couldn't get your location automatically. Please search for your location instead.");
            }
        );
    } else {
        alert("Geolocation not supported. Please search for your location instead.");
    }
});


// Prevent click propagation inside popup
locationPopup.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Login/Signup functionality
const loginButton = document.getElementById('loginButton');
const loginFormPopup = document.getElementById('loginFormPopup');
const showLoginForm = document.getElementById('showLoginForm');
// const loginPopup = document.getElementById('loginPopup');
// const loginOverlay = document.getElementById('loginOverlay');
// const showSignupForm = document.getElementById('showSignupForm');

const showSignupForm = document.getElementById('showSignupForm');
const signupFormPopup = document.getElementById('signupFormPopup');
const loginPopup = document.getElementById('loginPopup');
const loginOverlay = document.getElementById('loginOverlay');

showSignupForm.addEventListener('click', function () {
    // Hide initial login/sign up choice popup
    loginPopup.classList.add('hidden');
    loginPopup.classList.remove('flex');

    // Show sign up popup and display as flex for centering
    signupFormPopup.classList.remove('hidden');
    signupFormPopup.classList.add('flex');

    // Show overlay and ensure it displays block
    loginOverlay.classList.remove('hidden');
    loginOverlay.classList.add('block');

    // Prevent background scroll
    document.body.style.overflow = 'hidden';
});



function toggleLoginPopup() {
    loginPopup.classList.toggle('hidden');
    loginOverlay.classList.toggle('hidden');
    document.body.style.overflow = loginPopup.classList.contains('hidden') ? '' : 'hidden';
}

function showLoginFormPopup() {
    loginPopup.classList.add('hidden');
    loginFormPopup.classList.remove('hidden');
}

function hideLoginFormPopup() {
    loginFormPopup.classList.add('hidden');
    loginOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

loginButton.addEventListener('click', function () {
    toggleLoginPopup();
    cartPopup.classList.add('hidden');
    cartOverlay.classList.add('hidden');
    locationPopup.classList.add('hidden');
    locationOverlay.classList.add('hidden');
});

loginOverlay.addEventListener('click', function () {
    if (!loginFormPopup.classList.contains('hidden')) {
        hideLoginFormPopup();
    } else {
        toggleLoginPopup();
    }
});

showLoginForm.addEventListener('click', showLoginFormPopup);
showSignupForm.addEventListener('click', function () {
    loginPopup.classList.add('hidden');
    signupFormPopup.classList.remove('hidden');
});

// Click outside popups closes them cleanly
loginOverlay.addEventListener('click', function () {
    if (!signupFormPopup.classList.contains('hidden')) {
        // Hide sign up popup
        signupFormPopup.classList.add('hidden');
        signupFormPopup.classList.remove('flex');

        // Hide overlay
        loginOverlay.classList.add('hidden');
        loginOverlay.classList.remove('block');

        // Enable background scroll
        document.body.style.overflow = '';
    } else if (!loginPopup.classList.contains('hidden')) {
        // Hide login popup
        loginPopup.classList.add('hidden');
        loginPopup.classList.remove('flex');

        // Hide overlay
        loginOverlay.classList.add('hidden');
        loginOverlay.classList.remove('block');

        document.body.style.overflow = '';
    }
});

// Simple script to toggle mobile menu (would be expanded in a real implementation)
const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function () {
        alert('Mobile menu would open here in a full implementation');
    });
}

// Add scroll animation effect
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.bg-white.p-6').forEach(card => {
        observer.observe(card);
    });
});

// Enhanced search functionality
document.getElementById('serviceSearchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById('serviceSearchInput').value.trim().toLowerCase();

    if (!searchTerm) return;

    // Normalize search term for comparison
    const normalizedSearch = searchTerm.replace(/[-\s]/g, '');

    // First try to find matching main service category
    const categoryTabs = document.querySelectorAll('.category-tab');
    let foundMainService = null;

    categoryTabs.forEach(tab => {
        const tabName = tab.dataset.category.toLowerCase().replace(/[-\s]/g, '');
        if (tabName.includes(normalizedSearch)) {
            foundMainService = tab;
        }
    });

    if (foundMainService) {
        foundMainService.click();
        document.getElementById('services-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        return;
    }

    // Then try to find matching sub-service
    const subServiceButtons = document.querySelectorAll('.sub-service-btn');
    let foundSubService = null;

    subServiceButtons.forEach(btn => {
        const btnText = btn.textContent.toLowerCase().replace(/[-\s]/g, '');
        if (btnText.includes(normalizedSearch)) {
            foundSubService = btn;
        }
    });

    if (foundSubService) {
        // Find the parent service category
        const parentTab = document.querySelector(`.category-tab[data-category="${foundSubService.closest('#subServices').previousElementSibling.dataset.category}"]`);
        if (parentTab) {
            parentTab.click();
        }

        setTimeout(() => {
            foundSubService.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            // Highlight the matching sub-service
            foundSubService.classList.add('bg-indigo-100', 'border-indigo-500');
            setTimeout(() => {
                foundSubService.classList.remove('bg-indigo-100', 'border-indigo-500');
            }, 2000);
        }, 100);
        return;
    }

    // Finally try to find matching service cards
    const serviceCards = document.querySelectorAll('.service-card');
    let foundCard = null;

    serviceCards.forEach(card => {
        const cardName = card.querySelector('h4').textContent.toLowerCase().replace(/[-\s]/g, '');
        if (cardName.includes(normalizedSearch)) {
            foundCard = card;
        }
    });

    if (foundCard) {
        foundCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Highlight the matching card
        foundCard.classList.add('ring-2', 'ring-indigo-500');
        setTimeout(() => {
            foundCard.classList.remove('ring-2', 'ring-indigo-500');
        }, 2000);
    }
});

// Update service cards with data attributes when created
document.addEventListener('DOMContentLoaded', function () {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === 1 && node.classList && node.classList.contains('service-card')) {
                    const title = node.querySelector('h4');
                    if (title) {
                        node.dataset.serviceName = title.textContent.toLowerCase();
                    }
                }
            });
        });
    });

    // Find Services button scroll functionality
    document.getElementById('findServicesBtn').addEventListener('click', function (e) {
        e.preventDefault();
        document.getElementById('services-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


    observer.observe(document.querySelector('.grid'), {
        childList: true,
        subtree: true
    });
});