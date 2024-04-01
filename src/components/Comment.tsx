import { useState } from "react";
import { Avatar } from "./Avatar";
import style from "./Comment.module.css"
import { ThumbsUp, Trash } from "@phosphor-icons/react";

interface CommentAtributes {
    content: string,
    ondeleteComment: (content: string) => void,
}


export function Comment({content, ondeleteComment}: CommentAtributes ) {

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }
    
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        ondeleteComment(content);
    }

    return (
        <>
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/guarnieri007.png" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Felipe Guarnieri</strong>
                            <time title="01 de março de 2024" dateTime="2024-03-01 07:03:23">Publicado há 1h</time>

                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
        </>
    )
}