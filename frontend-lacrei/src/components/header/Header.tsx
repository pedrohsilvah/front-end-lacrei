import {HeaderNav, ListUl, Listli, LinkHeader} from "./Header.Style.ts";

function Header() {
  return(
    <HeaderNav>
        <LinkHeader href="/">Lacrei</LinkHeader>
        <ListUl>
          <Listli>Home</Listli>
          <Listli>Pessoa Usuária</Listli>
          <Listli>Profissional</Listli>
        </ListUl>
    </HeaderNav>
  )
}

export default Header;