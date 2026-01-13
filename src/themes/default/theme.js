import typography from './typography';

export const defaultTheme = {
  palette: {
    TB: {
      Brand: {
        Primary: '#0C223F',
        Medium: '#004876',
        Accent: '#0070CD',
        Gray: '#8195A2',
      },
      Functional: {
        Black: '#000000',
        OffBlack: '#595959',
        White: '#FFFFFF',
        OffWhite: '#B5B5B5',
        DarkGray: '#858585',
        MedGray: '#D8D8D8',
        LightGray: '#E9EDF0',
        GrayOnDark: 'rgba(255, 255, 255, 0.2)',
        Success: '#009D47',
        SuccessBg: '#E4F6EA',
        Error: '#A31F34',
        ErrorBg: '#F7E6E9',
        ErrorText: '#A42337',
      },
      POI: {
        Food: '#AD3F49',
        Fitness: '#D78956',
        Entertainment: '#DBAE60',
        Parks: '#5E8748',
        Transportation: '#5C8988',
        Business: '#2C71C7',
        Shopping: '#344072',
        School: '#543D6E',
      },
    },

    State: {
      AccentHover: '#00437B',
      AccentPressed: '#005AA4',
      GrayHover: '#CDD5DA',
      GrayPressed: '#E6EAEC',
      Disabled: 'var(--tb-palette-TB-Functional-MedGray)',
    },
    
  },

  spacing: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '24px',
    6: '32px',
    7: '40px',
    8: '48px',
    9: '60px',
  },

  specsSelector: {
    height: {
      base: '40px',
    },
  },

  checkboxRadio: {
    size: {
      base: '24px',
      large: '28px',
    },
    stroke: {
      pressed: '2px',
    },
    gap: {
      radioring: '4px',
    },
  },

  tabs: {
    gap: {
      tabToIndicator: '8px',
      iconToText: '4px',
      tabsSpacing: '24px',
    },
    padding: {
      hbaseTab: '4px',
      hbase: '4px',
    },
    size: {
      icon: '32px',
    },
    indicatorHeight: '4px',
  },

  tag: {
    padding: {
      hbase: '16px',
      vbase: '6px',
    },
  },

  buttons: {
    CTAButton: {
      height: {
        base: '48px',
        small: '40px',
        large: '56px',
      },
      hpadding: {
        small: '8px',
        base: '12px',
        large: '20px',
      },
      gap: {
        textToIcon: '4px',
      },
      stroke: {
        base: '1px',
        pressed: '2px',
      },
    },
    pillButton: {
      height: {
        base: '32px',
        small: '28px',
        large: '40px',
      },
      hpadding: {
        small: '8px',
        base: '12px',
        large: '20px',
      },
      gap: {
        textToIcon: '4px',
      },
      stroke: {
        base: '1px',
        pressed: '2px',
      },
      borderRadius: '1000px',
    },
  },
  
  inputs: {
    height: {
      base: '60px',
    },
    padding: {
      hbase: '20px',
      vbase: '12px',
      vsmall: '8px',
    },
    stroke: {
      base: '1px',
      focus: '3px',
    },
  },
  
  rangeSlider: {
    width: '343px',
    trackHeight: '4px',
    handleSize: '32px',
    handleRadius: '100px',
    gap: {
      indicatorToSlider: '16px',
      valueToLabel: '4px',
    },
    shadow: {
      basic: '0px 4px 4px rgba(133,133,133,0.15)',
    },
  },

  typography: {
    ...typography,
    SemanticPlaceholder: typography['Gotham-B-400'],
    SemanticFloatingPlaceholder: typography['Gotham-XS-400'],
    SemanticInput: typography['GothamN-B-500'],
    SemanticButtonLabel: typography['Gotham-B-700'],
    SemanticButtonTag: typography['Gotham-S-700'],
    SemanticTabLabel: typography['Gotham-B-700'],
  },
  globalBrandBorderRadius: '4px',
};
