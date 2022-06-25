import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { getAnimeByName } from "../../features/animes";
import _ from "lodash";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Anime = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const selectedAnime = useSelector(
    (state: RootState) => state.anime.selectedAnime
  );
  const animeStatus = useSelector((state: RootState) => state.anime.status);
  const navigate = useNavigate();

  if (!params.id)
    return <Typography variant="h4">Página não encontrada</Typography>;

  useEffect(() => {
    if (!params.id) return;
    dispatch(getAnimeByName(params.id));
  }, [params]);

  const handleGoBack = () => {
    navigate("/");
  };
  if (animeStatus === "loading")
    return (
      <Box
        width="100%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box alignItems="center" gap="20px" display="flex">
            <Tooltip title="Voltar ao início">
              <IconButton onClick={handleGoBack}>
                <AiOutlineArrowLeft />
              </IconButton>
            </Tooltip>

            <Box>
              <Typography variant="body2" color="textSecondary">
                Fatos curiosos de:
              </Typography>
              <Typography variant="h3">{_.capitalize(params.id)}</Typography>
            </Box>
          </Box>
          <img width="100%" src={selectedAnime?.img} alt={params.id} />
        </Grid>
        <Grid item xs={8} sx={{ maxHeight: "100vh", overflowY: "scroll" }}>
          <Box display="flex" flexDirection="column" gap="20px" width="100%">
            {selectedAnime?.data?.map((fact) => (
              <Card
                sx={{ height: "110px", display: "flex", alignItems: "center" }}
              >
                <CardContent>
                  <Typography>{fact.fact}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Anime;
