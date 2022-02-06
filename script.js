const toggleBtn = document.querySelector(".navbar_toggle");

const nav = document.querySelector(".navbar");
const menu = document.querySelector(".navbar_menu");
const sns = document.querySelector(".navbar_sns");

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('active');
  sns.classList.toggle('active');
}) // #navbar_toogle 버튼을 눌렀을때 ative class toggle
class afterText extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute("text") ? this.getAttribute("text") : "";
    this.attachShadow({mode : 'open'});
    this.shadowRoot.innerHTML = `<span></span><style>span::after {content: "${text ? text : ""}";}</style>`
  }
}
customElements.define('af-t', afterText);
// 텍스트 복사 방지를 위해 :after 로 텍스트를 추가하는 custom element
// <af-t text="Text"> 로 사용