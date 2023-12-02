import memeData from "../memeData";
import React from "react";

function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getRandomMeme() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    // const url = memesArray[randomNumber].url;
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={getRandomMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} classname="meme--image" alt="meme" />
    </main>
  );
}

export default Meme;
