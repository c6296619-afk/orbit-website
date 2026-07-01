// ORBIT WEBSITE SCRIPT

// Simple cart counter
let cartCount = localStorage.getItem("cartCount") || 0;

const cartCounter = document.getElementById("cart-count");

if (cartCounter) {
    cartCounter.innerText = cartCount;
}

// Floating animation on scroll
window.addEventListener("scroll", () => {
    const heroImage = document.querySelector(".hero-image img");

    if(heroImage){
        heroImage.style.transform =
            `translateY(${window.scrollY * 0.05}px)`;
    }
});

// Card hover animation
document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// Smooth fade in
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".card,.why-box,.offer").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="1s";

observer.observe(el);

});
