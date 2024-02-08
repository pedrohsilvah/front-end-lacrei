import './Footer.Style.ts';
import { FooterBody, FooterListUl, FooterListA, DivRedes, LinkRedes, ImgRedes, FooterText} from './Footer.Style.ts';
import {BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineLinkedin} from 'react-icons/ai';

const Footer = () => {
    return (
        <>
        <FooterBody>
            <FooterListUl>
                <FooterListA href="/">Home</FooterListA>
                <FooterListA href="/pessoa-usuaria">Pessoa Usuária</FooterListA>
                <FooterListA href="/profissional">Profissional</FooterListA>
            </FooterListUl>
            <DivRedes>
                <LinkRedes href="">
                    <BsInstagram />
                </LinkRedes>
                <LinkRedes href="">
                    <CiFacebook />
                </LinkRedes>
                <LinkRedes href="">
                    <AiOutlineLinkedin />
                </LinkRedes>
            </DivRedes>
            <FooterText>Desafio Front-end Lacrei</FooterText>
        </FooterBody>
        </>
    )
}

export default Footer;