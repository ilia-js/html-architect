class HtmlElementClass {
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
}
