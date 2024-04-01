import styles from "./Post.module.css"
import {Avatar} from "./Avatar"
import { Comment } from "./Comment"
import { useState } from "react"

export interface PostInterface {
    id?: number,
    author: Author,
    content: ElementType[],
    publishedAt: Date
  }

  interface PostType {
    post: PostInterface
  }

  interface Author {
    name: string,
    avatarUrl: string,
    role: string
  }

  interface ElementType {
    type: ElementTypes,
    content: string
  }

  export enum ElementTypes {
    Paragraph = "paragraph",
    Link = "link"
  }

  export function Post({post}: PostType) {
      const [comments, setComments] = useState([
          'post super legal!'
        ])
        const [newCommentText, setNewCommentText] = useState('')
        
        function handleNewCommentChange(event: React.FormEvent<HTMLTextAreaElement>) {
            event?.currentTarget.setCustomValidity('');
            setNewCommentText(event?.currentTarget.value);
        }
        
        function deleteComment(commentToDelete:string) {
          const commentsWithoutDeletedOne = comments.filter(comment => {
              return comment != commentToDelete;
          })
          console.log(`deletar o comentário: ${commentToDelete}`);
          setComments(commentsWithoutDeletedOne);
        }

        function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
        event?.preventDefault();
        // const newCommentText = (event.currentTarget.elements.namedItem('comment') as HTMLTextAreaElement).value;
        // (event.currentTarget.elements.namedItem('comment') as HTMLTextAreaElement).value = ""; 
        setComments([... comments, newCommentText]);
        setNewCommentText("");
    }

    function handleNewCommentInvalid(event: React.FormEvent<HTMLTextAreaElement>) {
        event.currentTarget.setCustomValidity('Esse campo é obrigatório, abestado!');
    }

        
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-Br', {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(post.publishedAt);

    function GetDateDifferences(initialDate: Date, finalDate: Date):number {
        const time = Math.floor(finalDate.getTime() - initialDate.getTime());
        const days = Math.ceil(time / (1000 * 60 * 60 * 24));

        return days;
    }

    const publishedAtRelativeToday = new Intl.RelativeTimeFormat("pt-Br", {style: "long", numeric: "auto", localeMatcher: "best fit"});

    const insNewComentInputEmpty = newCommentText.length == 0

    return (
        <>
         <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime="2024-03-01 07:03:23">
                    {publishedAtRelativeToday.format(GetDateDifferences(new Date(), post.publishedAt), "day")}
                </time>
            </header>
            <div className={styles.content}>
                {post.content.map(item => {
                    if(item.type === ElementTypes.Paragraph) {
                        return (
                            <p key={item.content}>
                                {item.content}
                            </p>
                        );
                    }
                })}
                {/* <a href="#">#programando</a>
                <a href="#">#programadores</a>
                <a href="#">#codigoFonte</a> */}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    name="comment" 
                    placeholder="Deixe um comentário"
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type="submit" disabled={insNewComentInputEmpty} >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment key={comment} content={comment} ondeleteComment={deleteComment} />
                    )
                })}
            </div>
         </article>
        </>
    )
}