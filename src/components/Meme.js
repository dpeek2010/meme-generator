import memeData from "../memeData";
import React from "react";

function Meme() {
  /* const [memeImage, setMemeImage] = React.useState(
    "https://i.imgflip.com/1ur9b0.jpg"
  ); */

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getRandomMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    //setMemeImage(memesArray[randomNumber].url);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img src={meme.randomImage} className="meme--image" alt="meme" />
    </main>
  );
}

export default Meme;
