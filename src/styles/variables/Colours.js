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
  primary: '#124848', // dark grey
  secondary: '#c74e18', // orange
  tertiary: '#f1ebda', // beige
};

export const elementColours = {
  textColour: brandColours.secondary,
};
