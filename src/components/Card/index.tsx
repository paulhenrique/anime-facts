import React from "react";

export interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return <div>{title}</div>;
};

export default Card;
