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
        // Figma exports use --functional/* tokens; keep names aligned with this set.
        Black: '#000000',
        OffBlack: '#595959',
        White: '#FFFFFF',
        OffWhite: '#B5B5B5',
        DarkGray: '#858585',
        MedGray: '#D8D8D8',
        LightGray: '#E9EDF0',
        GrayOnDark: 'rgba(255, 255, 255, 0.2)',
        On: '#009D47',
        SuccessBg: '#E4F6EA',
        ErrorBg: '#F7E6E9',
        ErrorText: '#A31F34',
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

  globalBrandBorderRadius: '4px',

  spacing: {
    // Nudge: gentle spacing for minor visual clarity tweaks.
    nudge: {
      1: '1px',
      2: '2px',
      3: '3px',
    },
    // Spacer: primary spacing tokens within a group.
    spacer: {
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
    },
    // BlockSpacer: spacing between distinct groups.
    blockSpacer: {
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      64: '64px',
      80: '80px',
      120: '120px',
    },
  },
  
  specsSelector: {
    height: {
      base: '40px',
    },
    maxContainerWidth: '375px',
  },

  Icons: {
    size: {
      base: '20px',
    },
  },

  checkboxRadio: {
    size: {
      base: '24px',
      large: '28px',
    },
    iconScale: 0.6,
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
      hBase: '4px',
    },
    size: {
      icon: '32px',
    },
    indicatorHeight: '4px',
  },

  toggle: {
    gap: {
      toggleToStroke: '4px',
    },
    height: {
      base: '32px',
    },
    hPadding: {
      base: '20px',
    },
    ToggleUnit: {
      borderRadius: 'var(--tb-globalBrandBorderRadius)',
    },
    ToggleSet: {
      borderRadius: 'var(--tb-globalBrandBorderRadius)',
    },
    stroke: {
      base: '1px',
    },
  },

  switch: {
    size: {
      base: {
        width: '40px',
        height: '24px',
        trackHeight: '20px',
        handle: '24px',
      },
      large: {
        width: '56px',
        height: '36px',
        trackHeight: '28px',
        handle: '36px',
      },
    },
    iconScale: 0.6,
    borderRadius: {
      pill: '1000px',
      track: '100px',
    },
    stroke: {
      base: '1px',
    },
    shadow: {
      handle: '0px 4px 4px rgba(0,0,0,0.25)',
      handleDisabled: 'none',
    },
  },

  tag: {
    padding: {
      hBase: '16px',
      vBase: '6px',
    },
  },

  buttons: {
    PCTA: {
      borderRadius: 'var(--tb-globalBrandBorderRadius)',
    },
    SCTA: {
      borderRadius: 'var(--tb-globalBrandBorderRadius)',
    },
    CTAButton: {
      height: {
        base: '48px',
        small: '40px',
        large: '56px',
      },
      hPadding: {
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
      hPadding: {
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
    InputField: {
      borderRadius: 'var(--tb-globalBrandBorderRadius)',
    },
    TextArea: {
      borderRadius: 'var(--tb-globalBrandBorderRadius)',
    },
    Select: {
      borderRadius: 'var(--tb-globalBrandBorderRadius)',
    },
    padding: {
      hBase: '20px',
      vBase: '12px',
      vSmall: '8px',
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
    wrapperHPadding: '32px',
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
};
