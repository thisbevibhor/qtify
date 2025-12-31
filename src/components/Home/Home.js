import styles from "./Home.module.css";

import { Box } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Hero from "../Hero/Hero.jsx";
import MusicBar from "../MusicBar/MusicBar.js";
import Albums from "./Albums.jsx";

export const fetchData = async (type) => {
  try {
    let res = await axios.get("/api/" + type);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
function Home({ data }) {
  const [collapsed, setCollapsed] = useState({ top: true, new: true });

  return (
    <Box className={styles.home}>
      <Hero />
      <Albums data={data} setCollapsed={setCollapsed} collapsed={collapsed} />
      <MusicBar />
    </Box>
  );
}

export default Home;
