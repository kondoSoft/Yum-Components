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
  PriceContainer
  Price,
} from './styled'

const PreviewFood = (props) => (
  <Content>
    <Action onPress={props.onPress}>
      <MainContainer>
        <LeftContainer>
          <CircleImage
            source={require(props.source)}
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
            <Price>{$ + '' + props.price}</Price>
          </PriceContainer>
        </RightContainer>
      </MainContainer>
    </Action>
  </Content>
 )
export default PreviewFood
