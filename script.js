const menuItems = [

    {
        ar: "شاي",
        en: "Tea",
        price: "10",
        image: "tea.jpeg"
    },

    {
        ar: "قهوة",
        en: "Coffee",
        price: "20 / 25",
        image: "coffe.jpeg"
    },

    {
        ar: "قهوة دبل",
        en: "Double Coffee",
        price: "35 / 40",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600"
    },

    {
        ar: "نسكافيه",
        en: "Nescafe",
        price: "20",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600"
    },

    {
        ar: "نسكافيه بلبن",
        en: "Nescafe with Milk",
        price: "25",
        image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600"
    },

    {
        ar: "كافي ميكس",
        en: "Coffee Mix",
        price: "20",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600"
    },

    {
        ar: "كافي ميكس بلبن",
        en: "Coffee Mix with Milk",
        price: "25",
        image: "coffe mix.jpeg"
    },

    {
        ar: "كابتشينو",
        en: "Cappuccino",
        price: "25",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=600"
    },

    {
        ar: "كابتشينو بلبن",
        en: "Cappuccino with Milk",
        price: "30",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600"
    },

    {
        ar: "نسكافيه بلاك",
        en: "Nescafe Black",
        price: "15",
        image: "blac.jpeg"
    },

    {
        ar: "نسكافيه بلاك بلبن",
        en: "Nescafe Black with Milk",
        price: "20",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600"
    },

    {
        ar: "أعشاب",
        en: "Herbal Drinks",
        price: "13",
        image: "tree.jpeg"
    }

];


// Language

let currentLanguage = "ar";

const menuContainer = document.getElementById("menuContainer");

const languageBtn = document.getElementById("languageBtn");


// Display Menu

function displayMenu() {

    menuContainer.innerHTML = "";

    menuItems.forEach((item, index) => {

        menuContainer.innerHTML += `

            <div class="col-6 col-md-4 col-lg-3">

                <div class="menu-card"
                    style="animation-delay:${index * 0.08}s">

                    <div class="menu-img">

                        <img
                            src="${item.image}"
                            alt="${item.en}"
                            loading="lazy"
                            onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600'">

                    </div>

                    <div class="menu-info">

                        <h3>
                            ${currentLanguage === "ar" ? item.ar : item.en}
                        </h3>

                        <p class="english-name">
                            ${currentLanguage === "ar" ? item.en : item.ar}
                        </p>

                        <div class="price">
                            ${item.price} EGP
                        </div>

                    </div>

                </div>

            </div>

        `;

    });

}


// Change Language

function changeLanguage() {

    currentLanguage = currentLanguage === "ar" ? "en" : "ar";

    document.documentElement.lang = currentLanguage;

    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-ar]").forEach(element => {

        element.textContent =
            element.getAttribute(`data-${currentLanguage}`);

    });

    languageBtn.textContent =
        currentLanguage === "ar" ? "English" : "العربية";

    displayMenu();

}

languageBtn.addEventListener("click", changeLanguage);


// Scroll Progress

const scrollProgress = document.getElementById("scrollProgress");

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = pageHeight > 0
        ? (scrollTop / pageHeight) * 100
        : 0;

    scrollProgress.style.width = progress + "%";

    if (scrollTop > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


// Back To Top

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Scroll Reveal Animation

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {

    revealObserver.observe(element);

});


// Start Website

displayMenu();