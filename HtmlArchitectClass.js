class HtmlArchitect {
  selectedElements = [];
  id = 0;
  root = undefined;
  scheme = [];

  constructor() {
    this.root = document.getElementById(rootId);
    this.loadScheme();
    console.log("LOADED SCHEME", this.scheme);
  }

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

    this.saveScheme();
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

    // TODO HARDCODE!!!
    if (this.selectedElements.length) {
      style.width = "30px";
      style.height = "30px";
    }

    Object.assign(box.style, style);

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
  }

  deleteSelectedElements() {
    this.selectedElements.forEach((item) => {
      this.deleteSchemeElementById(item.id);
      this.deleteAllSchemeChildren(item.id);
      item.remove();
    });

    this.selectedElements = [];

    this.saveScheme();
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

  saveScheme() {
    window.localStorage.setItem(
      schemeLocalStorageKey,
      JSON.stringify(this.scheme),
    );
  }

  loadScheme() {
    const loadedScheme = JSON.parse(
      window.localStorage.getItem(schemeLocalStorageKey),
    );

    if (!loadedScheme?.length) {
      return;
    }

    this.loadChildren(loadedScheme, 0);
  }

  /** Loads specified element into HTML DOM from scheme. */
  loadElement(loadedScheme, item) {
    const { id, tag, style, parentId } = item;

    console.log("RUN", this.scheme);

    // Avoid adding the same element several times.
    if (this.scheme.find((item) => item.id === id)) {
      console.log("DUPLICATE", item);
      return;
    }

    const element = document.createElement(tag);

    element.id = id;
    this.id = id;

    console.log("ITEM", item);

    Object.assign(element.style, style);

    element.addEventListener("click", (event) => {
      this.processClick(element);
      event.stopPropagation();
    });

    const preparedParentId = !parentId ? rootId : parentId.toString();

    const parent = document.getElementById(preparedParentId);

    parent.appendChild(element);

    this.scheme.push(item);

    this.loadChildren(loadedScheme, id);
  }

  /** Loads children for specified parent. */
  loadChildren(loadedScheme, parentId) {
    loadedScheme.forEach((item) => {
      if (item.parentId === parentId) {
        // Load element for all the child elements of this parent.
        this.loadElement(loadedScheme, item);
      }
    });
  }
}
