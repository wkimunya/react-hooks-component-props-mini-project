import React from 'react'

function Article(props) {
    const { title, date, preview } = props;
    const formattedDate = date || "January 1, 1970";

  return (
    <div>
      <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
    </div>
  )
}

export default Article
