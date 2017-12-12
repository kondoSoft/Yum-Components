import React from 'react'

const OrderDetail = (props) =>(
  <OrderContainer>
    <LineBox price = {props.price} >
      <RawText>
      {props.quantity + '  ' + props.food}
      </RawText>
      {props.price &&
        <RawText>{'$'+ props.price}</RawText>
      }
    </LineBox>
    {props.details &&
      <GrayText>{props.details}</GrayText>
    }

  </OrderContainer>
)

export default OrderDetail
