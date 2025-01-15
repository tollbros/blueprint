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
        Error: '#A31F34',
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
    primary: {
      contrast: '#FFFFFF',
      main: '#2196F3',
    },
    action: {
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
  },
  typography: {
    ...typography,
    SemanticPlaceholder: typography.GothamBaseBook,
    SemanticFloatingPlaceholder: typography.GothamXSmallBook,
    SemanticInput: typography.SubheaderBase,
    SemanticButtonLabelBase: typography.GothamBaseBold,
    SemanticButtonLabelSmall: typography.GothamSmallBold,
    SemanticTabLabel: typography.GothamBaseBold,
    SemanticTagLabel: typography.GothamSmallBold,
  },
  GlobalBrandBorderRadius: '4px',
};
