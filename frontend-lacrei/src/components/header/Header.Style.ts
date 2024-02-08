import styled from "styled-components";

export const HeaderNav = styled.header `
    display: flex;
    justify-content: space-between;
    background-color: rgb(238, 238, 238);
    padding-right: 2%;
    padding-left: 2%;
    padding: 5px;

    @media(max-width: 520px){
     margin-right: 0px;
     display: block;
     text-align: center;
}
@media(min-width: 521px) and (max-width: 1040px){
     margin: 0px;
}
`

export const ListUl = styled.ul `
    display: flex;
    justify-content: space-between;
    margin-right: 30px;

    @media(max-width: 520px){
     margin-left: 0px;
}
@media(min-width: 521px) and (max-width: 1040px){
     margin: 0px;
}

`

export const ListA = styled.a `
    margin-right: 20px;
    list-style: none;
    text-decoration: none;
    margin-right: 40px;
    color: black;
    font-weight: 500;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        color: rgb(1, 135, 98);
    }

    @media(max-width: 520px){
     margin-right: 0px;  
}
    @media(min-width: 521px) and (max-width: 1040px){
    margin-right: 0px;
    margin-right: 15px;
    padding-top: 10px;
}
`

export const LinkHeader = styled.a `
    color: rgb(1, 135, 98);
    font-size: 35px;
    font-weight: 700;
    text-decoration: none;
    margin-left: 59px; 

    @media(max-width: 520px){
     margin-left: 0px;
}
    @media(min-width: 521px) and (max-width: 1040px){
    margin-left: 40px;
}
`