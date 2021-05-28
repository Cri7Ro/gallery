import React, { useState } from 'react';
import { InputComment, CommentsContainer, CommentsList,Submit} from '../../styles/modalStyles';
import imageData from '../../imageData';


const Messages: React.FC<{currentImg: number | null}> = ({currentImg}) => {

    const [comment, setComment] = useState<string>('');

    function handleSubmitComment(event: React.SyntheticEvent) {
        event.preventDefault();
        event.stopPropagation();
        setComment('');
        if (comment.length > 0) imageData[currentImg!].comments.push(comment);
    }

    function handleEnter(event: React.KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSubmitComment(event);
        }
    }

    return (
        <CommentsContainer>
            <CommentsList>
                {
                    imageData[currentImg!].comments.map((comment, ind) => <p key={ind.toString()}>{comment}</p>)
                }
            </CommentsList>
            <form>

                <InputComment value={comment} onChange={event => setComment(event.target.value)} onKeyUp={handleEnter} placeholder='Ваш комментарий'></InputComment>
                <Submit type='submit' onClick={handleSubmitComment}>Отправить</Submit>
            </form>
        </CommentsContainer>
    );
};

export default Messages;