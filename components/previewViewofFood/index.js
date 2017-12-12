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
            source={require('../../assets/img/restaurant.jpg')}
           />
        </LeftContainer>
        <RightContainer>
          <Description
            titleColor='rgb(255,87,34)'
            titleText='Tostadas de pollo'
            descriptionText='Orden de 3 con lechuga, aguacate, cebolla morada y tomate.'
            width='100%'
            height='30px'
           />
          <PriceContainer>
            <Price>$50.00</Price>
          </PriceContainer>
        </RightContainer>
      </MainContainer>
    </Action>
  </Content>
 )
export default PreviewFood
