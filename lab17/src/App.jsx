import React, { useState } from 'react';
import './App.css'; // İsteğe bağlı: CSS dosyanızı ekleyebilirsiniz

const AnimalGallery = () => {
  const [randomImageUrl, setRandomImageUrl] = useState('');

  const images = [
    "https://source.unsplash.com/400x300/?dog",
    "https://source.unsplash.com/400x300/?cat",
    "https://source.unsplash.com/400x300/?bird",
    "https://source.unsplash.com/400x300/?rabbit"
  ];

  const randomImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    const randomImageUrl = images[randomNumber];
    setRandomImageUrl(randomImageUrl);
  };

  return (
    <div className="animal-gallery">
      <h1>Rastgele Hayvan Resimleri</h1>
      <button onClick={randomImage}>Rastgele Resim Getir</button>
      {randomImageUrl && <img src={randomImageUrl} alt="Hayvan Resmi" />}
      <br />
      <p><small>Resimler: Unsplash</small></p>
    </div>
  );
};

export default AnimalGallery;
