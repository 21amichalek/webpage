document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#ffcc99"; // Change to highlight color
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "#f2e9e4"; // Revert to original color
        });
    });

    const funFacts = [
        "I have been learning German for over 10 years and will be studying abroad there this spring.",
        "I used to live next to an alpaca farm and they are my favorite animals.",
        "I am obsessed with the show Survivor and have watched 30+ seasons of it. It is my dream to go on the show.",
        "I wrote my college essay about building my own slime company in middle school, shipping slime internationally, and becoming popular on Instagram.",
        "I have a cat named Ozzy who lives with me at school, and I think he hates me.",
        "I ran cross country and track for Union College and am excited to get more into trail running this spring.",
        "I love tea and have a collection of over 30 different tea blends that I brought with me to college.",
        "I am really good at Crossy Road and Connect 4, like insanely good.",
        "I have a pretty sick lava lamp collection.",
        "I got my boating license before my driver’s license.",
        "I took sculpture for 5 years and love to do woodworking.",
        "I make and sell tapestry weavings.",
        "I could eat only Japanese sweet potatoes my entire life—I love them so much.",
        "I have a treehouse that my dad and I built.",
        "My favorite movie director is Gregg Araki.",
        "I work part-time at a juice bar now.",
        "I am allergic to amoxicillin.",
        "I practice yoga 5x a week at my studio and am working to get my certification one day.",
        "I found a four-leaf clover patch in my yard, and my dad mowed it over.",
        "I can't roller skate at all, but I can ice skate.",
        "I want to visit as many national parks as I can. So far, I've hiked in the Grand Canyon, Bryce, and Zion National Park.",
        "I can snap my toes.",
        "My favorite board game is Ticket to Ride, and I have 4 different variations of the game.",
        "I have over 4,000 hours in The Sims 4... it is a problem.",
        "I have a few penpals that I love sending letters and stationery to."
    ];
    
    const aboutSection = document.getElementById("about");
  
    const factContainer = document.createElement("div");
    factContainer.id = "fun-fact-container";
  
    const factButton = document.createElement("button");
    factButton.id = "fun-fact-button";
    factButton.textContent = "Click for a fun fact about me!";
    

    const factDisplay = document.createElement("p");
    factDisplay.id = "fun-fact";
  
    factDisplay.style.textAlign = "center";
    factDisplay.style.fontStyle = "italic";
    factDisplay.style.color = "#553f56";

    factContainer.appendChild(factButton);
    factContainer.appendChild(factDisplay);
    aboutSection.appendChild(factContainer);

    factButton.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        factDisplay.textContent = funFacts[randomIndex];
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let funFactButton = document.getElementById("fun-fact-button");

    funFactButton.addEventListener("mouseover", function () {
        funFactButton.style.color = "#ffcc99"; // Change to hover color
    });

    funFactButton.addEventListener("mouseout", function () {
        funFactButton.style.color = "#f2e9e4"; // Revert to original color
    });
});
