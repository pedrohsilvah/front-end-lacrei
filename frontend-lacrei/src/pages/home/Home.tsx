import { ButtonLink, DivButton } from "../../components/button/Button"
import Header from "../../components/header/Header"
import { Body } from "../../components/body/Body"
import Footer from "../../components/footer/Footer"
// import { Titulo, Text } from "./Home.Style"
import { Descricao, Text, Titulo, Hr} from "../../components/descricao/Descricao"
import ImgHome from "../../img/home.png"
import { Container } from "../../components/container/Container"
import { ContainerImg } from "../../components/containerImg/ContainerImg"


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
                    <ButtonLink>Pessoa Usuária</ButtonLink>
                    <ButtonLink>Profissional</ButtonLink>
                </DivButton>
                </Descricao>
                <ContainerImg>
                    <img src={ImgHome} />
                </ContainerImg>
            </Container>
            <Hr color="#acebbf92"/>
        </Body>
        <Footer></Footer>
        </>
    )
}

export default Home