class Pure {
  maxElementId = 0;
  selectedElement = undefined;
  id = 0;
  space = document.getElementById("space");

  processClick(el) {
    console.log(el);
    if (!el) {
      return;
    }

    if (this.selectedElement === undefined) {
      el.style.border = selectionBorderStyle;
      this.selectedElement = el;
      return;
    }

    if (this.selectedElement.id === el.id) {
      this.cleanSelectedElement();
      return;
    }

    if (this.selectedElement) {
      el.style.border = selectionBorderStyle;
      this.selectedElement.style.border = defaultBoxBorder;
      this.selectedElement = el;
      return;
    }
  }

  cleanSelectedElement() {
    this.selectedElement.style.border = defaultBoxBorder;
    this.selectedElement = undefined;
  }

  createElement(tagName) {
    const el = document.createElement(tagName);

    el.id = this.maxElementId++;

    // TODO Uncomment if some inner text is needed.
    //el.innerHTML = `${el.id}`;

    Object.assign(el.style, {
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
    });

    if (this.selectedElement) {
      el.style.width = "30px";
      el.style.height = "30px";
    }

    const parent = this.selectedElement ?? space;

    parent.appendChild(el);

    el.addEventListener("click", (event) => {
      this.processClick(el);
      event.stopPropagation();
    });
  }

  deleteSelectedElement() {
    if (this.selectedElement) {
      this.selectedElement.remove();
      this.selectedElement = undefined;
    }
  }
}
