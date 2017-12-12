import React from 'react'
import styled from 'styled-components/native'

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
  flex: ${(props) => props.IconSide ? 2 : 3};
  padding-left: ${(props) => props.IconSide ? '90px' : 0};
  text-align: center;
  align-items: center;
`
export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.Icon ? 'space-between' : 'center'};
  background: rgb(255,87,34);
  border-radius: 15px;
  color: #fff;
  text-align: center;
  width: 95%;
  height: 50px;
  elevation: 4;
`
export const Iconcontainer = styled.View`
  flex: 1;
  display: ${props => props.Icon ? 'flex' : 'none'};
  align-items: center;
`
export const IconSidecontainer = styled.View`
  padding-right: 75px;
  display: ${props => props.IconSide ? 'flex' : 'none'};
  justify-content: center;
  flex: ${(props) => props.text ? '' : 4}
`
