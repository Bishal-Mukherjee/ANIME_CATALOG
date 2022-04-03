import React, { useEffect, useState } from "react";
import { Backdrop, CircularProgress, Grid } from "@mui/material";
import { fetchAllAnimes } from "../services/animes";
import AnimeCard from "./AnimeCard/AnimeCard";

const Catalog = () => {
  const [animes, setAnimes] = useState([]);
  const [open, setOpen] = useState(true);

  const handleFetchAnimes = async () => {
    const response = await fetchAllAnimes();
    setAnimes(response.data);
    setOpen(false);
  };

  useEffect(() => {
    handleFetchAnimes();
  }, []);

  return (
    <div>
      {animes.length === 0 && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Grid container spacing={1}>
        {animes.map(
          ({
            index,
            id,
            title,
            original_title,
            image,
            movie_banner,
            running_time,
            description,
            director,
            release_date,
          }) => (
            <Grid item xs={12} sm={3}>
              <AnimeCard
                index={index}
                id={id}
                title={title}
                original_title={original_title}
                image={image}
                movie_banner={movie_banner}
                description={description}
                running_time={running_time}
                director={director}
                release_date={release_date}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
};

export default Catalog;
