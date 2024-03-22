class CardBox extends HTMLElement {
  constructor() {
    super();

    let shadowDOM = this.attachShadow({ mode: "open" });

    shadowDOM.appendChild(
      document.getElementById("cardTemplate").content.cloneNode(true)
    );
  }
}

window.customElements.define("card-box", CardBox);
