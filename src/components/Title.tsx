import React, { FC } from "react";

interface Title {
  color: "red" | "blue" | "green";
}
export const Title: FC<Title> = ({ color, children }) => {
  return <h1 style={{ color }}>{children}</h1>;
};
