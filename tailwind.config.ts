import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767px' },
      mdOnly: { min: '768px', max: '1279px' },
      notXL: { max: '1279px' },
    },

    extend: {
      colors: {
        stokeDisabled: '#DDE1DE',
        bgButtonInactive: '#FFF2F1',
        bg3: '#FFFFFF',
        bgDefault: '#F4EDF8',
        error: '#FF0000',
        buttonHover: '#FFED84',
        buttonClickYellow: '#FFD900',
        accent1: '#FBE35B',
        accent4: '#FFDD95',
        buttonFocusYellow: '#EECB01',
        buttonClickPink: '#F96B59',
        buttonFocusPink: '#EDC0BA',
        accent5Icon1: '#FA897B',
        icon: '#FF9E92',
        buttonHoverPink: '#FEBDB8',
        accent2: '#85E2CD',
        accent3: '#D0E6A5',
        text1Icon3: '#000000',
        textFocus: '#646464',
        textHover: '#545454',
        text3: '#898989',
        textClick: '#353535',
        text2: '#484848',
        semiTransparentGray: '#82828299',
        veryLightGray: '#faf9f9',

      },
      fontFamily: {
        montserrat: 'var(--font-montserrat), sans-serif',
        comfortaa: 'var(--font-comfortaa), sans-serif',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '40px',
          xl: '32px',
        },
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
