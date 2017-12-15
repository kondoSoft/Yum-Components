import React from 'react'
import {
  CircleImage,
  Description
}
from '../index'
import {
  Action,
  Content,
  MainContainer,
  LeftContainer,
  RightContainer,
  PriceContainer,
  Price,
  Status
} from './styled'

const PreviewFood = (props) => (
  <Content>
    <Action onPress={props.onPress}>
      <MainContainer>
        <LeftContainer>
          <CircleImage
            source={props.source}
           />
        </LeftContainer>
        <RightContainer>
          <Description
            titleColor={props.titleColor}
            titleText={props.titleText}
            descriptionText={props.descriptionText}
            width='100%'
            height='30px'
           />
          <PriceContainer>
            <Price>{'$' + '' + props.price}</Price>
            <Status status = {props.status} > {props.status}</Status>
          </PriceContainer>
        </RightContainer>
      </MainContainer>
    </Action>
  </Content>
 )
export default PreviewFood
