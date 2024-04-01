import { Header } from "./components/Header"
import './global.css';
import styles from './App.module.css';
import {Post, PostInterface, ElementTypes} from './components/Post'
import { Sidebar } from "./components/Sidebar";
export function App() {

  //author {avatar_url: "", name: "", role: ""}
  //publishedAt: Daate
  //content: String



  const posts: PostInterface[] =
  [ 
    {
      id: 1,
      author: {
        name: "Felipe Guarnieri",
        avatarUrl: "https://github.com/guarnieri007.png",
        role: "Alien Developer"
      },
      content:
      [
        {
          type: ElementTypes.Paragraph,
          content: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido.",
        },
        {
          type: ElementTypes.Paragraph,
          content: "Mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        }
      ],
      publishedAt: new Date("2022-03-05 18:31:53")
    },
    {
      id: 2,
      author: {
        name: "Victor Martinez",
        avatarUrl: "https://github.com/victored.png",
        role: "Unicorn Developer"
      },
      content:
      [
        {
          type: ElementTypes.Paragraph,
          content: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido.",
        },
        {
          type: ElementTypes.Paragraph,
          content: "Mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        }
      ],
      publishedAt: new Date("2013-10-23 19:41:57")
    },
    {
      id: 3,
      author: {
        name: "Jose Belisario",
        avatarUrl: "https://github.com/josebeli.png",
        role: "Wizard Developer"
      },
      content:
      [
        {
          type: ElementTypes.Paragraph,
          content: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido.",
        },
        {
          type: ElementTypes.Paragraph,
          content: "Mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        }
      ],
      publishedAt: new Date("2016-02-23 07:23:40")
    },
    {
      id: 4,
      author: {
        name: "Kausar Perveen",
        avatarUrl: "https://github.com/kperveen.png",
        role: "Magician Developer"
      },
      content:
      [
        {
          type: ElementTypes.Paragraph,
          content: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido.",
        },
        {
          type: ElementTypes.Paragraph,
          content: "Mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        }
      ],
      publishedAt: new Date("2024-03-30 16:23:40")
    }
  ]
  

  return (
    <>
    <Header></Header>
    <div className={styles.wrapper}>
      <Sidebar></Sidebar>
      <main>
        {posts.map( post => {
          return (
            <Post
              key={post.id}
              post={post}
            />
          )
        })}
      </main>

    </div>
    </>
  )
}