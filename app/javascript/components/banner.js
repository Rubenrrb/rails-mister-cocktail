import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#typed-subheader', {
    strings: ["Don't worry, don't cry, drink vodka and fly...",
    "Drink first, think later...",
    "According to chemistry, drink is a solution..."],
    typeSpeed: 40,
    loop: true,
    startDelay: 30,
    backSpeed: 10,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  });
}

export { loadDynamicBannerText };
