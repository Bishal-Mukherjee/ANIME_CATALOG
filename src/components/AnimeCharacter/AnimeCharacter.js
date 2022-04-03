import React, { useEffect, useState } from "react";
import { Dialog, IconButton, Grid, Typography, Avatar } from "@mui/material";
import { Close } from "@mui/icons-material";
import { getPeopleDetails } from "../../services/animes";

const AnimeCharacter = ({ people, index, open, setOpen }) => {
  const [characterDetails, setCharacterDetails] = useState();

  const handleFetchCharacter = async () => {
    console.log(await getPeopleDetails(people[index]).data);
    setCharacterDetails((await getPeopleDetails(people[index])).data);
  };

  useEffect(() => {
    handleFetchCharacter();
  }, []);

  return (
    <div>
      <Dialog open={open} fullWidth={true}>
        <IconButton
          style={{
            marginLeft: "92%",
            position: "absolute",
          }}
        >
          <Close style={{ color: "white" }} onClick={() => setOpen(false)} />
        </IconButton>
        <div style={{ backgroundColor: "black" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Avatar style={{ height: "3rem", width: "3rem" }} />
          </div>
          <Typography
            style={{
              color: "white",
              fontFamily: "Mochiy Pop P One",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {characterDetails?.name}
          </Typography>

          <Grid container spacing={2} style={{ margin: "2rem" }}>
            <Grid item xs={6}>
              <Typography
                style={{ color: "white", fontFamily: "Mochiy Pop P One" }}
              >
                <span>Gender: &nbsp;</span> {characterDetails?.gender}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{ color: "white", fontFamily: "Mochiy Pop P One" }}
              >
                <span>Age: &nbsp;</span> {characterDetails?.age}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{ color: "white", fontFamily: "Mochiy Pop P One" }}
              >
                <span>Eye Color: &nbsp;</span>
                {characterDetails?.eye_color}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{ color: "white", fontFamily: "Mochiy Pop P One" }}
              >
                <span>Hair Color: &nbsp;</span>
                {characterDetails?.hair_color}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
};

export default AnimeCharacter;
