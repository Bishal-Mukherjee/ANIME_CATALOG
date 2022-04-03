import React, { Fragment, useState } from "react";
import { Card, CardMedia, Typography, Chip, Button } from "@mui/material";
import "./AnimeCard.css";
import AnimeDetails from "../AnimeDetails/AnimeDetails";

const AnimeCard = ({
  id,
  title,
  original_title,
  image,
  description,
  running_time,
  release_date,
}) => {
  const [open, setOpen] = useState(false);
  const toggleCardTextVisibile = (index) => {
    document
      .getElementById(`card_text_${index}`)
      .classList.remove("card_text_hidden");

    document
      .getElementById(`card_text_${index}`)
      .classList.add("card_text_visible");
  };

  const toggleCardTextHidden = (index) => {
    document
      .getElementById(`card_text_${index}`)
      .classList.remove("card_text_visible");

    document
      .getElementById(`card_text_${index}`)
      .classList.add("card_text_hidden");
  };

  const handleDetailsDialog = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Card style={{ backgroundColor: "black" }}>
        <div style={{ height: "1rem", width: "100%", color: "black" }} />
        <CardMedia
          image={image}
          component="img"
          alt="anime_image"
          height="250"
          className="card_media"
          onMouseOver={() => toggleCardTextVisibile(id)}
          onMouseOut={() => toggleCardTextHidden(id)}
        />
        <Chip
          style={{
            position: "absolute",
            marginTop: "-7.5rem",
            marginLeft: "7%",
            width: "10rem",
            fontFamily: "Sniglet",
          }}
          id={`card_text_${id}`}
          className="card_text_hidden"
          label={
            <Typography
              style={{
                fontFamily: "Zen Kurenaido",
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              {(running_time / 60).toFixed(0)}h {running_time % 60}m •{" "}
              {release_date}
            </Typography>
          }
        />
        <Typography
          style={{
            fontFamily: "Zen Kurenaido",
            color: "white",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          style={{
            fontFamily: "Zen Kurenaido",
            color: "white",
            textAlign: "center",
            fontSize: "0.8rem",
          }}
        >
          ({original_title})
        </Typography>
        <Typography
          style={{
            fontFamily: "Zen Kurenaido",
            color: "red",
            textAlign: "center",
            marginLeft: "3%",
            marginRight: "3%",
            marginTop: "1rem",
            fontSize: "1.2rem",
          }}
        >
          {description.substring(0, 70)}...
        </Typography>
        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            marginTop: "0.5rem",
          }}
        >
          <Button
            style={{
              fontFamily: "Mochiy Pop P One",
              backgroundColor: "#cc0000",
              color: "white",
              marginBottom: "0.5rem",
            }}
            onClick={() => handleDetailsDialog()}
          >
            Watch
          </Button>
        </div>
      </Card>
      {open && <AnimeDetails open={open} setOpen={setOpen} id={id} />}
    </Fragment>
  );
};

export default AnimeCard;
