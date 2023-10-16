import css, {
  SystemCssProperties,
  SystemStyleObject,
} from '@styled-system/css';
import { ColorProps, BorderColorProps, ShadowProps } from 'styled-system';
import { KeyPaths } from './types';
import { ThemeColors, ThemeShadows } from '../theme/styled';

export type ThemeColorPaths = KeyPaths<ThemeColors>;
export type ThemeShadowPaths = KeyPaths<ThemeShadows>;

export type BetterCssProperties = {
  [K in keyof SystemCssProperties]: K extends keyof ColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof BorderColorProps
    ? ThemeColorPaths | SystemCssProperties[K]
    : K extends keyof ShadowProps
    ? ThemeShadowPaths | SystemCssProperties[K]
    : SystemCssProperties[K];
};

// Support CSS custom properties in the `sx` prop
export type CSSCustomProperties = {
  [key: `--${string}`]: string | number;
};

type CSSSelectorObject = {
  [cssSelector: string]: SystemStyleObject | CSSCustomProperties;
};

export type BetterSystemStyleObject =
  | BetterCssProperties
  | SystemStyleObject
  | CSSCustomProperties
  | CSSSelectorObject;

export interface SxProp {
  sx?: BetterSystemStyleObject;
}

const sx = (props: SxProp) => css(props.sx);

export default sx;
