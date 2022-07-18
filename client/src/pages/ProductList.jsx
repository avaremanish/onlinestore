import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import Announcement from "../Components/Announcement"
import { Footer } from "../Components/Footer";
import Navbar from "../Components/Navbar"
import { Newsletter } from "../Components/Newsletter";
import { Products } from "../Components/Products";

const Container = styled.div``;
const Title = styled.h1`
        margin: 20px;
`; 
const FilterContainer = styled.div`
            display: flex;
            justify-content: space-between;
`;
const Filter = styled.div`
            margin: 20px;
`; 

const FilterText = styled.span`
        font-size: 20px;
        font-weight: 600;

`;
const Select = styled.select`
        padding: 10px;
        margin-right: 20px; 
`;
const Option  = styled.option``;
 
export const ProductList = () => {
        const location = useLocation();
        const cat = location.pathname.split("/")[2]
        const [filter, setFilters] = useState({})
        const [sort, setSort] = useState("newest");
 
        const handleFilters = (e) => {
                const value = e.target.value;
                setFilters({
                     ...filter,
                     [e.target.name]: value,   
                });
        }
         
   
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title> {cat}</Title>
        <FilterContainer>
         <Filter> 
            <FilterText> Filter Products: </FilterText>
                <Select name="color" onChange={handleFilters} >
                        <Option disabled >
                            color
                        </Option>
                        <Option> white</Option>
                        <Option> black</Option>
                        <Option> red</Option>
                        <Option> yellow</Option>
                        <Option> blue</Option>
                </Select>
                 <Select name="size" onChange={handleFilters} >
                        <Option disabled >
                            size
                        </Option>
                        <Option> XS</Option>
                        <Option> S</Option>
                        <Option> M</Option>
                        <Option> L </Option>
                        <Option> XL</Option>


                </Select>
         
          </Filter>
         <Filter>
            <FilterText> Short Products:</FilterText> 
         <Select onChange={(e)=> setSort(e.target.value)} >
                        <Option value="newest" >Newest</Option>
                        <Option value="asc"> Price (asc) </Option>
                        <Option value="desc"> Price (desc)</Option>
               


                </Select>
         </Filter>

        </FilterContainer>
        <Products cat={cat} filters={filter} sort={sort}  />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
