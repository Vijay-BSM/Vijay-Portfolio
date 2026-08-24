// Portfolio loaded successfully
console.log("Vijay Kumar Portfolio Loaded");

// Update footer year automatically
const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${year} Echarla Vijay Kumar. All Rights Reserved.`;
}