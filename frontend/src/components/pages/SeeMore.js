import React from "react";
import { Link } from "react-router-dom";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import { Typography } from "@material-ui/core";

function SeeMore({ category }) {
  return category === "trending" ||
    category === "gaming" ||
    category === "upcoming" ? (
    <Link className="more" to={`/phones/${category}`}>
      <ArrowCircleRightRoundedIcon style={{ fontSize: "3vmax" }} />
      <Typography>See More</Typography>
    </Link>
  ) : (
    <Link className="more" to={`/company/${category}`}>
      <ArrowCircleRightRoundedIcon style={{ fontSize: "3vmax" }} />
      <Typography>See More</Typography>
    </Link>
  );
}

export default SeeMore;
