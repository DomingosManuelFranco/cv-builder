import { Grid } from "@material-ui/core";
import Personal from './components/personal/Personal';



function App() {
  return (
    <>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item md={6} >
          <h1>Hello World!</h1>
          <Personal />
        </Grid>
        <Grid item md={6} >
        <h1>Hello World!</h1>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
