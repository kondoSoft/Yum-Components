import styled from 'styled-components/native'
import React from 'react'

export const Container = styled.View`
  width: ${(props) => props.width ? props.width : '100%'};
  height: ${(props) => props.height && props.height};
  flex: ${(props) => props.flex && props.flex};
  margin-bottom: 15px;
  flex-direction: ${(props) => props.description ? 'column':'row' };
  align-items: ${(props) => props.description ? 'flex-start' : 'flex-end'}
`
export const TitleText = styled.Text`
  font-size: ${(props) => props.size ? props.size : '15px'};
  color: ${(props) => props.color};
  text-align: left;
  margin-left: -3px;
`
export const DescriptionText = styled.Text`
  font-size: 12px;
  color: rgb(131,131,131);
`
