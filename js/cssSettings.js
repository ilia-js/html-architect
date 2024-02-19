const cssSettingType = {
  selector: "selector",
  inputText: "input-text",
};

const cssSettings = {
  backgroundColor: {
    type: cssSettingType.selector,
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
  marginLeft: {
    type: cssSettingType.inputText,
    label: "Margin Left",
  },
  marginTop: {
    type: cssSettingType.inputText,
    label: "Margin Top",
  },
};
