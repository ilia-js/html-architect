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

    this.addFields();
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

  addFields() {
    Object.entries(cssSettings).forEach(([name, value]) => {
      console.log(name, value);
      if (value.type === cssSettingType.inputText) {
        this.addInputField({
          name,
          defaultValue: "",
          label: value.label,
        });
      }
    });
  }

  addInputField(config) {
    const input = this.html.createInputField(
      {
        name: config.name,
        value: config.defaultValue,
        label: config.label,
      },

      (val) => {
        const selectedElements = this.htmlArchitect.selectedElements;

        selectedElements.forEach((item) => {
          item.style[config.name] = val.target.value;
        });
      }
    );

    this.toolsRight.appendChild(input);
  }
}
