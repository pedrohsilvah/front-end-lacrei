import { DivButton, LinkButton1, LinkButton2} from "../../components/button/Button"
import Header from "../../components/header/Header"
import { Body } from "../../components/body/Body"
import Footer from "../../components/footer/Footer"
import { Descricao, Text, Titulo} from "../../components/descricao/Descricao"
import ImgHome from "../../img/home.png"
import { Container } from "../../components/container/Container"
import { ContainerImg, Imagem } from "../../components/containerImg/ContainerImg"


function Home () {
    return(
        <>
        <Body>
            <Header></Header>
            <Container>
                <Descricao>
                <Titulo>Boas vindas a Lacrei Saúde</Titulo>
                <Text>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Text>
                <DivButton>
                        <LinkButton1 href="/pessoa-usuaria">Pessoa Usuária</LinkButton1>
                        <LinkButton2 href="/profissional">Profissional</LinkButton2>
                </DivButton>
                </Descricao>
                <ContainerImg>
                    <Imagem src={ImgHome} />
                </ContainerImg>
            </Container>
        </Body>
        <Footer></Footer>
        </>
    )
}

export default Home