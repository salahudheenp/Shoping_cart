import React from "react"
import { Badge, Container, Dropdown, FormControl, Navbar,Nav, Button } from "react-bootstrap"
import {FaShoppingCart} from 'react-icons/fa'
import DropdownMenu from "react-bootstrap/esm/DropdownMenu"
import {Link} from "react-router-dom"
import { CartState } from "../context/Context"
import { AiFillDelete } from "react-icons/ai"
import "../components/style.css"

const Header=()=>{
    const {state:{cart},dispatch,productDispatch}=CartState()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">shopping cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                     style={{width:500}}
                     placeholder="search a product"
                     className="m-auto"
                     onChange={(e)=>{
                        productDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload:e.target.value,
                        })
                     }}
                    /> 

                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontsize="25px" />
                            <Badge>{cart.length}</Badge>

                        </Dropdown.Toggle>

                        <DropdownMenu style={{minWidth:170}}>
                            {cart.length>0 ? (
                                <>
                                {
                                    cart.map((prod)=>(
                                        <span className="cartItem" key={prod.id}>
                                            <img src={prod.image}
                                            className="cartItemImg"
                                            alt={prod.name}
                                            
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.name}</span>
                                                <span>$ {prod.price.split(".")[0]}</span>
                                            </div>
                                            <AiFillDelete fontSize="20px"
                                            style={{cursor:"pointer"}}
                                            onClick={()=>dispatch({
                                                type:"REMOVE_FROM_CART",
                                                payload:prod,
                                            })}
                                            />

                                        </span>
                                    ))
                                }
                                <Link to="/cart">
                                    <Button style={{width:"95%",margin:"0 10px"}}> Go To Cart</Button>
                                </Link>
                                </>
                            ) : (<span style={{ padding: 10 }}>cart is empty</span>)}
                            

                        </DropdownMenu>

                    </Dropdown>
                </Nav>

            </Container>

        </Navbar>
    )
}

export default Header  