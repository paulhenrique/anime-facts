import {
  Box,
  CircularProgress,
  Collapse,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Card from "../../components/Card";
import { getAnimes } from "../../features/animes";
import { TransitionGroup } from "react-transition-group";

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
  return (
    <>
      <TransitionGroup className={classes.animesListStyle}>
        {loadingSkeletons.map(() => (
          <Collapse>
            <Skeleton height="300px" variant="rectangular" />
          </Collapse>
        ))}
      </TransitionGroup>

      <TransitionGroup className={classes.animesListStyle}>
        {animesList.map(({ anime_img, anime_name }) => (
          <Collapse>
            <Card image={anime_img} title={anime_name} />
          </Collapse>
        ))}
      </TransitionGroup>
    </>
  );
};

export default Home;
