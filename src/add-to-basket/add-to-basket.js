class AddToBasket extends HTMLElement {
  static get observedAttributes() {
    return ["model"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const shadow = this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    button.textContent = `Add ${newValue} to basket`;
    button.addEventListener("click", () => {
      dispatchEvent(
        new CustomEvent("add-to-basket", { detail: newValue, bubbles: true })
      );
    });
    shadow.appendChild(button);
  }
}
customElements.define("add-to-basket", AddToBasket);
