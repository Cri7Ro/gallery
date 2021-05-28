import styled from 'styled-components';

export const ImageList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 15vw);
    gap: .5rem;
    img {
        width: 15vw;
        height: 10vw;
        cursor: pointer;
    }

    @media screen and (max-width: 998px) {
        grid-template-columns: repeat(5, 20vw);
        img {
            width: 20vw;
            height: 15vw;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: repeat(4, 25vw);
        img {
            width: 25vw;
            height: 20vw;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(3, 30vw);
        img {
            width: 30vw;
            height: 25vw;
            cursor: pointer;
        }
    }
`;

export const Img = styled.img`
    width: 50vw;
    height: 25vw;

    @media screen and (max-width: 1080px) {
        width: 70vw;
        height: 35vw;
    }

    @media screen and (max-width: 750px) {
        width: 80vw;
        height: 40vw;
    }

    @media screen and (max-width: 580px) {
        width: 90vw;
        height: 40vh;
    }
`;