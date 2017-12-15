import React from 'react'
import styled from 'styled-components/native'

export const Content = styled.View`
  width: 95%;
  height: 90px;
`
export const Action = styled.TouchableWithoutFeedback`
  height: 100%;
  width: 100%;
`
export const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-bottom-color: rgba(131,131,131,0.25);
  border-bottom-width: 2px;
  justify-content: center;
  align-items: center;
`
export const LeftContainer = styled.View`
  flex: 1;
`
export const RightContainer = styled.View`
  flex: 3;
  padding-left: 10px;
`
export const PriceContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`
export const Price = styled.Text`
  font-size: 15px;
`
export const Status = styled.Text`
  font-size: 15px;
  color: ${props => props.status === 'Disponible' ? 'green' : 'red'};
  display: ${props=> props.status ? 'flex' : 'none'};
`
