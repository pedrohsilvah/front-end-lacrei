import { ButtonLink } from "../../components/button/Button"
import Header from "../../components/header/Header"
import { Body } from "../../components/body/Body"

function Home () {
    return(
        <Body>
            <Header></Header>
            <h1>Boas vindas a Lacrei Saúde</h1>
            <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
            <ButtonLink>Pessoa Usuária</ButtonLink>
            <ButtonLink>Profissional</ButtonLink>
        </Body>
    )
}

export default Home