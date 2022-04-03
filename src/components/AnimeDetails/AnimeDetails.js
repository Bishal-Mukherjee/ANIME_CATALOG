import React, { useState, useEffect, Fragment } from "react";
import {
  Dialog,
  IconButton,
  Grid,
  Typography,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { Close, ThumbUp } from "@mui/icons-material";
import { getAnimeById, getPeopleDetails } from "../../services/animes";
import "./AnimeDetails.css";
import AnimeCharacter from "../AnimeCharacter/AnimeCharacter";

const DetailsBody = ({
  title,
  original_title,
  movie_banner,
  description,
  director,
  producer,
  release_date,
  running_time,
  rt_score,
  people,
}) => {
  const [open, setOpen] = useState(false);
  const [peopleIndex, setPeopleIndex] = useState(0);

  const hanldeAnimeCharacterDialog = (index) => {
    setOpen(true);
    setPeopleIndex(index);
  };

  return (
    <Fragment>
      <Grid container style={{ backgroundColor: "black" }}>
        <Grid xs={12} style={{ marginTop: "0.1rem" }}>
          <img
            alt="anime_image"
            src={movie_banner}
            style={{ height: "41rem", width: "100%" }}
          />
        </Grid>
        <Grid
          xs={12}
          className="anime_details_grad"
          style={{
            position: "absolute",
            marginTop: "22rem",
            width: "100%",
          }}
        >
          <Typography
            style={{
              color: "red",
              fontFamily: "Sniglet",
              fontSize: "2rem",
              margin: "1.5rem",
              marginLeft: "2.5rem",
              height: "5rem",
            }}
          >
            {title}
            <br />
            &nbsp;
            <span
              style={{
                color: "red",
                fontFamily: "Comfortaa",
                fontSize: "1.5rem",
              }}
            >
              ({original_title}) &nbsp; <ThumbUp /> {rt_score} &nbsp; &nbsp;
              <span style={{ color: "white" }}>
                {" "}
                {(running_time / 60).toFixed(0)}h {running_time % 60}m •{" "}
                {release_date}
              </span>
            </span>
          </Typography>
          <div style={{ backgroundColor: "#262626" }}>
            <Typography
              style={{
                color: "white",
                fontFamily: "Comfortaa",
                fontSize: "1.5rem",
                margin: "1.5rem",
                marginLeft: "2.5rem",
                marginTop: "1rem",
              }}
            >
              {description}
            </Typography>
            <Grid
              container
              style={{
                marginLeft: "3rem",
                marginTop: "1rem",
                paddingBottom: "2rem",
              }}
            >
              <Grid xs={4}>
                <Avatar src="/broken-image.jpg" />
                <span style={{ color: "white", fontFamily: "Comfortaa" }}>
                  Producer • {producer}
                </span>
              </Grid>
              <Grid xs={4}>
                <Avatar src="/broken-image.jpg" />
                <span style={{ color: "white", fontFamily: "Comfortaa" }}>
                  Director • {director}
                </span>
              </Grid>
            </Grid>
            {people?.length !== 1 && (
              <Typography
                style={{
                  color: "white",
                  fontFamily: "Comfortaa",
                  fontSize: "1.5rem",
                  margin: "1.5rem",
                  marginLeft: "2.5rem",
                  marginTop: "1.5rem",
                }}
              >
                Cast{" "}
                <span style={{ fontSize: "0.8rem" }}>
                  (click on any avatar to get details)
                </span>
              </Typography>
            )}
            <Grid container spacing={1} style={{ marginLeft: "2rem" }}>
              {people?.length !== 1 &&
                people?.map((p, index) => (
                  <Grid xs={2} style={{ marginTop: "0.5rem" }}>
                    <span onClick={() => hanldeAnimeCharacterDialog(index)}>
                      <Avatar src="/broken-image.jpg" />
                      <span style={{ color: "white", fontFamily: "Comfortaa" }}>
                        Actor: {index + 1}
                      </span>
                    </span>
                  </Grid>
                ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
      {open && (
        <AnimeCharacter
          people={people}
          index={peopleIndex}
          open={open}
          setOpen={setOpen}
        />
      )}
    </Fragment>
  );
};

const AnimeDetails = ({ open, setOpen, id }) => {
  const [animeDetails, setAnimeDetails] = useState({});

  const handleFetchAnime = async () => {
    const response = (await getAnimeById(id)).data;
    setAnimeDetails(response);
  };

  useEffect(() => {
    handleFetchAnime();
  }, []);

  return (
    <Fragment>
      <Dialog
        fullWidth={true}
        maxWidth="xl"
        open={open}
        className="anime_dialog"
      >
        <IconButton
          style={{
            marginLeft: "97%",
            position: "absolute",
          }}
        >
          <Close style={{ color: "white" }} onClick={() => setOpen(false)} />
        </IconButton>
        {animeDetails === null && <CircularProgress />}
        {animeDetails !== null && (
          <DetailsBody
            title={animeDetails.title}
            movie_banner={animeDetails.movie_banner}
            original_title={animeDetails.original_title}
            description={animeDetails.description}
            people={animeDetails.people}
            director={animeDetails.director}
            producer={animeDetails.producer}
            rt_score={animeDetails.rt_score}
            release_date={animeDetails.release_date}
            running_time={animeDetails.running_time}
          />
        )}
      </Dialog>
    </Fragment>
  );
};

export default AnimeDetails;
