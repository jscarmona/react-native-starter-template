import { ColorMode, Theme } from '../types/Theme';

export function createPalette(mode: ColorMode): Theme['palette'] {
  return {
    toggleColor: (light, dark) => (mode === 'light' ? light : dark),
    primary: {
      900: '#053E30',
      800: '#055743',
      700: '#047156',
      600: '#038C6A',
      500: '#00A87E',
      400: '#28B48C',
      300: '#4FC09C',
      200: '#76CCAE',
      100: '#9CDAC2',
      50: '#C1E7D7',
    },
    secondary: {
      900: '#121D58',
      800: '#1B2A77',
      700: '#253795',
      600: '#3044B1',
      500: '#3C53CD',
      400: '#576BD7',
      300: '#7284E0',
      200: '#8F9DE8',
      100: '#ACB7F0',
      50: '#DEDBEA',
    },
    gray: {
      900: '#121212',
      800: '#2C2C2C',
      700: '#474747',
      600: '#616161',
      500: '#7B7B7B',
      400: '#969696',
      300: '#B0B0B0',
      200: '#CACACA',
      100: '#E5E5E5',
      50: '#FAFAFA',
    },
    info: {
      900: '#014360',
      800: '#015C84',
      700: '#0175A8',
      600: '#028ECC',
      500: '#02A7F0',
      400: '#28B4F2',
      300: '#4EC1F5',
      200: '#74CFF7',
      100: '#9ADCF9',
      50: '#C0E9FB',
    },
    warning: {
      900: '#5E5200',
      800: '#817100',
      700: '#A49000',
      600: '#C7AF00',
      500: '#EACE00',
      400: '#EDD526',
      300: '#F0DD4D',
      200: '#F4E473',
      100: '#F7EB99',
      50: '#FAF3BF',
    },
    error: {
      900: '#5E0000',
      800: '#780000',
      700: '#8D0200',
      600: '#9C100D',
      500: '#A72320',
      400: '#C03936',
      300: '#D45350',
      200: '#E57373',
      100: '#F19999',
      50: '#FABFBF',
    },
    background: {
      default: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.8)',
      disabled: '#CACACA',
    },
    text: {
      primary: '#B0B0B0',
      secondary: '#121212',
      hint: '#7B7B7B',
      disabled: '#B0B0B0',
    },
    border: {
      default: '#CACACA',
      focus: '#B0B0B0',
    },
  };
}
