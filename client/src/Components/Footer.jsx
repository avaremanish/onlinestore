import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";


const Container = styled.div`
        display: flex;
        ${mobile({flexDirection: "column"})}

`;
const Left = styled.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;
`;

const Logo = styled.h1`
        flex: 1;
`;
const Desc = styled.p`
       margin: 20px 0px; 

`;
const SocialContainer = styled.div`
        display: flex;
`;
const SocialIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: #${props => props.color};
        display:flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
`;

const Center= styled.div`
        flex: 1;
        padding: 20px;
        ${mobile({display: "none"})}
`;

const Title = styled.h3`
       margin-bottom: 30px;
        
`;

const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
`;

const ListItem = styled.li`
        width:50%;
        margin-bottom: 10px;
        
`;



const Right = styled.div`
        flex: 1;
        padding: 20px;
        
`;

const ContactItem = styled.div`
        margin-bottom: 20px;
        display: flex;
        align-items:center;

`;

const Payment = styled.img`
        width:50%;
`;



export const Footer = () => {
  return (
    <Container>
            <Left>
                <Logo> SPARSH</Logo>
                <Desc> We the founders of SPARSH, we believe there are three reponses for every design, 'yes', 'no', and 'Wow',
                        WOW is the one we aim for.
                        SPARSH believes in full customer satisfaction. SPARSH takes care of customer need, taste, preferences and 
                        thier budget. As we can proudly say Sparsh will give you, your dream designs with pocket friendly budget.

                </Desc>
                    <SocialContainer>
                        <SocialIcon color="3B5999">
                                <FacebookIcon/>
                        </SocialIcon>
                        <SocialIcon color="E4405F">
                                <InstagramIcon/>
                        </SocialIcon>
                        <SocialIcon color="E60023">
                                <PinterestIcon/>
                        </SocialIcon>

                     </SocialContainer>
            </Left>
            <Center>
                <Title> Usefull links</Title>                
                <List> 
                        <ListItem>Home </ListItem>
                        <ListItem>Cart </ListItem>
                        <ListItem>Mens Fashion </ListItem>
                        <ListItem>Womens Fashion </ListItem>
                        <ListItem>Accessories </ListItem>
                        <ListItem>My Account </ListItem>
                        <ListItem>Order Tracking </ListItem>
                        <ListItem>Wishlist  </ListItem>
                        <ListItem>Terms</ListItem>

                </List>  
             </Center>

            <Right>

                <Title>  Contact</Title>
                <ContactItem> <RoomIcon style={{marginRight:"10px"}} /> Pune</ContactItem>
                <ContactItem> <PhoneIcon style={{marginRight:"10px"}} /> +91 665959521</ContactItem>
                <ContactItem> <EmailIcon style={{marginRight:"10px"}} /> sparsh@gmail.com</ContactItem>
                <Payment src="https://bamboocycles.com/wp-content/uploads/2020/05/paypal-logo.png" />





            </Right>

    </Container>
  )
}
