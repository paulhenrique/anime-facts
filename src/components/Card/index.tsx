import {
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export interface CardProps {
  title: string;
  image: string;
  onClick?: () => void;
}

const Card = ({ title, image, onClick }: CardProps) => {
  return (
    <MuiCard variant="outlined">
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small">
          Ver mais
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
