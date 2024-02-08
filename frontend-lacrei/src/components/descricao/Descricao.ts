import styled from "styled-components";

export const Titulo = styled.h1 `
    @media(max-width: 1040px){
          font-size: 24px;
     }
     font-size: 3rem;
     opacity: 0.9;
`

export const Text = styled.h1 `
    @media(max-width: 520px){
     font-size: 0.80rem;   
     line-height: 1.25rem;
}
@media(min-width: 521px) and (max-width: 1040px){
     line-height: 1.35rem;
     font-size: 1.1rem;
}
@media(min-width: 1041px){
     line-height: 2rem;
     font-size: 1.5rem;
}

opacity: 0.8;
font-weight: 400;
`
export const Descricao = styled.div `
    text-align: start;
    line-height: 4.7rem;
    max-width: 580px;
`
export const Hr = styled.hr`
     margin-left: 50px;
     margin-right: 50px;
     margin-top: 10px;
`

export const ContainerImg = styled.div `
     /* max-width: 540px;
     height: 450px;
     max-height: 450px;          
     padding-top: 2rem; */
`
