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
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const totalAmount = document.getElementById('totalAmount');
const checkoutButton = document.getElementById('checkoutButton');
const emptyCartButtons = document.getElementById('emptyCartButtons');
const cartCount = document.getElementById('cartCount');

// Sample cart data
let cart = [];

function updateCartDisplay() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
        cartTotal.classList.add('hidden');
        checkoutButton.classList.add('hidden');
        emptyCartButtons.classList.remove('hidden');
        cartCount.classList.add('hidden');
    } else {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex justify-between items-center py-2 border-b';
            itemElement.innerHTML = `
         <div>
             <h4 class="font-medium">${item.name}</h4>
             <p class="text-sm text-gray-500">${item.description}</p>
         </div>
         <div class="text-right">
             <p class="font-medium">${item.price}</p>
         </div>
     `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });

        totalAmount.textContent = total.toFixed(2);
        cartTotal.classList.remove('hidden');
        checkoutButton.classList.remove('hidden');
        emptyCartButtons.classList.add('hidden');
        cartCount.textContent = cart.length;
        cartCount.classList.remove('hidden');
    }
}

cartButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent immediate closing
    cartPopup.classList.toggle('hidden');
    locationPopup.classList.add('hidden');
    loginPopup.classList.add('hidden');
    updateCartDisplay();
});

closeCart.addEventListener('click', function () {
    cartPopup.classList.add('hidden');
});

document.addEventListener('click', function (event) {
    if (!cartPopup.contains(event.target) && event.target !== cartButton) {
        cartPopup.classList.add('hidden');
    }
});

cartPopup.addEventListener('click', function (e) {
    e.stopPropagation();
});

function addToCart(service) {
    cart.push(service);
    updateCartDisplay();
}

checkoutButton.addEventListener('click', function () {
    alert(`Booking confirmed for ${cart.length} services! Total: ${totalAmount.textContent}`);
    cart = [];
    updateCartDisplay();
    cartPopup.classList.add('hidden');
});

updateCartDisplay();

// Location functionality
const locationButton = document.getElementById('locationButton');
const locationPopup = document.getElementById('locationPopup');
const closeLocation = document.getElementById('closeLocation');
const useCurrentLocation = document.getElementById('useCurrentLocation');

locationButton.addEventListener('click', function (e) {
    e.stopPropagation();
    locationPopup.classList.toggle('hidden');
    cartPopup.classList.add('hidden');
    loginPopup.classList.add('hidden');
});

closeLocation.addEventListener('click', function () {
    locationPopup.classList.add('hidden');
});

document.addEventListener('click', function (event) {
    if (!locationPopup.contains(event.target) && event.target !== locationButton) {
        locationPopup.classList.add('hidden');
    }
});

locationPopup.addEventListener('click', function (e) {
    e.stopPropagation();
});

useCurrentLocation.addEventListener('click', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                alert(`Location set to: Latitude ${position.coords.latitude}, Longitude ${position.coords.longitude}`);
                locationPopup.classList.add('hidden');
            },
            function (error) {
                alert("Couldn't get your location automatically. Please search for your location instead.");
            }
        );
    } else {
        alert("Geolocation not supported. Please search for your location instead.");
    }
});

// Login/Signup functionality
const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closeLogin = document.getElementById('closeLogin');
const loginChoice = document.getElementById('loginChoice');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showLoginForm = document.getElementById('showLoginForm');
const showSignupForm = document.getElementById('showSignupForm');
const backToChoiceFromLogin = document.getElementById('backToChoiceFromLogin');
const backToChoiceFromSignup = document.getElementById('backToChoiceFromSignup');

// Helper to reset popup to choices
function resetLoginPopup() {
    loginChoice.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
}

loginButton.addEventListener('click', function () {
    loginPopup.classList.toggle('hidden');
    resetLoginPopup();
    cartPopup.classList.add('hidden');
    locationPopup.classList.add('hidden');
});

closeLogin.addEventListener('click', function () {
    loginPopup.classList.add('hidden');
    resetLoginPopup();
});

document.addEventListener('click', function (event) {
    if (!loginPopup.contains(event.target) && event.target !== loginButton) {
        loginPopup.classList.add('hidden');
        resetLoginPopup();
    }
});

loginPopup.addEventListener('click', function (e) {
    e.stopPropagation();
});

// Button events for switching forms
showLoginForm.addEventListener('click', function () {
    loginChoice.classList.add('hidden');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

showSignupForm.addEventListener('click', function () {
    loginChoice.classList.add('hidden');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});

backToChoiceFromLogin.addEventListener('click', resetLoginPopup);
backToChoiceFromSignup.addEventListener('click', resetLoginPopup);

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