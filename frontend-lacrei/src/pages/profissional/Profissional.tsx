import Header from "../../components/header/Header"
import { Body } from "../../components/body/Body"
import Footer from "../../components/footer/Footer"
// import { Titulo, Text } from "./Home.Style"
import { Descricao, Titulo, Hr, Text2} from "../../components/descricao/Descricao"
import ImgProfissional from "../../img/profissional.png"
import { Container } from "../../components/container/Container"
import { ContainerImg } from "../../components/containerImg/ContainerImg"


function Profissional () {
    return(
        <>
        <Body>
            <Header></Header>
            <Container>
                <Descricao>
                <Titulo>Profissional</Titulo>
                <Text2>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</Text2>
                </Descricao>
                <ContainerImg>
                    <img src={ImgProfissional} />
                </ContainerImg>
            </Container>
        </Body>
        <Footer></Footer>
        </>
    )
}

export default Profissional