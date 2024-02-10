const cssSettingType = {
  selector: "selector",
  inputText: "input-text",
};

const cssSettings = {
  backgroundColor: {
    type: cssSettingType.inputText, // TODO
    dictionary: dictionaries.colors,
    label: "Background color",
  },
  width: {
    type: cssSettingType.inputText,
    label: "Width",
  },
  height: {
    type: cssSettingType.inputText,
    label: "Height",
  },
  rotate: {
    type: cssSettingType.inputText,
    label: "Rotate",
  },
};
