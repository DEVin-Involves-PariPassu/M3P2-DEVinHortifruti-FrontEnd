import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#36A23F',
      light: '#36a23f71',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C4CAAF',
      light: '#C4CAAF',
      contrastText: '#FFFFFF',
    },
    variant:{
      main: '#4A5926',
      light: '#4A5926',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#D06618',
      light: '#D06618',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#F59B16',
      light: '#F59B16',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#36A23F',
      light: '#36A23F',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#521E12',
      light: '#521E12',
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
      default: '#36a23f71',
      extra: '#C4CAAF',
    },
    text: {
      main:'#FFFFFF',
      light: '#C4CAAF',
      default: '#521E12',
    },
  }
});
