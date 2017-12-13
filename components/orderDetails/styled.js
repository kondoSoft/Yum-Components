import React from 'react'
import styled from 'styled-components/native'

export const OrderContainer = styled.View`
  flex: 1;
  padding: 0 10px 0 10px;
  margin: 5px 0 5px 0;
`
export const GrayText =  styled.Text`
  font-size: 15px;
  color: #C7C7CC;
  margin-left: 15px;
`
export const RawText = styled.Text`
  font-size: 15px;
  justify-content: space-between;
`
export const LineBox = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: ${props => props.price != null ? 'space-between' : 'flex-start'};
`
