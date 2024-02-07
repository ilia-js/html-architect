class HtmlArchitect {
  maxElementId = 0;
  selectedElements = [];
  id = 0;
  space = document.getElementById("space");

  processClick(el) {
    // TODO: Let's use it but from element's panel.
    //console.log(el);

    if (!el) {
      return;
    }

    const findIndex = this.selectedElements.findIndex(
      (item) => item.id === el.id
    );

    if (findIndex === -1) {
      el.style.border = selectionBorderStyle;
      this.selectedElements.push(el);
      return;
    } else {
      this.selectedElements[findIndex].style.border = defaultBoxBorder;
      this.selectedElements.splice(findIndex, 1);
      return;
    }
  }

  unselectAll() {
    this.selectedElements.forEach((item) => {
      item.style.border = defaultBoxBorder;
    });

    this.selectedElements = [];
  }

  createElements() {
    const parents = this.selectedElements.length
      ? this.selectedElements
      : [space];

    parents.forEach((parent) => {
      this.createElement(parent);
    });
  }

  createElement(parent) {
    const tagName = "div";

    const box = document.createElement(tagName);

    box.id = this.maxElementId++;

    // TODO Uncomment if some inner text is needed.
    //box.innerHTML = `${box.id}`;

    Object.assign(box.style, {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3rem",
      padding: "10px",
      border: defaultBoxBorder,
      marginRight: "10px",
      marginBottom: "10px",
      width: "200px",
      height: "200px",
      cursor: "pointer",
      boxSizing: "border-box",
      overflow: "auto",
    });

    // HARDCODE!!!
    if (this.selectedElements.length) {
      box.style.width = "30px";
      box.style.height = "30px";
    }

    parent.appendChild(box);

    box.addEventListener("click", (event) => {
      this.processClick(box);
      event.stopPropagation();
    });
  }

  deleteSelectedElements() {
    this.selectedElements.forEach((item) => {
      item.remove();
    });

    this.selectedElements = [];
  }
}
