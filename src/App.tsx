import { useRef } from 'react';
import { Typography } from './components/Typography';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme';
import { Container } from './components/Container';
import { Grid } from './components/Grid';

const GlobalBase = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

function App() {
  const textRef = useRef(null);

  console.log(textRef);
  return (
    <ThemeProvider theme={theme}>
      <GlobalBase />
      <Container>
        <Grid>
          <Grid>
            <Typography
              ref={textRef}
              sx={{
                mb: 4,
                bg: 'primary',
              }}
            >
              left
            </Typography>
          </Grid>
          <Grid>
            <Typography
              ref={textRef}
              sx={{
                mb: 4,
                bg: 'primary',
              }}
            >
              right
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
