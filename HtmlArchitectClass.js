class HtmlArchitect {
  selectedElements = [];
  id = 0;
  root = document.getElementById(rootId);
  scheme = [];

  processClick(el) {
    // TODO: Let's use it but from element's panel.
    //console.log(el);

    if (!el) {
      return;
    }

    const findIndex = this.selectedElements.findIndex(
      (item) => item.id === el.id,
    );

    if (findIndex === -1) {
      el.style.border = selectionBorderStyle;
      this.selectedElements.push(el);
    } else {
      this.selectedElements[findIndex].style.border = defaultBoxBorder;
      this.selectedElements.splice(findIndex, 1);
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
      : [this.root];

    parents.forEach((parent) => {
      this.createElement(parent);
    });
  }

  createElement(parent) {
    this.id++;

    const tagName = "div";

    const box = document.createElement(tagName);

    box.id = this.id;

    // TODO Uncomment if some inner text is needed.
    //box.innerHTML = `${box.id}`;

    const style = {
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
    };

    Object.assign(box.style, style);

    // TODO HARDCODE!!!
    if (this.selectedElements.length) {
      box.style.width = "30px";
      box.style.height = "30px";
    }

    parent.appendChild(box);

    box.addEventListener("click", (event) => {
      this.processClick(box);
      event.stopPropagation();
    });

    const schemeEl = {
      tag: tagName,
      id: this.id,
      parentId: parent.id === rootId ? 0 : Number(parent.id),
      style,
    };

    this.scheme.push(schemeEl);

    console.log(this.scheme);
  }

  deleteSelectedElements() {
    this.selectedElements.forEach((item) => {
      this.deleteSchemeElementById(item.id);
      this.deleteAllSchemeChildren(item.id);
      item.remove();
    });

    this.selectedElements = [];
  }

  deleteSchemeElementById(id) {
    const index = this.scheme.findIndex((el) => el.id === Number(id));
    this.scheme.splice(index, 1);
  }

  deleteAllSchemeChildren(parentId) {
    parentId = Number(parentId);

    const idsToDelete = [];

    this.scheme.forEach((item) => {
      if (item.parentId === parentId) {
        idsToDelete.push(item.id);
      }
    });

    idsToDelete.forEach((id) => this.deleteSchemeElementById(id));
  }
}
