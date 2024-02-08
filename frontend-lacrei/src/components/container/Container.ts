import styled from "styled-components";

export const Container = styled.div `
     @media(max-width: 520px){
          padding: 1rem 1rem 0px;
          flex-direction: column; 
          
          align-items: center;
          justify-content: start ;  
     }
     @media (min-width: 521px) and (max-width: 1040px){
          flex-direction: column;  
          padding: 2rem 2rem 0px;
          align-items: center;
          max-height: 630px;
          justify-content: start ;  
     }
     @media(min-width: 1041px){
          padding: 4rem 4rem 0px;
          max-height: 421px;
          justify-content: space-between ; 
     }
     display: flex;
     height: 100%;
     max-height: 600px;
`