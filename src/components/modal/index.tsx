import React, { useEffect, useState } from 'react';
import { ModalWindow, ModalContent, Like, Close, Heart, CloseImg } from '../../styles/modalStyles';
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
        document.body.style.overflow = 'hidden';
        document.addEventListener('click', handleCloseModal);
        return () => {document.removeEventListener('click', handleCloseModal); document.body.style.overflow = 'scroll';}
    }, []);

    function handleLikeClick() {
        setIsLiked(!imageData[currentImg!].isLiked);
        imageData[currentImg!].isLiked = !imageData[currentImg!].isLiked;
    }

    function handleCloseClick() {
        setIsOpen(false);
    }

    return (
        <ModalWindow isOpen={isOpen} >
          <ModalContent onClick={event => event.stopPropagation()}>
            <Like onClick={handleLikeClick}><Heart isLiked={isLiked}></Heart></Like>
            <Close onClick={handleCloseClick}><CloseImg src="./img/close.png" alt="" /></Close>
            <Img src={imageData[currentImg!].src} alt="" />
            <Messages currentImg={currentImg}/>
          </ModalContent>  
        </ModalWindow>
    );
};

export default Modal;