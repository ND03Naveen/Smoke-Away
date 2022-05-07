import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export default function StartScreen() {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#8AA29E",
        height: "100vh",
      }}
    >
      <Grid container style={{ marginTop: "12vh", justifyContent: "center" }}>
        <Grid container style={{ justifyContent: "center" }}>
          <img src="./Assets/logo.png" alt="no logo" width="150" height="215" />
        </Grid>
        <Grid
          container
          class="textColor"
          style={{
            marginTop: "-3vh",
            fontWeight: "600",
            fontSize: "1.2rem",
            letterSpacing: "1px",
          }}
        >
          Smoke Away
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "25vh",
          marginTop: "2vh",
        }}
      >
        <Grid container style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#DB5461",
              width: "30vw",
            }}
          >
            Sign in
          </Button>
        </Grid>
        <Grid
          container
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <p class="textColor" style={{ fontWeight: "100" }}>
            Don't have an account yet?
          </p>
          <p class="textColor" style={{ fontWeight: "600" }}>
            Sign up
          </p>
        </Grid>
        <Grid container style={{ justifyContent: "center", marginTop: "1vh" }}>
          <Grid item>
            <img src="./Assets/fb.png" alt="no logo" />
          </Grid>
          <Grid item>
            <img src="./Assets/google.png" alt="no logo" />
          </Grid>
          <Grid item>
            <img src="./Assets/tw.png" alt="no logo" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          fontWeight: "100",
        }}
      >
        <p class="textColor">About</p>
        <p class="textColor">© 2022 AppOwner</p>
      </Grid>
    </Grid>
  );
}
