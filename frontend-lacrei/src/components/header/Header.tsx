import {HeaderNav, ListUl, ListA, LinkHeader} from "./Header.Style.ts";

function Header() {
  return(
    <HeaderNav>
        <LinkHeader href="/">Lacrei</LinkHeader>
        <ListUl>
          <ListA href="/">Home</ListA>
          <ListA href="/pessoa-usuaria">Pessoa Usuária</ListA>
          <ListA href="/profissional">Profissional</ListA>
        </ListUl>
    </HeaderNav>
  )
}

export default Header