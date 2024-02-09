import styled from "styled-components";

export const FooterBody = styled.footer`
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    padding-left: 40px;

    @media(max-width: 520px){
     padding-left: 0px;
}
    @media(min-width: 521px) and (max-width: 1040px){
    margin-left: 0px;
}
`
export const FooterListUl = styled.ul`
    display: flex;

    @media(max-width: 520px){
    flex-direction: column;
    line-height: 30px;
}

`

export const FooterListA = styled.a`
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
`
export const DivRedes = styled.div`
    color: black;
`
export const LinkRedes = styled.a`
    @media(max-width: 520px){
     flex-direction: row;
     justify-content: start; 
     padding: 10px;
     padding-left: 30px;
     gap: 40px;
}
    flex-direction: row;
    justify-content: start; 
    padding: 10px;
    padding-left: 30px;
    width: 200px;

    font-size: 2rem;
    color: rgb(1, 135, 98);
    cursor: pointer;
    transition: all 0.2s ease 0s;
    font-weight: 100;

    @media(max-width: 520px){
     font-size: 27px;
    }
    font-size: 26px;
    font-weight: bold;

    /* font-family: 'Nunito', sans-serif; */
    &:BsInstagram {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;          
        size: 70;
    }

    &:CiFacebook:hover {
        font-family: 'Nunito', sans-serif;
        font-weight: bold;          
        size: 70;
    }

`

export const FooterText = styled.p`
    color: black;
    padding-left: 30px;
    font-size: 0.75rem;
    opacity: 0.8;
`

// export const SocialMediaIcon = styled.a`
// @media(max-width: 520px){
//      font-size: 27px;
// }
// font-size: 25px;
 
// `