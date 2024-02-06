class Pure {
  maxElementId = 0;
  selectedElementId = undefined;
  id = 0;
  space = document.getElementById("space");

  processClick(el) {
    if (!el) {
      return;
    }

    if (this.selectedElementId === undefined) {
      el.style.border = selectionBorderStyle;
      this.selectedElementId = el.id;
      return;
    }

    if (this.selectedElementId === el.id) {
      el.style.border = "";
      this.selectedElementId = undefined;
      return;
    }

    if (this.selectedElementId) {
      el.style.border = selectionBorderStyle;
      document.getElementById(this.selectedElementId).style.border =
        defaultBoxBorder;
      this.selectedElementId = el.id;
      return;
    }
  }

  createElement(tagName) {
    const el = document.createElement(tagName);

    el.id = this.maxElementId++;

    el.innerHTML = `${el.id}`;

    Object.assign(el.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "3rem",
      padding: "10px",
      border: defaultBoxBorder,
      marginRight: "10px",
      marginBottom: "10px",
      width: "100px",
      height: "100px",
      cursor: "pointer",
      boxSizing: "border-box",
    });

    space.appendChild(el);

    el.addEventListener("click", () => {
      this.processClick(el);
    });
  }

  deleteSelectedElement() {
    if (this.selectedElementId) {
      document.getElementById(this.selectedElementId).remove();
      this.selectedElementId = undefined;
    }
  }
}
