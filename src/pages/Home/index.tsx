import {
  Collapse,
  Skeleton,
  TextField,
  Typography,
  Box,
  Grow,
  Slide,
  Fade,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Card from "../../components/Card";
import { getAnimes } from "../../features/animes";
import { TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";

const useMakeStyles = makeStyles({
  animesListStyle: {
    gap: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
});

const Home = () => {
  const classes = useMakeStyles();
  const animeStatus = useSelector((state: RootState) => state.anime.status);
  const animesList = useSelector((state: RootState) => state.anime.list);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAnimes());
  }, []);

  const loadingSkeletons =
    animeStatus === "loading"
      ? Array.from({ length: 10 }, (e) => e)
      : Array.from({ length: 0 }, (e) => e);

  const navigate = useNavigate();
  const redirectToAnimePage = (id: string) => {
    navigate(`/anime/${id}`);
  };

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Typography variant="h3">Animes</Typography>
      <Typography variant="body2" color="textSecondary">
        e seus fatos curiosos
      </Typography>
      <Box my={2}>
        <TextField
          label="Procurar"
          placeholder="Digite um termo para busca"
          variant="outlined"
          onChange={({ target: { value } }) => setSearchTerm(value)}
          fullWidth
        />
      </Box>
      <TransitionGroup className={classes.animesListStyle}>
        {loadingSkeletons.map(() => (
          <Grow>
            <Skeleton height="300px" variant="rectangular" />
          </Grow>
        ))}
      </TransitionGroup>

      <TransitionGroup className={classes.animesListStyle}>
        {animesList
          .filter(({ anime_name }) =>
            searchTerm ? anime_name.includes(searchTerm) : true
          )
          .map(({ anime_img, anime_name, anime_id }, i) => (
            <Collapse>
              <Card
                onClick={() => redirectToAnimePage(anime_name)}
                image={anime_img}
                title={anime_name}
              />
            </Collapse>
          ))}
      </TransitionGroup>
    </>
  );
};

export default Home;
