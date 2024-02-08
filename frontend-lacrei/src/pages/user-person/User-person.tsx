import Header from "../../components/header/Header"
import { Body } from "../../components/body/Body"
import Footer from "../../components/footer/Footer"
// import { Titulo, Text } from "./Home.Style"
import { Descricao, Text2, Titulo, Hr} from "../../components/descricao/Descricao"
import ImgUserPerson from "../../img/user-person.png"
import { Container } from "../../components/container/Container"
import { ContainerImg } from "../../components/containerImg/ContainerImg"


function UserPerson () {
    return(
        <>
        <Body>
            <Header></Header>
            <Container> 
                <Descricao>
                <Titulo>Pessoa Usuária</Titulo>
                <Text2>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</Text2>
                </Descricao>
                <ContainerImg>
                    <img src={ImgUserPerson} />
                </ContainerImg>
            </Container>
            <Hr color="#acebbf92"/>
        </Body>
        <Footer></Footer>
        </>
    )
}

export default UserPerson