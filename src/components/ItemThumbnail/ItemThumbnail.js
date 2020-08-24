import React from "react"

import {
  ItemThumbnailStyled,
  Heading,
  LinkStyled,
  ImgStyled,
} from "./ItemThumbnailStyles"

const itemThumbnail = props => {
  return (
    <ItemThumbnailStyled>
      <LinkStyled to={props.link}>
        <ImgStyled fluid={props.image} />
        <Heading>{props.heading}</Heading>
      </LinkStyled>
    </ItemThumbnailStyled>
  )
}

export default itemThumbnail
