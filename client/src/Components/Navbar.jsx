import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';



const Container= styled.div`
    height : 60px;
    ${mobile({height: "50px"})}
`;
const Wrapper= styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center:
    ${mobile({padding: "10px 0px" })}
`;

const Left = styled.div`

    flex:1;
    display: flex;
    align-items: center:
`;
const Center = styled.div`
flex:1;

text-align: center;

`;
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent: "center"})}


`;
const Language = styled.div`
            font-size:14px;
            cursor:pointer;
            ${mobile({display : "none"})}
`;

const SearchContainer = styled.div`
        border: 0.5px solid lightgrey;
        display: flex;
        align-items: center:
        margin-left: 25px;
        padding :5px;
`;

const Input = styled.input`
            border:none;

`

const Logo = styled.h1`
        font-weight:bold;
        ${mobile({fontsize: "24px"})}
`

const MenuItem = styled.div`
        font-size:14px;
        cursor: pointer;
        margin-left:25px;
        ${mobile({ fontSize: "12px", marginLeft: "10px"})}
`;





const Navbar=()=> {
    const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
        <Wrapper >
            <Left> <Language>  EN </Language> 
            <SearchContainer>
                <Input placeholder='Search'/>
                <SearchIcon style={{color:"grey", fontsize:16}}/>

            </SearchContainer>
            
            </Left>

            <Center><Logo  >SPARSH <Link to="/Home" /> </Logo></Center>
            <Right> 
                
                <MenuItem> REGISTER</MenuItem>
                <MenuItem> SIGN</MenuItem>
                <Link to="/cart" />
                <MenuItem> 
                <Badge color="primary" badgeContent={quantity}>
                <ShoppingCartOutlinedIcon />
                    </Badge>
                
                </MenuItem>
            
            
            
            
            </Right>
    
        </Wrapper>
        
        </Container>
  )
}

export default Navbar