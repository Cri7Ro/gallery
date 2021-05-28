import React, { useState } from 'react';
import Modal from './components/modal';
import imageData from './imageData';
import { ImageList } from './styles/imageListStyle';
import Header from './components/header';


function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<number | null>(null);

  function handleImageClick(event: React.SyntheticEvent<HTMLImageElement>) {
    if (!(event.target instanceof HTMLImageElement)) {
      return;
    }
    setIsOpen(true);
    let a: number = +event.target.dataset.index!;
    setCurrentImg(a);
  }

  return ( 
    <div className="App">
      <Header /> 
      <main>
        <ImageList>
          {imageData.map(image => <li key={image.id.toString()}><img src={image.src} alt='Фото' onClick={handleImageClick} data-index={image.id - 1}/></li>)}
        </ImageList>
        {isOpen ? <Modal isOpen={isOpen} setIsOpen={setIsOpen} currentImg={currentImg} setCurrentImg={setCurrentImg}/> : null}
      </main>
    </div>
  );
}

export default App;
