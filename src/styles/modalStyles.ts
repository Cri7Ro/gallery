import styled from 'styled-components';

export const ModalWindow = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
`;

export const ModalContent = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-52%, -50%);
    width: 50vw;
    height: 50vw;
    background-color: white;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1080px) {
        width: 70vw;
        height: 70vw;
    }

    @media screen and (max-width: 750px) {
        width: 80vw;
        height: 80vw;
    }

    @media screen and (max-width: 580px) {
        width: 90vw;
        height: 60vh;
    }
`;

export const InputComment = styled.textarea`
    width: 90%;
    &:focus {
        outline-color: #2a0ad0;
    }
    font-family: inherit;
    margin-bottom: .5rem;
    height: 5vh;
    border: 1px solid #2caee8;
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem;
`;

export const CommentsContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    form {
        display: flex;
        flex-direction: column;
        
    }
    height: 75%;
    overflow-y: hidden;
`;

export const CommentsList = styled.div `
    height: 75%;
    overflow-y: scroll;
    p {
        font-size: 1.5rem;
        padding: .5rem;
        margin-bottom: .5rem;
    }
`;

export const Like = styled.button`
    position: absolute;
    width: 85px;
    height: 90px;
    background: none;
    border: none;
    right: 5px;
    &: focus {
        outline: none;
    }
    display: flex;
`;

export const Heart = styled.div<{isLiked: boolean}>`
    position: relative;
    width: 50px;
    height: 75px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    background-color: ${props => props.isLiked ? 'black' : 'none'};
    cursor: pointer;
    border-radius: 50px 50px 0 0;
    transform: rotate(315deg);
    &:before {
        position: absolute;
        width: 75px;
        height: 50px;
        left: 0;
        bottom: 0;
        content: "";
        border-bottom: 2px solid black;
        border-right: 2px solid black;
        background-color: ${props => props.isLiked ? 'black' : 'none'};
        border-radius: 0 50px 50px 0;
    }

    @media screen and (max-width: 650px) {
        width: 40px;
        height: 65px;
        &:before {
            width: 65px;
            height: 40px;
        }
    }
`;

export const Submit = styled.button`
    color: white;
    border: none;
    border-radius: 15px;
    padding: .7rem;
    max-width: 100px; 
    background-color: #2a0ad0;
    font-family: inherit;
    font-size: 1.1rem;
`;