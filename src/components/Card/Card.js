import * as React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import { Box } from "@mui/material";

export default function Card({ image, follows, likes }) {
  return (
    <Box className={styles.container}>
      <Box className={styles["img-container"]}>
        <Box component="img" src={image} alt="bird" className={styles.img} />
      </Box>

      {(follows !== undefined || likes !== undefined) && (
        <Box className={styles["chip-container"]}>
          <Chip
            label={likes !== undefined ? `${likes} Likes` : `${follows} Follows`}
            style={{
              backgroundColor: "var(--color-black)",
              color: "white",
              fontSize: "12px",
              fontFamily: "Poppins"
            }}
          />
        </Box>
      )}
    </Box>
  );
}
