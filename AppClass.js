class App {
  htmlArchitect;
  tools;
  toolsLeft;
  toolsRight;
  html;

  constructor() {
    console.log("HTML Architect app has been started!");

    this.tools = document.getElementById("tools");
    this.toolsLeft = document.getElementById("toolsLeft");
    this.toolsRight = document.getElementById("toolsRight");

    this.htmlArchitect = new HtmlArchitect();
    this.html = new HtmlBlock();

    window.addEventListener("click", () => {
      this.htmlArchitect.unselectAll();
    });

    this.tools.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    this.addButtonCreate();
    this.addButtonDelete();
    this.addInputField();
  }

  addButtonCreate(event) {
    const button = this.html.createButton(
      { text: "Create HTML Element", color: "green" },
      (event) => {
        this.htmlArchitect.createElements();
        event.stopPropagation();
      }
    );

    this.toolsLeft.appendChild(button);
  }

  addButtonDelete() {
    const button = this.html.createButton(
      { text: "Delete HTML Element", color: "red" },
      (event) => {
        this.htmlArchitect.deleteSelectedElements();
        event.stopPropagation();
      }
    );

    this.toolsLeft.appendChild(button);
  }

  addInputField() {
    const input = this.html.createInputField(
      {
        name: "backgroundColor",
        value: "",
        label: "Background Color",
      },

      (val) => {
        const selectedElements = this.htmlArchitect.selectedElements;

        selectedElements.forEach((item) => {
          console.log(item);
          item.style.backgroundColor = val.target.value;
        });
      }
    );

    this.toolsRight.appendChild(input);
  }
}
