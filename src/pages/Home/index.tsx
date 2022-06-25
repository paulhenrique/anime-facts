import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { getAnimes } from "../../features/animes";

const Home = () => {
  const animeStatus = useSelector((state: RootState) => state.anime.status);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAnimes());
  }, []);
  return <Typography>{animeStatus}</Typography>;
};

export default Home;
