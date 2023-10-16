import { DefaultTheme } from 'styled-components';

let breakpoints = ['40em', '52em', '64em', '80em'];
// const breakpoints = {
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
// };
// aliases

const theme: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: 'green',
    secondary: 'blue',
  },
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  shadow: {
    small: '',
    medium: '',
    large: '',
    extraLarge: '',
  },
  breakpoints: breakpoints,
};

export default theme;
