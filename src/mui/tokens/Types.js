import * as React from 'react';
import { useTheme } from '@mui/material/styles';

export default function Types() {
  const styles = {
    width: '100%',
    maxWidth: 800,
    border: '1px solid lightGray',
    padding: '0 8px',
  };

  const theme = useTheme();

  return Object.keys(theme.MuiCssBaseline.typography).map((typographyKey, index) => {
    return (
      <div key={typographyKey + index} style={styles}>
        <h1 className={`tb-MuiCssBaseline-typography-${typographyKey}-font`}>{typographyKey}. Typography</h1>
        <br />
        <b>var(--mui-MuiCssBaseline-typography-{typographyKey}-font)</b>
      </div>
    );
  });

  // return (
  //   <>
  //     <div style={styles}>
  //       <h1 className={'tb-font-H1'}>
  //         h1. Heading
  //       </h1>
  //       <pre>var(--mui-MuiCssBaseline-typography-H1-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <h2 className={'tb-font-H2'}>
  //         h2. Heading
  //       </h2>
  //       <pre>var(--mui-MuiCssBaseline-typography-H2-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <h3 className={'tb-font-H3'}>
  //         h3. Heading
  //       </h3>
  //       <pre>var(--mui-MuiCssBaseline-typography-H3-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <h4 className={'tb-font-H4'}>
  //         h4. Heading
  //       </h4>
  //       <pre>var(--mui-MuiCssBaseline-typography-H4-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <h5 className={'tb-font-H5'}>
  //         h5. Heading
  //       </h5>
  //       <pre>var(--mui-MuiCssBaseline-typography-H5-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <h6 className={'tb-font-H6'}>
  //         h6. Heading
  //       </h6>
  //       <pre>var(--mui-MuiCssBaseline-typography-H6-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <p className={'tb-font-SubtitleBase'}>
  //         subtitle base. Lorem ipsum dolor sit amet, consectetur adipisicing
  //         elit.
  //         Quos blanditiis tenetur
  //       </p>
  //       <pre>var(--mui-MuiCssBaseline-typography-SubtitleBase-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <p className={'tb-font-SubtitleLarge'}>
  //         subtitle large. Lorem ipsum dolor sit amet, consectetur adipisicing
  //         elit. Quos blanditiis tenetur
  //       </p>
  //       <pre>var(--mui-MuiCssBaseline-typography-SubtitleLarge-font)</pre>
  //     </div>
  //     <div style={styles}>
  //       <p className={'tb-font-SubtitleSmall'}>
  //         subtitle small. Lorem ipsum dolor sit amet, consectetur adipisicing
  //         elit. Quos blanditiis tenetur
  //       </p>
  //       <pre>var(--mui-MuiCssBaseline-typography-SubtitleSmall-font)</pre>
  //     </div>
  //   </>
  // )
}
