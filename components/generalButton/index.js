import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import {
  Container,
  Iconcontainer,
  Icon,
  Text,
  IconSidecontainer,
} from './styled'

const GeneralButton = (props) => (
  <Container style={props.style} onPress={props.onPress} Icon={props.Icon} >
    <Iconcontainer Icon={props.Icon}>
      <Icon
        name={props.Icon}
        color={'#fff'} size={28}
      />
    </Iconcontainer>
    <Text IconSide={props.IconSide} >{props.text}</Text>
    <IconSidecontainer text={props.text} IconSide={props.IconSide}>
      <Icon
        name={props.IconSide}
        color={'#fff'}
        size={28}
      />
    </IconSidecontainer>
  </Container>
)
export default GeneralButton
