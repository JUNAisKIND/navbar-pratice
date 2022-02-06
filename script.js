const toggleBtn = document.querySelector(".navbar_toggle");

const nav = document.querySelector(".navbar");
const menu = document.querySelector(".navbar_menu");
const sns = document.querySelector(".navbar_sns");

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('active');
  sns.classList.toggle('active');
})

class afterText extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") ? this.getAttribute("text") : "";

    this.attachShadow({mode : 'open'});
    this.shadowRoot.innerHTML = `
    <span></span>
    <style>span::after {content: "${text ? text : ""}";}</style>
    `


  }
}
customElements.define('af-t', afterText);