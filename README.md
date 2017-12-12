# Yum-Components
Yum Components for mobile app's created with REACT NATIVE

#GeneralButton

##Sin icono

![Sin icono](img/generalbutton.jpg)

`<GeneralButton
 text='COMENZAR'
/>`

##Con icono a la izquierda

![icon left](img/generalbutton1.jpg)

`<GeneralButton
  text='AÑADIR A LA BOLSA'
  Icon='shopping-bag'
/>`

##Con icono a la derecha

![icon right](img/generalbutton2.jpg)

`<GeneralButton
  text='PAGAR'
  IconSide='check'
/>`

#OrderDetails

![icon right](img/orderDetails.jpg)

`<OrderDetail`
    `quantity = {this.state.order.items.food1.quantity}`  <-- Cantidad de ordenes del platillo
    `food = {this.state.order.items.food1.food}` <--platillo
    `details = 'sin cebolla'` <--detalles o instrucciones extras del cliente para la orden(no obligatorio)
    `price = {price.toFixed(2)}` <-- para poner precio a la derecha(no obligatorio)
/>

#Icon Editable

`<IconEdit
  name = {'arrow-right'}
  color = '#FF5722'
/>
`
