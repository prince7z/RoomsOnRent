// Dynamic content for each button
console.log("JavaScript is connected!");
const contentData = {
    facilities: `
    <h2>Facilities</h2>
    <p>- 24-hour electricity supply (₹10/unit as per usage)</p>
    <p>- 24/7 water supply</p>
    <p>- Shared bathroom and balcony</p>
`,
dimensions: `
    <h2>Dimensions</h2>
    <p>- Hall: </p>
    <p>- Kitchen: </p>
    <p>- Balcony: </p>
`,
rentPrice: `
    <h2>Rent Price</h2>
    <p>₹4,500 per month (Non-Negotiable)</p>
    <p>₹200 additional for Wi-Fi</p>
`,
rules: `
    <h2>Rules</h2>
    <p>- No loud music after 10:00 PM</p>
    <p>- No unauthorized guests allowed</p>
    <p>- Maintain cleanliness at all times</p>
    <p>- Rent must be paid by the 10th of every month</p>
`,
contact: `
    <h2>Contact</h2>
    <p>📞 Phone: <a href="tel:+916266034195">+91 6266034195</a></p>
    <p>✉️ Email: <a href="mailto:princesahu17125@gmail.com">princesahu17125@gmail.com</a></p>
`,

};

function showContent(type) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = contentData[type];
    contentDiv.scrollIntoView({ behavior: "smooth" });
}
function showRoomTour() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = `
        <h2>Room Tour</h2>
        <h4>Note: I didn't have a 360° camera, so I used the phone's wide-angle feature, which may have slightly compromised the quality.</h4>
        <div style="position: relative; padding-bottom: 56.25%; height: 0;">
            <iframe src="https://kuula.co/share/collection/7Zt1k?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1" 
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 8px;">
            </iframe>
        </div>
    `;
    contentDiv.scrollIntoView({ behavior: "smooth" });
}

// Toggle hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}