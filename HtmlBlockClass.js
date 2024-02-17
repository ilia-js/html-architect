class HtmlBlock {
  getColor(name = "gray") {
    const colors = {
      blue: "#00f",
      red: "#f00",
      green: "#0f0",
      gray: "#999",
    };

    return colors[name] ?? colors["gray"];
  }

  createButton(config, onClickHandler) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = config.text;

    button.style.marginBottom = "20px";
    button.style.display = "block";
    button.style.backgroundColor = "#fff";
    button.style.border = "1px solid";
    button.style.borderColor = config.color ?? this.getColor();
    button.style.padding = "5px 10px";
    button.style.borderRadius = "5px";
    button.style.fontFamily = "Tahoma";
    button.style.cursor = "pointer";

    button.addEventListener("click", onClickHandler);

    return button;
  }

  createLabel(text, fieldId, parent) {
    if (!text) {
      console.error("Error: text for label is undefined");
      return;
    }

    const label = document.createElement("label");
    label.for = fieldId;
    label.innerHTML = `${text}: `;
    parent.appendChild(label);
  }

  createInputField(config, onChange) {
    const div = document.createElement("div");
    const field = document.createElement("input");

    field.type = config.type ?? "text";

    if (config.id) {
      field.id = config.id;
    }

    if (config.name) {
      field.name = config.name;
    }

    if (config.value) {
      field.value = config.value;
    }

    field.addEventListener("change", onChange);

    this.createLabel(config.label, config.id, div);

    div.appendChild(field);

    return div;
  }

  createSelectField(config, onChange) {
    const div = document.createElement("div");
    const field = document.createElement("select");

    if (config.id) {
      field.id = config.id;
    }

    if (config.name) {
      field.name = config.name;
    }

    if (config.value) {
      field.value = config.value;
    }

    field.addEventListener("change", onChange);

    this.createLabel(config.label, config.id, div);

    config.options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.value;
      option.innerHTML = item.label;
      field.appendChild(option);
    });

    div.appendChild(field);

    return div;
  }
}
