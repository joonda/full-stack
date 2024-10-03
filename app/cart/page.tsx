// Cart component
export default function Cart() {
  let shoppingcart = ["Tomatoes", "Pasta"]
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem name={shoppingcart[0]} />
      <CartItem name={shoppingcart[1]}/>
      <CartItem />
      <Banner content='Shopping!' /> {/* Using Parameter (content) */}
      <Banner content='Game!' /> {/* Using Parameter (content) */}
      <Btn coloring="#dc3545" />
      <Btn coloring="#0d6efd" />
    </div>
  )
}

// props type define in CartItem component
interface CartItemProps {
  readonly name?: string;
}

interface ContentName {
  readonly content?: string;
}

interface ButtonColor {
  readonly coloring?: string;
}

// Using Parameter (Banner components)
function Banner(props: ContentName) {
  return <h5>Let's Play the {props.content}</h5>
}

// CartItem component
function CartItem(props: CartItemProps) {
  return (
    <div className="cart-item">
      <p>{props.name ?? ''}</p> {/* name이 없을 경우 처리 */}
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

// ButtonColor component
function Btn(props: ButtonColor) {
  return (
    <button style={{background:`${props.coloring}`}} className="btn">Click!</button>
  )
}