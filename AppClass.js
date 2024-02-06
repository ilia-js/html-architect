class App {
  pure;
  tools = document.getElementById("tools");
  html;

  constructor() {
    console.log("PURE JS!");

    this.pure = new Pure();
    this.html = new MyHtmlElement();

    this.addButtonCreate();
    this.addButtonDelete();
  }

  addButtonCreate() {
    const button = this.html.createButton(
      { text: "Create HTML Element", color: "green" },
      () => {
        this.pure.createElement("div");
      }
    );

    tools.appendChild(button);
  }

  addButtonDelete() {
    const button = this.html.createButton(
      { text: "Delete HTML Element", color: "red" },
      () => {
        this.pure.deleteSelectedElement();
      }
    );

    tools.appendChild(button);
  }
}
