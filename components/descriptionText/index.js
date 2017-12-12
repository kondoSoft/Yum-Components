import React from 'react'
import {
  Container,
  TitleText,
  DescriptionText
} from './styled'

const Description = (props) => (
  <Container  description = {props.descriptionText} width = {props.width} height = {props.height} flex = {props.flex} >
    <TitleText size = {props.size} color = {props.titleColor} > {props.titleText} </TitleText>
    <DescriptionText> {props.descriptionText} </DescriptionText>
  </Container>
)
export default Description
