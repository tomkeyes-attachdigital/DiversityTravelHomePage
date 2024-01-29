export const standardColours = {
  black: '#000',
  white: '#FFF',
  transparentBlack: value => {
    return `rgba(0, 0, 0, ${value})`;
  },
  transparentWhite: value => {
    return `rgba(255, 255, 255, ${value})`;
  },
  transparent: 'rgba(255, 255, 255, 0)',
};

export const brandColours = {
  primary: '#0C25AC', // blue
  secondary: '#141414', // dark grey
  tertiary: '#EAF0F1', // light grey
};

export const elementColours = {
  textColour: brandColours.secondary,
};
