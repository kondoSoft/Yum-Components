# Yum-Components
Yum Components for mobile app's created with REACT NATIVE

# GeneralButton

## Sin icono


`<GeneralButton
 text='COMENZAR'
/>`

## Con icono a la izquierda


`<GeneralButton
  text='AÑADIR A LA BOLSA'
  Icon='shopping-bag'
/>`

## Con icono a la derecha


`<GeneralButton
  text='PAGAR'
  IconSide='check'
/>`

# OrderDetails

`<OrderDetail`
    `quantity = {this.state.order.items.food1.quantity}`  <-- quantity of orders-food
    `food = {this.state.order.items.food1.food}` <--food name
    `details = 'sin cebolla'` <--details of order(not required)
    `price = {price.toFixed(2)}` <-- price of food(not required)
/>

# Icon Editable

`<IconEdit
  name = {'arrow-right'}
  color = '#FF5722'
/>
`
# CircleImage
`<CircleImage
  source={require('../../assets/img/restaurant.jpg')}
 />`

# PreviewFood

`<PreviewFood />`


[img1]: img/generalbutton.jpg "general button"
[img2]: img/generalbutton1.jpg "icon left"
[img3]: img/generalbutton2.jpg "icon right"
[img4]: img/orderDetails.jpg "Order details"
