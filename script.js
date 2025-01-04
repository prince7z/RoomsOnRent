
console.log("JavaScript is connected!");
const contentData = {
    Facilities: `
    <h2>Facilities</h2>
    <p>- 24-hour electricity supply (₹10/unit as per usage)</p>
    <p>- 24/7 water supply</p>
    <p>- Shared bathroom and balcony </p>
`,
Dimensions: `
    <h2>Dimensions</h2>
    <p>- Hall: 15 Length ×10 Breadth =150  square feet</p>
    <p>-Kitchen: 10 Length×10 Breadth =100 square feet</p>
    <p>- Balcony: 265 square feet  </p>
`,
RentalPrice: `
    <h2>Rental Price</h2>
    <p>₹4,500 per month (Non-negotiable)</p>
    <p>₹200 additional for Wi-Fi services</p>
`,
Rules: `
    <h2>Rules</h2>
    <p>- No loud music after 10:00 PM</p>
    <p>- Guests are not allowed without prior authorization</p>
    <p>- Maintain cleanliness in shared spaces</p>
    <p>- Rent must be paid by the 10th of each month</p>
`,
Contact: `
    <h2>Contact</h2>
    <p>📞 Phone: <a href="tel:+916266034195">+91 6266034195</a></p>
    <p>✉️ Email: <a href="mailto:princesahu17125@gmail.com"target="_blank" rel="noopener noreferrer">princesahu17125@gmail.com</a></p>
    <p>🌐 Follow us on <a href="https://www.linkedin.com/in/princesahu7z"target="_blank" rel="noopener noreferrer">LinkedIn</a> or 
       <a href="https://www.instagram.com/prince.7z/"target="_blank" rel="noopener noreferrer">Instagram</a></p>
`,
};

function showContent(type) {
    const contentDiv = document.getElementById("content");

    if (contentData[type]) {
        contentDiv.innerHTML = contentData[type];

       
        contentDiv.classList.remove("fade");
        void contentDiv.offsetWidth; 
        contentDiv.classList.add("fade");

        contentDiv.scrollIntoView({ behavior: "smooth" });
    } else {
        contentDiv.innerHTML = `<p>Content not found for "${type}".</p>`;
    }
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


function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

document.querySelectorAll("#nav-links li").forEach(item => {
    item.addEventListener("click", () => {
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.remove("show");
    });
});

