import React from 'react';

const NESTED_BUBBLE_UNION_SVG = 'http://localhost:3845/assets/db2df29300c3b29597721323f1cf3a9ee785d4ef.svg';
const NESTED_BUBBLE_HOME_SVG = 'http://localhost:3845/assets/777ada5192c6461086de3a30c2bfd38c95c1eae2.svg';
const NESTED_CIRCLE_BASE_BG_SVG = 'http://localhost:3845/assets/f686763c4e4aae0c3242f79febd34e88e0ebfa64.svg';
const NESTED_CIRCLE_BASE_ICON_SVG = 'http://localhost:3845/assets/2404041fbb13efd8c9b5e9f618f7ab90bfa11fb6.svg';
const NESTED_CIRCLE_DARK_BG_SVG = 'http://localhost:3845/assets/b5735abab523722548541fb9c90e6fd571be5de4.svg';
const NESTED_CIRCLE_DARK_ICON_SVG = 'http://localhost:3845/assets/5c82327341f19e2a05da044389b66d9cad94e932.svg';
const UTILITY_SEARCH_SVG = 'http://localhost:3845/assets/ea3e2070d62689fec570abee7b62f1682f24da53.svg';
const SYSTEM_TAG_BG = '#DA2F81';
const SYSTEM_TAG_TEXT = '#FFFFFF';
const NESTED_SQUARE_STROKE = '#8195A2';

const UtilityMinusIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='2' y='9' width='16' height='2' rx='1' fill='currentColor' />
  </svg>
);

const UtilityGridIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='2' y='2' width='7' height='7' rx='1' fill='currentColor' />
    <rect x='11' y='2' width='7' height='7' rx='1' fill='currentColor' />
    <rect x='2' y='11' width='7' height='7' rx='1' fill='currentColor' />
    <rect x='11' y='11' width='7' height='7' rx='1' fill='currentColor' />
  </svg>
);

const UtilityRowsIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='2' y='3' width='4' height='4' rx='1' fill='currentColor' />
    <rect x='8' y='3' width='10' height='4' rx='1' fill='currentColor' />
    <rect x='2' y='8' width='4' height='4' rx='1' fill='currentColor' />
    <rect x='8' y='8' width='10' height='4' rx='1' fill='currentColor' />
    <rect x='2' y='13' width='4' height='4' rx='1' fill='currentColor' />
    <rect x='8' y='13' width='10' height='4' rx='1' fill='currentColor' />
  </svg>
);

const UtilityFilter2Icon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='3' y='6' width='14' height='2' rx='1' fill='currentColor' />
    <rect x='3' y='12' width='14' height='2' rx='1' fill='currentColor' />
    <rect x='6' y='10' width='2' height='6' rx='1' fill='currentColor' />
    <rect x='12' y='4' width='2' height='6' rx='1' fill='currentColor' />
  </svg>
);

const NestedBubbleIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <image width='20' height='20' href={NESTED_BUBBLE_UNION_SVG} />
    <image x='4' y='4' width='12' height='12' href={NESTED_BUBBLE_HOME_SVG} />
  </svg>
);

const NestedCircleBaseIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <image width='20' height='20' href={NESTED_CIRCLE_BASE_BG_SVG} />
    <image x='5' y='5' width='10' height='10' href={NESTED_CIRCLE_BASE_ICON_SVG} />
  </svg>
);

const NestedCircleOnDarkIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <image width='20' height='20' href={NESTED_CIRCLE_DARK_BG_SVG} />
    <image x='5' y='5' width='10' height='10' href={NESTED_CIRCLE_DARK_ICON_SVG} />
  </svg>
);

const NestedSquareIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x='0.5' y='0.5' width='19' height='19' rx='4' ry='4' fill='none' stroke={NESTED_SQUARE_STROKE} />
    <image x='4' y='4' width='12' height='12' href={UTILITY_SEARCH_SVG} />
  </svg>
);

const SystemTagIcon = ({ className, ...props }) => (
  <svg
    className={className}
    focusable='false'
    viewBox='0 0 157 60'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect width='157' height='60' rx='12' fill={SYSTEM_TAG_BG} />
    <text x='78.5' y='39' textAnchor='middle' fontFamily='Gotham Narrow, Helvetica Neue, sans-serif' fontWeight='500' fontSize='28' fill={SYSTEM_TAG_TEXT}>
      [G-Tag]
    </text>
  </svg>
);

