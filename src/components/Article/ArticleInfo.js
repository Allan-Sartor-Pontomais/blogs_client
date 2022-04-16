import React from "react";
import { Rating } from "../Rating/Rating";
import { ArticleView, RatingContent, ReviewCount } from "./styles";

export const ArticleInfo = (props) => {
  const { title, body, avg_score } = props.attributes
  // const [slugg, setSlugg] = useState('');
  const total = props.reviews.length

  // async function handleDelete(slug) {
  //   console.log('handleslug', slug)
  //   await api.delete('articles/' + slug)
  //     .catch((err) => {
  //       alert('Não foi possivel deletar seu artigo', err)
  //     });
  //   alert('Seu artigo foi deletado!')
  // }

  return (
    <div className="view-article styles-box">
      <ArticleView>
        <h1> {title} </h1>
        <p>
          {body}
        </p>
      </ArticleView>
      <ReviewCount>
        <p>{total} Análises de usuários</p>
      </ReviewCount>
      <RatingContent>
        <Rating score={avg_score} />
      </RatingContent>
    </div >
  )
}