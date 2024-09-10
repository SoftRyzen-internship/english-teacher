import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

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
      lineClamp: {
        8: '8',
      },
      backgroundImage: {
        'contact-ellipses': `url('/public/assets/images/icons/bg-ellipse/ellipse-yellow.svg'), 
                             url('/public/assets/images/icons/bg-ellipse/ellipse-blue.svg'), 
                             url('/public/assets/images/icons/bg-ellipse/ellipse-red.svg')`,
      },
    },
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        '.bg-contact': {
          backgroundColor: '#F4EDF8',
          backgroundImage: `url("/assets/images/icons/bg-ellipse/ellipse-blue.svg"), 
                            url("/assets/images/icons/bg-ellipse/ellipse-red.svg"), 
                            url("/assets/images/icons/bg-ellipse/ellipse-yellow.svg")`,
          backgroundSize: 'auto, auto, auto',
          backgroundPosition:
            'bottom -210px right -250px, top -180px right -250px, center center',
          backgroundRepeat: 'no-repeat',
        },
        '.about-bg': {
          backgroundColor: '#F4EDF8',
          backgroundImage: `url("/assets/images/icons/about-bg/mobile/ellipse-pink.svg"),
            url("/assets/images/icons/about-bg/mobile/ellipse-yellow.svg"),
             url("/assets/images/icons/about-bg/mobile/ellipse-blue.svg")`,
          backgroundSize: 'auto, auto, auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:
            'right -250px top -100px , left -150px  bottom -350px, right -300px top -200px',
        },
        '@media (min-width: 768px)': {
          '.bg-contact': {
            backgroundPosition:
              'bottom -100px right -150px, top -130px right -100px, center left',
          },
          '.about-bg': {
            backgroundPosition: 'right  top , left  bottom , right  center ',
          },
        },

        '@media (min-width: 1280px)': {
          '.bg-contact': {
            backgroundPosition: 'center bottom, right top, left bottom',
          },
        },
      });
    },
  ],
};
export default config;
