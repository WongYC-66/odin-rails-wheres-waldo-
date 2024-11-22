import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Game from "../components/Game";
import ScoreBoard from "../components/ScoreBoard";

export default (
  <Router>
    <Routes>
      <Route path="/" element={< Layout />}>
        <Route path="/" element={< Home />} />
        <Route path="/game" element={< Game />} />
        <Route path="/scoreboard" element={< ScoreBoard />} />
      </Route>
    </Routes>
  </Router>
);