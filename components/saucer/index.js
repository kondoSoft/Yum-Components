import React from 'react'
import {
  ScreenContainer,
  MenuList,
  Item,
  MenuItemLeft,
  MenuItemRight,
  Row,
  Column,
  MenuImage,
  Paragraph,
  SaucerButton,
  Wrapper
} from './styled'

export const MenuItem = (props) => {
  const {data} = props
  return (
    <SaucerButton onPress={(props.onPress) && props.onPress} key={data.id} disabled={!data.available}>
      <Wrapper>
        <MenuItemLeft flex={1}>
          <MenuImage source={{uri: (data.image) ? data.image : 'http://via.placeholder.com/120x120' }} />
        </MenuItemLeft>
        <MenuItemRight flex={2}>
          <Row>
            <Paragraph size={16} color={'#FF5722'}>{data.foodName}</Paragraph>
          </Row>
          <Row flex={4}>
            <Paragraph color={'#919291'}>{data.description}</Paragraph>
          </Row>
          <Row alignCenter>
            <Column justifyCenter>
              <Paragraph>{data.price.toLocaleString('es-MX', {style: 'currency', 'currency': 'MXN'})}</Paragraph>
            </Column>
            <Column>
              <Paragraph color={(data.available) ? '#70BF73' : '#EA4234'}>{(data.available) ? 'Disponible' : 'Agotado'}</Paragraph>
            </Column>
          </Row>
        </MenuItemRight>
      </Wrapper>
    </SaucerButton>
  )
}
