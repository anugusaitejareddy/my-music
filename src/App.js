import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var musicDictionary = {
    lauv: ["Modern Loniless", "Slow Grenade", "Im a lonely"],
    "Justin TimberLake": [
      "Say something",
      "Mirrors",
      "Can't Stop This Feeling"
    ],
    "Imagine Dragons": ["it's Time", "Whatever It Takes", "Radioactive"],
    Halsey: ["Without Me", "East Side", "Sorry"]
  };

  var artists = Object.keys(musicDictionary);

  [artist, setArtist] = useState("lauv");

  function artistClickHandler(artist) {
    setArtist(artist);
  }

  return (
    <div className="App">
      <div style={{ padding: "1rem" }}>
        <h1>🎶 My music</h1>
        <small>
          Check my Favourite Artists/Bands and their songs. Select any one to
          get started.{" "}
        </small>
      </div>
      {/* <hr /> */}
      {artists.map((artist) => {
        return (
          <span
            onClick={() => artistClickHandler(artist)}
            style={{
              display: "inline-block",
              fontSize: "1.5rem",
              padding: "1rem",
              fontWeight: "bold",
              textDecoration: "UnderLine",
              cursor: "pointer",
              margin: "0 .5rem"
            }}
          >
            {artist}
          </span>
        );
      })}
      <ul>
        {musicDictionary[artist].map((song) => {
          return (
            <li
              style={{
                display: "block",
                listStyle: "none",
                textAlign: "left",
                padding: "1rem",
                margin: ".5rem",
                width: "50%"
              }}
            >
              ⏯ {song}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
