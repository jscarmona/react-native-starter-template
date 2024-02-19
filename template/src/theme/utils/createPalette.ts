import { Colors } from '../constants/colors';
import { ColorMode, Theme } from '../types/Theme';

export function createPalette(mode: ColorMode): Theme['palette'] {
  const toggleColor = (colorToUseWhenLight: string, colorToUseWhenDark: string) =>
    mode === 'light' ? colorToUseWhenLight : colorToUseWhenDark;

  return {
    toggleColor,
    common: Colors,
    primary: {
      main: Colors.green[500],
      light: Colors.green[200],
      dark: Colors.green[700],
      contrastText: Colors.white,
    },
    secondary: {
      main: toggleColor(Colors.gray[900], Colors.white),
      light: Colors.gray[200],
      dark: Colors.gray[700],
      contrastText: toggleColor(Colors.white, Colors.gray[900]),
    },
    tertiary: {
      main: toggleColor(Colors.gray[200], Colors.gray[600]),
      light: toggleColor(Colors.gray[50], Colors.gray[900]),
      dark: toggleColor(Colors.gray[500], Colors.gray[200]),
      contrastText: toggleColor(Colors.black, Colors.white),
    },
    premium: {
      main: Colors.purple[500],
      light: Colors.purple[200],
      dark: Colors.purple[700],
      contrastText: Colors.white,
    },
    success: {
      main: Colors.green[500],
      light: Colors.green[200],
      dark: Colors.green[700],
      contrastText: Colors.white,
    },
    info: {
      main: Colors.blue[500],
      light: Colors.blue[200],
      dark: Colors.blue[700],
      contrastText: Colors.white,
    },
    warning: {
      main: Colors.yellow[500],
      light: Colors.yellow[200],
      dark: Colors.yellow[700],
      contrastText: Colors.gray[900],
    },
    error: {
      main: Colors.red[500],
      light: Colors.red[200],
      dark: Colors.red[700],
      contrastText: Colors.white,
    },
    background: {
      default: toggleColor(Colors.white, Colors.gray[900]),
      overlay: toggleColor('rgba(0, 0, 0, 0.8)', 'rgba(255, 255, 255, 0.3)'),
      disabled: Colors.gray[200],
    },
    text: {
      primary: Colors.green[500],
      secondary: toggleColor(Colors.black, Colors.white),
      hint: toggleColor(Colors.gray[500], Colors.gray[300]),
      disabled: Colors.gray[300],
    },
    border: {
      default: toggleColor(Colors.gray[200], Colors.gray[700]),
      focus: toggleColor(Colors.gray[300], Colors.gray[500]),
    },
  };
}
