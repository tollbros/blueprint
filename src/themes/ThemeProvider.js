import dynamic from 'next/dynamic';
import { createContext, useContext, useEffect, useState } from 'react';
const ThemeProviderClientSide = dynamic(() => import('./ThemeProviderClientSide'), {
  ssr: false,
});

const ThemeContext = createContext();

const ThemeProvider = ({ children, theme }) => {
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) {
    return children;
  }

  return (
    <ThemeProviderClientSide theme={theme} ThemeContext={ThemeContext}>
      {children}
    </ThemeProviderClientSide>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeProvider;
