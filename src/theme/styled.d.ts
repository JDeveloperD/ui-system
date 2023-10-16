import 'styled-components';
import 'styled-system';
import { Theme } from 'styled-system';

export type ThemeMode = 'light' | 'dark';

export type ThemeColors = {
  primary: string;
  secondary: string;
};

export type ThemeShadows = {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
};

export type ThemeSpaces = number[];

export type ThemeBreakpoints = string[] & {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: ThemeMode;
    colors: ThemeColors;
    space: ThemeSpaces;
    shadow: ThemeShadows;
    breakpoints: ThemeBreakpoints;
  }
}
