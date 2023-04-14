import '../styles/global.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  const nordTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        background: '$nord6',
        text: '$nord0',
        link: '$nord8',

        primary: '$nord7',

        nord0:  '#2E3440',
        nord1:  '#3b4252',
        nord2:  '#434c5e',
        nord3:  '#4c566a',
        nord4:  '#d8dee9',
        nord5:  '#e5e9f0',
        nord6:  '#ECEFF4',
        nord7:  '#8FBCBB',
        nord8:  '#88C0D0',
        nord9:  '#81a1c1',
        nord10: '#5e81ac',
        nord11: '#bf616a',
        nord12: '#d08770',
        nord13: '#ebcb8b',
        nord14: '#a3be8c',
        nord15: '#b48ead'
      },
      spaces: {},
      fonts: {}
    }
  })

  return (
      <NextUIProvider theme={nordTheme}>
          <Component {...pageProps} />
      </NextUIProvider>
  );
}
