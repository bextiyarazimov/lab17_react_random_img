import React, { useState } from 'react';
import './App.css'; 

const AnimalGallery = () => {
  const [randomImageUrls, setRandomImageUrls] = useState([]);

  const images = [
    "https://source.unsplash.com/400x300/?dog",
    "https://source.unsplash.com/400x300/?cat",
    "https://source.unsplash.com/400x300/?bird",
    "https://source.unsplash.com/400x300/?rabbit"
  ];

  const randomImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomNumber];
    setRandomImageUrls(prevState => [...prevState, randomImageUrl]);
  };

  const handleHeartClick = (index) => {
    console.log(` ${index}`);
  };

  return (
    <div className="animal-gallery">
      <h1>Random image</h1>
      <button onClick={randomImage}>get animal random image</button>
      <div className="image-container">
        {randomImageUrls.map((imageUrl, index) => (
          <div key={index} className="image-wrapper">
            <div className="image">
              <img src={imageUrl} alt={` ${index}`} />
            </div>
            <div className="heart" onClick={() => handleHeartClick(index)}>❤️</div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default AnimalGallery;
