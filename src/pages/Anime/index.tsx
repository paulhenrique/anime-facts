import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { getAnimeByName } from "../../features/animes";

const Anime = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const selectedAnime = useSelector(
    (state: RootState) => state.anime.selectedAnime
  );

  if (!params.id)
    return <Typography variant="h4">Página não encontrada</Typography>;

  useEffect(() => {
    if (!params.id) return;
    dispatch(getAnimeByName(params.id));
  }, [params]);
  return (
    <div>
      <List>
        {selectedAnime?.map((fact) => (
          <ListItem>
            <ListItemText primary={fact.fact} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Anime;
