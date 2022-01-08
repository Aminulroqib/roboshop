import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 400,
      margin: '2rem 0',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
    },
  },
  palette: {
    primary: {
      main: '#f0c000',
    },
    secondary: {
      main: '#208080',
    },
    error: {
      main: '#f04000',
    },
    background: {
      default: '#ffffff',
    },
    // divider: {
    //   default: '#000000',
    // },
  },
});

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: '1rem',
  },
  main: {
    padding: '1rem',
  },
  largeImage: {
    maxWidth: '50rem',
    width: '100%',
  },
  mt1: {
    marginTop: '1rem !important',
  },
  p1: {
    padding: '1rem !important',
  },
  formControl: {
    margin: 10,
    minWidth: 120,
    width: '100%',
  },
}));
