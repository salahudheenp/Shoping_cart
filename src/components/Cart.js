/* eslint-disable no-undef */
import React,{useState,useEffect, useContext} from 'react'
import { Button, ListGroup, Row,Col,Form,Image } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { cartContext } from '../context/Context'
import Rating from "./Rating"

function Cart() {
    // const{state:{cart},dispatch}=CartState()
    // eslint-disable-next-line no-undef
    const{state:{cart},dispatch} = useContext(cartContext)
    const [total, setTotal] = useState()

    useEffect(() => {
      setTotal(cart.reduce((acc,curr)=> acc+ Number(curr.price)*curr.qty,0))
    
      
    }, [cart])
    
  return (
    <div className='home'>
        <div className='productContainer'>
            <ListGroup>
                {
                    cart.map((prod)=>(
                        <ListGroup.Item>
                            <Row>
                                <Col md={2}>
                                    <Image src={prod.image} alt={prod.name} fluid rounded />
                                </Col>
                                <Col md={2}>
                                    <span>{prod.name}</span>
                                </Col>
                                <Col md={2}>${prod.price}</Col>
                                <Col md={2}>
                                    <Rating rating={prod.ratings} />
                                </Col>
                                <Col md={2}>
                                    <Form.Control as="select" value={prod.qty}>
                                        {[...Array(prod.inStock).keys()].map((x)=>(
                                            <option key={x+1}>{x+1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button type="button" variant="light" onClick={()=>dispatch({type:"REMOVE_FROM_CART",payload:prod,})}>
                                        <AiFillDelete fontSize="20px" />
                                        
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
        <div className='filters summary'>
            <span className='title'>subtotal  ({cart.length}) items</span>
            <span style={{fontWeight:700,fontSize:20}}>Total: ${total}</span>
            <Button type='button' disabled={cart.length===0}> proceed to Checkout</Button>
        </div>
    </div>
  )
}

export default Cart