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
      document.getElementById(this.selectedElementId).style.border = "";
      this.selectedElementId = el.id;
      return;
    }
  }

  createElement(tagName) {
    const el = document.createElement(tagName);

    el.id = this.maxElementId++;

    el.innerHTML = `${el.id}`;

    el.style.display = "inline";
    el.style.fontSize = "2rem";
    el.style.padding = "10px";
    el.style.cursor = "pointer";
    el.style.boxSizing = "border-box"; // TODO

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
