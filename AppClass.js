class App {
  pure;
  tools = document.getElementById("tools");
  html;

  constructor() {
    console.log("HTML Architect app has been started!");

    this.pure = new Pure();
    this.html = new HtmlElementClass();

    window.addEventListener("click", () => {
      this.pure.cleanSelectedElement();
      console.log("WINDOW CLICK");
    });

    this.addButtonCreate();
    this.addButtonDelete();
  }

  addButtonCreate(event) {
    const button = this.html.createButton(
      { text: "Create HTML Element", color: "green" },
      (event) => {
        this.pure.createElement("div");
        event.stopPropagation();
      }
    );

    tools.appendChild(button);
  }

  addButtonDelete() {
    const button = this.html.createButton(
      { text: "Delete HTML Element", color: "red" },
      (event) => {
        this.pure.deleteSelectedElement();
        event.stopPropagation();
      }
    );

    tools.appendChild(button);
  }
}
