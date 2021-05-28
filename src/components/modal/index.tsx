import React, { useEffect, useState } from 'react';
import { ModalWindow, ModalContent, Like, Heart } from '../../styles/modalStyles';
import { IModal } from '../../types/interfaces';
import { Img } from '../../styles/imageListStyle';
import imageData from '../../imageData';
import Messages from './Messages';

const Modal: React.FC<IModal> = ({isOpen, setIsOpen, currentImg, setCurrentImg}) => {

    const [isLiked, setIsLiked ] = useState<boolean>(imageData[currentImg!].isLiked); 

    function handleCloseModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleCloseModal);
        return () => document.removeEventListener('click', handleCloseModal);
    }, []);

    function handleLikeClick() {
        setIsLiked(!imageData[currentImg!].isLiked);
        imageData[currentImg!].isLiked = !imageData[currentImg!].isLiked;
    }

    return (
        <ModalWindow isOpen={isOpen} >
          <ModalContent onClick={event => event.stopPropagation()}>
            <Like onClick={handleLikeClick}><Heart isLiked={isLiked}></Heart></Like>
            <Img src={imageData[currentImg!].src} alt="" />
            <Messages currentImg={currentImg}/>
          </ModalContent>  
        </ModalWindow>
    );
};

export default Modal;