//jshint esversion: 6
import axios from "axios";
import { useEffect } from "react";
import Chip from "@material-ui/core/Chip";

const Genres = ({
  type,
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => {
        return (
          <Chip
            label={genre.name}
            style={{ margin: "2px" }}
            clickable
            size="small"
            key={genre.id}
            color="primary"
            onDelete={() => {
              handleRemove(genre);
            }}
          />
        );
      })}
      {genres.map((genre) => {
        return (
          <Chip
            label={genre.name}
            style={{ margin: "2px" }}
            clickable
            size="small"
            key={genre.id}
            onClick={() => {
              handleAdd(genre);
            }}
          />
        );
      })}
    </div>
  );
};

export default Genres;
