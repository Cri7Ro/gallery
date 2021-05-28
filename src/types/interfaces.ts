export interface IImageData {
    id: number,
    src: string,
    isLiked: boolean,
    comments: Array<string>
};

export interface IModal {
    isOpen: boolean,
    setIsOpen: (value: React.SetStateAction<boolean>) => void,
    currentImg: number | null,
    setCurrentImg: (value: React.SetStateAction<number | null>) => void,
};