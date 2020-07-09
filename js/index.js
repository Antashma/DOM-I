const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAIVGATION
const navList = document.querySelectorAll('nav a');

navList[0].textContent = siteContent.nav["nav-item-1"];
navList[1].textContent = siteContent.nav["nav-item-2"];
navList[2].textContent = siteContent.nav["nav-item-3"];
navList[3].textContent = siteContent.nav["nav-item-4"];
navList[4].textContent = siteContent.nav["nav-item-5"];
navList[5].textContent = siteContent.nav["nav-item-6"];

//CTA
const headline1 = document.querySelector('h1')

headline1.textContent = siteContent.cta.h1

const ctaImg = document.getElementById('cta-img')

ctaImg.src = siteContent.cta["img-src"]

const startBtn = document.querySelector('.cta-text button')

startBtn.textContent = siteContent.cta.button

//MAIN CONTENT
// ******* TOP
const topContent =  document.querySelectorAll('.top-content .text-content');
topContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

// ********* MIDDLE
const midImg = document.getElementById('middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

// ********* BOTTOM
const botContent =  document.querySelectorAll('.bottom-content .text-content');

botContent[0].children[0].textContent = siteContent["main-content"]["services-h4"];
botContent[0].children[1].textContent = siteContent["main-content"]["services-content"];

botContent[1].children[0].textContent = siteContent["main-content"]["product-h4"];
botContent[1].children[1].textContent = siteContent["main-content"]["product-content"];

botContent[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
botContent[2].children[1].textContent = siteContent["main-content"]["vision-content"];

// CONTACT
const contactHeadline = document.querySelector('.contact h4');
const contactInfo = document.querySelectorAll('.contact p');

contactHeadline.textContent = siteContent.contact["contact-h4"];
contactInfo[0].textContent = siteContent.contact.address;
contactInfo[1].textContent = siteContent.contact.email;
contactInfo[2].textContent = siteContent.contact.phone;

//FOOTER
const copyright = document.querySelector('footer p');
copyright.textContent = siteContent.footer.copyright;


//ADD NEW CONTENT
// ********** change nav text to green
navList.forEach(item => item.style.color = 'green');
// ********** add 2 items to navigation using appendChild and prepend
const nav = document.querySelector('nav');
const newLink = document.createElement('a');
newLink.textContent = "Sign In/Up";
newLink.style.fontWeight = 'bold';
newLink.style.color = "black";
nav.appendChild(newLink);


// STRETCH
const compEmoji = "💻";
nav.prepend(compEmoji);
const allHeadline4 = document.querySelectorAll('h4');
allHeadline4.forEach(item => item.prepend('⭐'));

navList.forEach(item => item.style.fontWeight = 'bold');
startBtn.style.borderRadius = '5px';
startBtn.prepend('✨');
const circleImg = document.getElementById('cta-img');
startBtn.style.boxShadow = '2px 2px 2px black';

const allH4 = Array.from(document.getElementsByTagName('h4'));

allH4.forEach(function(el) {
  el.style.color = 'green'; 
  el.style.fontSize = '2em'
  el.style.textShadow = '2px 2px 5px grey'
})

footer.style.