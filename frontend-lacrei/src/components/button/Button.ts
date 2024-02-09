import styled from "styled-components";

// export const ButtonLink = styled.button `
//     padding: 10px;
//     font-size: 16px;
//     text-align: center;
//     text-decoration: none;
//     /* color: #fff; */
//     background-color: #007bff;
//     border: none;
//     border-radius: 10px;
//     cursor: pointer;

//     padding: 0.125rem 2.75rem;
//     color: rgb(1, 135, 98);
//     background-color: rgb(255, 255, 255);
//     border: 2px solid rgb(1, 135, 98);
//     box-shadow: -2px 4px 7px 1px #00000054;
//     font-weight: 700;

//     @media(max-width: 520px){
//      margin-bottom: 20px;
//      text-align: center;
// }
// @media(min-width: 521px) and (max-width: 1040px){
//      padding: 0px;
// }
// `

export const DivButton = styled.div`
    display: flex;
    gap: 3.5rem;
    width: 100%;
    margin-top: 3rem;
    height: 20px; 

    @media(max-width: 520px){
     flex-direction: column;
     margin-top: 1rem;
     gap: 1.5rem;

     display: flex;
    align-items: center;

}
@media(min-width: 521px) and (max-width: 1040px){
     padding: 0px;
     justify-content: flex-start;
     margin-top: 1.8rem;
     margin-bottom: 2rem;
     gap: 1.5rem;
}
`

export const LinkButton1 = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    max-width: 19rem;
    height: 2.8rem;
    border-radius: 0.5rem;
    background: rgb(1, 135, 98) ;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
    border: 2px solid rgb(1, 135, 98);
    color: rgb(255, 255, 255); 
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
     opacity: 0.7;
    }

    @media(max-width: 520px){
     width: 50%;

}

@media(min-width: 521px) and (max-width: 1040px){
     
}
 
` 

export const LinkButton2 = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    max-width: 19rem;
    height: 2.8rem;
    border-radius: 0.5rem;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px 0px;
    border: 2px solid rgb(1, 135, 98);
    color: rgb(1, 135, 98);
    font-size: 1.125rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
     opacity: 0.7;
    }

    @media(max-width: 520px){
     width: 50%;

}

` 