const ICON_DATA = {
  'icon-placeholder': 'http://localhost:3845/assets/3606b9384fd85b73fd7e639b27df8534332699cf.svg',
  'nested-bubble': NestedBubbleIcon,
  'nested-circle-base': NestedCircleBaseIcon,
  'nested-circle-on-dark': NestedCircleOnDarkIcon,
  'nested-square': NestedSquareIcon,
  'social-build-beautiful': 'http://localhost:3845/assets/9f3100a9368ccd46cb6c42aec21e880aea81103a.svg',
  'social-facebook': 'http://localhost:3845/assets/920388d9fdf39a6f10660923028fda6a6bccc494.svg',
  'social-instagram': 'http://localhost:3845/assets/9d19fac72d50dcc6720b8962b35285e9c3a3e481.svg',
  'social-linkedin': 'http://localhost:3845/assets/7d6a63ec3f56b11d356f23a01b251104fc7ac762.svg',
  'social-pinterest': 'http://localhost:3845/assets/f18307a8bd9b2244365c6018af67c653708ed255.svg',
  'social-x': 'http://localhost:3845/assets/0725a63ea81663bce5b47078f68374ef5001316c.svg',
  'social-youtube': 'http://localhost:3845/assets/34a7bae994f61123838dd0df02875a7059a6d6c7.svg',
  'system-tag': SystemTagIcon,
  'umisc-bubble': 'http://localhost:3845/assets/cafa5064823b8a65ee340a2a424a3e125490fa67.svg',
  'umisc-play': 'http://localhost:3845/assets/405d9c661b385aa4df9f1344cb235b75c2f5b4d2.svg',
  'umisc-search-history': 'http://localhost:3845/assets/3b25a4bc8d7770eb48f616f8b06609ae89a7b126.svg',
  'umisc-star': 'http://localhost:3845/assets/017c690bbe304b7fbfe10d7f068e9ff903e99345.svg',
  'umisc-star-filled': 'http://localhost:3845/assets/92fdfb768b0801ce148b2bfbe19bca47f49dc0eb.svg',
  'umisc-time': 'http://localhost:3845/assets/405fcfab194267bbfb8430e5d9621e8d508aee14.svg',
  'utility-arrow-left': 'http://localhost:3845/assets/9258d00fdd14edc06b9ce2e79b8aa7fb557249bd.svg',
  'utility-arrow-right': 'http://localhost:3845/assets/72721f0a7da63a303f2fc608da5e7d30e00b1cef.svg',
  'utility-chat': 'http://localhost:3845/assets/30d1b872e34aa55bb64429baf53545136c318b5d.svg',
  'utility-chat-on': 'http://localhost:3845/assets/839a5fcccb5eeb4598f9058d3ed6ea76eec130cf.svg',
  'utility-checkmark': 'http://localhost:3845/assets/ea24cc2138c26ed88c389cb6036b6ee7a8c93319.svg',
  'utility-chevron-down': 'http://localhost:3845/assets/004a086ec120807c1279ae46a4cacc1a84109e84.svg',
  'utility-chevron-left': 'http://localhost:3845/assets/ee2bc09f80aac67634e4a490a35d8f7e881bec69.svg',
  'utility-chevron-right': 'http://localhost:3845/assets/f8f45cffc3f9ca990ac4556da2e4bc85576c0402.svg',
  'utility-chevron-up': 'http://localhost:3845/assets/9a294f6834c75d4609284dc371073ae2f871084b.svg',
  'utility-dac': 'http://localhost:3845/assets/64cde479fd6a62fccb08da4cec20b177092cefa7.svg',
  'utility-delete': 'http://localhost:3845/assets/47c221adffdf8be7441a05f7e6385783b945d5e2.svg',
  'utility-download': 'http://localhost:3845/assets/abf6488594e0c8eae6fe0946d14d9c9c236851a8.svg',
  'utility-favorite': 'http://localhost:3845/assets/ce28d359d88b475d3d063aeffff7b427d0147b7a.svg',
  'utility-favorite-2': 'http://localhost:3845/assets/d1ac36402576afdda2d9f48f3d11b8b4882c3519.svg',
  'utility-filter': 'http://localhost:3845/assets/155da2f77ad08497aca743f0f7812432c9afe46f.svg',
  'utility-filter-2': UtilityFilter2Icon,
  'utility-fullscreen': 'http://localhost:3845/assets/9c969a7177751f7251df591b45d77b5fd5eb2d4f.svg',
  'utility-fullscreen-exit': 'http://localhost:3845/assets/d5fce5b93d1b9061f0f9effe96cb250c3e9628c5.svg',
  'utility-grid': UtilityGridIcon,
  'utility-hide': 'http://localhost:3845/assets/1d7c519420ba3ee105ab32aee2880e41fc701fa8.svg',
  'utility-home': 'http://localhost:3845/assets/4d610382369680f32b8312c3ae09843dedacbb47.svg',
  'utility-link': 'http://localhost:3845/assets/18e484aa43b0efab50f14f17e1f0b51236dc8d04.svg',
  'utility-log-out': 'http://localhost:3845/assets/1b327fe6fdb8afbd342cdfc08bee287c5bd617a9.svg',
  'utility-menu': 'http://localhost:3845/assets/cc18c2140956e448c5bdcc73b3e4c3c976652366.svg',
  'utility-menu-2': 'http://localhost:3845/assets/55c5e0258267c0a8810483185e964724e9b94510.svg',
  'utility-menu-3': 'http://localhost:3845/assets/ddec06bacc2adf7c465cc60322e68c5928ab4984.svg',
  'utility-minus': UtilityMinusIcon,
  'utility-osc': 'http://localhost:3845/assets/5d7ec1fabf1ab67efce3a43634dc998f2752840d.svg',
  'utility-pdf': 'http://localhost:3845/assets/325aa91953a7bd568872e30c9e5de6de841ae31b.svg',
  'utility-plus': 'http://localhost:3845/assets/ba39133c7633d93d5514c57d9ad29172c4698d2a.svg',
  'utility-profile': 'http://localhost:3845/assets/d79f0291729220d0630e07dc55125d92851e5d78.svg',
  'utility-rotate-left': 'http://localhost:3845/assets/4fa73b7608f7170bc3d11360504b1ee35b2aceda.svg',
  'utility-rotate-right': 'http://localhost:3845/assets/309a37b501175b18bb0053d9c3c494e028d23aba.svg',
  'utility-rows': UtilityRowsIcon,
  'utility-search': 'http://localhost:3845/assets/ea3e2070d62689fec570abee7b62f1682f24da53.svg',
  'utility-settings': 'http://localhost:3845/assets/8f5412f9cd651f28e5cd9ec117fce4c5db2c23a6.svg',
  'utility-share': 'http://localhost:3845/assets/290992287c30bd13fb12f14fd379b48689ea2416.svg',
  'utility-show': 'http://localhost:3845/assets/fec9ed4b8d3232c6a17f10feedebdd1d9150c371.svg',
  'utility-swap': 'http://localhost:3845/assets/fd70f6949f80d6359f16f5e73aa37d82888c41d5.svg',
  'utility-text': 'http://localhost:3845/assets/bce7d41089af7394cac00f248a8564f638d8bd31.svg',
  'utility-x': 'http://localhost:3845/assets/551d979d99fe3777574ddb458cbf9ff664a36935.svg',
  'utility-zoom-in': 'http://localhost:3845/assets/fc0866bc6b37fa72ad7478139848584add3ba18e.svg',
  'utility-zoom-out': 'http://localhost:3845/assets/d0c63678fe99128dd0a6949660fec343b61d3914.svg',
  'web-apple': 'http://localhost:3845/assets/e9e7642587b63d500c94f63bd9c9924c380494e2.svg',
  'web-facebook': 'http://localhost:3845/assets/9dee25d1f59bdb2de94b5b7fe45c91c907a64711.svg',
  'web-google': 'http://localhost:3845/assets/2bd06688986f1b0e28cb2cc19e78540c94ea822a.svg',
};

export default ICON_DATA;
