import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import ParetoChart from './ParetoChart'
import Actionbar from './Appbar'
import LineChart from './LineChart'
import HeatMap from './HeatMap'
import BarChart from './BarChart'
import PaynterChart from './PaynterChart'
import { Paper, Grid, Box } from '@mui/material';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function useColorMode() {
  const [mode, setMode] = React.useState('light');

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return { mode, toggleColorMode, theme };
}


function App() {
  const { mode, toggleColorMode, theme } = useColorMode();
  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <Box height="100%">
          <Paper elevation={0}>
            <Grid container spacing={0}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={12}>
                  <Actionbar
                    toggleColorMode={toggleColorMode}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ParetoChart />
                </Grid>
                <Grid item xs={12} md={6}>
                  <LineChart />
                </Grid>
                <Grid item xs={12} md={6}>
                  <HeatMap />
                </Grid>
                <Grid item xs={12} md={6}>
                  <BarChart />
                </Grid>
                <Grid item xs={12} md={12}>
                  <PaynterChart />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
