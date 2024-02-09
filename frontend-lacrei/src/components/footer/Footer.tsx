import './Footer.Style.ts';
import { FooterBody, FooterListUl, FooterListA, DivRedes, LinkRedes, FooterText} from './Footer.Style.ts';
import {BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {AiOutlineLinkedin} from 'react-icons/ai';
import { Hr } from '../descricao/Descricao.ts';

const Footer = () => {
    return (
        <>
        <FooterBody>
        <Hr />
            <FooterListUl>
                <FooterListA href="/front-end-lacrei">Home</FooterListA>
                <FooterListA href="/front-end-lacrei/pessoa-usuaria">Pessoa Usuária</FooterListA>
                <FooterListA href="/front-end-lacrei/profissional">Profissional</FooterListA>
            </FooterListUl>
            <DivRedes>
                <LinkRedes href="https://www.instagram.com/lacrei.saude/    " target="_blank">
                    <BsInstagram />
                </LinkRedes>
                <LinkRedes href="https://www.facebook.com/lacrei.saude/" target="_blank">
                    <CiFacebook />
                </LinkRedes>
                <LinkRedes href="https://www.linkedin.com/company/lacrei-saude/" target="_blank">
                    <AiOutlineLinkedin />
                </LinkRedes>
            </DivRedes>
            <FooterText>Desafio Front-end Lacrei</FooterText>
        </FooterBody>
        </>
    )
}

export default Footer;