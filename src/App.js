import { Grid } from "@material-ui/core";


function App() {
  return (
    <div className="App">
      <Grid container direction="row" justifyContent="space-between" spacing={3}>
        <Grid item md={6} sm={6} xs={6} >
          <h1>Hello World!</h1>
        </Grid>
        <Grid item md={6} sm={6} xs={6}>
        <h1>Hello World!</h1>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
