// Array of taglines
const taglines = [
    "404 Problems But a Site Ain’t One",
    "We Put the 'Pro' in 'Prototype'",
    "If Websites Were Pizza, Ours Would Be Extra Cheese",
    "We Debug While You Sip Coffee ☕",
    "Ctrl + Alt + Webby: Restarting the Internet, Your Way",
    "Making the Web Less Boring Since… Right Now",
    "We Code Like It’s Stack Overflow's Birthday",
    "Turning Coffee into Code and Ideas into Interfaces",
    "Your Site. Our Hype. No Bugs* (*Mostly)",
    "Webby-Soft: Because ‘Hardcode-Soft’ Was Taken",
    "We Speak Fluent HTML… and Sarcasm 😎",
    "Built With Love, Caffeine, and Semi-Colons",
    "Creativity on Tap. Bugs on a Timeout.",
    "We Turn 'Oops' into 'Whoa!'",
    "Making Websites So Good, Even Your Ex Will Visit"
  ];
  
  // Typewriter effect
  let currentTaglineIndex = 0;
  const typewriterElement = document.getElementById('typewriter-text');
  
  function typeTagline() {
    typewriterElement.textContent = ''; // Clear current text
  
    const currentTagline = taglines[currentTaglineIndex];
    let i = 0;
    
    // Type out the current tagline
    const interval = setInterval(() => {
      if (i < currentTagline.length) {
        typewriterElement.textContent += currentTagline.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          // Move to the next tagline after a brief pause
          currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
          typeTagline(); // Start typing the next tagline
        }, 1000);
      }
    }, 100);
  }
  
  // Start the typewriter effect
  typeTagline();
  