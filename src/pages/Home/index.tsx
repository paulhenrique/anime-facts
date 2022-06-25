import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Home = () => {
  const animeStatus = useSelector((state: RootState) => state.anime.status);
  return <Typography>{animeStatus}</Typography>;
};

export default Home;
