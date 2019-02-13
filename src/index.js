import { color as defaultColor } from "./color";

export let breakpoint = {};
export let color = {};

for (const [key, value] of Object.entries(defaultColor)) {
  color[key] = {
    color: value
  };
}

export const init = customConfig => {
  for (const [key, value] of Object.entries({
    ...defaultColor,
    ...customConfig.color
  })) {
    color[key] = {
      color: value
    };
  }
};
