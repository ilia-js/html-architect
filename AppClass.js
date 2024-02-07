class App {
  htmlArchitect;
  tools = document.getElementById("tools");
  html;

  constructor() {
    console.log("HTML Architect app has been started!");

    this.htmlArchitect = new HtmlArchitect();
    this.html = new HtmlBlock();

    window.addEventListener("click", () => {
      this.htmlArchitect.unselectAll();
    });

    this.addButtonCreate();
    this.addButtonDelete();
  }

  addButtonCreate(event) {
    const button = this.html.createButton(
      { text: "Create HTML Element", color: "green" },
      (event) => {
        this.htmlArchitect.createElements();
        event.stopPropagation();
      }
    );

    tools.appendChild(button);
  }

  addButtonDelete() {
    const button = this.html.createButton(
      { text: "Delete HTML Element", color: "red" },
      (event) => {
        this.htmlArchitect.deleteSelectedElements();
        event.stopPropagation();
      }
    );

    tools.appendChild(button);
  }
}
