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
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding-right: 110px;

    @media(max-width: 520px){
     padding-right: 0px;
     flex-direction: column;
}
@media(min-width: 521px) and (max-width: 1040px){
     padding: 0px;
}
`

export const LinkButton = styled.a`
    width: 200px;
    margin-top: 15px;    

    color: rgb(1, 135, 98);
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(1, 135, 98);
     
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
  
    border-radius: 8px;
    box-shadow: 0px 4px 7px  gray;


    
    font-size: 16px;
    text-align: center;
     text-decoration: none;
     color: #fff;
     background-color: #007bff;
     border: none;
     border-radius: 10px;
     cursor: pointer;

     padding: 0.125rem 2.75rem;
     color: rgb(1, 135, 98);
     background-color: rgb(255, 255, 255);
     border: 2px solid rgb(1, 135, 98);
     box-shadow: -2px 4px 7px 1px #00000054;
     font-weight: 700;

     @media(max-width: 520px){
      margin-bottom: 20px;
      text-align: center;
     }
` 