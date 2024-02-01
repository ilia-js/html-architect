class App {
  pure;
  tools = document.getElementById("tools");

  constructor() {
    console.log("PURE JS!");

    this.pure = new Pure();
    this.addButtonCreate();
    this.addButtonDelete();
  }

  addButtonCreate() {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Create HTML Element";
    button.style.marginBottom = "20px";
    button.style.display = "block";

    button.addEventListener("click", () => {
      this.pure.createElement("div");
    });

    tools.appendChild(button);
  }

  addButtonDelete() {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Delete HTML Element";
    button.style.marginBottom = "20px";
    button.style.display = "block";

    button.addEventListener("click", () => {
      this.pure.deleteSelectedElement();
    });

    tools.appendChild(button);
  }
}
