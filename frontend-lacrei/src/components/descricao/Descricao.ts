import styled from "styled-components";

export const Titulo = styled.h1 `
    @media(max-width: 1040px){
          font-size: 24px;
     }
     font-size: 3rem;
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

opacity: 0.7;
font-weight: 400;
`
export const Descricao = styled.div `
    text-align: start;
    line-height: 4.7rem;
`