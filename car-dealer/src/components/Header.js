import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'


function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);

  return <Container>
      <a href = "#"> 
      
        <img src ="./images/shipping.png" alt = "" width= "50" height ="40"/>
         <p href = "#"> Car Dealer </p>

      </a>
      <Menu>
        <a href="#">Mercedes</a>
        <a href="#">Bmw</a>
        <a href="#">Subaru</a>
        <a href="#">VW</a>
        <a href="#">Trucks</a>
      </Menu>
      <RightMenu>

          <a href="#">Shop</a>
          <a href="#">Create Account</a>
          <CustomMenu onClick ={()=>setBurgerStatus(true)} />

      </RightMenu>

      <BurgerNav show = {burgerStatus}>
           <CloseWrapper>
                <CustomClose onClick ={()=>setBurgerStatus(false)}/>

           </CloseWrapper> 
          <li><a href = "#">Mercedes</a></li>
          <li><a href = "#">BMW</a></li>
          <li><a href = "#">Subaru</a></li>
          <li><a href = "#">VW</a></li>
          <li><a href = "#">Trucks</a></li>
          <li><a href = "#">Services</a></li>
          <li><a href = "#">Existing Inventory</a></li>
      </BurgerNav>
  
  </Container>;
}

export default Header;

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    flex-direction: right;
    justify-content:space-between;
    z-index: 1;



    p{
        font-weight: 600;
        color: Black;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }

`
const RightMenu = styled.div`
    display:flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right:10px;
        
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width:300px;
    z-index:16;
    list-style: none;
    padding:20px;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translate(100%)'};
    transition: transform 0.2s ease-in;
    
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        text-align: start;

        a {
            font-weight: 600;
        }   
    }
`
const CustomClose = styled(CloseIcon)`

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`