import { Grid } from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <Grid container direction="row" justifyContent="space-between" spacing={3}>
        <Grid item xs={6} >
          <h1>Hello World!</h1>
        </Grid>
        <Grid item xs={6}>
        <h1>Hello World!</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
